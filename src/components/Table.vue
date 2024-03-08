<template>
  <div class="overflow-x-auto relative">
    <table class="w-full text-left">
      <thead class="text-sm uppercase ">
        <tr class="text-table-title border-b">
          <!-- Table headers -->
          <th scope="col" class="py-5 px-6 font-medium">User</th>
          <th scope="col" class="py-5 px-6 font-medium">Messages Sent</th>
          <th scope="col" class="py-5 px-6 font-medium">Media Storage Used</th>
          <th scope="col" class="py-5 px-6 font-medium">Date Created</th>
          <th scope="col" class="py-5 px-6 font-medium">Media Sent</th>
          <th scope="col" class="py-5 px-6 font-medium">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(message, index) in messages"
          :key="index"
          class="bg-white border-b"
        >
          <td class="py-4 px-6 font-medium text-deep-black">
            {{ message.full_name }}
          </td>
          <td class="py-4 px-6  font-medium text-deep-black">
            {{ formatToThousandth(message.message_sent) }}
          </td>
          <td class="py-4 px-6  font-medium text-deep-black">
            {{ `${formatBytes(message.media_storage_used)}` }}
          </td>
          <td class="py-4 px-6  font-medium text-deep-black">
            {{ formatDate(message.date_created) }}
          </td>
          <td class="py-4 px-6  font-medium text-deep-black">
            {{ message.media_sent }}
          </td>
          <td class="py-4 px-6">
            <!-- Action buttons -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import SkeletonLoader from "./SkeletonLoader.vue";
import { formatDate, formatBytes, formatToThousandth } from "../utilities";

const props = defineProps(["messages", "loading"]);
</script>
