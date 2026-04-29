import { withSuspense } from "./suspenseUtils";
import { Login, Browse } from "./lazyPages";

export const routesConfig = [
  {
    path: "/",
    element: withSuspense(Login),
  },
  {
    path: "/browse",
    element: withSuspense(Browse),
  }
];
