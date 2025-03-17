import { makeGetByCategoryQuery } from "./queries/get-by-category";
import { makeGetBySlugQuery } from "./queries/get-by-slug";
import { makeGetRelatedQuery } from "./queries/get-related";
import { makeSearchQuery } from "./queries/search";

export function makeNewsUseCases(dependencies: Dependencies) {
  return {
    queries: {
      getRelated: makeGetRelatedQuery(dependencies),
      getByCategory: makeGetByCategoryQuery(dependencies),
      getBySlug: makeGetBySlugQuery(dependencies),
      search: makeSearchQuery(dependencies)
    },
  };
}
