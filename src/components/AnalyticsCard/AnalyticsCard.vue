<template>
  <skeleton-loader v-if="loading" />
  <div
    class="flex flex-col justify-between p-5 gap-y-6 bg-white rounded-xs border border-almost-gray-1"
    v-else
  >
    <span class="text-light=gray-200 text-xs uppercase">{{ title }}</span>
    <h2 class="text-2xl font-bold text-light=gray-200">{{ value }}</h2>
  </div>
</template>

<script setup>
import SkeletonLoader from "./../SkeletonLoader.vue";

defineProps(["title", "value", "loading"]);
</script>
