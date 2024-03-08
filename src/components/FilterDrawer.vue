<template>
  <Drawer ref="drawerRef" label="Filter Table">
    <template v-slot:content>
      <div class="mb-8 flex gap-x-3 flex-wrap">
        <button
          v-for="day in ['Today', 'Last 7 days', 'This month', 'Last 3 months']"
          :key="day"
          :class="{
            'border-active-orange text-active-orange bg-light-orange':
              activeDay === day,
            'border-border-gray text-text-black': activeDay !== day,
          }"
          class="px-2.5 py-3 text-sm font-medium border rounded-3xl mr-2"
          @click="setActiveDay(day)"
        >
          {{ day }}
        </button>
      </div>
      <form class="flex flex-col grow" @submit.prevent="handleFilter">
        <div class="grow">
          <div class="flex gap-x-4 items-center justify-between mb-3">
            <custom-text-field
              label="Date from"
              :value="formFields.dateFrom"
              type="date"
              id="dateFrom"
              name="dateFrom"
              @input="handleInput"
              :required="activeDay === null || !!formFields.dateTo"
            />
            <custom-text-field
              label="Date To"
              :value="formFields.dateTo"
              type="date"
              id="dateTo"
              name="dateTo"
              @input="handleInput"
              :required="activeDay === null || !!formFields.dateFrom"
            />
          </div>

          <custom-select-field
            label="Messages"
            :value="formFields.messages"
            type="text"
            id="messages"
            name="messages"
            class="mb-3"
            @input="handleInput"
            required
            :options="messagesOptions"
          />
          <custom-select-field
            label="Media Storage Used"
            :value="formFields.media_storage_used"
            type="text"
            id="media_storage_used"
            name="media_storage_used"
            @input="handleInput"
            required
            :options="mediaStorageOptions"
          />
        </div>

        <custom-button
          class="px-5 mb-5"
          label="Filter Table"
          type="submit"
          primary
        />
        <custom-button
          class="px-5"
          label="Clear Filter"
          @click="clearFilters"
          type="button"
        />
      </form>
    </template>
  </Drawer>
</template>

<script setup>
import { ref, reactive } from "vue";
import CustomTextField from "./CustomTextField.vue";
import CustomSelectField from "./CustomSelectField.vue";
import CustomButton from "./CustomButton.vue";
import Drawer from "./Drawer/Drawer.vue";

const messagesOptions = [
  { label: "0 - 500 Messages", value: "0-500" },
  { label: "500 - 2000 messages", value: "500-2000" },
  { label: "2000+ Messages", value: "over-2000" },
];

const mediaStorageOptions = [
  { label: "0 - 50 MB", value: "0-50" },
  { label: "50 MB - 200 MB", value: "50-200" },
  { label: "200MB - 1GB", value: "200 - 1gb" },
  { label: "1GB+", value: "over-1gb" },
];

const activeDay = ref(null);
const drawerRef = ref(null);
const formFields = reactive({
  dateFrom: "",
  dateTo: "",
  messages: "",
  media_storage_used: "",
});

function setActiveDay(day) {
  activeDay.value = day;
}

function clearFilters() {
  activeDay.value = null;
  resetFormFields();
}
function handleFilter() {
  console.log("filter handled");
}

function handleInput($event) {
  const { name, value } = $event.target;
  formFields[name] = value;
}

function openDrawer() {
  if (drawerRef.value) {
    drawerRef.value.openDrawer();
  }
}

function resetFormFields() {
  formFields.dateFrom = "";
  formFields.dateTo = "";
  formFields.messages = "";
  formFields.media_storage_used = "";
}

defineExpose({
  openDrawer,
});
</script>

<style lang="scss" scoped></style>
