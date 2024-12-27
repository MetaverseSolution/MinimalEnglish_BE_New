import { Lecture } from '@domain/entities';

export interface LecturesRepository {
  getByLectureType(parameters: { language: string, lecture_type_id: number, size: number, page: number }): Promise<{ data: Array<Lecture> }>;
  getById(parameters: { language: string, id: number }): Promise<Lecture | null>;
}
