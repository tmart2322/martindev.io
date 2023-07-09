<template>
  <div class="mx-6 my-2">
    <div class="mx-2">
      <h3 class="font-italic mb-0 ml-1">welcome, my name is</h3>
      <h1 class="text-primary font-bold font-italic mt-0">TRISTAN MARTIN</h1>
      <div class="ml-1">
        <p>
          <span class="text-primary-400 font-italic font-bold"
            >Professionally</span
          >, I have extensive experience in the Salesforce ecosystem managing
          large teams to deliver high-quality and robust solutions, designing
          and developing robust integrations, and solving complex business
          requirements with automation.
        </p>
        <p>
          <span class="text-primary-400 font-italic font-bold">Personally</span
          >, I am an avid skydiver (250 skydives and counting!), fervent
          international traveler, and live music aficionado.
        </p>
      </div>
    </div>
    <div class="my-5 grid">
      <div class="md:col-12 lg:col-8">
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
      <div class="md:col-12 lg:col-4">
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
  </div>
</template>

<script setup>
import ProjectsPreviewCarousel from "@/components/project/ProjectsPreviewCarousel";
import BlogsPreview from "@/components/blog/BlogsPreview";
import { ref } from "vue";

const responsiveOptions = ref([
  {
    breakpoint: "1600px",
    numVisible: 1,
    numScroll: 1,
  },
]);

const wrapperCardClasses =
  "surface-ground border-50 border-2 border-round-xl m-2 text-center";
</script>

<style scoped></style>
