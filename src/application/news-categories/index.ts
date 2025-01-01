import { makeListNewsCategoriesQuery } from "./queries/list-news-categories";

export function makeNewsCategoriesUseCases(dependencies: Dependencies) {
  return {
    queries: {
      list: makeListNewsCategoriesQuery(dependencies),
    },
  };
}
