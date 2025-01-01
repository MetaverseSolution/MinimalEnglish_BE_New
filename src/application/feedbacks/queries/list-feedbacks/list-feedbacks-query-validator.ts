import { ValidationException } from '@application/common/exceptions';
import { ZodError, z } from 'zod';

import { ListFeedbacksQuery } from './list-feedbacks-query';

export async function validate(query: ListFeedbacksQuery) {
  try {
    const schema: z.ZodType<ListFeedbacksQuery> = z.object({
      language: z.string(),
      size: z.number().optional(),
      page: z.number().optional(),
    });

    await schema.parseAsync(query);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
