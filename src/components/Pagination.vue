<template>
  <div class="flex justify-center items-center mt-4 p-5">
    <button
      @click="prevPage"
      :disabled="!paginationMeta.hasPrevPage"
      class="px-4 py-2 mx-1 rounded border text-gray-500 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Previous
    </button>
    <!-- Dynamically generated page numbers -->
    <button
      v-for="page in pageRange"
      :key="page"
      @click="gotoPage(page)"
      :class="{ 'bg-blue-500 text-white': paginationMeta.page === page }"
      class="px-4 py-2 mx-1 rounded border hover:bg-blue-500 hover:text-white"
    >
      {{ page }}
    </button>
    <button
      @click="nextPage"
      :disabled="!paginationMeta.hasNextPage"
      class="px-4 py-2 mx-1 rounded border text-gray-500 bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Next
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

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
  const totalPages = props.paginationMeta.totalPages;
  const currentPage = props.paginationMeta.page;
  const maxPageButtons = 5;
  const range = [];

  if (currentPage > 2 && totalPages > maxPageButtons) {
    // Include one page before the current page
    if (currentPage > 1) {
      range.push(currentPage - 1);
    }

    // Include the current page
    range.push(currentPage);

    // Include one page after the current page if it's not the last page
    if (currentPage < totalPages) {
      range.push(currentPage + 1);
    }

    // Include the last two pages
    range.push(totalPages - 1, totalPages);
  } else {
    // If the current page is 2 or less, or total pages are 5 or less,
    // simply include the first three and last two pages
    for (let i = 1; i <= Math.min(3, totalPages); i++) {
      range.push(i);
    }

    if (totalPages > maxPageButtons) {
      range.push(totalPages - 1, totalPages);
    }
  }

  return range;
});

const currentPage = computed(() => props.paginationMeta.page);
</script>
