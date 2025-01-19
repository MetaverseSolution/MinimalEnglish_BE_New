import { ActivityClassEntity } from "@domain/entities/activity-class";

export interface ActivityClassesRepository {
  list(): Promise<Array<ActivityClassEntity>>;
}
