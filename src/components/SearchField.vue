<template>
  <div class="relative">
    <input
      class="px-4 py-2 rounded-lg border border-gray-300 w-full text-sm"
      placeholder="Search..."
      v-model="searchTerm"
    />
    <div class="absolute search-icon">
      <Icon-search />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import IconSearch from "../IconSVGs/IconSearch.vue";

const searchTerm = ref("");
</script>

<style scoped>
.search-icon {
  right: 15px;
  top: 22%;
}
</style>
