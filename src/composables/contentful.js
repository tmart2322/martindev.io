import { inject, ref } from "vue";

export function useContentful() {
  const blogs = ref(null);
  const consultingProjects = ref(null);
  const isLoaded = ref(null);

  const contentfulClientApi = inject("contentfulClientApi");

  const getContent = async () => {
    try {
      const entries = await contentfulClientApi.getEntries();
      blogs.value = entries.items.filter(
        (item) => item.sys.contentType.sys.id === "blogPost"
      );
      consultingProjects.value = entries.items.filter(
        (item) => item.sys.contentType.sys.id === "project"
      );
    } catch (e) {
      console.error(e);
    } finally {
      isLoaded.value = true;
    }
  };

  getContent();

  return { blogs, consultingProjects, isLoaded };
}
