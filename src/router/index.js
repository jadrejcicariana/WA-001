import { createRouter, createWebHistory } from "vue-router";
import Commits from "@/views/Commits.vue";

const routes = [
  {
    path: "/",
    name: "Commits",
    component: Commits,
  },
  {
    path: "/commit-details/:sha",
    name: "commit-details",
    component: () => import("../views/CommitDetails.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
