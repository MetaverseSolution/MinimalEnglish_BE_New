import { map } from "./get-website-query-mapper";

export function makeGetWebsiteQuery({ coreSystemConfigsRepository }: Pick<Dependencies, 'coreSystemConfigsRepository'>) {
  return async function getWebsiteQuery() {

    const coreWebsiteSystemConfig = await coreSystemConfigsRepository.website();

    return coreWebsiteSystemConfig.map((item) => map(item));
  };
}
