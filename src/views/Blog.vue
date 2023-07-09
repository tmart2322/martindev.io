<template>
  <div v-if="blog" class="mx-8 mt-4">
    <h1 class="text-center mb-5 text-primary-400">
      {{ blog.fields.blogPostName }}
    </h1>
    <div
      class="line-height-3"
      v-html="documentToHtmlString(blog.fields.body)"
    ></div>
  </div>
</template>

<script setup>
import { defineProps, inject, onMounted, ref, watch } from "vue";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { useRoute } from "vue-router";

const contentfulClientApi = inject("contentfulClientApi");
const route = useRoute();

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

watch(
  () => route.params.blogId,
  async (newBlogId) => {
    await loadBlog(newBlogId);
  }
);

onMounted(async () => {
  await loadBlog(props.blogId);
});
</script>

<style scoped></style>
