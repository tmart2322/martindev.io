<template>
  <div v-if="project">
    <h2>{{ project.fields.projectName }}</h2>
    <h4>
      {{ dateString }}
    </h4>
    <Card>
      <template #title>
        <h5>Role Overview</h5>
      </template>
      <template #content>
        <div v-html="documentToHtmlString(project.fields.roleOverview)"></div>
      </template>
    </Card>
    <Card>
      <template #title>
        <h5>Client Overview</h5>
      </template>
      <template #content>
        <div v-html="documentToHtmlString(project.fields.clientOverview)"></div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { defineProps, inject, onMounted, ref, computed } from "vue";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { convertDateToMonthYear } from "@/composables/sharedFunctions";

const contentfulClientApi = inject("contentfulClientApi");

let project = ref(null);

const props = defineProps({
  projectId: String,
});

const dateString = computed(() => {
  const startDate = convertDateToMonthYear(project.value.fields.startDate);
  const endDate = project.value.fields.endDate
    ? convertDateToMonthYear(project.value.fields.startDate)
    : "Current";
  return `Start Date: ${startDate} | End Date: ${endDate}`;
});

async function getProject(projectId) {
  return await contentfulClientApi.getEntry(projectId);
}

onMounted(async () => {
  project.value = await getProject(props.projectId);
});
</script>

<style scoped></style>
