export class LectureEntity {
  public id?: number;
  public lecture_type_id: number;
  public vi_title: string;
  public en_title: string;
  public vi_description?: string | null;
  public en_description?: string | null;
  public vi_content: string;
  public en_content: string;
  public associcate_link?: string | null;
  public viewer: number;
  public image?: string | null;
  public order?: number | null;
  public status: number;
  public created_at?: Date | null;
  public updated_at?: Date | null;
  public created_by?: string | null;
  public updated_by?: string | null;

  constructor(lectureEntity: {
    id?: number;
    lecture_type_id: number;
    vi_title: string;
    en_title: string;
    vi_description?: string;
    en_description?: string;
    vi_content: string;
    en_content: string;
    associcate_link?: string;
    viewer: number;
    image?: string;
    order?: number;
    status: number;
    created_at?: Date;
    updated_at?: Date;
    created_by?: string;
    updated_by?: string;
  }) {
    this.id = lectureEntity.id;
    this.lecture_type_id = lectureEntity.lecture_type_id;
    this.vi_title = lectureEntity.vi_title;
    this.en_title = lectureEntity.en_title;
    this.vi_description = lectureEntity.vi_description;
    this.en_description = lectureEntity.en_description;
    this.vi_content = lectureEntity.vi_content;
    this.en_content = lectureEntity.en_content;
    this.associcate_link = lectureEntity.associcate_link;
    this.viewer = lectureEntity.viewer;
    this.image = lectureEntity.image;
    this.order = lectureEntity.order;
    this.status = lectureEntity.status;
    this.created_at = lectureEntity.created_at;
    this.updated_at = lectureEntity.updated_at;
    this.created_by = lectureEntity.created_by;
    this.updated_by = lectureEntity.updated_by;
  }
}
