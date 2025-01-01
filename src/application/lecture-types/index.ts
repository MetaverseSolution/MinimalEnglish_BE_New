import { makeListLectureTypesQuery } from "./queries/list-lecture-types";

export function makeLectureTypesUseCases(dependencies: Dependencies) {
  return {
    queries: {
      listLectureTypes: makeListLectureTypesQuery(dependencies),
    },
  };
}
