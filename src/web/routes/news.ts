import { FastifyRequest } from 'fastify';

import { makeNewsUseCases } from '@application/news';
import ResponseBase from '@application/common/response-base';
import { GetRelatedQuery } from '@application/news/queries/get-related';
import { GetByCategoryQuery } from '@application/news/queries/get-by-category';
import { GetBySlugQuery } from '@application/news/queries/get-by-slug';

export default async function newsRoutes(fastify: FastifyRouteInstance) {
  const news = makeNewsUseCases(fastify.diContainer.cradle);

  fastify.route({
    method: 'POST',
    url: '/api/news/get-related',
    schema: {
      body: {
        type: 'object',
        properties: {
          language: { type: 'string', description: 'Language code (e.g., vi, en, etc.)' },
          id: { type: 'number', description: 'Id of records (e.g., 10.)' },
          news_category_id: { type: 'number', description: 'News category id of records (e.g., 10.)' },
          size: { type: 'number', description: 'Size number of records (e.g., 10.)' },
          page: { type: 'number', description: 'Page number of database (e.g., 1.)' }
        },
        required: ['language', 'news_category_id', 'id', 'size', 'page'],
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
      req: FastifyRequest<{ Body: GetRelatedQuery }>,
      res
    ) {
      try {
        const { data, total, per_page, current_page, last_page } = await news.queries.getRelated({
          language: req.body.language,
          news_category_id: req.body.news_category_id,
          id: req.body.id,
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
          'News related fetched successfully',
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
          'Failed to fetch news related',
        );

        res.status(400).send(errorResponse);
      }
    },
  });

  fastify.route({
    method: 'POST',
    url: '/api/news/get-by-category',
    schema: {
      body: {
        type: 'object',
        properties: {
          language: { type: 'string', description: 'Language code (e.g., vi, en, etc.)' },
          news_category_id: { type: 'number', description: 'News category id of records (e.g., 10.)' },
          size: { type: 'number', description: 'Size number of records (e.g., 10.)' },
          page: { type: 'number', description: 'Page number of database (e.g., 1.)' }
        },
        required: ['language', 'news_category_id', 'size', 'page'],
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
      req: FastifyRequest<{ Body: GetByCategoryQuery }>,
      res
    ) {
      try {
        const { data, total, per_page, current_page, last_page } = await news.queries.getByCategory({
          language: req.body.language,
          news_category_id: req.body.news_category_id,
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
          'News by category fetched successfully',
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
          'Failed to fetch news by category',
        );

        res.status(400).send(errorResponse);
      }
    },
  });

  fastify.route({
    method: 'POST',
    url: '/api/class/get-by-slug',
    schema: {
      body: {
        type: 'object',
        properties: {
          language: { type: 'string', description: 'Language code (e.g., vi, en, etc.)' },
          slug: { type: 'string', description: 'Slug of news (e.g., abc-xyz)' },
        },
        required: ['language', 'slug'],
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
            message: { type: 'string', example: 'Class fetched successfully' },
          },
        },
        400: { $ref: 'ExceptionResponse#' },
      },
      tags: ['classes'],
    },
    async handler(
      req: FastifyRequest<{ Body: GetBySlugQuery }>,
      res
    ) {
      try {
        const data = await news.queries.getBySlug({
          language: req.body.language,
          slug: req.body.slug
        });

        const response = ResponseBase.formatBaseResponse(
          200,
          data,
          'News get by slug successfully',
        );

        res.status(200).send(response);
      } catch (error) {
        fastify.log.error(error);

        const errorResponse = ResponseBase.formatBaseResponse(
          400,
          null,
          'Failed to fetch news get by slug',
        );

        res.status(400).send(errorResponse);
      }
    },
  });
}
