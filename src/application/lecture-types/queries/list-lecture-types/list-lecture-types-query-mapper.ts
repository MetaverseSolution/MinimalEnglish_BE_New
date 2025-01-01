import { LectureTypeDTO } from "@domain/dtos/lecture-type";
import { LectureTypeEntity } from "@domain/entities";

export function map(lectureTypes: LectureTypeEntity, language: string): LectureTypeDTO {
  return {
    id: lectureTypes.id?.toString() || '',
    name: language === 'vi' ? lectureTypes.vi_name : lectureTypes.en_name,
    description: language === 'vi' ? lectureTypes.vi_description || '' : lectureTypes.en_description || '',
    order: lectureTypes.order || null,
    status: lectureTypes.status,
    created_at: lectureTypes.created_at ? lectureTypes.created_at.toISOString() : null,
    updated_at: lectureTypes.updated_at ? lectureTypes.updated_at.toISOString() : null,
    created_by: lectureTypes.created_by || null,
    updated_by: lectureTypes.updated_by || null,
  };
}
