import {
  BadRequestException,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthRegisterPayload } from '@Application/Payload/auth.register.payload';
import { User } from '@Domain/User/user.entity';
import * as bcrypt from 'bcrypt';
import { AuthLoginPayload } from '@Application/Payload/auth.login.payload';
import { JwtService } from '@nestjs/jwt';
import { UsersServiceInterface } from '@Domain/User/users.service.interface';

@Injectable()
export class AuthService {
  constructor(
    @Inject('UsersServiceInterface')
    private readonly usersService: UsersServiceInterface,
    private readonly jwtService: JwtService,
  ) {}

  async register(authRegisterPayload: AuthRegisterPayload): Promise<User> {
    const user = await this.usersService.findByEmail(authRegisterPayload.email);
    if (user) {
      throw new BadRequestException(
        `Email ${authRegisterPayload.email} is already registered`,
      );
    }

    const hashedPassword = await bcrypt.hash(authRegisterPayload.password, 10);

    const newUser = new User(
      authRegisterPayload.email,
      hashedPassword,
      authRegisterPayload.firstname,
      authRegisterPayload.lastname,
    );

    return await this.usersService.save(newUser);
  }

  async login(authLoginPayload: AuthLoginPayload): Promise<{ access_token: string }> {
    const user = await this.usersService.findByEmail(authLoginPayload.email);
    if (!user) {
      throw new BadRequestException(
        `Email ${authLoginPayload.email} is not registered`,
      );
    }

    const credentialsConfirmed = await bcrypt.compare(
      authLoginPayload.password,
      user.password,
    );

    if (!credentialsConfirmed) {
      throw new UnauthorizedException('Wrong credentials');
    }

    const jwtPayload = {
      sub: user.id,
      username: user.email,
      roles: user.roles,
    };

    return {
      access_token: this.jwtService.sign(jwtPayload),
    };
  }
}
