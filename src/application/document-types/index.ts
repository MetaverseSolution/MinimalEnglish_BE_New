import { makeListDocumentTypesQuery } from "./queries/list-document-types";

export function makeDocumentTypesUseCases(dependencies: Dependencies) {
  return {
    queries: {
      listDocumentTypes: makeListDocumentTypesQuery(dependencies),
    },
  };
}
