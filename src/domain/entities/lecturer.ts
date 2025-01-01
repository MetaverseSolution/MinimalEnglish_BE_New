export class LecturerEntity {
  public id?: number;
  public avatar: string;
  public name: string;
  public vi_title?: string | null;
  public en_title?: string | null;
  public vi_content?: string | null;
  public en_content?: string | null;
  public order?: number | null;
  public status: number;
  public created_at?: Date | null;
  public updated_at?: Date | null;
  public created_by?: string | null;
  public updated_by?: string | null;

  constructor(lecturerEntity: {
    id?: number;
    avatar: string;
    name: string;
    vi_title: string;
    en_title?: string;
    vi_content?: string;
    en_content?: string;
    order?: number;
    status: number;
    created_at?: Date;
    updated_at?: Date;
    created_by?: string;
    updated_by?: string;
  }) {
    this.id = lecturerEntity.id;
    this.avatar = lecturerEntity.avatar;
    this.name = lecturerEntity.name;
    this.vi_title = lecturerEntity.vi_title;
    this.en_title = lecturerEntity.en_title;
    this.vi_content = lecturerEntity.vi_content;
    this.en_content = lecturerEntity.en_content;
    this.order = lecturerEntity.order;
    this.status = lecturerEntity.status;
    this.created_at = lecturerEntity.created_at;
    this.updated_at = lecturerEntity.updated_at;
    this.created_by = lecturerEntity.created_by;
    this.updated_by = lecturerEntity.updated_by;
  }
}
