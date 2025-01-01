import { makeListLecturersQuery } from "./queries/list-lecturers";

export function makeLecturersUseCases(dependencies: Dependencies) {
  return {
    queries: {
      listLecturers: makeListLecturersQuery(dependencies),
    },
  };
}
