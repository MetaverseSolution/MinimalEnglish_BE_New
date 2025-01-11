import { FastifyRequest } from 'fastify';

import { GetByIdQuery } from '@application/documents/queries/get-by-id';
import { GetByDocumentTypeQuery } from '@application/documents/queries/get-by-document-type';
import { makeDocumentsUseCases } from '@application/documents';
import ResponseBase from '@application/common/response-base';

export default async function documentRoutes(fastify: FastifyRouteInstance) {
  const documents = makeDocumentsUseCases(fastify.diContainer.cradle);

  fastify.route({
    method: 'POST',
    url: '/api/document/get-by-document-type',
    schema: {
      body: {
        type: 'object',
        properties: {
          language: { type: 'string', description: 'Language code (e.g., vi, en, etc.)' },
          document_type_id: { type: 'string', description: 'ID of pages database' },
          size: { type: 'number', description: 'Size number of records (e.g., 10.)' },
          page: { type: 'number', description: 'Page number of database (e.g., 1.)' }
        },
        required: ['language', 'document_type_id', 'size', 'page'],
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
                  document_type_id: { type: 'integer' },
                  title: { type: 'string' },
                  description: { type: 'string' },
                  content: { type: 'string' },
                  image: { type: 'string' },
                  link_file: { type: 'string' },
                  downloaded: { type: 'integer' },
                  order: { type: 'integer' },
                  status: { type: 'integer' },
                  created_at: { type: 'string', format: 'date-time' },
                  updated_at: { type: 'string', format: 'date-time' },
                  created_by: { type: 'string' },
                  updated_by: { type: 'string' },
                },
              },
            },
            message: { type: 'string', example: 'Components fetched successfully' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['documents'],
    },
    async handler(
      req: FastifyRequest<{ Body: GetByDocumentTypeQuery }>,
      res
    ) {
      try {
        const { data, total, per_page, current_page, last_page } = await documents.queries.getByDocumentType({
          language: req.body.language,
          document_type_id: req.body.document_type_id,
          size: req.body.size,
          page: req.body.page,
        });

        const response = ResponseBase.formatPaginationResponse(
          200,
          data,
          total ?? 0,
          per_page ?? 0,
          current_page ?? 0,
          last_page ?? 0,
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

  fastify.route({
    method: 'POST',
    url: '/api/document/get-by-id',
    schema: {
      body: {
        type: 'object',
        properties: {
          language: { type: 'string', description: 'Language code (e.g., vi, en, etc.)' },
          id: { type: 'string', description: 'ID of records' }
        },
        required: ['language', 'id'],
      },
      response: {
        200: {
          type: 'object',
          properties: {
            status_code: { type: 'integer', example: 200 },
            data: {
              type: 'object',
              properties: {
                id: { type: 'integer' },
                document_type_id: { type: 'integer' },
                title: { type: 'string' },
                description: { type: 'string' },
                content: { type: 'string' },
                image: { type: 'string' },
                link_file: { type: 'string' },
                downloaded: { type: 'integer' },
                order: { type: 'integer' },
                status: { type: 'integer' },
                created_at: { type: 'string', format: 'date-time' },
                updated_at: { type: 'string', format: 'date-time' },
                created_by: { type: 'string' },
                updated_by: { type: 'string' },
              },
            },
            message: { type: 'string', example: 'Components fetched successfully' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['documents'],
    },
    async handler(
      req: FastifyRequest<{ Body: GetByIdQuery }>,
      res
    ) {
      try {
        const data = await documents.queries.getById({
          language: req.body.language,
          id: req.body.id,
        });

        const response = ResponseBase.formatBaseResponse(
          200,
          data,
          'Document fetched successfully',
        );

        res.status(200).send(response);
      } catch (error) {
        fastify.log.error(error);

        const errorResponse = ResponseBase.formatBaseResponse(
          400,
          null,
          'Failed to fetch document',
        );

        res.status(400).send(errorResponse);
      }
    },
  });
}
