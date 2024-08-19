export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", () => {
    console.log("hello from PLUGIN, this is HOOK app:created");
  });

  nuxtApp.vueApp.directive("focus", {
    mounted(el) {
      el.focus();
    },
    getSSRProps(binding, vnode) {
      // you can provide SSR-specific props here
      return {};
    },
  });

  return {
    provide: {
      sayHello: () => console.log("This is from PLUGIN, provide => sayHello!"),
    },
  };
});
