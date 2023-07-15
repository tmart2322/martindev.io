import { inject, ref } from "vue";

const blogs = ref(null);
const consultingProjects = ref(null);
const isLoaded = ref(false);
const calloutInitiated = ref(false);

export function useContentful() {
  const getContent = async () => {
    try {
      const contentfulClientApi = inject("contentfulClientApi");
      const entries = await contentfulClientApi.getEntries();

      blogs.value = entries.items.filter(
        (item) => item.sys.contentType.sys.id === "blogPost"
      );
      consultingProjects.value = entries.items
        .filter((item) => item.sys.contentType.sys.id === "consultingProject")
        .sort((a, b) => {
          if (a.fields.startDate < b.fields.startDate) {
            return 1;
          } else if (a.fields.startDate > b.fields.startDate) {
            return -1;
          }

          return 0;
        });
    } catch (e) {
      console.error(e);
    } finally {
      isLoaded.value = true;
    }
  };

  if (!calloutInitiated.value) {
    calloutInitiated.value = true;
    getContent();
  }

  return { blogs, consultingProjects, isLoaded };
}
