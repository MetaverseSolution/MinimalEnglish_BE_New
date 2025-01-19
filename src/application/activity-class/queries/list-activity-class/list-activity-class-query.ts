import { map } from "./list-activity-class-query-mapper";

export function makeListActivityClassQuery({ activityClassRepository }: Pick<Dependencies, 'activityClassRepository'>) {
  return async function listActivityClassQuery() {

    const activityClasses = await activityClassRepository.list();

    return activityClasses.map((activityClass) => map(activityClass));
  };
}
