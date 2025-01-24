import { ValidationException } from '@application/common/exceptions';
import { ZodError, z } from 'zod';

import { CreateRegistrationQuery } from './create-registration-query';

export async function validate(query: CreateRegistrationQuery) {
  try {
    const schema: z.ZodType<CreateRegistrationQuery> = z.object({
      full_name: z.string(),
      phone_number: z.string(),
      email: z.string(),
      is_learn: z.number(),
      type_class: z.number()
    });

    await schema.parseAsync(query);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
