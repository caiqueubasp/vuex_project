import "@babel/polyfill";
import "mutationobserver-shim";
import "./plugins/bootstrap-vue";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

console.log("BootstrapVue", BootstrapVue, IconsPlugin);

createApp(App).use(store).use(router).mount("#app");
