import { map } from "./get-related-query-mapper";
import { validate } from "./get-related-query-validator";

export type GetRelatedQuery = Readonly<{
  language: string;
  id: number;
  news_category_id: number;
  size?: number;
  page?: number
}>;

export function makeGetRelatedQuery({ newsRepository }: Pick<Dependencies, 'newsRepository'>) {
  return async function getRelatedQuery(query: GetRelatedQuery) {
    await validate(query);

    const { news_category_id, id, language, size, page } = query;

    const { data, total } = await newsRepository.getRelated({ news_category_id, id, language, size, page });

    const per_page = size;
    const current_page = page;
    const last_page = total && per_page ? Math.ceil(total / per_page) : 1;

    return {
      data: data.map((newsItem) => map(newsItem, language)),
      total,
      per_page,
      current_page,
      last_page,
    }
  };
}
