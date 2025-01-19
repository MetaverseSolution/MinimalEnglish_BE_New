import { StudentResultDTO } from "@domain/dtos/student-result";

export function map(studentResult: StudentResultDTO): StudentResultDTO {
  return {
    id: studentResult.id ?? null,
    class: {
      id: String(studentResult?.class?.id),
      name: studentResult?.class?.name ?? null,
      description: studentResult?.class?.description ?? null,
      image: studentResult?.class?.image ?? null,
    },
    name: studentResult.name ?? null,
    description: studentResult.description ?? null,
    result_image: studentResult.result_image,
    order: studentResult.order ?? null,
    status: studentResult.status,
    created_at: studentResult.created_at ?? null,
    updated_at: studentResult.updated_at ?? null,
    created_by: studentResult.created_by ?? null,
    updated_by: studentResult.updated_by ?? null,
  };
}
