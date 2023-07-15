<template>
  <div v-if="isLoaded" class="grid mt-2">
    <div
      class="col-12 sm:col-6 xl:col-4"
      v-for="(project, index) in consultingProjects"
      :key="project.sys.id"
    >
      <ProjectPreview
        v-if="props.maxDisplay === 0 || index < props.maxDisplay"
        :project="project"
      />
    </div>
    <div
      class="col-12 flex justify-content-center"
      v-if="
        props.maxDisplay !== 0 && consultingProjects.length >= props.maxDisplay
      "
    >
      <Button
        label="View All"
        icon="pi pi-arrow-right"
        iconPos="right"
        link
        @click="gotToProjects"
      ></Button>
    </div>
  </div>
</template>

<script setup>
import ProjectPreview from "@/components/project/ProjectPreview";
import { useContentful } from "@/composables/contentful";
import { defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  maxDisplay: {
    type: Number,
    default: 0,
  },
});

const { consultingProjects, isLoaded } = useContentful();

function gotToProjects() {
  router.push({ path: `/consulting/` });
}
</script>

<style scoped></style>
