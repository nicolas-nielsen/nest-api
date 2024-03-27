import { Module } from '@nestjs/common';
import { AuthController } from '../Controller/auth.controller';
import { AuthService } from '@Domain/Auth/auth.service';
import { UsersModule } from '@Application/Module/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      global: true,
      secret: 'secret',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
