import { PageEntity } from '@domain/entities';

export interface PagesRepository {
  getByUrl(parameters: { language: string, url: string }): Promise<PageEntity | null>;
  list(parameters: { language: string }): Promise<Array<PageEntity> | []>;
}
