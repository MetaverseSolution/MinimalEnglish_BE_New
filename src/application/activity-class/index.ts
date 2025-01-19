import { makeListActivityClassQuery } from "./queries/list-activity-class";

export function makeActivityClassUseCases(dependencies: Dependencies) {
  return {
    queries: {
      listActivityClasses: makeListActivityClassQuery(dependencies),
    },
  };
}
