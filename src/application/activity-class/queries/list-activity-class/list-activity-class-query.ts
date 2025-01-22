import { ActivityClassDTO } from "@domain/dtos/activity-class";

import { map } from "./list-activity-class-query-mapper";
import { validate } from "./list-activity-class-query-validator";

export type ListActivitClassQuery = Readonly<{
  language: string;
  size?: number;
  page?: number
}>;

export function makeListActivityClassQuery({ activityClassRepository, db }: Pick<Dependencies, 'activityClassRepository' | 'db'>) {
  return async function listActivityClassQuery(query: ListActivitClassQuery) {
    await validate(query);

    const { language, size, page } = query;

    const { data: activityClasses, total } = await activityClassRepository.list({ language, size, page });

    const per_page = size;
    const current_page = page;
    const last_page = total && per_page ? Math.ceil(total / per_page) : 1;

    const enrichedActivityClasses = await Promise.all(activityClasses.map(async (activityClass) => {
      const classInfo = await db.renamedclass.findUnique({
        where: { id: Number(activityClass.class_id) },
      });

      const enrichedClass = {
        ...activityClass,
        id: Number(activityClass.id),
        class: {
          id: String(activityClass.class_id),
          name: language === "vi" ? classInfo?.vi_name ?? '' : classInfo?.en_name ?? '',
          description: language === "vi" ? classInfo?.vi_description ?? '' : classInfo?.en_description ?? '',
          image: classInfo?.image ?? null,
        },
      };

      const activityClassDTO: ActivityClassDTO = {
        id: enrichedClass.id ?? null,
        class: {
          id: enrichedClass.class.id,
          name: enrichedClass.class.name ?? null,
          description: enrichedClass.class.description ?? null,
          image: enrichedClass.class.image ?? null,
        },
        name: enrichedClass.name ?? null,
        video_url: enrichedClass.video_url ?? null,
        image_url: enrichedClass.image_url ?? null,
        status: enrichedClass.status,
        order: enrichedClass.order ?? null,
        created_at: enrichedClass.created_at?.toISOString() ?? null,
        updated_at: enrichedClass.updated_at?.toISOString() ?? null,
        created_by: enrichedClass.created_by ?? null,
        updated_by: enrichedClass.updated_by ?? null,
      };

      return activityClassDTO;
    }));

    return {
      data: enrichedActivityClasses.map((activityClass) => map(activityClass)),
      total,
      per_page,
      current_page,
      last_page,
    }
  };
}
