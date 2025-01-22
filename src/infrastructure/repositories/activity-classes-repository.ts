import { ActivityClassesRepository } from "@application/common/interfaces";

export function makeActivityClassesRepository({ db }: Dependencies): ActivityClassesRepository {
  return {
    async list(params: { language: string; size?: number; page?: number }) {
      const { size = 10, page = 1 } = params;

      const activityClasses = await db.activity_class.findMany({
        where: { status: 1 },
        orderBy: { order: 'asc' },
        skip: (page - 1) * size,
        take: size,
      });

      const total = await db.activity_class.count({
        where: {
          status: 1,
        },
      });

      return {
        data: activityClasses.map(activityClass => ({
          ...activityClass,
          id: Number(activityClass.id),
          class_id: Number(activityClass.class_id),
        })),
        total
      }
    },
  };
}
