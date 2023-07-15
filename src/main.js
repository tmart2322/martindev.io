import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Menubar from "primevue/menubar";
import Card from "primevue/card";
import Button from "primevue/button";
import Carousel from "primevue/carousel";
import Tag from "primevue/tag";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/viva-dark/theme.css";
import "./assets/css/primeVueOverrides.css";
import Ripple from "primevue/ripple";
import { createClient } from "contentful";

const app = createApp(App);

const contentfulClientApi = createClient({
  space: "5ftrbd5qemf9",
  accessToken: "CwjGzfLI-RHfaiiisKnV4cEQLlAMt64rXM3SgA4stwk",
});

app.provide("contentfulClientApi", contentfulClientApi);

app.directive("ripple", Ripple);

const DEFAULT_TITLE = "Tristan Martin";
router.afterEach((to) => {
  document.title = `${DEFAULT_TITLE} - ${to.meta.title}`;
});
app.use(router);
app.use(PrimeVue);

app.component("Menubar", Menubar);
app.component("Card", Card);
app.component("Button", Button);
app.component("Carousel", Carousel);
app.component("Tag", Tag);

app.mount("#app");
