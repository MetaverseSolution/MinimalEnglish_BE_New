import { ClassDTO } from "@domain/dtos/class";
import { ClassEntity } from "@domain/entities";

type HighlightClassDTO = Omit<ClassDTO, 'description' | 'content' | 'image' | 'status' | 'created_at' | 'updated_at' | 'created_by' | 'updated_by'>;

export function map(renamedClass: ClassEntity, language: string): HighlightClassDTO {
  return {
    id: renamedClass.id?.toString() || '',
    name: language === 'vi' ? renamedClass.vi_name : renamedClass.en_name,
    order: renamedClass.order || null,
  };
}
