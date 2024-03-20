import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ProductsServiceInterface } from '@Domain/Product/products.service.interface';
import { Product } from '@Domain/Product/product.entity';

@Controller('products')
export class ProductsController {
  constructor(
    @Inject('ProductsServiceInterface')
    private readonly productsService: ProductsServiceInterface,
  ) {}

  @Get()
  async getProducts(): Promise<Product[]> {
    return await this.productsService.findAll();
  }

  @Get(':id')
  async getProduct(@Param('id') id: string): Promise<Product | null> {
    return await this.productsService.findOne(id);
  }
}
