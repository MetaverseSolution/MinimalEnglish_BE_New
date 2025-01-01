import { map } from "./get-by-url-query-mapper";
import { validate } from "./get-by-url-query-validator";

export type GetByUrlQuery = Readonly<{
  language: string;
  url: string;
}>;

export function makeSectionGetByUrl({ sectionsRepository }: Pick<Dependencies, 'sectionsRepository'>) {
  return async function listSectionsByUrlQuery(query: GetByUrlQuery) {
    await validate(query);

    const { language, url } = query;

    const sections = await sectionsRepository.getByPageUrl({ language, url });

    return sections.map((section) => map(section, language));
  };
}
