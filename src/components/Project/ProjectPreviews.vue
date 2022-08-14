<template>
  <div class="grid m-1">
    <div class="col" v-for="project in projects" :key="project.sys.id">
      <ProjectPreview :project="project" />
    </div>
  </div>
</template>

<script setup>
import { inject, onMounted, ref } from "vue";
import ProjectPreview from "@/components/Project/ProjectPreview";

const contentfulClientApi = inject("contentfulClientApi");

let projects = ref([]);

async function getProjects() {
  const entries = await contentfulClientApi.getEntries();

  return entries.items.filter(
    (item) => item.sys.contentType.sys.id === "project"
  );
}

onMounted(async () => {
  const queryProjects = await getProjects();
  console.log(queryProjects);
  projects.value = queryProjects;
});
</script>

<style scoped></style>
