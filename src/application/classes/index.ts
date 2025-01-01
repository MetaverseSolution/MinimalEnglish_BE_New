import { makeGetClassByIdQuery } from "./queries/get-class-by-id";
import { makeListHightlightClassesQuery } from "./queries/list-highlight-classes";
import { makeListShortClassesQuery } from "./queries/list-short-classes";

export function makeClassessUseCases(dependencies: Dependencies) {
  return {
    queries: {
      listHightlightClasses: makeListHightlightClassesQuery(dependencies),
      listShortClasses: makeListShortClassesQuery(dependencies),
      getClassById: makeGetClassByIdQuery(dependencies),
    },
  };
}
