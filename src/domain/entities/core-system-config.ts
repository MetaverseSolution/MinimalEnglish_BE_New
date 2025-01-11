export class CoreSystemConfigEntity {
  public id?: number;
  public group: string;
  public type: string;
  public value: string;
  public image?: string | null;
  public description_vi: string;
  public description_en?: string | null;
  public order?: number | null;
  public block_delete?: number | null;
  public status?: boolean | null;
  public created_at?: Date | null;
  public updated_at?: Date | null;
  public created_by?: string | null;
  public updated_by?: string | null;

  constructor(coreSystemConfigEntity: {
    id?: number;
    group: string;
    type: string;
    value: string;
    image?: string;
    description_vi: string;
    description_en?: string;
    order?: number;
    block_delete?: number;
    status?: boolean;
    created_at?: Date;
    updated_at?: Date;
    created_by?: string;
    updated_by?: string;
  }) {
    this.id = coreSystemConfigEntity.id;
    this.group = coreSystemConfigEntity.group;
    this.type = coreSystemConfigEntity.type;
    this.value = coreSystemConfigEntity.value;
    this.image = coreSystemConfigEntity.image;
    this.description_vi = coreSystemConfigEntity.description_vi;
    this.description_en = coreSystemConfigEntity.description_en;
    this.order = coreSystemConfigEntity.order;
    this.block_delete = coreSystemConfigEntity.block_delete;
    this.status = coreSystemConfigEntity.status;
    this.created_at = coreSystemConfigEntity.created_at;
    this.updated_at = coreSystemConfigEntity.updated_at;
    this.created_by = coreSystemConfigEntity.created_by;
    this.updated_by = coreSystemConfigEntity.updated_by;
  }
}
