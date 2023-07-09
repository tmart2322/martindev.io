<template>
  <div id="nav">
    <Menubar :model="menuItems"
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

const { blogs, consultingProjects, isLoaded } = useContentful();

let menuItems = ref([]);

watch(isLoaded, (currentValue) => {
  if (currentValue) {
    const consultingProjectMenuItems = consultingProjects.value.map(
      (consultingProject) => {
        return {
          label: consultingProject.fields.name,
          to: {
            name: "consulting-project",
            params: { consultingProjectId: consultingProject.sys.id },
          },
        };
      }
    );
    consultingProjectMenuItems.unshift(
      { label: "All Projects", to: "/consulting" },
      { separator: true }
    );
    const blogMenuItems = blogs.value.map((blog) => {
      return {
        label: blog.fields.blogPostName,
        to: `/blog/${blog.sys.id}`,
      };
    });
    menuItems.value = [
      {
        label: "Home",
        to: "/",
      },
      {
        label: "Consulting",
        items: consultingProjectMenuItems,
      },
      {
        label: "Blog",
        items: blogMenuItems,
      },
    ];
  }
});
</script>

<style>
body {
  margin: 0;
  background-image: url("./assets/images/Background.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
}

#content {
  padding: 1em;
}
</style>
