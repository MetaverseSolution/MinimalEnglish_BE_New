import { DocumentDTO } from "@domain/dtos/document";
import { DocumentEntity } from "@domain/entities";

export function map(documentType: DocumentEntity, language: string): DocumentDTO {
  return {
    id: documentType.id ?? 0,
    document_type_id: documentType.document_type_id ?? 0,
    link_file: documentType.link_file ?? '',
    downloaded: documentType.downloaded ?? 0,
    image: documentType.image ?? '',
    order: documentType.order ?? null,
    status: documentType.status ?? 0,
    title: language === 'vi' ? documentType.vi_title || '' : documentType.en_title || '',
    description: language === 'vi' ? documentType.vi_description || '' : documentType.en_description || '',
    content: language === 'vi' ? documentType.vi_content || '' : documentType.en_content || '',
    created_at: documentType.created_at?.toISOString() ?? null,
    updated_at: documentType.updated_at?.toISOString() ?? null,
    created_by: documentType.created_by ?? null,
    updated_by: documentType.updated_by ?? null,
  };
}
