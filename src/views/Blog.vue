<template>
  <div v-if="blog" class="mx-4 sm:mx-6 md:mx-8 mt-4">
    <h1 class="text-center mb-5 text-primary-400">
      {{ blog.fields.blogPostName }}
    </h1>
    <div
      class="line-height-3 blog-wrapper mx-auto text-sm sm:text-base"
      v-html="documentToHtmlString(blog.fields.body)"
    ></div>
  </div>
</template>

<script setup>
import { defineProps, inject, onMounted, onUnmounted, ref, watch } from "vue";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { useRoute } from "vue-router";
import { useGlobalCssVariables } from "@/composables/userEvents";

const contentfulClientApi = inject("contentfulClientApi");
const route = useRoute();
const { globalCssVariables } = useGlobalCssVariables();

let blog = ref(null);

const props = defineProps({
  blogId: String,
});

async function getBlog(blogId) {
  return await contentfulClientApi.getEntry(blogId);
}

async function loadBlog(blogId) {
  blog.value = await getBlog(blogId);
}

function setTransparentBackground() {
  globalCssVariables.backgroundOpacity = "0.4";
}

function removeTransparentBackground() {
  globalCssVariables.backgroundOpacity = "1";
}

watch(
  () => route.params.blogId,
  async (newBlogId) => {
    await loadBlog(newBlogId);
  }
);

onMounted(async () => {
  setTransparentBackground();
  await loadBlog(props.blogId);
});

onUnmounted(() => {
  removeTransparentBackground();
});
</script>

<style scoped>
.blog-wrapper {
  max-width: 1000px;
  overflow-wrap: break-word;
}

.blog-wrapper :is(h1, h2, h3, h5, h5, h6) {
  color: var(--primary-400);
}
</style>
