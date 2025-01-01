import { makeSectionGetByPage } from "./queries/get-by-page";
import { makeSectionGetByUrl } from "./queries/get-by-url";

export function makeSectionsUseCases(dependencies: Dependencies) {
  return {
    queries: {
      listSectionsByPage: makeSectionGetByPage(dependencies),
      listSectionsByPageUrl: makeSectionGetByUrl(dependencies),
    },
  };
}
