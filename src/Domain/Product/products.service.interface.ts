import { Product } from './product.entity';

export interface ProductsServiceInterface {
  findAll(relations: string[]): Promise<Product[]>;

  findOne(id: string, relations: string[]): Promise<Product | null>;

  remove(id: number): Promise<void>;
}
