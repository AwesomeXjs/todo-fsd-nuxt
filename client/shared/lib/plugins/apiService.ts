import { ApiService } from "@/shared/api";

export default defineNuxtPlugin((nuxtApp) => {
  const db = useFirestore();

  const apiService = new ApiService(db);

  return {
    provide: { apiService },
  };
});
