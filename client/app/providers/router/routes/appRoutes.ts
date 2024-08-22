export const appRoutes = [
  {
    name: "index",
    path: "/",
    component: () => import("@/pages/home"),
  },
  {
    name: "dashboard",
    path: "/dashboard",
    component: () => import("@/pages/dashboard"),
  },
  {
    name: "private",
    path: "/private",
    component: () => import("@/pages/private-page"),
    meta: {
      middleware: ["auth"],
    },
  },
];
