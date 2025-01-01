import { ValidationException } from '@application/common/exceptions';
import { ZodError, z } from 'zod';

import { GetClassByIdQuery } from './get-class-by-id-query';

export async function validate(query: GetClassByIdQuery) {
  try {
    const schema: z.ZodType<GetClassByIdQuery> = z.object({
      language: z.string(),
      id: z.string()
    });

    await schema.parseAsync(query);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
