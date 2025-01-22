import { ValidationException } from '@application/common/exceptions';
import { ZodError, z } from 'zod';

import { ListActivitClassQuery } from './list-activity-class-query';

export async function validate(query: ListActivitClassQuery) {
  try {
    const schema: z.ZodType<ListActivitClassQuery> = z.object({
      language: z.string(),
      size: z.number().optional(),
      page: z.number().optional()
    });

    await schema.parseAsync(query);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
