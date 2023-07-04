<template>
  <div>
    <p class="text-lg text-center">{{ welcomeText }}</p>
    <ProjectPreviews />
  </div>
</template>

<script setup>
import ProjectPreviews from "@/components/Project/ProjectPreviews";
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
