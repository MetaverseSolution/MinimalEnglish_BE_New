import { makeGetByIdQuery } from "./queries/get-by-id";
import { makeGetByLectureTypeQuery } from "./queries/get-by-lecture-type";

export function makeLecturesUseCases(dependencies: Dependencies) {
  return {
    queries: {
      getByLectureType: makeGetByLectureTypeQuery(dependencies),
      getById: makeGetByIdQuery(dependencies),
    },
  };
}
