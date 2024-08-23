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
  {
    name: "web-sockets-practice",
    path: "/web-sockets-practice",
    component: () => import("@/pages/web-sockets-practice"),
    meta: {
      middleware: ["auth"],
    },
  },
];
