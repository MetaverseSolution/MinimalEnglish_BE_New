import { makeListSectionsQuery } from './queries/list-Sections';

export function makeSectionsUseCases(dependencies: Dependencies) {
  return {
    queries: {
      listSections: makeListSectionsQuery(dependencies),
    },
  };
}
