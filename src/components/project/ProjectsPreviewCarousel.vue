<template>
  <Carousel
    :value="consultingProjects"
    :numVisible="props.numVisible"
    :numScroll="props.numScroll"
    :responsiveOptions="props.responsiveOptions"
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
import ProjectPreview from "@/components/project/ProjectPreview";
import { useContentful } from "@/composables/contentful";
import { defineProps } from "vue";

const { consultingProjects } = useContentful();

const props = defineProps({
  responsiveOptions: {
    type: Object,
    default() {
      return [];
    },
  },
  numVisible: {
    type: Number,
    default: 3,
  },
  numScroll: {
    type: Number,
    default: 3,
  },
});

console.log(consultingProjects);
</script>

<style scoped></style>
