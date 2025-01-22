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
                  video_url: { type: 'string', nullable: true },
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
            total: { type: 'integer', },
            per_page: { type: 'integer', },
            current_page: { type: 'integer', },
            last_page: { type: 'integer', },
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

        const { data, total, per_page, current_page, last_page } = await activityClass.queries.listActivityClasses({
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
          'Activity classes fetched successfully',
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
          'Failed to fetch activty classes',
        );

        res.status(400).send(errorResponse);
      }
    },
  });
}
