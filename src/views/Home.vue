<template>
  <div class="mx-3 sm:mx-2">
    <h3 class="font-italic mb-0">welcome, my name is</h3>
    <h1 class="text-primary font-bold font-italic mt-0">TRISTAN MARTIN</h1>
    <div>
      <p>
        <span class="text-primary-400 font-italic font-bold"
          >Professionally</span
        >, I have extensive experience in the Salesforce ecosystem managing
        large teams to deliver high-quality and robust solutions, designing and
        developing robust integrations, and solving complex business
        requirements with automation.
      </p>
      <p>
        <span class="text-primary-400 font-italic font-bold">Personally</span>,
        I am an avid skydiver (250 skydives and counting!), fervent
        international traveler, and live music aficionado.
      </p>
    </div>
  </div>
  <div class="my-5 grid" v-if="windowWidth > breakpoints.sm">
    <div
      class="col-12 lg:col-8"
      :class="windowWidth < breakpoints.lg ? 'flex-order-1' : 'flex-order-0'"
    >
      <Card
        :class="wrapperCardClasses"
        :pt="{
          title: {
            class: 'text-primary',
          },
        }"
      >
        <template #title>Consulting Projects</template>
        <template #content
          ><ProjectsPreviewCarousel
            :responsiveOptions="responsiveOptions"
            :numVisible="2"
            :numScroll="2"
        /></template>
      </Card>
    </div>
    <div
      class="col-12 lg:col-4"
      :class="windowWidth < breakpoints.lg ? 'flex-order-0' : 'flex-order-1'"
    >
      <Card
        :class="wrapperCardClasses"
        :pt="{
          title: {
            class: 'text-primary',
          },
        }"
      >
        <template #title>Blog Posts</template>
        <template #content><BlogsPreview /></template>
      </Card>
    </div>
  </div>
  <div v-else>
    <h2 class="text-primary mx-3">Blog Posts</h2>
    <Card :class="wrapperCardClasses" class="mx-3">
      <template #content><BlogsPreview /></template>
    </Card>
    <h2 class="text-primary mx-3">Consulting Projects</h2>
    <ProjectsPreviewGrid class="mx-1" :maxDisplay="1" />
  </div>
</template>

<script setup>
import ProjectsPreviewCarousel from "@/components/project/ProjectsPreviewCarousel";
import BlogsPreview from "@/components/blog/BlogsPreview";
import { ref } from "vue";
import ProjectsPreviewGrid from "@/components/project/ProjectsPreviewGrid.vue";
import { useBreakpoints, useWindowEvents } from "@/composables/userEvents";

const { windowWidth } = useWindowEvents();
const { breakpoints, getBreakpointText } = useBreakpoints();

const responsiveOptions = ref([
  {
    breakpoint: getBreakpointText(breakpoints.xxl),
    numVisible: 1,
    numScroll: 1,
  },
]);

const wrapperCardClasses =
  "surface-ground border-50 border-2 border-round-xl my-2 mx:0 sm:mx-2 text-center";
</script>

<style scoped></style>
