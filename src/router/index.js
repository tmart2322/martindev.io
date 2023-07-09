import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Portfolio",
    },
  },
  {
    path: "/about",
    name: "about",
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
    name: "consulting-projects",
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
    name: "consulting-project",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "consultingProject" */ "../views/ConsultingProject.vue"
      ),
    props: true,
    meta: {
      title: "Consulting Project",
    },
  },
  {
    path: "/blog/:blogId",
    name: "blog",
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
