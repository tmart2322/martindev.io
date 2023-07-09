<template>
  <div v-if="blogs">
    <div v-for="(blog, index) in blogs" :key="blog.sys.id">
      <p class="text-lg text-left">
        <router-link :to="`blog/${blog.sys.id}`">{{
          blog.fields.blogPostName
        }}</router-link>
      </p>
      <p class="text-sm text-left font-italic">
        Published: {{ convertDateToMonthYear(blog.sys.createdAt) }}
      </p>
      <p class="text-sm text-left font-italic">
        Last Updated: {{ convertDateToMonthYear(blog.sys.updatedAt) }}
      </p>
      <hr v-if="index !== blogs.length - 1" />
    </div>
  </div>
</template>

<script setup>
import { useContentful } from "@/composables/contentful";
import { convertDateToMonthYear } from "@/composables/sharedFunctions";

const { blogs } = useContentful();

console.log(blogs);
</script>

<style scoped></style>
