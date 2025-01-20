import { FastifyRequest } from 'fastify';

import { makeActivityClassUseCases } from '@application/activity-class';
import { ListActivitClassQuery } from '@application/activity-class/queries/list-activity-class';
import ResponseBase from '@application/common/response-base';

export default async function activityClassRoutes(fastify: FastifyRouteInstance) {
  const activityClass = makeActivityClassUseCases(fastify.diContainer.cradle);

  fastify.route({
    method: 'POST',
    url: '/api/activity-class/all',
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
                  id: { type: 'integer', nullable: true },
                  class: {
                    type: 'object',
                    properties: {
                      id: { type: 'string' },
                      name: { type: 'string', nullable: true },
                      description: { type: 'string', nullable: true },
                      image: { type: 'string', nullable: true },
                    },
                    nullable: false,
                  },
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
      req: FastifyRequest<{ Body: ListActivitClassQuery }>,
      res
    ) {
      try {
        const activtyClassList = await activityClass.queries.listActivityClasses({ language: req.body.language });

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
