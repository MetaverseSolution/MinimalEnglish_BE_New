import { map } from "./get-by-id-query-mapper";
import { validate } from "./get-by-id-query-validator";

export type GetByIdQuery = Readonly<{
  language: string;
  id: number
}>;

export function makeGetByIdQuery({ lecturesRepository }: Pick<Dependencies, 'lecturesRepository'>) {
  return async function getByIdQuery(query: GetByIdQuery) {
    await validate(query);

    const { id, language } = query;

    const lecture = await lecturesRepository.getById({ id, language });

    return lecture ? map(lecture, language) : null;
  };
}
