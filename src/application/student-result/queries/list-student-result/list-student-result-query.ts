import { StudentResultDTO } from "@domain/dtos/student-result";
import { map } from "./list-student-result-query-mapper";

export type ListStudentResultQuery = Readonly<{
  language: string;
}>;

export function makeListStudentResultQuery({ studentResultRepository, db }: Pick<Dependencies, 'studentResultRepository' | 'db'>) {
  return async function listStudentResultQuery({ language }: ListStudentResultQuery) {

    const studentResults = await studentResultRepository.list({ language });

    const enrichedStudentResults = await Promise.all(studentResults.map(async (studentResult) => {
      const classInfo = await db.renamedclass.findUnique({
        where: { id: Number(studentResult.class_id) },
      });

      const enrichedStudentResult = {
        ...studentResult,
        class: {
          id: String(studentResult.class_id),
          name: language === "vi" ? classInfo?.vi_name ?? '' : classInfo?.en_name ?? '',
          description: language === "vi" ? classInfo?.vi_description ?? '' : classInfo?.en_description ?? '',
          image: classInfo?.image ?? null,
        },
      };

      const studentResultDTO: StudentResultDTO = {
        id: enrichedStudentResult.id ?? null,
        class: {
          id: enrichedStudentResult.class.id,
          name: enrichedStudentResult.class.name ?? null,
          description: enrichedStudentResult.class.description ?? null,
          image: enrichedStudentResult.class.image ?? null,
        },
        name: enrichedStudentResult.name ?? null,
        score: enrichedStudentResult.score ?? null,
        content: language === "vi" ? enrichedStudentResult?.vi_content ?? '' : enrichedStudentResult?.en_content ?? '',
        result_image: enrichedStudentResult.result_image ?? '',
        order: enrichedStudentResult.order ?? null,
        status: enrichedStudentResult.status,
        created_at: enrichedStudentResult.created_at?.toISOString() ?? null,
        updated_at: enrichedStudentResult.updated_at?.toISOString() ?? null,
        created_by: enrichedStudentResult.created_by ?? null,
        updated_by: enrichedStudentResult.updated_by ?? null,
      };

      return studentResultDTO;
    }));

    return enrichedStudentResults.map((studentResult) => map(studentResult));
  };
}
