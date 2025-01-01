import { ValidationException } from '@application/common/exceptions';
import { ZodError, z } from 'zod';

import { ListDocumentTypesQuery } from './list-document-types-query';

export async function validate(query: ListDocumentTypesQuery) {
  try {
    const schema: z.ZodType<ListDocumentTypesQuery> = z.object({
      language: z.string()
    });

    await schema.parseAsync(query);
  } catch (error) {
    throw new ValidationException(error as ZodError);
  }
}
