import { map } from "./list-student-result-query-mapper";

export function makeListStudentResultQuery({ studentResultRepository }: Pick<Dependencies, 'studentResultRepository'>) {
  return async function listStudentResultQuery() {

    const studentResults = await studentResultRepository.list();

    return studentResults.map((studentResult) => map(studentResult));
  };
}
