import { FastifyRequest } from 'fastify';

import { makeDocumentTypesUseCases } from '@application/document-types';
import { ListDocumentTypesQuery } from '@application/document-types/queries/list-document-types';
import ResponseBase from '@application/common/response-base';

export default async function documentTypeRoutes(fastify: FastifyRouteInstance) {
  const documentTypes = makeDocumentTypesUseCases(fastify.diContainer.cradle);

  fastify.route({
    method: 'POST',
    url: '/api/document-type/all',
    schema: {
      body: {
        type: 'object',
        properties: {
          language: { type: 'string', description: 'Language code (e.g., vi, en, etc.)' },
        },
        required: ['language'],
      },
      response: {
        200: {
          type: 'object',
          properties: {
            status_code: { type: 'integer', example: 200 },
            data: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  id: { type: 'integer' },
                  name: { type: 'string' },
                  description: { type: 'string' },
                  order: { type: 'integer' },
                  status: { type: 'integer' },
                  created_at: { type: 'string', format: 'date-time' },
                  updated_at: { type: 'string', format: 'date-time' },
                  created_by: { type: 'string' },
                  updated_by: { type: 'string' },
                },
              },
            },
            message: { type: 'string', example: 'Document types fetched successfully' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['document-types'],
    },
    async handler(
      req: FastifyRequest<{ Body: ListDocumentTypesQuery }>,
      res
    ) {
      try {
        const documentTypesList = await documentTypes.queries.listDocumentTypes({
          language: req.body.language,
        });

        const response = ResponseBase.formatBaseResponse(
          200,
          documentTypesList,
          'Document types fetched successfully',
        );

        res.status(200).send(response);
      } catch (error) {
        fastify.log.error(error);

        const errorResponse = ResponseBase.formatBaseResponse(
          400,
          null,
          'Failed to fetch document types',
        );

        res.status(400).send(errorResponse);
      }
    },
  });
}
