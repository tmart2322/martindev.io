<template>
  <div id="nav">
    <Menubar :model="menuItems" />
  </div>
  <div id="content">
    <router-view />
  </div>
</template>

<script setup>
import { inject, onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const contentfulClientApi = inject("contentfulClientApi");

const projectMenuItems = ref([]);

const menuItems = computed(() => {
  const items = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "Projects",
      to: "/projects",
      items: projectMenuItems.value,
    },
    {
      label: "About",
      to: "/about",
    },
  ];

  for (const item of items) {
    item.class = "";
    if (
      item.to.length > 1
        ? route.path.includes(item.to)
        : route.path.length === 1
    ) {
      item.class += " custom-active-link";
    }
    if (item.items) {
      item.class += " custom-sub-menu";
    }
  }

  return items;
});

async function getProjects() {
  const entries = await contentfulClientApi.getEntries();

  return entries.items.filter(
    (item) => item.sys.contentType.sys.id === "project"
  );
}

onMounted(async () => {
  const queryProjects = await getProjects();
  projectMenuItems.value = queryProjects.map((queryProject) => {
    return {
      label: queryProject.fields.projectName,
      to: `/projects/${queryProject.sys.id}`,
    };
  });
});
</script>

<style>
body {
  margin: 0;
}

.custom-active-link > .p-menuitem-link > .p-menuitem-text {
  text-decoration: underline;
}

.custom-sub-menu > a::after {
  content: "\00a0\00a0▼";
  font-size: 0.8rem;
  vertical-align: middle;
}

#content {
  padding: 1em;
}
</style>
