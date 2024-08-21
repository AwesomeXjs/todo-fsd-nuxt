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
];
