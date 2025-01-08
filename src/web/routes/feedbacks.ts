import { FastifyRequest } from 'fastify';

import { makeFeedbacksUseCases } from '@application/feedbacks';
import ResponseBase from '@application/common/response-base';
interface ListFeedbacksByPageQuery {
  language: string
  size?: number
  page?: number
}

export default async function feedbackRoutes(fastify: FastifyRouteInstance) {
  const feedbacks = makeFeedbacksUseCases(fastify.diContainer.cradle);

  fastify.route({
    method: 'POST',
    url: '/api/feedback/all',
    schema: {
      body: {
        type: 'object',
        properties: {
          language: { type: 'string', description: 'Language code (e.g., vi, en, etc.)' },
          size: { type: 'number', description: 'Size number of records (e.g., 10.)' },
          page: { type: 'number', description: 'Page number of database (e.g., 1.)' }
        },
        required: ['language', 'size', 'page'],
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
                  title: { type: 'string' },
                  content: { type: 'string' },
                  description: { type: 'string' },
                  image: { type: 'string' },
                  order: { type: 'integer' },
                  status: { type: 'integer' },
                  created_at: { type: 'string', format: 'date-time' },
                  updated_at: { type: 'string', format: 'date-time' },
                  created_by: { type: 'string' },
                  updated_by: { type: 'string' },
                },
              },
            },
            total: { type: 'integer', },
            per_page: { type: 'integer', },
            current_page: { type: 'integer', },
            last_page: { type: 'integer', },
            message: { type: 'string', example: 'Classes fetched successfully' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['classes'],
    },
    async handler(
      req: FastifyRequest<{ Body: ListFeedbacksByPageQuery }>,
      res
    ) {
      try {
        const { data, total, per_page, current_page, last_page } = await feedbacks.queries.listFeedbacks({
          language: req.body.language,
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
          'Feedbacks fetched successfully',
        );

        res.status(200).send(response);
      } catch (error) {
        fastify.log.error(error);

        const errorResponse = ResponseBase.formatPaginationResponse(
          400,
          null,
          0,
          0,
          0,
          0,
          'Failed to fetch feedbacks',
        );

        res.status(400).send(errorResponse);
      }
    },
  });
}
