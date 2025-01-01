import { map } from "./get-by-component-query-mapper";
import { validate } from "./get-by-component-query-validator";

export type GetBySectionQuery = Readonly<{
  language: string;
  section_id: string;
}>;

export function makeComponentGetBySection({ componentsRepository }: Pick<Dependencies, 'componentsRepository'>) {
  return async function listSectionsByPageQuery(query: GetBySectionQuery) {
    await validate(query);

    const { language, section_id } = query;

    const components = await componentsRepository.getBySection({ language, section_id });

    return components.map((component) => map(component, language));
  };
}
