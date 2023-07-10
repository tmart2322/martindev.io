<template>
  <div id="nav">
    <Menubar :model="menuItems" class="border-none border-noround"
      ><template #start>
        <img
          alt="logo"
          src="@/assets/images/LogoWhite.png"
          height="40"
          class="mt-1"
        />
      </template>
      <template #end>
        <h4 class="mr-4 cursor-pointer" v-if="windowWidth > 576">
          Email:
          <a
            href="mailto:contact@martindev.io"
            class="no-underline text-primary"
            >contact@martindev.io</a
          >
        </h4>
        <h5 class="mr-4 cursor-pointer" v-else>
          Email:
          <a
            href="mailto:contact@martindev.io"
            class="no-underline text-primary"
            >contact@martindev.io</a
          >
        </h5>
      </template>
    </Menubar>
  </div>
  <div id="content">
    <router-view />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useContentful } from "@/composables/contentful";
import { useWindowEvents } from "@/composables/userEvents";

const { windowWidth } = useWindowEvents();
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
}

body:before {
  content: "";
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
  background: url("./assets/images/Background.jpg") no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#content {
  padding: 1em;
}
</style>