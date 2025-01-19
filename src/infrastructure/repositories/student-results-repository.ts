import { StudentResultsRepository } from "@application/common/interfaces";

export function makeStudentResultsRepository({ db }: Dependencies): StudentResultsRepository {
  return {
    async list() {
      const studentResults = await db.student_results.findMany({
        where: { status: 1 },
        orderBy: {
          order: 'asc',
        },
      });
      return studentResults.map(studentResult => ({
        ...studentResult,
        id: Number(studentResult.id),
      }));
    }
  }
}
