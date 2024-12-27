import { Section } from '@domain/entities';

export interface SectionsRepository {
  getByPage(parameters: { language: string, page_id: string }): Promise<{ data: Array<Section> }>;
  getByPageUrl(parameters: { language: string, url: string }): Promise<{ data: Array<Section> }>;
}
