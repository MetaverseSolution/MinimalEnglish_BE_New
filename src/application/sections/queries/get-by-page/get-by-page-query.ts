import { map } from "./get-by-page-query-mapper";
import { validate } from "./get-by-page-query-validator";

export type GetByPageQuery = Readonly<{
  language: string;
  page_id: string;
}>;

export function makeSectionGetByPage({ sectionsRepository }: Pick<Dependencies, 'sectionsRepository'>) {
  return async function listSectionsByPageQuery(query: GetByPageQuery) {
    await validate(query);

    const { language, page_id } = query;

    const sections = await sectionsRepository.getByPage({ language, page_id });

    return sections.map((section) => map(section, language));
  };
}
