export default defineNuxtRouteMiddleware((to, from) => {
  console.log("hello from MIDDLEWARE auth");
});
