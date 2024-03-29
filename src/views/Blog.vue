<template>
  <div v-if="blog" class="mt-4 mx-1 sm:mx-2 md:mx-4">
    <div class="blog-wrapper mx-auto">
      <h1 class="text-center mb-5 text-primary-400">
        {{ blog.fields.blogPostName }}
      </h1>
      <div
        class="line-height-3 text-sm sm:text-base"
        v-html="documentToHtmlString(blog.fields.body, options)"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, inject, onMounted, onUnmounted, ref, watch } from "vue";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { useRoute } from "vue-router";
import { useGlobalCssVariables } from "@/composables/userEvents";
import { BLOCKS } from "@contentful/rich-text-types";

const contentfulClientApi = inject("contentfulClientApi");
const route = useRoute();
const { globalCssVariables } = useGlobalCssVariables();

let blog = ref(null);

const props = defineProps({
  blogId: String,
});

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const url = `https:${node.data.target.fields.file.url}`;
      const alt = node.data.target.fields.title;
      return `<div class="contentful-image" ><img alt="${alt}" src="${url}" style="max-width: 100%" /></div>`;
    },
  },
};

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
