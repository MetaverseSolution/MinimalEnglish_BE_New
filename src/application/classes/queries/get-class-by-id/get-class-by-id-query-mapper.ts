import { ClassDTO } from "@domain/dtos/class";
import { ClassEntity } from "@domain/entities";

export function map(renamedClass: ClassEntity, language: string): ClassDTO {
  return {
    id: renamedClass.id?.toString() || '',
    title: language === 'vi' ? renamedClass.vi_name : renamedClass.en_name,
    description: language === 'vi' ? renamedClass.vi_description || '' : renamedClass.en_description || '',
    content: language === 'vi' ? renamedClass.vi_content || '' : renamedClass.en_content || '',
    image: renamedClass.image || null,
    order: renamedClass.order || null,
    status: renamedClass.status,
    created_at: renamedClass.created_at?.toISOString() || null,
    updated_at: renamedClass.updated_at?.toISOString() || null,
    created_by: renamedClass.created_by || null,
    updated_by: renamedClass.updated_by || null,
  };
}
