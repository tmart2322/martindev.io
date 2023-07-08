<template>
  <div id="nav">
    <Menubar :model="menuItems" :exact="true"
      ><template #start>
        <img
          alt="logo"
          src="@/assets/images/LogoWhite.png"
          height="40"
          class="mt-1"
        /> </template
    ></Menubar>
  </div>
  <div id="content">
    <router-view />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useContentful } from "@/composables/contentful";

const { projects, isLoaded } = useContentful();

let menuItems = ref([]);

watch(isLoaded, (currentValue) => {
  if (currentValue) {
    const projectMenuItems = projects.value.map((queryProject) => {
      return {
        label: queryProject.fields.projectName,
        to: `/projects/${queryProject.sys.id}`,
      };
    });
    projectMenuItems.unshift(
      { label: "All Projects", to: "/projects" },
      { separator: true }
    );
    menuItems.value = [
      {
        label: "Home",
        to: "/",
      },
      {
        label: "Projects",
        items: projectMenuItems,
      },
      {
        label: "About",
        to: "/about",
      },
    ];
  }
});
</script>

<style>
body {
  margin: 0;
}

.router-link-active > .p-menuitem-text {
  text-decoration: underline;
}

#content {
  padding: 1em;
}
</style>
