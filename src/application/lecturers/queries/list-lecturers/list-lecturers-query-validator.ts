import { ValidationException } from '@application/common/exceptions';
import { ZodError, z } from 'zod';

import { ListLecturersQuery } from './list-lecturers-query';

export async function validate(query: ListLecturersQuery) {
  try {
    const schema: z.ZodType<ListLecturersQuery> = z.object({
      language: z.string(),
      size: z.number().optional(),
      page: z.number().optional(),
    });

    await schema.parseAsync(query);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
