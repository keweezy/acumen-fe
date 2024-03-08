<template>
  <div class="animate-pulse space-y-2">
    <div class="bg-gray-300 rounded w-full" :style="`height:${height}`"></div>
  </div>
</template>

<script setup>
defineProps({ height: { type: String, default: "80px" } });
</script>
