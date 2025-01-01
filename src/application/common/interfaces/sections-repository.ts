import { SectionEntity } from "@domain/entities";

export interface SectionsRepository {
  getByPage(parameters: { language: string, page_id: string }): Promise<Array<SectionEntity> | []>;
  getByPageUrl(parameters: { language: string, url: string }): Promise<Array<SectionEntity> | []>;
}
