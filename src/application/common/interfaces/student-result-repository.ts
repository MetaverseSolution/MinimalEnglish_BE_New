import { StudentResultEntity } from "@domain/entities/student-result";

export interface StudentResultsRepository {
  list(): Promise<Array<StudentResultEntity>>;
}
