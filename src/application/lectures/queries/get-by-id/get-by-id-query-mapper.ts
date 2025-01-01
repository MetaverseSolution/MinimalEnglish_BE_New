import { LectureDTO } from "@domain/dtos/lecture";
import { LectureEntity } from "@domain/entities";

export function map(lecture: LectureEntity, language: string): LectureDTO {
  return {
    id: lecture.id?.toString() || '',
    lecture_type_id: lecture.lecture_type_id,
    associcate_link: lecture.associcate_link || '',
    viewer: lecture.viewer,
    image: lecture.image || '',
    title: language === 'vi' ? lecture.vi_title || '' : lecture.en_title || '',
    description: language === 'vi' ? lecture.vi_description || '' : lecture.en_description || '',
    content: language === 'vi' ? lecture.vi_content || '' : lecture.en_content || '',
    order: lecture.order || null,
    status: lecture.status,
    created_at: lecture.created_at ? lecture.created_at.toISOString() : null,
    updated_at: lecture.updated_at ? lecture.updated_at.toISOString() : null,
    created_by: lecture.created_by || null,
    updated_by: lecture.updated_by || null,
  };
}
