<template>
  <transition name="fade">
    <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-25 z-40"></div>
  </transition>

  <transition name="slide">
    <aside
      v-if="isOpen"
      class="fixed right-0 top-0 z-50 bg-white w-[588px] h-full shadow-lg"
    >
      <div class="py-7 px-9 h-full flex flex-col">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-medium">{{ label }}</h2>
          <span
            class="relative rounded-full bg-icon-gray-bg w-8 h-8 flex items-center justify-center cursor-pointer"
            @click="closeDrawer"
          >
            <IconClose />
          </span>
        </div>

        <slot name="content"></slot>
      </div>
    </aside>
  </transition>
</template>

<script setup>
import { ref, reactive } from "vue";
import IconClose from "../../IconSVGs/IconClose.vue";

defineProps(["label"]);

const isOpen = ref(false);


function closeDrawer() {
  isOpen.value = false;
}

function openDrawer() {
  isOpen.value = true;
}

defineExpose({
  closeDrawer,
  openDrawer,
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}
</style>
