// router/index.js

import { createRouter, createWebHistory } from "vue-router";
const Analytics = () => import("../pages/Analytics/Analytics.vue");
const chatDashboard = () => import("../pages/ChatDashboard/ChatDashboard.vue");

const routes = [
  { path: "/analytics", component: Analytics },
  { path: "/chat-dashboard", component: chatDashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
