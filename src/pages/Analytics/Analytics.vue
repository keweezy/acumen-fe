<template>
  <div class="flex-1 px-4 md:px-6 lg:px-8 py-6 overflow-y-auto">
    <div class="flex gap-x-4 mb-3">
      <span class="text-dark-02 text-base">Last updated 1 minute ago</span>
      <div class="flex items-center gap-x-3 cursor-pointer">
        <IconRefresh />
        <span class="text-brand-green">Refresh</span>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <analytics-card
        :value="chatDashboardInfo.usersOnline"
        :loading="loading"
        title="Users Online"
      />
      <analytics-card
        :loading="loading"
        title="Users Active Today"
        :value="chatDashboardInfo.usersActiveToday"
      />
      <analytics-card
        :loading="loading"
        title="Users Active Today this Month"
        :value="chatDashboardInfo.usersActiveThisMonth"
      />
      <analytics-card
        :loading="loading"
        title="Peak Concurrency This Month"
        :value="chatDashboardInfo.peakConcurrency"
      />
      <analytics-card
        :loading="loading"
        title="Dashboard"
        :value="dashboardData"
      />
    </div>
    <hr class="mt-6" />
  </div>
</template>

<script>
import AnalyticsCard from "../../components/AnalyticsCard.vue";
import { ref, onBeforeMount, computed } from "vue";
import axios from "../../http/index";
import { formatBytes } from "../../utilities";
import IconRefresh from "../../IconSVGs/IconRefresh.vue";

export default {
  components: {
    AnalyticsCard,
    IconRefresh
  },
  setup() {
    const loading = ref(false);
    const chatDashboardInfo = ref({});

    onBeforeMount(() => {
      fetchChatDashboard();
    });

    const dashboardData = computed(() => {
      return `${formatBytes(chatDashboardInfo.value.dashboard)}`;
    });

    function fetchChatDashboard() {
      loading.value = true;
      axios
        .get(`dashboard`)
        .then((response) => {
          loading.value = false;
          chatDashboardInfo.value = response.data.data;
        })
        .catch((error) => {
          console.log(error, "error");
          loading.value = false;
        });
    }

    return {
      chatDashboardInfo,
      dashboardData,
      loading,
    };
  },
};
</script>
