<template>
  <Carousel
    :value="consultingProjects"
    :numVisible="3"
    :numScroll="3"
    :responsiveOptions="responsiveOptions"
    :showIndicators="false"
  >
    <template #item="project">
      <div class="h-full flex">
        <ProjectPreview :project="project.data" />
      </div>
    </template>
  </Carousel>
</template>

<script setup>
import ProjectPreview from "@/components/Project/ProjectPreview";
import { useContentful } from "@/composables/contentful";
import { ref } from "vue";

const { consultingProjects } = useContentful();

const responsiveOptions = ref([]);
</script>

<style scoped></style>
