import { EntitySchema } from 'typeorm';
import { Product } from '@Domain/Product/product.entity';
import { CategorySchema } from '@Infrastructure/ORM/Category/Mapping/category.schema';

export const ProductSchema = new EntitySchema<Product>({
  name: 'Product',
  tableName: 'products',
  target: Product,
  columns: {
    id: {
      primary: true,
      type: String,
      generated: true,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    slug: {
      type: String,
    },
    status: {
      type: String,
    },
    createdAt: {
      name: 'created_at',
      type: String,
    },
    updatedAt: {
      name: 'updated_at',
      type: String,
    },
  },
  relations: {
    category: {
      type: 'many-to-one',
      target: CategorySchema,
      joinColumn: {
        name: 'category_id',
      },
    },
  },
});
