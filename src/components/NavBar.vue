<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section>
    <header class="d-flex flex-row align-items-center justify-content-between px-5 py-2 bg-primary-subtle">
      <a
        class="fs-4 fw-bold bg-transparent cursor-pointer"
        id="text-logo"
        href="/"
      >
        Event Management System
      </a>

      <nav class="d-flex gap-3 align-items-start">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/info">Event Information</RouterLink>
        <RouterLink to="/form">Registration Form</RouterLink>
      </nav>
    </header>
  </section>

  <img class="w-100" style="height: 10rem;" src="/src/assets/swinburne_logo.png" />
</template>

<style scoped>
  #text-logo {
    cursor: pointer;
  }
</style>
