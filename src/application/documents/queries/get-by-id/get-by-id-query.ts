import { map } from "./get-by-id-query-mapper";
import { validate } from "./get-by-id-query-validator";

export type GetByIdQuery = Readonly<{
  language: string;
  id: number
}>;

export function makeGetByIdQuery({ documentsRepository }: Pick<Dependencies, 'documentsRepository'>) {
  return async function getByIdQuery(query: GetByIdQuery) {
    await validate(query);

    const { id, language } = query;

    const document = await documentsRepository.getById({ id, language });

    return document ? map(document, language) : null;
  };
}
