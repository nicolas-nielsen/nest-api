export class Category {
  id: string;

  title: string;

  description: string;

  slug: string;

  level: number;

  parent: Category | null;

  createdAt: string;

  updatedAt: string;
}
