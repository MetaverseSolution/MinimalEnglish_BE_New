import { News } from '@domain/entities';

export interface NewssRepository {
  getRelated(parameters: { language: string, news_category_id: string, size: number, id: number }): Promise<{ data: Array<News> }>;
  getByCategory(parameters: { language: string, news_category_id: string, size: number, page: number }): Promise<{ data: Array<News> }>;
  getBySlug(parameters: { language: string, slug: string }): Promise<News | null>;
}
