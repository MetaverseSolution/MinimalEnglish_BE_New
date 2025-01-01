import { LectureEntity } from '@domain/entities';

export interface LecturesRepository {
  getByLectureType(params: { language: string, lecture_type_id: number, size?: number, page?: number }): Promise<{ data: Array<LectureEntity>, total: number } | { data: [], total: null }>;
  getById(params: { language: string, id: number }): Promise<LectureEntity | null>;
}
