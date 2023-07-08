<template>
  <div>
    <p class="text-xl text-center mx-5">{{ welcomeText }}</p>
    <div class="mx-4 my-5">
      <Card :class="wrapperCardClasses">
        <template #title>Consulting Projects</template>
        <template #content><ProjectsPreviewCarousel /></template>
      </Card>
    </div>
  </div>
</template>

<script setup>
import ProjectsPreviewCarousel from "@/components/Project/ProjectsPreviewCarousel";
import { ref, onMounted } from "vue";

const wrapperCardClasses =
  "bg-primary-reverse border-50 border-2 border-round-xl m-2 text-center";

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
