<template>
  <div v-if="project" class="my-4">
    <h2 class="text-center">{{ project.fields.name }}</h2>
    <p class="text-center font-italic">
      {{ dateString }}
    </p>
    <div class="flex justify-content-center flex-row flex-wrap gap-2 my-4">
      <Tag
        severity="info"
        v-for="role in project.fields.roles"
        :key="role"
        :value="role"
        rounded
        class="px-4 p-2 text-xs md:text-sm"
      ></Tag>
    </div>
    <div class="grid">
      <div class="md:col-12 lg:col-4">
        <Card
          class="border-1 surface-border border-round-md m-2 py-5 px-3"
          :pt="{
            title: {
              class: 'text-primary text-center',
            },
          }"
        >
          <template #title> Summary </template>
          <template #content>
            <div v-html="parseMarkdown(project.fields.overview)"></div>
          </template>
        </Card>
      </div>
      <div class="md:col-12 lg:col-8">
        <Card
          class="border-1 surface-border border-round-md m-2 py-5 px-3"
          :pt="{
            title: {
              class: 'text-primary text-center',
            },
          }"
        >
          <template #title> Details </template>
          <template #content>
            <div v-html="parseMarkdown(project.fields.details)"></div>
          </template>
        </Card>
      </div>
    </div>
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
