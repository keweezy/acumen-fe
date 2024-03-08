<template>
  <div class="flex justify-center items-center mt-4 p-5">
    <button
      @click="prevPage"
      :disabled="!paginationMeta.hasPrevPage"
      class="px-4 py-2 mx-1 rounded border text-almost-white disabled:opacity-50 disabled:cursor-not-allowed"
      :class="{
        'bg-disabled-gray': !paginationMeta.hasPrevPage,
        'bg-white hover:bg-gray-100': paginationMeta.hasPrevPage,
      }"
    >
      <
    </button>
    <button
      v-for="page in pageRange"
      :key="page"
      @click="gotoPage(page)"
      :class="{ 'border-brand-blue': paginationMeta.page === page }"
      class="px-4 py-2 mx-1 rounded border hover:border-brand-blue"
    >
      {{ page }}
    </button>
    <button
      @click="nextPage"
      :disabled="!paginationMeta.hasNextPage"
      class="px-4 py-2 mx-1 rounded border text-almost-white disabled:opacity-50 disabled:cursor-not-allowed"
      :class="{
        'bg-disabled-gray': !paginationMeta.hasNextPage,
        'bg-white hover:bg-gray-100': paginationMeta.hasNextPage,
      }"
    >
      >
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  paginationMeta: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["pageChange"]);

function prevPage() {
  if (currentPage.value > 1) emit("pageChange", currentPage.value - 1);
}

function nextPage() {
  if (currentPage.value < totalPages.value)
    emit("pageChange", currentPage.value + 1);
}

function gotoPage(page) {
  emit("pageChange", page);
}

const pageRange = computed(() => {
  const maxPageButtons = 5;
  let range = [];
  if (totalPages.value <= maxPageButtons) {
    for (let i = 1; i <= totalPages.value; i++) {
      range.push(i);
    }
  } else {
    let start = Math.max(1, currentPage.value - 2);
    let end = Math.min(currentPage.value + 2, totalPages.value);
    if (currentPage.value - 1 < 2) {
      end = start + maxPageButtons - 1;
    } else if (totalPages.value - currentPage.value < 2) {
      start = end - maxPageButtons + 1;
    }

    for (let i = start; i <= end; i++) {
      range.push(i);
    }
  }

  return range;
});

const currentPage = computed(() => props.paginationMeta.page);
const totalPages = computed(() => props.paginationMeta.totalPages);
</script>
