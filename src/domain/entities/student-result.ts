export class StudentResultEntity {
  public id?: number;
  public class_id: number;
  public name?: string | null;
  public description?: string | null;
  public result_image: string;
  public order?: number | null;
  public status: number;
  public created_at?: Date | null;
  public updated_at?: Date | null;
  public created_by?: string | null;
  public updated_by?: string | null;

  constructor(studentResultEntity: {
    id?: number;
    class_id: number;
    name?: string;
    description?: string;
    result_image: string;
    order?: number;
    status: number;
    created_at?: Date;
    updated_at?: Date;
    created_by?: string;
    updated_by?: string;
  }) {
    this.id = studentResultEntity.id;
    this.class_id = studentResultEntity.class_id;
    this.name = studentResultEntity.name;
    this.description = studentResultEntity.description;
    this.result_image = studentResultEntity.result_image;
    this.order = studentResultEntity.order;
    this.status = studentResultEntity.status;
    this.created_at = studentResultEntity.created_at;
    this.updated_at = studentResultEntity.updated_at;
    this.created_by = studentResultEntity.created_by;
    this.updated_by = studentResultEntity.updated_by;
  }
}
