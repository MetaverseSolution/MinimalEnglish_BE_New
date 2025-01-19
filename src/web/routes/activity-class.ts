import { FastifyRequest } from 'fastify';

import { makeActivityClassUseCases } from '@application/activity-class';
import ResponseBase from '@application/common/response-base';

export default async function activityClassRoutes(fastify: FastifyRouteInstance) {
  const activityClass = makeActivityClassUseCases(fastify.diContainer.cradle);

  fastify.route({
    method: 'GET',
    url: '/api/activity-class/all',
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
                  name: { type: 'string', nullable: true },
                  image_url: { type: 'string', nullable: true },
                  status: { type: 'integer' },
                  order: { type: 'integer', nullable: true },
                  created_at: { type: 'string', format: 'date-time', nullable: true },
                  updated_at: { type: 'string', format: 'date-time', nullable: true },
                  created_by: { type: 'string', nullable: true },
                  updated_by: { type: 'string', nullable: true },
                },
              },
            },
            message: { type: 'string', example: 'Activity class fetched successfully' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['activity-classes'],
    },
    async handler(
      req: FastifyRequest,
      res
    ) {
      try {
        const activtyClassList = await activityClass.queries.listActivityClasses();

        const response = ResponseBase.formatBaseResponse(
          200,
          activtyClassList,
          'Activity class fetched successfully',
        );

        res.status(200).send(response);
      } catch (error) {
        fastify.log.error(error);

        const errorResponse = ResponseBase.formatBaseResponse(
          400,
          null,
          'Failed to fetch activity class',
        );

        res.status(400).send(errorResponse);
      }
    },
  });
}
