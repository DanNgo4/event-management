import { createRouter, createWebHistory } from "vue-router";

import HomeView from "src/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: { title: "Home" }
    },
    {
      path: "/info",
      name: "info",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/InfoView.vue"),
      meta: { title: "Information" }
    },
    {
      path: "/form",
      name: "form",
      component: () => import("../views/FormView.vue"),
      meta: { title: "Rego Form" }
    },
  ],
});

export default router;
