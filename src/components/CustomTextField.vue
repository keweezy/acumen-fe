<template>
  <div class="w-full">
    <label :for="id" class="text-dark-02 font-medium text-base block mb-2">
      {{ label }}
    </label>
    <input
      :type="type"
      :value="value"
      :id="id"
      class="rounded border-table-title border text-table-title text-base bg-icon-gray-bg px-3 py-2 w-full"
      :placeholder="placeholder"
      v-bind="$attrs"
    />
  </div>
</template>

<script setup>
defineProps({
  label: String,
  type: {
    default: "text",
    type: String,
  },
  value: {
    type: String || Number,
    required: true,
  },
  placeholder: String,
  id: String,
});
</script>
