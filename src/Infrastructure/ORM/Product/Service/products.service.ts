import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '@Domain/Product/product.entity';
import { ProductsServiceInterface } from '@Domain/Product/products.service.interface';

@Injectable()
export class ProductsService implements ProductsServiceInterface {
  constructor(
    @InjectRepository(Product)
    private ProductsRepository: Repository<Product>,
  ) {}

  findAll(): Promise<Product[]> {
    return this.ProductsRepository.find({
      relations: ['category', 'category.parent'],
    });
  }

  findOne(id: string): Promise<Product | null> {
    return this.ProductsRepository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.ProductsRepository.delete(id);
  }
}
