import { ActivityClassDTO } from "@domain/dtos/activity-class";
import { ActivityClassEntity } from "@domain/entities";

export function map(activityClass: ActivityClassEntity): ActivityClassDTO {
  return {
    id: activityClass.id ?? null,
    name: activityClass.name ?? null,
    image_url: activityClass.image_url ?? null,
    status: activityClass.status,
    order: activityClass.order ?? null,
    created_at: activityClass.created_at?.toISOString() ?? null,
    updated_at: activityClass.updated_at?.toISOString() ?? null,
    created_by: activityClass.created_by ?? null,
    updated_by: activityClass.updated_by ?? null,
  };
}
