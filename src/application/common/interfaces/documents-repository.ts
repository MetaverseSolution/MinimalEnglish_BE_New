import { DocumentEntity } from '@domain/entities';

export interface DocumentsRepository {
  getById(params: { language: string, id: number }): Promise<DocumentEntity | null>;
  getByDocumentType(params: { language: string, document_type_id: number, size?: number; page?: number }): Promise<{ data: Array<DocumentEntity>, total: number } | { data: [], total: null }>;
}
