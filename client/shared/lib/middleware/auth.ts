export default defineNuxtRouteMiddleware((to, from) => {
  const user = getCurrentUser();

  // redirect the user to the login page
  if (!user) {
    console.log("NO USER");
    return navigateTo({
      path: "/login",
      query: {
        redirect: to.fullPath,
      },
    });
  }
});
