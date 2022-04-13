<template>
  <div class="nav">
    <button class="button" v-on:click="this.$router.go(-1)">Back</button>
  </div>
  <div v-if="details">
    <h1>Commit details</h1>
    <ul class="list">
      <li><strong>name: </strong>{{ details.commit.author.name }}</li>
      <li><strong>email: </strong>{{ details.commit.author.email }}</li>
      <li><strong>date: </strong>{{ details.commit.author.date }}</li>
      <li><strong>message: </strong>{{ details.commit.message }}</li>
    </ul>
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

<style scoped>
.list {
  list-style-type: none;
  text-align: left;
  padding-left: 300px;
  padding-right: 300px;
  background-color: #c9fffe;
}
.nav {
  text-align: left;
  padding-left: 100px;
}
.button {
  font-size: 20px;
  background-color: #c9fffe;
}
</style>
