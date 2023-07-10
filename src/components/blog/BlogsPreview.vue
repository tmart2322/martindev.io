<template>
  <div v-if="blogs">
    <div v-for="(blog, index) in blogs" :key="blog.sys.id" class="text-left">
      <p class="text-lg">
        <router-link :to="`blog/${blog.sys.id}`">{{
          blog.fields.blogPostName
        }}</router-link>
      </p>
      <p class="text-sm font-italic">
        Published: {{ convertDateToMonthYear(blog.sys.createdAt) }}
      </p>
      <p class="text-sm font-italic">
        Last Updated: {{ convertDateToMonthYear(blog.sys.updatedAt) }}
      </p>
      <hr v-if="index !== blogs.length - 1" />
    </div>
  </div>
</template>

<script setup>
import { useContentful } from "@/composables/contentful";
import { useSharedFunctions } from "@/composables/sharedFunctions";

const { blogs } = useContentful();
const { convertDateToMonthYear } = useSharedFunctions();
</script>

<style scoped></style>
