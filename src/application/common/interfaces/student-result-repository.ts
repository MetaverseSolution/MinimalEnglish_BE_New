import { StudentResultEntity } from "@domain/entities/student-result";

export interface StudentResultsRepository {
  list(params: { language: string }): Promise<Array<StudentResultEntity>>;
}
