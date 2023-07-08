<template>
  <div>
    <p class="text-xl text-center m-4">{{ welcomeText }}</p>
    <ProjectsPreviewCarousel />
  </div>
</template>

<script setup>
import ProjectsPreviewCarousel from "@/components/Project/ProjectsPreviewCarousel";
import { ref, onMounted } from "vue";

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
