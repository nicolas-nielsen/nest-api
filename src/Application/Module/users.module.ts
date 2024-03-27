import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSchema } from '@Infrastructure/ORM/User/Mapping/user.schema';
import { UsersService } from '@Infrastructure/ORM/User/Service/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserSchema])],
  providers: [{ provide: 'UsersServiceInterface', useClass: UsersService }],
  controllers: [],
  exports: [{ provide: 'UsersServiceInterface', useClass: UsersService }],
})
export class UsersModule {}
