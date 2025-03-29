<script setup>
import { ref, computed } from "vue";

import { events } from "src/assets/events";

const username = ref("");
const password = ref("");
const confirmPassword = ref("");
const selectedCategory = ref("Business");
const selectedEvent = ref("");

const passwordsMatch = computed(() => password.value === confirmPassword.value);

const filteredEvents = computed(() => {
  return events
    .filter((event) => event.category === selectedCategory.value)
    .map((event) => event.eventname);
});
</script>

<template>
  <h1 class="text-center my-4">Registration Form</h1>

  <form class="container d-flex flex-column gap-3">
    <div class="d-flex flex-column">
      <label for="username">Username:</label>

      <input v-model="username" type="text" id="username" class="form-control" />
    </div>

    <div class="d-flex flex-column">
      <label for="password">Password:</label>
      <input v-model="password" type="password" id="password" class="form-control" />
    </div>

    <div class="d-flex flex-column">
      <label for="confirmPassword">Confirm Password:</label>
      <input v-model="confirmPassword" type="password" id="confirmPassword" class="form-control" />
      <small v-if="confirmPassword && !passwordsMatch" class="text-danger">Passwords do not match</small>
    </div>

    <fieldset class="d-flex flex-column">
      <legend>Event Category:</legend>
      <div class="d-flex flex-column gap-2">
        <label class="d-flex align-items-center gap-1">
          <input type="radio" value="Business" v-model="selectedCategory" /> Business
        </label>
        <label class="d-flex align-items-center gap-1">
          <input type="radio" value="Technology" v-model="selectedCategory" /> Technology
        </label>
        <label class="d-flex align-items-center gap-1">
          <input type="radio" value="Marketing" v-model="selectedCategory" /> Marketing
        </label>
        <label class="d-flex align-items-center gap-1">
          <input type="radio" value="Finance" v-model="selectedCategory" /> Finance
        </label>
      </div>
    </fieldset>

    <div class="d-flex flex-column">
      <label for="eventName">Select Event:</label>
      <select v-model="selectedEvent" id="eventName" class="form-control">
        <option disabled value="">Choose an event</option>
        <option v-for="event in filteredEvents" :key="event" :value="event">
          {{ event }}
        </option>
      </select>
    </div>
  </form>

  <section class="mt-4 d-flex flex-column justify-content-center align-items-center">
    <h2>Summary</h2>

    <ul>
      <li>
        <strong>Username:</strong>

        <p v-if="selectedEvent">{{ username }}</p>
      </li>

      <li>
        <strong>Selected Category:</strong>

        <p v-if="selectedEvent">{{ selectedCategory }}</p>
      </li>

      <li>
        <strong>Selected Event:</strong>

        <p v-if="selectedEvent">{{ selectedEvent }}</p>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: auto;
}
</style>
