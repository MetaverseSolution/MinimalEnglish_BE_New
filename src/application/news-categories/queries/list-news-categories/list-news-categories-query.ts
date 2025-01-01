import { map } from "./list-news-categories-query-mapper";
import { validate } from "./list-news-categories-query-validator";

export type ListNewsCategoriesQuery = Readonly<{
  language: string;
}>;

export function makeListNewsCategoriesQuery({ documentTypesRepository }: Pick<Dependencies, 'documentTypesRepository'>) {
  return async function listNewsCategoriesQuery(query: ListNewsCategoriesQuery) {
    await validate(query);

    const { language } = query;

    const newsCategories = await documentTypesRepository.list({ language });

    return newsCategories.map((newsCategory) => map(newsCategory, language));
  };
}
