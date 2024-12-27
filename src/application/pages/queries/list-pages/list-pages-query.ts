import { map } from "./list-pages-query-mapper";
import { validate } from "./list-pages-query-validator";

export type ListPagesQuery = Readonly<{
  language: string;
}>;

export function makeListPagesQuery({ pagesRepository }: Pick<Dependencies, 'pagesRepository'>) {
  return async function listPagesQuery(query: ListPagesQuery) {
    await validate(query);

    const { language } = query;

    const pages = await pagesRepository.list({ language });

    return pages.map((page) => map(page, language));
  };
}
