<template>
  <div class="w-full">
    <label :for="id" class="text-dark-02 font-medium text-base block mb-2">
      {{ label }}
    </label>
    <select
      :value="value"
      :id="id"
      class="rounded border-table-title border text-table-title text-base bg-icon-gray-bg px-3 py-2 w-full"
      v-bind="$attrs"
      @input="$emit('update:value', $event.target.value)"
    >
      <option value="">Please Select</option>
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  value: {
    type: [String, Number],
    required: true,
  },
  id: String,
  options: {
    type: Array,
    required: true,
    default: () => [],
  },
});
</script>
