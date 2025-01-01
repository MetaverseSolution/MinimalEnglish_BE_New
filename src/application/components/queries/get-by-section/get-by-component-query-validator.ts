import { ValidationException } from '@application/common/exceptions';
import { ZodError, z } from 'zod';

import { GetBySectionQuery } from './get-by-component-query';

export async function validate(query: GetBySectionQuery) {
  try {
    const schema: z.ZodType<GetBySectionQuery> = z.object({
      language: z.string(),
      section_id: z.string()
    });

    await schema.parseAsync(query);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
