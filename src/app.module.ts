import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '@Application/Module/auth.module';
import { ProductsModule } from '@Application/Module/products.module';
import { UsersModule } from '@Application/Module/users.module';
import DatabaseConfig from '@config/database.config';
import { CategorySchema } from '@Infrastructure/ORM/Category/Mapping/category.schema';
import { ProductSchema } from '@Infrastructure/ORM/Product/Mapping/product.schema';
import { UserSchema } from '@Infrastructure/ORM/User/Mapping/user.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [DatabaseConfig],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: DatabaseConfig().database.username,
      password: DatabaseConfig().database.password,
      database: DatabaseConfig().database.database,
      entities: [ProductSchema, CategorySchema, UserSchema],
      synchronize: false,
    }),
    ProductsModule,
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
