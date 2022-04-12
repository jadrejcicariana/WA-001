<template>
  <div class="commits">
    <h1>Commits</h1>
    <ul>
      <li v-for="commit in commits" :key="commit.sha">
        <router-link
          :to="{ name: 'commit-details', params: { sha: commit.sha } }"
          >{{ commit.sha }}
        </router-link>
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
};
</script>
