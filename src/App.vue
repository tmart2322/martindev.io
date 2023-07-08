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

const { consultingProjects, isLoaded } = useContentful();

let menuItems = ref([]);

watch(isLoaded, (currentValue) => {
  if (currentValue) {
    const projectMenuItems = consultingProjects.value.map((queryProject) => {
      return {
        label: queryProject.fields.projectName,
        to: `/consulting/${queryProject.sys.id}`,
      };
    });
    projectMenuItems.unshift(
      { label: "All Projects", to: "/consulting" },
      { separator: true }
    );
    menuItems.value = [
      {
        label: "Home",
        to: "/",
      },
      {
        label: "Consulting",
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
