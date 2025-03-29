<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";

import TieredMenu from "primevue/tieredmenu";

const menuRef = ref(null);

const pages = [
  { label: "Home",              route: "/"     },
  { label: "Event Information", route: "/info" },
  { label: "Registration Form", route: "/form" }
];
</script>

<template>
  <section>
    <header class="d-flex flex-row align-items-center justify-content-between px-5 py-2 bg-primary-subtle">
      <a class="fs-4 fw-bold bg-transparent cursor-pointer" href="/">
        Event Management System
      </a>

      <nav class="d-none d-lg-flex gap-3 align-items-center">
        <RouterLink to="/">    Home             </RouterLink>
        <RouterLink to="/info">Event Information</RouterLink>
        <RouterLink to="/form">Registration Form</RouterLink>
      </nav>

      <div class="d-flex d-lg-none align-items-center">
        <button class="btn btn-link p-0" @click="menuRef.toggle($event)">
          <i class="fas fa-bars fs-3"></i>
        </button>

        <TieredMenu
          :model="pages"
          popup
          ref="menuRef"
          class="custom-tiered-menu"
        >
          <template #item="{ item }">
            <RouterLink
              :to="item.route"
              custom
              v-slot="{ href }"
            >
              <a v-ripple :href="href">
                <span :class="item.icon"></span>

                <p>{{ item.label }}</p>
              </a>
            </RouterLink>
          </template>
        </TieredMenu>
      </div>
    </header>
  </section>
</template>

<style scoped>
  .custom-tiered-menu {
    background-color: rgb(7, 27, 46);
    border: 1px solid #ddd;
    border-radius: 0.25rem;
  }

  .custom-tiered-menu a {
    color: white;
    padding: 0.75rem 1.5rem;
    display: flex;
    align-items: center;
  }

  .custom-tiered-menu a:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
</style>
