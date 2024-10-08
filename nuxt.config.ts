import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  alias: {
    "@": resolve(`${__dirname}/client`, ""),
  },

  dir: {
    layouts: "client/widgets/layouts",
    plugins: "client/shared/lib/plugins",
    middleware: "client/shared/lib/middleware",
    app: "client/app",
    pages: "client/app",
  },

  imports: {
    dirs: [
      // Scan top-level modules
      "client/shared/lib/composables",
      // ... or scan modules nested one level deep with a specific name and file extension
      "client/shared/lib/composables/*/index.{ts,js,mjs,mts}",
      // ... or scan all modules within given directory
      "client/shared/lib/composables/**",
    ],

    imports: [
      {
        from: "tailwind-variants",
        name: "tv",
      },
      {
        from: "tailwind-variants",
        name: "VariantProps",
        type: true,
      },
      {
        from: "vue-sonner",
        name: "toast",
        as: "useSonner",
      },
    ],
  },

  components: [{ path: "~/client/shared/ui/components", extensions: ["vue"] }],
  css: ["~/client/app/config/tailwind/tailwind.css", "@/app/config/scss/_style.scss"],

  fonts: {
    families: [
      { name: "montserrat", provider: "google" },
      {
        name: "Other Font",
        src: "url(https://example.com/font.woff2)",
        weight: "bold",
      },
    ],
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/app/config/scss/_variables.scss";',
        },
      },
    },
  },

  modules: [
    "@pinia/nuxt",
    "@nuxt/fonts",
    "@nuxtjs/i18n",
    "nuxt-vuefire",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "nuxt-icon",
    "@vee-validate/nuxt",
    "@morev/vue-transitions/nuxt",
    "nuxt-echarts",
  ],

  i18n: {
    vueI18n: "@/shared/lib/i18n/i18n.config.ts",
  },

  vuefire: {
    auth: {
      enabled: true,
      sessionCookie: false,
    },
    config: {
      apiKey: process.env.apiKey,
      authDomain: process.env.authDomain,
      projectId: process.env.projectId,
      storageBucket: process.env.storageBucket,
      messagingSenderId: process.env.messagingSenderId,
      appId: process.env.appId,
    },
  },
  echarts: {
    charts: ["BarChart", "PieChart", "LineChart", "CandlestickChart"],
    components: [
      "TitleComponent",
      "TooltipComponent",
      "GridComponent",
      "LegendComponent",
      "DataZoomComponent",
      "MarkLineComponent",
      "MarkPointComponent",
    ],
    ssr: true,
    renderer: "svg",
  },
});
