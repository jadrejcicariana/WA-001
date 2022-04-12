<template>
  <div v-if="details">
    <h1>Commit details</h1>
    <h6>{{ sha }}</h6>
    <div>
      <ul>
        <li>name: {{ details.commit.author.name }}</li>
        <li>email: {{ details.commit.author.email }}</li>
        <li>date: {{ details.commit.author.date }}</li>
        <li>message: {{ details.commit.message }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  name: "details",
  data() {
    return {
      details: null,
    };
  },
  mounted() {
    let sha = useRoute().params.sha;
    let path = "https://api.github.com/repos/vuejs/vue/commits/" + sha;
    fetch(path)
      .then((response) => response.json())
      .then((data) => (this.details = data));
  },
};
</script>
