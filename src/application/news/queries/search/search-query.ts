import { map } from "./search-query-mapper";
import { validate } from "./search-query-validator";

export type SearchNewsQuery = Readonly<{
  categoryId?: number;
  language: string;
  name: string;
  size?: number;
  page?: number;
}>;

export function makeSearchQuery({ newsRepository }: Pick<Dependencies, 'newsRepository'>) {
  return async function getByCategoryQuery(query: SearchNewsQuery) {
    await validate(query);

    const { categoryId, name, language, size, page } = query;

    const { data, total } = await newsRepository.search({ categoryId, name, language, size, page });

    const per_page = size;
    const current_page = page;
    const last_page = total && per_page ? Math.ceil(total / per_page) : 1;

    return {
      data: data.map((lectureItem) => map(lectureItem, language)),
      total,
      per_page,
      current_page,
      last_page,
    }
  };
}
