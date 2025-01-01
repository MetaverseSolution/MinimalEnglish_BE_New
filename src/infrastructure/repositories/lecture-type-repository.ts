import { LectureTypesRepository } from "@application/common/interfaces";

export function makeLectureTypesRepository({ db }: Dependencies): LectureTypesRepository {
  return {
    async list() {
      const lectureTypes = await db.lecture_type.findMany({
        where: { status: 1 },
        orderBy: {
          order: 'asc',
        },
      });
      return lectureTypes.map((lectureType) => ({
        ...lectureType,
        id: Number(lectureType.id),
      }));
    }
  }
}
