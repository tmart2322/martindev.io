<template>
  <div v-if="blog" class="mx-8 mt-4">
    <h1 class="text-center mb-5 text-primary-400">
      {{ blog.fields.blogPostName }}
    </h1>
    <div
      class="line-height-3 custom-css"
      v-html="documentToHtmlString(blog.fields.body)"
    ></div>
  </div>
</template>

<script setup>
import { defineProps, inject, onMounted, ref } from "vue";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

const contentfulClientApi = inject("contentfulClientApi");

let blog = ref(null);

const props = defineProps({
  blogId: String,
});

async function getBlog(blogId) {
  return await contentfulClientApi.getEntry(blogId);
}

onMounted(async () => {
  blog.value = await getBlog(props.blogId);
  console.log(blog.value);
});
</script>

<style scoped></style>
