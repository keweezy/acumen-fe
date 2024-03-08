<template>
  <div class="flex-1 px-4 md:px-6 lg:px-8 py-6 overflow-y-auto">
    <filter-drawer ref="drawerRef" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <analytics-card
        :value="chatDashboardInfo.numberOfUsers"
        :loading="loading"
        title="NO OF USERS"
        @click="openDrawer()"
        class="cursor-pointer"
      />
      <analytics-card
        :loading="loading"
        title="TOTAL MESSAGE SENT"
        :value="chatDashboardInfo.totalMessagesSent"
      />
      <analytics-card
        :loading="loading"
        title="TOTAL MEDIA STORAGE USED"
        :value="storageUsed"
      />
      <analytics-card
        :loading="loading"
        title="TOTAL MEDIA SENT"
        :value="chatDashboardInfo.totalMediaSent"
      />
    </div>

    <div class="flex justify-between mb-4 mt-8 border-b-2">
      <Tab
        :activeTab="activeTab"
        @updateActiveTab="activeTab = $event"
        :tabs="tabs"
      />
      <SearchField />
    </div>

    <div
      class="bg-white rounded-lg shadow overflow-hidden my-6"
      v-if="activeTab === 0"
    >
      <MessageTable
        :headers="tableColumns"
        :rows="messages"
        :formatFunction="customFormat"
        :loading="tableLoading"
      >
        <template v-slot:cell="{ value, key }">
          {{ customFormat(value, key) }}
        </template>
      </MessageTable>
      <Pagination @pageChange="pageChange" :paginationMeta="paginationMeta" />
    </div>
  </div>
</template>

<script>
import AnalyticsCard from "../../components/AnalyticsCard/AnalyticsCard.vue";
import MessageTable from "../../components/Table.vue";
import Pagination from "../../components/Pagination.vue";
import Tab from "../../components/Tab.vue";
import SearchField from "../../components/SearchField.vue";
import FilterDrawer from "../../components/FilterDrawer.vue";
import { ref, onBeforeMount, computed } from "vue";
import axios from "../../http/index";
import { formatBytes, formatDate, formatToThousandth } from "../../utilities";

export default {
  components: {
    AnalyticsCard,
    MessageTable,
    SearchField,
    Tab,
    Pagination,
    FilterDrawer,
  },
  setup() {
    const messages = ref([]);
    const loading = ref(false);
    const tableLoading = ref(false);
    const drawerRef = ref(null);
    const chatDashboardInfo = ref({});
    const paginationMeta = ref({});
    const activeTab = ref(0);
    const tabs = ["Direct Messages", "Groups"];
    const tableColumns = [
      "User",
      "Messages Sent",
      "Media Storage Used",
      "Date Created",
      "Media Sent",
    ];

    const customFormat = (value, key) => {
      if (key === "date_created") return formatDate(value);
      if (key === "media_storage_used") return formatBytes(value);
      if (key === "message_sent") return formatToThousandth(value);
      return value;
    };

    onBeforeMount(() => {
      fetchMessages();
      fetchChatDashboard();
    });

    const storageUsed = computed(() => {
      return `${formatBytes(chatDashboardInfo.value.totalStorageUsed)}`;
    });

    function openDrawer() {
      if (drawerRef.value) {
        drawerRef.value.openDrawer();
      }
    }

    function fetchMessages(page = 1) {
      tableLoading.value = true;
      axios
        .get(`messages`, {
          params: { page: page, limit: 5 },
        })
        .then((response) => {
          const { data, ...rest } = response.data;
          tableLoading.value = false;
          messages.value = response.data.data;
          paginationMeta.value = { ...rest };
        })
        .catch((error) => {
          console.log(error, "error");
          tableLoading.value = false;
        });
    }
    function fetchChatDashboard() {
      loading.value = true;
      axios
        .get(`chat_dashboard`)
        .then((response) => {
          loading.value = false;
          chatDashboardInfo.value = response.data.data;
        })
        .catch((error) => {
          console.log(error, "error");
          loading.value = false;
        });
    }

    function pageChange(page) {
      fetchMessages(page);
    }

    return {
      messages,
      openDrawer,
      drawerRef,
      loading,
      chatDashboardInfo,
      storageUsed,
      tableLoading,
      paginationMeta,
      pageChange,
      activeTab,
      tabs,
      customFormat,
      tableColumns,
    };
  },
};
</script>
