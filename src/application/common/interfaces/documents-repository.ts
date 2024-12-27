import { Document } from '@domain/entities';

export interface DocumentsRepository {
  getById(parameters: { language: string, id: number }): Promise<{ data: Array<Document> }>;
  getByDocumentType(parameters: { language: string, document_type_id: number, size: number, page: number }): Promise<{ data: Array<Document> }>;
}
