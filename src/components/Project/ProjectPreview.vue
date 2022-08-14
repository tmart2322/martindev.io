<template>
  <Card>
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
      <Button label="View Project" @click="goToProject(props.project.sys.id)" />
    </template>
  </Card>
</template>

<script setup>
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { computed, defineProps } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  project: Object,
});

const dateString = computed(() => {
  const startDate = new Date(props.project.fields.startDate).toLocaleDateString(
    "en-us",
    {
      year: "numeric",
      month: "long",
    }
  );

  const endDate = props.project.fields.endDate
    ? new Date(props.project.fields.endDate).toLocaleDateString("en-us", {
        year: "numeric",
        month: "long",
      })
    : "Current";

  return `Start Date: ${startDate} | End Date: ${endDate}`;
});

function goToProject(projectId) {
  router.push({ path: `/projects/${projectId}` });
}
</script>

<style scoped></style>
