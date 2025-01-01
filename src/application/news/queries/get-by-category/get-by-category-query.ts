import { map } from "./get-by-category-query-mapper";
import { validate } from "./get-by-category-query-validator";

export type GetByCategoryQuery = Readonly<{
  language: string;
  news_category_id: number;
  size?: number;
  page?: number
}>;

export function makeGetByCategoryQuery({ newsRepository }: Pick<Dependencies, 'newsRepository'>) {
  return async function getByCategoryQuery(query: GetByCategoryQuery) {
    await validate(query);

    const { news_category_id, language, size, page } = query;

    const { data, total } = await newsRepository.getByCategory({ news_category_id, language, size, page });

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
