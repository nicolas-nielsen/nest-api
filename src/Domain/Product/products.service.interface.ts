import { Product } from './product.entity';

export interface ProductsServiceInterface {
  findAll(): Promise<Product[]>;

  findOne(id: string): Promise<Product | null>;

  remove(id: number): Promise<void>;
}
