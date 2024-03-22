import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '@Domain/Product/product.entity';
import { ProductsServiceInterface } from '@Domain/Product/products.service.interface';

@Injectable()
export class ProductsService implements ProductsServiceInterface {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  findAll(relations: string[]): Promise<Product[]> {
    return this.productsRepository.find({
      relations,
    });
  }

  findOne(id: string, relations: string[]): Promise<Product | null> {
    return this.productsRepository.findOne({
      where: { id },
      relations,
    });
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
