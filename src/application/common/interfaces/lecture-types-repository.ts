import { LectureTypeEntity } from '@domain/entities';

export interface LectureTypesRepository {
  list(params: { language: string }): Promise<Array<LectureTypeEntity>>;
}
