export class ActivityClassEntity {
  public id?: number;
  public class_id: number;
  public name?: string | null;
  public image_url?: string | null;
  public status: number;
  public order?: number | null;
  public created_at?: Date | null;
  public updated_at?: Date | null;
  public created_by?: string | null;
  public updated_by?: string | null;

  constructor(activityClassEntity: {
    id?: number;
    class_id: number;
    name?: string;
    image_url?: string;
    status: number;
    order?: number;
    created_at?: Date;
    updated_at?: Date;
    created_by?: string;
    updated_by?: string;
  }) {
    this.id = activityClassEntity.id;
    this.class_id = activityClassEntity.class_id;
    this.name = activityClassEntity.name;
    this.image_url = activityClassEntity.image_url;
    this.status = activityClassEntity.status;
    this.order = activityClassEntity.order;
    this.created_at = activityClassEntity.created_at;
    this.updated_at = activityClassEntity.updated_at;
    this.created_by = activityClassEntity.created_by;
    this.updated_by = activityClassEntity.updated_by;
  }
}
