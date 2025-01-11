import { makeGetWebsiteQuery } from "./queries/get-website";
import { makeGetRegistrationQuery } from "./queries/get-registration";

export function makeCoreSystemConfigsUseCases(dependencies: Dependencies) {
  return {
    queries: {
      getWebsite: makeGetWebsiteQuery(dependencies),
      getRegistration: makeGetRegistrationQuery(dependencies),
    },
  };
}
