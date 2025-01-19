import { makeListStudentResultQuery } from "./queries/list-student-result";

export function makeStudentResultUseCases(dependencies: Dependencies) {
  return {
    queries: {
      listStudentResults: makeListStudentResultQuery(dependencies),
    },
  };
}
