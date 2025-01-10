import { FastifyRequest } from 'fastify';

import { makeLectureTypesUseCases } from '@application/lecture-types';
import { ListLectureTypesQuery } from '@application/lecture-types/queries/list-lecture-types';
import ResponseBase from '@application/common/response-base';

export default async function lectureTypeRoutes(fastify: FastifyRouteInstance) {
  const lectureTypes = makeLectureTypesUseCases(fastify.diContainer.cradle);

  fastify.route({
    method: 'POST',
    url: '/api/lecture-type/all',
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
            message: { type: 'string', example: 'Lecture types fetched successfully' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['lecture-types'],
    },
    async handler(
      req: FastifyRequest<{ Body: ListLectureTypesQuery }>,
      res
    ) {
      try {
        const lectureTypesList = await lectureTypes.queries.listLectureTypes({
          language: req.body.language,
        });

        const response = ResponseBase.formatBaseResponse(
          200,
          lectureTypesList,
          'Lecture types fetched successfully',
        );

        res.status(200).send(response);
      } catch (error) {
        fastify.log.error(error);

        const errorResponse = ResponseBase.formatBaseResponse(
          400,
          null,
          'Failed to fetch lecture types ',
        );

        res.status(400).send(errorResponse);
      }
    },
  });
}
