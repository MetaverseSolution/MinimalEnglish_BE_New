import { map } from "./list-document-types-query-mapper";
import { validate } from "./list-document-types-query-validator";

export type ListDocumentTypesQuery = Readonly<{
  language: string;
}>;

export function makeListDocumentTypesQuery({ documentTypesRepository }: Pick<Dependencies, 'documentTypesRepository'>) {
  return async function listDocumentTypesQuery(query: ListDocumentTypesQuery) {
    await validate(query);

    const { language } = query;

    const documentTypes = await documentTypesRepository.list({ language });

    return documentTypes.map((documentType) => map(documentType, language));
  };
}
