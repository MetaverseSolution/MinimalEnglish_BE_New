import { map } from "./get-by-document-type-query-mapper";
import { validate } from "./get-by-document-type-query-validator";

export type GetByDocumentTypeQuery = Readonly<{
  language: string;
  document_type_id: number;
  size?: number;
  page?: number
}>;

export function makeGetByDocumentTypeQuery({ documentsRepository }: Pick<Dependencies, 'documentsRepository'>) {
  return async function getByDocumentTypeQuery(query: GetByDocumentTypeQuery) {
    await validate(query);

    const { language, document_type_id, size, page } = query;

    const { data, total } = await documentsRepository.getByDocumentType({ language, document_type_id, size, page });

    const per_page = size;
    const current_page = page;
    const last_page = total && per_page ? Math.ceil(total / per_page) : 1;

    return {
      data: data.map((documentItem) => map(documentItem, language)),
      total,
      per_page,
      current_page,
      last_page,
    }
  };
}
