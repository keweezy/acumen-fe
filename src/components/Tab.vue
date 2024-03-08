<template>
  <div class="flex items-end space-x-6">
    <button
      v-for="(tab, i) in tabs"
      :key="i"
      @click="setActiveTab(i)"
      :class="{
        'border-b border-b-4 border-active-orange text-active-orange':
          activeTab === i,
      }"
      class="text-base pb-4"
    >
      {{ tab }}
    </button>
  </div>
</template>

<script setup>

const emit = defineEmits(["updateActiveTab"]);
const props = defineProps({
  activeTab: Number,
  tabs: {
    type: Array,
    required: true,
  },
});

function setActiveTab(newIndex) {
  emit("updateActiveTab", newIndex);
}
</script>
