import { CoreSystemConfigsRepository } from '@application/common/interfaces';

export function makeCoreSystemConfigRepository({ db }: Dependencies): CoreSystemConfigsRepository {
  return {
    async website() {
      const coreSystemConfig = await db.core_system_config.findMany({
        where: {
          group: 'Website',
          type: 'Footer',
          status: 1,
        },
        orderBy: {
          order: 'asc',
        },
      });

      return coreSystemConfig.map((config) => ({
        ...config,
        status: config.status === 1,
        id: Number(config.id),
      }));
    },


    async registration() {
      const coreSystemConfig = await db.core_system_config.findMany({
        where: {
          group: 'Registration',
          status: 1,
        },
        orderBy: {
          order: 'asc',
        },
      });

      return coreSystemConfig.map((config) => ({
        ...config,
        status: config.status === 1,
        id: Number(config.id),
      }));
    },
  };
}
