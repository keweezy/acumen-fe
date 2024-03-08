import { ref, computed } from 'vue';

export function usePagination(paginationMeta) {
  const currentPage = ref(paginationMeta.page);
  const totalPages = computed(() => paginationMeta.totalPages);
  const maxPageButtons = 5;

  function prevPage() {
    if (currentPage.value > 1) currentPage.value--;
  }

  function nextPage() {
    if (currentPage.value < totalPages.value) currentPage.value++;
  }

  function gotoPage(page) {
    currentPage.value = page;
  }

  const pageRange = computed(() => {
    const range = [];

    if (currentPage.value > 2 && totalPages.value > maxPageButtons) {
      // Logic to create the range
      // Include one page before the current page
      if (currentPage.value > 1) {
        range.push(currentPage.value - 1);
      }

      // Include the current page
      range.push(currentPage.value);

      // Include one page after the current page if it's not the last page
      if (currentPage.value < totalPages.value) {
        range.push(currentPage.value + 1);
      }

      // Include the last two pages
      range.push(totalPages.value - 1, totalPages.value);
    } else {
      // Include the first three and last two pages
      for (let i = 1; i <= Math.min(3, totalPages.value); i++) {
        range.push(i);
      }

      if (totalPages.value > maxPageButtons) {
        range.push(totalPages.value - 1, totalPages.value);
      }
    }

    return range;
  });

  return { currentPage, totalPages, prevPage, nextPage, gotoPage, pageRange };
}
