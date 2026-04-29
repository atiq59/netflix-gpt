import { Suspense } from "react";
import { LoadingFallback } from "./routeHelpers";

export const withSuspense = (Component) => (
  <Suspense fallback={<LoadingFallback />}>
    <Component />
  </Suspense>
);
