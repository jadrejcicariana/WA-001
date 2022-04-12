<template>
  <div class="commits">
    <h1>Commits</h1>
    <ul>
      <li v-for="commit in commits" :key="commit.sha">
        <a href="" @click="clicked(commit.sha)"> {{ commit.sha }} </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Commits",
  data() {
    return {
      commits: [],
    };
  },
  mounted() {
    fetch("https://api.github.com/repos/vuejs/vue/commits")
      .then((response) => response.json())
      .then((data) => (this.commits = data));
  },
  methods: {
    clicked: function (sha) {
      this.$router.push({
        name: "commit-details",
        params: { sha: sha },
      });
    },
  },
};
</script>
