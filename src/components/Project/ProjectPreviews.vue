<template>
  <div class="grid m-1">
    <div class="col" v-for="project in projects" :key="project.sys.id">
      <ProjectPreview :project="project" />
    </div>
  </div>
</template>

<script setup>
import ProjectPreview from "@/components/Project/ProjectPreview";
import { useContentful } from "@/composables/contentful";

const { projects } = useContentful();
</script>

<style scoped></style>
