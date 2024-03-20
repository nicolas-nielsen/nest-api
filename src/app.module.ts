import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from '@Application/Module/products.module';
import DatabaseConfig from '@config/database.config';
import { ConfigModule } from '@nestjs/config';
import { ProductSchema } from '@Infrastructure/ORM/Product/Mapping/product.schema';
import { CategorySchema } from '@Infrastructure/ORM/Category/Mapping/category.schema';

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
      entities: [ProductSchema, CategorySchema],
      synchronize: false,
    }),
    ProductsModule,
  ],
})
export class AppModule {}
