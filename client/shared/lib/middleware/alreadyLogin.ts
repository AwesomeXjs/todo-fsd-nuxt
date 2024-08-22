export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = getCurrentUser();

  // redirect the user to the login page
  //   if (user) {
  //     console.log("NO USER");
  //     return await navigateTo("/dashboard");
  //   }
  // });
});
