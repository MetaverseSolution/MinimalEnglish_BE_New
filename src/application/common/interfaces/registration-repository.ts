export interface RegistrationsRepository {
  create(parameters: { full_name: string, phone_number: string, email: string, is_learn: number, type_class: number }): Promise<{ id: number } | null>;
}
