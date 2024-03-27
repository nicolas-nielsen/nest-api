import { Body, Controller, Post } from '@nestjs/common';
import { AbstractController } from './abstract.controller';
import { AuthService } from '@Domain/Auth/auth.service';
import { AuthRegisterPayload } from '@Application/Payload/auth.register.payload';
import { AuthLoginPayload } from '@Application/Payload/auth.login.payload';
import { User } from '@Domain/User/user.entity';

@Controller('auth')
export class AuthController extends AbstractController {
  constructor(private readonly authService: AuthService) {
    super();
  }

  @Post('register')
  async register(@Body() authRegisterPayload: AuthRegisterPayload): Promise<User> {
    return await this.authService.register(authRegisterPayload);
  }

  @Post('login')
  async login(@Body() authLoginPayload: AuthLoginPayload): Promise<{ access_token: string }> {
    return await this.authService.login(authLoginPayload);
  }
}
