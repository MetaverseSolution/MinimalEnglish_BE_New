import { makeComponentGetBySection } from "./queries/get-by-section";

export function makeComponentsUseCases(dependencies: Dependencies) {
  return {
    queries: {
      listComponentsBySection: makeComponentGetBySection(dependencies),
    },
  };
}
