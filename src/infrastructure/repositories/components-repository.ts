import { ComponentsRepository } from '@application/common/interfaces';

export function makeComponentsRepository({ db }: Dependencies): ComponentsRepository {
  return {
    async getBySection(params: { language: string, section_id: string }) {
      const components = await db.component.findMany({
        where: { status: 1, section_id: Number(params.section_id) },
        orderBy: { order: 'asc' },
      });

      return components.map((component) => ({
        ...component,
        id: Number(component.id),
        section_id: Number(component.section_id)
      }));
    }
  }
}
