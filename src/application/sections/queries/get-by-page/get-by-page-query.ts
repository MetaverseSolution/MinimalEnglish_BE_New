import { map } from "./get-by-page-query-mapper";
import { validate } from "./get-by-page-query-validator";

export type GetByPageQuery = Readonly<{
  language: string;
}>;

export function makeSectionGetByQuery({ sectionsRepository }: Pick<Dependencies, 'sectionsRepository'>) {
  return async function listPagesQuery(query: GetByPageQuery) {
    await validate(query);

    const { language } = query;

    const sections = await sectionsRepository.list({ language });

    return sections.map((section) => map(section, language));
  };
}
