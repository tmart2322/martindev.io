<template>
  <div id="nav" class="z-5">
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
        <p class="mr-4 md:mr-6 lg:mr-8 cursor-pointer font-bolder">
          Email:
          <a
            href="mailto:contact@martindev.io"
            class="no-underline text-primary"
            >contact@martindev.io</a
          >
        </p>
      </template>
    </Menubar>
  </div>
  <div id="content" class="py-2 px-4 md:px-6 lg:px-8 mb-4">
    <router-view />
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
import { useContentful } from "@/composables/contentful";
import { useGlobalCssVariables } from "@/composables/userEvents";

const { blogs, consultingProjects, isLoaded } = useContentful();
const { globalCssVariables } = useGlobalCssVariables();

let menuItems = ref([]);

watch(globalCssVariables, (newValue) => {
  document.documentElement.style.setProperty(
    "--background-opacity",
    newValue.backgroundOpacity
  );
});

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
      {
        label: "Resume",
        url: "https://www.dropbox.com/scl/fi/18ixmztg2ryxc42sd0g5d/TristanMartinResumeCurrent.pdf?rlkey=er2xryhzl6m1tusogt37qjeua&st=2k170ik8&dl=0",
        target: "_blank",
      },
    ];
  }
});
</script>

<style>
:root {
  --background-opacity: 1;
}

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
  opacity: var(--background-opacity);
}

#nav {
  position: sticky;
  top: 0;
}
</style>
