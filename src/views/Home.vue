<template>
  <div>
    <p class="text-xl text-center mx-5">{{ welcomeText }}</p>
    <div class="mx-4 my-5 grid">
      <div class="col-8">
        <Card
          :class="wrapperCardClasses"
          :pt="{
            title: {
              class: 'text-primary-200',
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
      <div class="col-4">
        <Card
          :class="wrapperCardClasses"
          :pt="{
            title: {
              class: 'text-primary-200',
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
import { ref, onMounted } from "vue";

const responsiveOptions = ref([
  {
    breakpoint: "1600px",
    numVisible: 1,
    numScroll: 1,
  },
]);

const wrapperCardClasses =
  "surface-ground border-50 border-2 border-round-xl m-2 text-center";

const welcomeText = ref("");
const welcomeTextComplete =
  "Welcome! My name is Tristan Martin and thanks for visiting my personal website. Feel free to check out my project experience, open source projects, and blog posts!";

function typeText() {
  if (welcomeText.value.length < welcomeTextComplete.length) {
    const nextChar = welcomeTextComplete.charAt(welcomeText.value.length);
    welcomeText.value += nextChar;
    setTimeout(
      typeText,
      new Set([",", "!", "."]).has(nextChar)
        ? 150
        : Math.floor(Math.random() * 15) + 20
    );
  }
}

onMounted(() => {
  typeText();
});
</script>

<style scoped></style>
