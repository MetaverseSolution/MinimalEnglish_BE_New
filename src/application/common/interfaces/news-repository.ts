import { NewsEntity } from '@domain/entities';

export interface NewsRepository {
  getRelated(params: { language: string, news_category_id: number, size?: number, page?: number, id: number }): Promise<{ data: Array<NewsEntity>, total: number } | { data: [], total: null }>;
  getByCategory(params: { language: string, news_category_id: number, size?: number, page?: number }): Promise<{ data: Array<NewsEntity>, total: number } | { data: [], total: null }>;
  getBySlug(params: { language: string, slug: string }): Promise<NewsEntity | null>;
  search(params: { language: string, name: string, size?: number, page?: number }): Promise<{ data: Array<NewsEntity>, total: number } | { data: [], total: null }>;
}
