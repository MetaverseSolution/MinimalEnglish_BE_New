import { Lecturer } from '@domain/entities';

export interface LecturersRepository {
  list(): Promise<{ data: Array<Lecturer> }>;
}
