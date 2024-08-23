import ApiService from "../../api/apiService";

export default defineNuxtPlugin((nuxtApp) => {
  const db = useFirestore();

  const apiService = new ApiService(db);

  return {
    provide: { apiService },
  };
});
