<template>
  <div class="grid">
    <div
      class="sm:col-12 lg:col-6 xl:col-4"
      v-for="project in projects"
      :key="project.sys.id"
    >
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
