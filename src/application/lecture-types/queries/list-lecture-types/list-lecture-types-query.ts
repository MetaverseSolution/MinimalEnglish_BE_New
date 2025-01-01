import { map } from "./list-lecture-types-query-mapper";
import { validate } from "./list-lecture-types-query-validator";

export type ListLectureTypesQuery = Readonly<{
  language: string;
}>;

export function makeListLectureTypesQuery({ lectureTypesRepository }: Pick<Dependencies, 'lectureTypesRepository'>) {
  return async function listPagesQuery(query: ListLectureTypesQuery) {
    await validate(query);

    const { language } = query;

    const lectureTypes = await lectureTypesRepository.list({ language });

    return lectureTypes.map((lectureType) => map(lectureType, language));
  };
}
