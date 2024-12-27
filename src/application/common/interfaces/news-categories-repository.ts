import { NewsCategory } from '@domain/entities';

export interface NewsCategorysRepository {
  list(): Promise<{ data: Array<NewsCategory> }>;
}
