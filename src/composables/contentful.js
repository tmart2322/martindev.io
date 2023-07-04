import { inject, ref } from "vue";

export function useContentful() {
  const projects = ref(null);
  const isLoaded = ref(null);

  const contentfulClientApi = inject("contentfulClientApi");

  const getContent = async () => {
    try {
      const entries = await contentfulClientApi.getEntries();
      projects.value = entries.items.filter(
        (item) => item.sys.contentType.sys.id === "project"
      );
    } catch (e) {
      console.error(e);
    } finally {
      isLoaded.value = true;
    }
  };

  getContent();

  return { projects, isLoaded };
}
