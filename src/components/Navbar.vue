<template>
  <nav class="flex items-center justify-between py-4 px-8 border-b border-gray-300">
    <div class="flex items-center">
      <span class="text-base font-semibold mr-4 text-table-title">Hello Ayomide! 👋🏼</span>
    </div>

    <div class="flex items-center">
      <custom-button label="Download Report" :primary="true" />
      <div
        class="relative rounded-full bg-gray-300 w-10 h-10 flex items-center justify-center mr-2"
      >
        <span class="text-black text-[14px] font-semibold">AO</span>
      </div>

      <icon-dropdown/>
    </div>
  </nav>
</template>

<script setup>
import CustomButton from "./CustomButton.vue";
import IconDropdown from "../IconSVGs/IconDropdown.vue";
</script>
