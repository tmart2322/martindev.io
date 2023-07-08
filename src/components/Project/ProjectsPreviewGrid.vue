<template>
  <div class="grid mx-2 mt-2">
    <div
      class="sm:col-12 lg:col-6 xl:col-4 mb-3"
      v-for="project in consultingProjects"
      :key="project.sys.id"
    >
      <ProjectPreview :project="project" />
    </div>
  </div>
</template>

<script setup>
import ProjectPreview from "@/components/Project/ProjectPreview";
import { useContentful } from "@/composables/contentful";

const { consultingProjects } = useContentful();
</script>

<style scoped></style>
