import { Class } from '@domain/entities';

export interface ClassesRepository {
  highLight(): Promise<{ data: Array<Class> }>;
  listShort(): Promise<{ data: Array<Class> }>;
  getById(parameters: { language: string, page_id: string }): Promise<Class | null>;
}
