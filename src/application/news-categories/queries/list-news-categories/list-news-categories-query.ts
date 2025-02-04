import { map } from "./list-news-categories-query-mapper";
import { validate } from "./list-news-categories-query-validator";

export type ListNewsCategoriesQuery = Readonly<{
  language: string;
}>;

export function makeListNewsCategoriesQuery({ newsCategoriesRepository }: Pick<Dependencies, 'newsCategoriesRepository'>) {
  return async function listNewsCategoriesQuery(query: ListNewsCategoriesQuery) {
    await validate(query);

    const { language } = query;

    const newsCategories = await newsCategoriesRepository.list({ language });

    return newsCategories && newsCategories.map((newsCategory) => map(newsCategory, language));
  };
}
