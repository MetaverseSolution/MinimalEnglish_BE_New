import { RegistrationsRepository } from '@application/common/interfaces';

export function makeRegistrationsRepository({ db }: Dependencies): RegistrationsRepository {
  return {
    async create(params: {
      full_name: string,
      phone_number: string,
      email: string,
      is_learn: number,
      type_class: number,
    }) {
      const newRegistration = await db.registration.create({
        data: {
          full_name: params.full_name,
          phone_number: params.phone_number,
          email: params.email,
          is_learn: params.is_learn,
          type_class: params.type_class,
        },
      });

      return {
        ...newRegistration,
        id: Number(newRegistration.id),
      };
    }
  };
}
