import { EntitySchema } from 'typeorm';
import { Category } from '@Domain/Category/category.entity';

export const CategorySchema = new EntitySchema<Category>({
  name: 'Category',
  tableName: 'categories',
  target: Category,
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
    level: {
      type: Number,
    },
    createdAt: {
      name: 'created_at',
      type: 'timestamp with time zone',
      createDate: true,
    },
    updatedAt: {
      name: 'updated_at',
      type: 'timestamp with time zone',
      updateDate: true,
    },
  },
  relations: {
    parent: {
      type: 'many-to-one',
      target: 'Category',
      joinColumn: {
        name: 'parent_category_id',
      },
      nullable: true,
    },
  },
});
