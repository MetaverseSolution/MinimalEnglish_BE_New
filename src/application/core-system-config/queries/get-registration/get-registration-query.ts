import { map } from "./get-registration-query-mapper";

export function makeGetRegistrationQuery({ coreSystemConfigsRepository }: Pick<Dependencies, 'coreSystemConfigsRepository'>) {
  return async function getRegistrationQuery() {

    const coreRegistrationSystemConfig = await coreSystemConfigsRepository.registration();

    return coreRegistrationSystemConfig.map((item) => map(item));
  };
}
