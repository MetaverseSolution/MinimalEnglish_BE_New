import { map } from "./get-by-slug-query-mapper";
import { validate } from "./get-by-slug-query-validator";

export type GetBySlugQuery = Readonly<{
  language: string;
  slug: string
}>;

export function makeGetBySlugQuery({ newsRepository }: Pick<Dependencies, 'newsRepository'>) {
  return async function getBySlugQuery(query: GetBySlugQuery) {
    await validate(query);

    const { slug, language } = query;

    const news = await newsRepository.getBySlug({ slug, language });

    return news ? map(news, language) : null;
  };
}
