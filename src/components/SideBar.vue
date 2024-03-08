<template>
  <div class="flex flex-col bg-white w-[270px]">
    <div class="py-6 px-7">
      <div class="flex items-center justify-between">
        <img src="../assets/Frame.png" alt="Logo" class="w-auto h-7" />

        <div
          class="relative rounded-full bg-icon-gray-bg w-10 h-10 flex items-center justify-center"
        >
          <CompressV />
        </div>
      </div>

      <div class="text-xs text-gray-900 mt-4 text-light-gray">App Name</div>
    </div>

    <nav class="flex-1">
      <ul>
        <li v-for="(item, index) in navigationItems" :key="index">
          <router-link
            :to="item.link"
            class="flex items-center py-4 px-7 text-sm font-medium text-light-gray side-link"
            active-class="active-link"
          >
            <span class="mr-3">
              <component :is="item.icon" class="container-icon"></component>
            </span>

            <span class="label">{{ item.label }}</span>
          </router-link>
        </li>
      </ul>

      <div class="px-7">
        <hr class="mt-4" />
      </div>

      <router-link
        to="/collapse"
        class="flex items-center py-4 px-7 text-sm font-medium text-light-gray side-link"
        active-class="active-link"
      >
        <span class="mr-3">
          <IconArrowLeft class="container-icon" />
        </span>

        <span class="label">Collapse</span>
      </router-link>

      <div
        class="flex items-center py-5 px-7 text-sm font-medium text-light-gray mt-7"
      >
        <span class="mr-3">
          <iconFeedbackChat />
        </span>

        <span class="text-active-orange"> Give Feedback </span>
      </div>
    </nav>
  </div>
</template>

<script setup>
import CompressV from "../IconSVGs/CompressV.vue";
import IconChip from "../IconSVGs/IconChip.vue";
import IconAnalytics from "../IconSVGs/IconAnalytics.vue";
import IconChat from "../IconSVGs/IconChat.vue";
import IconModeration from "../IconSVGs/IconModeration.vue";
import IconApi from "../IconSVGs/IconApi.vue";
import IconBell from "../IconSVGs/IconBell.vue";
import IconSettings from "../IconSVGs/IconSettings.vue";
import IconArrowLeft from "../IconSVGs/IconArrowLeft.vue";
import iconFeedbackChat from "../IconSVGs/iconFeedbackChat.vue";

const navigationItems = [
  {
    label: "Get Started",
    icon: IconChip,
    link: "/get-started",
  },
  {
    label: "Analytics",
    icon: IconAnalytics,
    link: "/analytics",
  },
  {
    label: "Chat",
    icon: IconChat,
    link: "/chat-dashboard",
  },
  {
    label: "Moderation",
    icon: IconModeration,
    link: "/moderation",
  },
  {
    label: "API & Auth keys",
    icon: IconApi,
    link: "/api-auth-keys",
  },
  {
    label: "Anouncement",
    icon: IconBell,
    link: "/anouncement",
  },
  {
    label: "Settings",
    icon: IconSettings,
    link: "/settings",
  },
];
</script>

<style>
.side-link:hover .label,
.active-link .label {
  color: #ea8d51;
}

.side-link:hover .container-icon > path,
.side-link:hover .container-icon > rect,
.active-link .container-icon > path,
.active-link .container-icon > rect {
  fill: #ea8d51;
}
</style>
