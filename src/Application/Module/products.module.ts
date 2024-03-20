import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from '@Infrastructure/ORM/Product/Service/products.service';
import { ProductsController } from '@Application/Controller/products.controller';
import { ProductSchema } from '@Infrastructure/ORM/Product/Mapping/product.schema';

@Module({
  imports: [TypeOrmModule.forFeature([ProductSchema])],
  providers: [
    { provide: 'ProductsServiceInterface', useClass: ProductsService },
  ],
  controllers: [ProductsController],
})
export class ProductsModule {}
