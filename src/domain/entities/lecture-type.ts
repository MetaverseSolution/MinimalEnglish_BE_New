export class LectureTypeEntity {
  public id?: number;
  public vi_name: string;
  public en_name: string;
  public vi_description?: string | null;
  public en_description?: string | null;
  public order?: number | null;
  public status: number;
  public created_at?: Date | null;
  public updated_at?: Date | null;
  public created_by?: string | null;
  public updated_by?: string | null;

  constructor(lectureTypeEntity: {
    id?: number;
    vi_name: string;
    en_name: string;
    vi_description?: string;
    en_description?: string;
    order?: number;
    status: number;
    created_at?: Date;
    updated_at?: Date;
    created_by?: string;
    updated_by?: string;
  }) {
    this.id = lectureTypeEntity.id;
    this.vi_name = lectureTypeEntity.vi_name;
    this.en_name = lectureTypeEntity.en_name;
    this.vi_description = lectureTypeEntity.vi_description;
    this.en_description = lectureTypeEntity.en_description;
    this.order = lectureTypeEntity.order;
    this.status = lectureTypeEntity.status;
    this.created_at = lectureTypeEntity.created_at;
    this.updated_at = lectureTypeEntity.updated_at;
    this.created_by = lectureTypeEntity.created_by;
    this.updated_by = lectureTypeEntity.updated_by;
  }
}
