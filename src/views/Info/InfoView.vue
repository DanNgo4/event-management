<script setup>
import { ref, computed } from "vue";

const searchEventId = ref("");
const searchEventName = ref("");
const searchDuration = ref("");
const selectedCategory = ref("All");

const events = [
  {eventid: 'EVT10001', eventname: 'Tech Innovations Conference', category: 'Technology', durationhour: 8},
  {eventid: 'EVT10002', eventname: 'Startup Pitch Day', category: 'Business', durationhour: 6},
  {eventid: 'EVT10003', eventname: 'AI & Machine Learning Summit', category: 'Technology', durationhour: 10},
  {eventid: 'EVT10004', eventname: 'Cybersecurity Workshop', category: 'Technology', durationhour: 4},
  {eventid: 'EVT10005', eventname: 'Digital Marketing Bootcamp', category: 'Marketing', durationhour: 6},
  {eventid: 'EVT10006', eventname: 'Blockchain and Cryptocurrency', category: 'Finance', durationhour: 5},
  {eventid: 'EVT10007', eventname: 'Entrepreneurship Forum', category: 'Business', durationhour: 7},
  {eventid: 'EVT10008', eventname: 'Data Science Hackathon', category: 'Technology', durationhour: 12},
  {eventid: 'EVT10009', eventname: 'Leadership and Management Summit', category: 'Business', durationhour: 9},
  {eventid: 'EVT10010', eventname: 'E-commerce Strategies', category: 'Marketing', durationhour: 6},
  {eventid: 'EVT10011', eventname: 'AI for Business', category: 'Business', durationhour: 8},
  {eventid: 'EVT10012', eventname: 'IoT & Smart Devices Expo', category: 'Technology', durationhour: 7},
  {eventid: 'EVT10013', eventname: 'Brand Strategy and Growth', category: 'Marketing', durationhour: 5},
  {eventid: 'EVT10014', eventname: 'Investment and Wealth Management', category: 'Finance', durationhour: 6},
  {eventid: 'EVT10015', eventname: 'Financial Technology (FinTech) Summit', category: 'Finance', durationhour: 8},
  {eventid: 'EVT10016', eventname: 'AI Ethics and Regulations', category: 'Technology', durationhour: 4},
  {eventid: 'EVT10017', eventname: 'Business Analytics Workshop', category: 'Business', durationhour: 6},
  {eventid: 'EVT10018', eventname: 'SEO and Content Marketing', category: 'Marketing', durationhour: 7},
  {eventid: 'EVT10019', eventname: 'Cryptocurrency Investment Strategies', category: 'Finance', durationhour: 9},
  {eventid: 'EVT10020', eventname: 'Social Media Marketing Trends', category: 'Marketing', durationhour: 5}
];

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
