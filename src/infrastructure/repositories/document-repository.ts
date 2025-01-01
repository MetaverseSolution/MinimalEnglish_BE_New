import { DocumentsRepository } from "@application/common/interfaces";

export function makeDocumentsRepository({ db }: Dependencies): DocumentsRepository {
  return {
    async getByDocumentType(params: { language: string; document_type_id: number; size?: number; page?: number }) {
      const { document_type_id, size = 10, page = 1 } = params;

      const documents = await db.document.findMany({
        where: {
          status: 1,
          document_type_id
        },
        orderBy: {
          order: 'asc',
        },
        skip: (page - 1) * size,
        take: size,
      });

      const total = await db.document.count({
        where: {
          status: 1,
          document_type_id
        },
      });

      return {
        data: documents.map((document) => ({
          ...document,
          id: Number(document.id),
          document_type_id: Number(document.document_type_id)
        })),
        total,
      };
    },

    async getById(params: { language: string; id: number }) {
      const { id } = params;
      const documents = await db.document.findFirst({
        where: {
          id,
          status: 1
        }
      });

      return documents ? {
        ...documents,
        id: Number(documents.id),
        document_type_id: Number(documents.document_type_id)
      } : null;
    }
  }
}
