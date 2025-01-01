import { map } from "./get-class-by-id-query-mapper";
import { validate } from "./get-class-by-id-query-validator";

export type GetClassByIdQuery = Readonly<{
  language: string;
  id: string
}>;

export function makeGetClassByIdQuery({ classesRepository }: Pick<Dependencies, 'classesRepository'>) {
  return async function getClassByIdQuery(query: GetClassByIdQuery) {
    await validate(query);

    const { language, id } = query;

    const renamedClass = await classesRepository.getById({ language, id });

    return renamedClass ? map(renamedClass, language) : null;
  };
}
