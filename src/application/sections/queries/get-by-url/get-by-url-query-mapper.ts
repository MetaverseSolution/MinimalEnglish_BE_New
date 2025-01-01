import { SectionDTO } from "@domain/dtos/section";
import { SectionEntity } from "@domain/entities";

export function map(section: SectionEntity, language: string): SectionDTO {
  return {
    id: section.id?.toString() || '',
    image: section.image || '',
    name: language === 'vi' ? section.vi_name : section.en_name,
    description: language === 'vi' ? section?.vi_description || '' : section?.en_description || '',
    order: section.order || null,
    status: section.status,
    created_at: section.created_at ? section.created_at.toISOString() : null,
    updated_at: section.updated_at ? section.updated_at.toISOString() : null,
    created_by: section.created_by || null,
    updated_by: section.updated_by || null,
  };
}
