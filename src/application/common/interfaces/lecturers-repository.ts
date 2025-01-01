import { LecturerEntity } from '@domain/entities';

export interface LecturersRepository {
  list(params: {
    language: string;
    size?: number;
    page?: number
  }): Promise<{ data: Array<LecturerEntity>, total: number } | { data: [], total: null }>;
}
