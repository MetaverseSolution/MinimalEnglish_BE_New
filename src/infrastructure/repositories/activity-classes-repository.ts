import { ActivityClassesRepository } from "@application/common/interfaces";

export function makeActivityClassesRepository({ db }: Dependencies): ActivityClassesRepository {
  return {
    async list() {
      const activityClasses = await db.activity_class.findMany({
        where: { status: 1 },
        orderBy: {
          order: 'asc',
        },
      });
      return activityClasses.map(activityClass => ({
        ...activityClass,
        id: Number(activityClass.id),
      }));
    }
  }
}
