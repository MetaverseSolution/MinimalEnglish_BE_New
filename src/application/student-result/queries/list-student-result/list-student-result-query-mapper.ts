import { StudentResultDTO } from "@domain/dtos/student-result";
import { StudentResultEntity } from "@domain/entities";

export function map(studentResult: StudentResultEntity): StudentResultDTO {
  return {
    id: studentResult.id ?? null,
    class_name: studentResult.class_name ?? null,
    name: studentResult.name ?? null,
    description: studentResult.description ?? null,
    result_image: studentResult.result_image,
    order: studentResult.order ?? null,
    status: studentResult.status,
    created_at: studentResult.created_at?.toISOString() ?? null,
    updated_at: studentResult.updated_at?.toISOString() ?? null,
    created_by: studentResult.created_by ?? null,
    updated_by: studentResult.updated_by ?? null,
  };
}
