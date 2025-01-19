import { FastifyRequest } from 'fastify';

import { makeCustomerReviewUseCases } from '@application/customer-review';
import ResponseBase from '@application/common/response-base';

export default async function customerReviewRoutes(fastify: FastifyRouteInstance) {
  const customerReview = makeCustomerReviewUseCases(fastify.diContainer.cradle);

  fastify.route({
    method: 'GET',
    url: '/api/customer-review/all',
    schema: {
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
                  id: { type: 'integer', nullable: true },
                  review: { type: 'string', nullable: true },
                  rating: { type: 'integer', nullable: true },
                  media_url: { type: 'string' },
                  order: { type: 'integer', nullable: true },
                  status: { type: 'integer' },
                  created_at: { type: 'string', format: 'date-time', nullable: true },
                  updated_at: { type: 'string', format: 'date-time', nullable: true },
                  created_by: { type: 'string', nullable: true },
                  updated_by: { type: 'string', nullable: true },
                },
              },
            },
            message: { type: 'string', example: 'Customer review fetched successfully' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['customer-reviews'],
    },
    async handler(
      req: FastifyRequest,
      res
    ) {
      try {
        const customerReviewList = await customerReview.queries.listCustomerReviews();

        const response = ResponseBase.formatBaseResponse(
          200,
          customerReviewList,
          'Customer review fetched successfully',
        );

        res.status(200).send(response);
      } catch (error) {
        fastify.log.error(error);

        const errorResponse = ResponseBase.formatBaseResponse(
          400,
          null,
          'Failed to fetch customer review',
        );

        res.status(400).send(errorResponse);
      }
    },
  });
}
