import { i18nHomepage } from "./homepage";

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      ...i18nHomepage.en,
    },
    ru: {
      ...i18nHomepage.ru,
    },
  },
}));
