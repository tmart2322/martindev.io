import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import Menubar from "primevue/menubar";
import Card from "primevue/card";
import Button from "primevue/button";
import "primeicons/primeicons.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primeflex/primeflex.css";
import "./assets/css/primeVueOverrides.css";
import { createClient } from "contentful";

const app = createApp(App);

const contentfulClientApi = createClient({
  space: process.env.VUE_APP_CONTENTFUL_SPACE_ID,
  accessToken: process.env.VUE_APP_CONTENTFUL_ACCESS_TOKEN,
});

app.provide("contentfulClientApi", contentfulClientApi);

app.use(router);
app.use(PrimeVue, { ripple: true });

app.component("Menubar", Menubar);
app.component("Card", Card);
app.component("Button", Button);

app.mount("#app");
