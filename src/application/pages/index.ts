import { makeListPagesQuery } from './queries/list-pages';

export function makePagesUseCases(dependencies: Dependencies) {
  return {
    queries: {
      listPages: makeListPagesQuery(dependencies),
    },
  };
}
