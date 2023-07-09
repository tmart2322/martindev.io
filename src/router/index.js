import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Portfolio",
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    meta: {
      title: "About",
    },
  },
  {
    path: "/consulting/",
    name: "Consulting Projects",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "consultingProjects" */ "../views/ConsultingProjects.vue"
      ),
    props: true,
    meta: {
      title: "Consulting Projects",
    },
  },
  {
    path: "/consulting/:consultingProjectId",
    name: "Consulting Project",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "consultingProject" */ "../views/ConsultingProject.vue"
      ),
    props: true,
    meta: {
      title: "Consulting project",
    },
  },
  {
    path: "/blog/:blogId",
    name: "Blog",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "blog" */ "../views/Blog.vue"),
    props: true,
    meta: {
      title: "Blog",
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
