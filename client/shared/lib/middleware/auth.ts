export default defineNuxtRouteMiddleware(async (to, from) => {
  const user = await useCurrentUser();
  console.log(user);

  // redirect the user to the login page
  if (!user.value) {
    console.log("У ВАС НЕТ ПРАВ");
    return await navigateTo({
      path: "/",
    });
  }
});
