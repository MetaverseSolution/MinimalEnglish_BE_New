import { validate } from "./create-registration-query-validator";

export type CreateRegistrationQuery = Readonly<{
  full_name: string,
  phone_number: string,
  email: string,
  is_learn: number,
  type_class: number
}>;

export function makeCreateRegistrationQuery({ registrationRepository }: Pick<Dependencies, 'registrationRepository'>) {
  return async function listPagesQuery(query: CreateRegistrationQuery) {
    await validate(query);

    const { full_name, phone_number, email, is_learn, type_class } = query;

    const registration = await registrationRepository.create({ full_name, phone_number, email, is_learn, type_class });

    return registration;
  };
}
