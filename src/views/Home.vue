<template>
  <div>
    <h2 class="type-text">{{ welcomeText }}</h2>
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
        ? 250
        : Math.floor(Math.random() * 20) + 40
    );
  }
}

onMounted(() => {
  typeText();
});
</script>

<style scoped>
.type-text {
  margin: 1em;
  text-align: center;
  font-weight: normal;
  font-family: Baskerville, serif;
}
</style>
