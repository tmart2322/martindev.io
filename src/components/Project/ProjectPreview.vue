<template>
  <Card
    class="border-1 surface-border border-round m-2 text-center py-5 px-3 flex-auto h-full"
    :pt="{
      body: {
        class: 'flex justify-content-center flex-column h-full',
      },
      header: { class: 'flex flex-initial' },
      title: {
        class: 'flex flex-initial justify-content-center',
      },
      subtitle: {
        class: 'flex flex-initial justify-content-center',
      },
      footer: {
        class: 'flex flex-initial justify-content-center',
      },
      content: {
        class: 'flex flex-1 justify-content-center',
      },
    }"
  >
    <template #title>
      {{ props.project.fields.projectName }}
    </template>
    <template #subtitle>
      {{ dateString }}
    </template>
    <template #content>
      <div
        v-html="documentToHtmlString(props.project.fields.roleOverview)"
      ></div>
    </template>
    <template #footer>
      <Button
        class="align-self-end mt-auto"
        label="View Project"
        @click="goToProject(props.project.sys.id)"
      />
    </template>
  </Card>
</template>

<script setup>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { computed, defineProps } from "vue";
import { useRouter } from "vue-router";
import { convertDateToMonthYear } from "@/composables/sharedFunctions";

const router = useRouter();

const props = defineProps({
  project: Object,
});

const dateString = computed(() => {
  const startDate = convertDateToMonthYear(props.project.fields.startDate);

  const endDate = props.project.fields.endDate
    ? convertDateToMonthYear(props.project.fields.endDate)
    : "Current";

  return `Start Date: ${startDate} | End Date: ${endDate}`;
});

function goToProject(projectId) {
  router.push({ path: `/projects/${projectId}` });
}
</script>

<style scoped></style>
