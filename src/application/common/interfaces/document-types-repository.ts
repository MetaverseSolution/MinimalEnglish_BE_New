import { DocumentType } from '@domain/entities';

export interface DocumentTypesRepository {
  list(): Promise<{ data: Array<DocumentType> }>;
}
