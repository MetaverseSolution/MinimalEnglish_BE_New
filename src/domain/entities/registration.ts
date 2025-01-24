export class RegistrationEntity {
  public id?: bigint;
  public full_name: string;
  public phone_number: string;
  public is_learn?: number | null;
  public type_class?: number | null;
  public created_at?: Date | null;
  public updated_at?: Date | null;

  constructor(registrationEntity: {
    id?: bigint;
    full_name: string;
    phone_number: string;
    is_learn?: number | null;
    type_class?: number | null;
    created_at?: Date | null;
    updated_at?: Date | null;
    created_by?: string | null;
    updated_by?: string | null;
  }) {
    this.id = registrationEntity.id;
    this.full_name = registrationEntity.full_name;
    this.phone_number = registrationEntity.phone_number;
    this.is_learn = registrationEntity.is_learn;
    this.type_class = registrationEntity.type_class;
    this.created_at = registrationEntity.created_at;
    this.updated_at = registrationEntity.updated_at;
  }
}
