import { FastifyRequest } from 'fastify';

import { makeLecturesUseCases } from '@application/lectures';
import { GetByLectureTypeQuery } from '@application/lectures/queries/get-by-lecture-type';
import { GetByIdQuery } from '@application/documents/queries/get-by-id';

import ResponseBase from '@application/common/response-base';

export default async function lectureRoutes(fastify: FastifyRouteInstance) {
  const lectures = makeLecturesUseCases(fastify.diContainer.cradle);

  fastify.route({
    method: 'POST',
    url: '/api/lecture/get-by-lecture-type',
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
                  lecture_type_id: { type: 'integer' },
                  associcate_link: { type: 'string' },
                  link_file: { type: 'string' },
                  viewer: { type: 'integer' },
                  title: { type: 'string' },
                  description: { type: 'string' },
                  content: { type: 'string' },
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
      tags: ['lectures'],
    },
    async handler(
      req: FastifyRequest<{ Body: GetByLectureTypeQuery }>,
      res
    ) {
      try {
        const { data, total, per_page, current_page, last_page } = await lectures.queries.getByLectureType({
          language: req.body.language,
          lecture_type_id: req.body.lecture_type_id,
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
          'Lectures fetched successfully',
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
          'Failed to fetch lectures',
        );

        res.status(400).send(errorResponse);
      }
    },
  });

  fastify.route({
    method: 'POST',
    url: '/api/lecture/get-by-id',
    schema: {
      body: {
        type: 'object',
        properties: {
          language: { type: 'string', description: 'Language code (e.g., vi, en, etc.)' },
          id: { type: 'number', description: 'Id of lecture (e.g., 1.)' }
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
                lecture_type_id: { type: 'integer' },
                associcate_link: { type: 'string' },
                link_file: { type: 'string' },
                viewer: { type: 'integer' },
                title: { type: 'string' },
                description: { type: 'string' },
                content: { type: 'string' },
                image: { type: 'string' },
                order: { type: 'integer' },
                status: { type: 'integer' },
                created_at: { type: 'string', format: 'date-time' },
                updated_at: { type: 'string', format: 'date-time' },
                created_by: { type: 'string' },
                updated_by: { type: 'string' },
              },
            },
            message: { type: 'string', example: 'Class fetched successfully' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['lectures'],
    },
    async handler(
      req: FastifyRequest<{ Body: GetByIdQuery }>,
      res
    ) {
      try {
        const data = await lectures.queries.getById({
          language: req.body.language,
          id: req.body.id,
        });

        const response = ResponseBase.formatBaseResponse(
          200,
          data,
          'Lecture fetched successfully',
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
          'Failed to fetch lecture',
        );

        res.status(400).send(errorResponse);
      }
    },
  });
}
