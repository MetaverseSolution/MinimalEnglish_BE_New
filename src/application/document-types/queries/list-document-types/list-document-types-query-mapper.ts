import { DocumentTypeDTO } from "@domain/dtos/document-type";
import { DocumentTypeEntity } from "@domain/entities";

export function map(documentType: DocumentTypeEntity, language: string): DocumentTypeDTO {
  return {
    id: documentType.id?.toString() || '',
    name: language === 'vi' ? documentType.vi_name : documentType.en_name,
    description: language === 'vi' ? documentType.vi_description ?? null : documentType.en_description ?? null,
    order: documentType.order ?? null,
    status: documentType.status,
    created_at: documentType.created_at?.toISOString() ?? null,
    updated_at: documentType.updated_at?.toISOString() ?? null,
    created_by: documentType.created_by ?? null,
    updated_by: documentType.updated_by ?? null,
  };
}
