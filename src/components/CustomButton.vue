<template>
  <button
    class="rounded-full py-1 px-9 mr-4 text-base"
    :class="{
      'bg-brand-blue text-white': primary,
      'text-light-gray': !primary,
    }"
    v-bind="$attrs"
  >
    <span>{{ label }}</span>
  </button>
</template>

<script setup>
defineProps({
  label: String,
  primary: {
    type: Boolean,
    default: false
  }
});

</script>

<style scoped></style>
