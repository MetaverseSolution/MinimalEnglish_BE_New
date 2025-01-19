import { ActivityClassEntity } from "@domain/entities/activity-class";

export interface ActivityClassesRepository {
  list(params: { language: string }): Promise<Array<ActivityClassEntity>>;
}
