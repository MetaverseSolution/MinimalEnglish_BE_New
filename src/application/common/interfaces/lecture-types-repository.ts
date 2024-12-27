import { LectureType } from '@domain/entities';

export interface LectureTypesRepository {
  list(): Promise<{ data: Array<LectureType> }>;
}
