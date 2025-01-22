import { ActivityClassEntity } from "@domain/entities/activity-class";

export interface ActivityClassesRepository {
  list(params: {
    language: string;
    size?: number;
    page?: number
  }): Promise<{ data: Array<ActivityClassEntity>, total: number } | { data: [], total: null }>;
}
