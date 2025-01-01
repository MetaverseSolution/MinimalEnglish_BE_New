import { NewsCategoryEntity } from '@domain/entities';

export interface NewsCategoriesRepository {
  list(params: { language: string; }): Promise<Array<NewsCategoryEntity> | null>;
}
