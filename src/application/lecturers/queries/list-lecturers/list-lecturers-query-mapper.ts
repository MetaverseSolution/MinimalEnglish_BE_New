import { LecturerDTO } from "@domain/dtos/lecturer";
import { LecturerEntity } from "@domain/entities";

export function map(lecturers: LecturerEntity, language: string): LecturerDTO {
  return {
    id: lecturers.id?.toString() || '',
    avatar: lecturers.avatar,
    name: lecturers.name,
    title: language === 'vi' ? lecturers.vi_title || '' : lecturers.en_title || '',
    content: language === 'vi' ? lecturers.vi_content || '' : lecturers.en_content || '',
    order: lecturers.order || null,
    status: lecturers.status,
    created_at: lecturers.created_at ? lecturers.created_at.toISOString() : null,
    updated_at: lecturers.updated_at ? lecturers.updated_at.toISOString() : null,
    created_by: lecturers.created_by || null,
    updated_by: lecturers.updated_by || null,
  };
}
