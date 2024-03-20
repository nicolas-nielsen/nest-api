import { Category } from '../Category/category.entity';

export class Product {
  id: string;

  title: string;

  description: string;

  slug: string;

  category: Category;

  status: string;

  createdAt: string;

  updatedAt: string;
}
