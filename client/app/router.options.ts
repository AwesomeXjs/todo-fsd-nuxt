import type { RouterConfig } from "@nuxt/schema";
import routes from "./providers/router";

export default <RouterConfig>{
  // https://router.vuejs.org/api/interfaces/routeroptions.html#routes
  routes: () => [...routes],
};
