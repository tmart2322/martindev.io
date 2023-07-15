<template>
  <Card
    class="border-1 surface-border border-round-md m-2 text-center py-5 px-3 flex-auto h-full"
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
        class: 'flex flex-1 justify-content-center text-left line-height-2',
      },
    }"
  >
    <template #title>
      {{ props.project.fields.name }}
    </template>
    <template #subtitle>
      {{ dateString }}
    </template>
    <template #content>
      <div class="flex flex-column">
        <div class="flex justify-content-center flex-row flex-wrap gap-2">
          <Tag
            severity="info"
            v-for="role in props.project.fields.roles"
            :key="role"
            :value="role"
            rounded
            class="px-4 p-2 text-xs md:text-sm"
          ></Tag>
        </div>
        <div
          class="flex"
          v-html="parseMarkdown(props.project.fields.overview)"
        ></div>
      </div>
    </template>
    <template #footer>
      <Button
        class="align-self-end mt-auto cursor-pointer"
        label="View Project"
        @click="goToProject(props.project.sys.id)"
      />
    </template>
  </Card>
</template>

<script setup>
import { computed, defineProps } from "vue";
import { useRouter } from "vue-router";
import { useSharedFunctions } from "@/composables/sharedFunctions";

const { convertDateToMonthYear, parseMarkdown } = useSharedFunctions();
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
  router.push({ path: `/consulting/${projectId}` });
}
</script>

<style scoped></style>
