import { ClassEntity } from '@domain/entities';

export interface ClassesRepository {
  getHighlightClasses(params: {
    language: string;
    size?: number;
    page?: number
  }): Promise<{ data: Array<ClassEntity>, total: number } | { data: [], total: null }>;
  getListShort(params: { language: string }): Promise<Array<ClassEntity> | []>;
  getById(params: { language: string, id: string }): Promise<ClassEntity | null>;
}
