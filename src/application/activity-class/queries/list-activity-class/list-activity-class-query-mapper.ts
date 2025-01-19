import { ActivityClassDTO } from "@domain/dtos/activity-class";

export function map(activityClass: ActivityClassDTO): ActivityClassDTO {
  return {
    id: activityClass.id ?? null,
    class: {
      id: String(activityClass?.class?.id),
      name: activityClass?.class?.name ?? null,
      description: activityClass?.class?.description ?? null,
      image: activityClass?.class?.image ?? null,
    },
    name: activityClass?.name ?? null,
    image_url: activityClass.image_url ?? null,
    status: activityClass.status,
    order: activityClass.order ?? null,
    created_at: activityClass.created_at ?? null,
    updated_at: activityClass.updated_at ?? null,
    created_by: activityClass.created_by ?? null,
    updated_by: activityClass.updated_by ?? null,
  };
}
