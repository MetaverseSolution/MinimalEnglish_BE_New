import { makeGetByDocumentTypeQuery } from "./queries/get-by-document-type";
import { makeGetByIdQuery } from "./queries/get-by-id";

export function makeDocumentsUseCases(dependencies: Dependencies) {
  return {
    queries: {
      getByDocumentType: makeGetByDocumentTypeQuery(dependencies),
      getById: makeGetByIdQuery(dependencies),
    },
  };
}
