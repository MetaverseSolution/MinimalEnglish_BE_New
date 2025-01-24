import { makeCreateRegistrationQuery } from "./create-registration-query";

export function makeRegistrationsUseCases(dependencies: Dependencies) {
  return {
    queries: {
      create: makeCreateRegistrationQuery(dependencies),
    },
  };
}
