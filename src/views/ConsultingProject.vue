<template>
  <div v-if="project">
    <h2>{{ project.fields.name }}</h2>
    <h4>
      {{ dateString }}
    </h4>
    <Card>
      <template #title>
        <h5>Role Overview</h5>
      </template>
      <template #content>
        <div v-html="parseMarkdown(project.fields.overview)"></div>
      </template>
    </Card>
    <Card>
      <template #title>
        <h5>Client Overview</h5>
      </template>
      <template #content>
        <div v-html="parseMarkdown(project.fields.details)"></div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import { defineProps, inject, onMounted, ref, computed, watch } from "vue";
import { useSharedFunctions } from "@/composables/sharedFunctions";
import { useRoute } from "vue-router";

const contentfulClientApi = inject("contentfulClientApi");
const route = useRoute();
const { convertDateToMonthYear, parseMarkdown } = useSharedFunctions();

let project = ref(null);

const props = defineProps({
  consultingProjectId: String,
});

const dateString = computed(() => {
  const startDate = convertDateToMonthYear(project.value.fields.startDate);
  const endDate = project.value.fields.endDate
    ? convertDateToMonthYear(project.value.fields.startDate)
    : "Current";
  return `Start Date: ${startDate} | End Date: ${endDate}`;
});

async function getProject(consultingProjectId) {
  return await contentfulClientApi.getEntry(consultingProjectId);
}

async function loadProject(consultingProjectId) {
  project.value = await getProject(consultingProjectId);
}

watch(
  () => route.params.consultingProjectId,
  async (newConsultingProjectId) => {
    await loadProject(newConsultingProjectId);
  }
);

onMounted(async () => {
  await loadProject(props.consultingProjectId);
});
</script>

<style scoped></style>
