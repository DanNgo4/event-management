<script setup>
import { ref, computed } from "vue";

import { events } from "src/assets/events";

const searchEventId = ref("");
const searchEventName = ref("");
const searchDuration = ref("");
const selectedCategory = ref("All");

const filteredEvents = computed(() => {
  return events.filter((event) => {
    const matchesEventId = event.eventid.toLowerCase().includes(searchEventId.value.toLowerCase());
    const matchesEventName = event.eventname.toLowerCase().includes(searchEventName.value.toLowerCase());
    const matchesDuration = event.durationhour.toString().includes(searchDuration.value);
    const matchesCategory = selectedCategory.value === "All" || event.category === selectedCategory.value;

    return matchesEventId && matchesEventName && matchesDuration && matchesCategory;
  });
});
</script>

<template>
  <h1 class="text-center my-4">Event Information</h1>

  <article class="mb-5">
    <section class="container d-flex flex-column flex-md-row flex-sm-row flex-wrap justify-content-between mb-4">
      <p class="d-flex flex-column">
        <label for="searchEventId">Search by Event ID:</label>

        <input v-model="searchEventId"
                type="text"
                id="searchEventId"
                class="form-control" />
      </p>

      <p class="d-flex flex-column">
        <label for="searchEventName">Search by Event Name:</label>

        <input v-model="searchEventName"
                type="text"
                id="searchEventName"
                class="form-control" />
      </p>

      <p class="d-flex flex-column">
        <label for="searchDuration">Search by Duration (hours):</label>

        <input v-model="searchDuration"
                type="number"
                id="searchDuration"
                class="form-control" />
      </p>

      <div class="d-flex flex-column">
        <p>Unit Type:</p>

        <p class="d-flex align-items-center gap-1">
          <input type="radio"
                  id="categoryTechnology"
                  value="Technology"
                  v-model="selectedCategory" />

          <label for="categoryTechnology">Technology</label>
        </p>

        <p class="d-flex align-items-center gap-1">
          <input type="radio"
                  id="categoryBusiness"
                  value="Business"
                  v-model="selectedCategory" />

          <label for="categoryBusiness">Business</label>
        </p>

        <p class="d-flex align-items-center gap-1">
          <input type="radio"
                  id="categoryMarketing"
                  value="Marketing"
                  v-model="selectedCategory" />

          <label for="categoryMarketing">Marketing</label>
        </p>

        <p class="d-flex align-items-center gap-1">
          <input type="radio"
                  id="categoryFinance"
                  value="Finance"
                  v-model="selectedCategory" />

          <label for="categoryFinance">Finance</label>
        </p>

        <p class="d-flex align-items-center gap-1">
          <input type="radio"
                  id="categoryAll"
                  value="All"
                  v-model="selectedCategory" />

          <label for="categoryAll">All</label>
        </p>
      </div>
    </section>

    <section>
      <div class="container">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Event ID</th>
              <th>Event Name</th>
              <th>Category</th>
              <th>Duration (Hours)</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="event in filteredEvents" :key="event.eventid">
              <td>{{ event.eventid }}</td>
              <td>{{ event.eventname }}</td>
              <td>{{ event.category }}</td>
              <td>{{ event.durationhour }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </article>
</template>

<style scoped>
.table {
  margin-top: 20px;
}

input, label {
  margin-bottom: 10px;
}
</style>
