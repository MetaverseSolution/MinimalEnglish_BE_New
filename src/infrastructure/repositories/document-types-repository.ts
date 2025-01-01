import { DocumentTypesRepository } from "@application/common/interfaces";

export function makeDocumentTypesRepository({ db }: Dependencies): DocumentTypesRepository {
  return {
    async list() {
      const documentTypes = await db.document_type.findMany({
        where: { status: 1 },
        orderBy: {
          order: 'asc',
        },
      });
      return documentTypes.map(documentType => ({
        ...documentType,
        id: Number(documentType.id),
      }));
    }
  }
}
