import { DocumentTypeEntity } from '@domain/entities';

export interface DocumentTypesRepository {
  list(params: { language: string }): Promise<Array<DocumentTypeEntity>>;
}
