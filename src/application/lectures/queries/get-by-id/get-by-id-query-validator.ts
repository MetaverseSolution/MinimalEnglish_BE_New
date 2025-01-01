import { ValidationException } from '@application/common/exceptions';
import { ZodError, z } from 'zod';

import { GetByIdQuery } from './get-by-id-query';

export async function validate(query: GetByIdQuery) {
  try {
    const schema: z.ZodType<GetByIdQuery> = z.object({
      language: z.string(),
      id: z.number()
    });

    await schema.parseAsync(query);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
