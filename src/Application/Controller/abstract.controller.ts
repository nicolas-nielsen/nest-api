export abstract class AbstractController {
  getRelations(relations: string[] | string | null): string[] {
    relations = relations ?? [];
    if (typeof relations === 'string') {
      relations = relations.split(',');
    }

    return relations;
  }
}
