<template>
  <div class="overflow-x-auto relative">
    <table class="w-full text-left">
      <thead class="text-sm uppercase">
        <tr class="text-table-title border-b">
          <th
            v-for="header in headers"
            :key="header"
            scope="col"
            class="py-5 px-6 font-medium"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index" class="bg-white border-b">
          <td
            v-for="(value, key) in row"
            :key="key"
            class="py-4 px-6 font-medium text-deep-black"
          >
            <SkeletonLoader v-if="loading" height="10px" />
            <slot v-else name="cell" :value="value" :key="key">{{
              formatFunction(value, key)
            }}</slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import SkeletonLoader from "./SkeletonLoader.vue";

const props = defineProps({
  headers: Array,
  rows: Array,
  formatFunction: Function,
  loading: Boolean,
});
</script>
