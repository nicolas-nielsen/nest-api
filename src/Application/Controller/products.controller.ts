import { Controller, Get, Inject, Param, Query } from '@nestjs/common';
import { ProductsServiceInterface } from '@Domain/Product/products.service.interface';
import { Product } from '@Domain/Product/product.entity';
import { AbstractController } from '@Application/Controller/abstract.controller';

@Controller('products')
export class ProductsController extends AbstractController {
  constructor(
    @Inject('ProductsServiceInterface')
    private readonly productsService: ProductsServiceInterface,
  ) {
    super();
  }

  @Get()
  async getProducts(@Query('relations') relations: string[] | string | null): Promise<Product[]> {
    return await this.productsService.findAll(this.getRelations(relations));
  }

  @Get(':id')
  async getProduct(
    @Param('id') id: string,
    @Query('relations') relations: string[] | string | null,
  ): Promise<Product | null> {
    return await this.productsService.findOne(id, this.getRelations(relations));
  }
}
