import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);


router.afterEach((to) => {
  document.title = "Event Management | " + to.meta.title;
});

app.use(router).mount("#app");
