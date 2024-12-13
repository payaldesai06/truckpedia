<template>
  <div>
    <!-- Header Section -->
    <div :class="['view-header px-0', isCollapsed ? 'collapsed' : 'expanded']">
      <div class="flex">
        <div class="flex items-center overflow-x-auto">
          <vs-chip
            class="cursor-pointer mx-2 text-sm min-w-75"
            v-for="{ id, title, isActive } in viewOptions"
            :key="id"
            :color="isActive ? 'primary' : ''"
            @click.native="changeTab(id)"
          >
            {{ title }}
          </vs-chip>
        </div>
      </div>
    </div>

    <!-- Content Section -->
    <div class="mt-60" v-if="currentComponent">
      <component
        :is="currentComponent"
        :allTags="allTags"
        :tabId="activeTabId"
      />
    </div>
  </div>
</template>

<script>
import IncidentsList from "./IncidentsList.vue";
import IncidentsStatistics from "./IncidentsStatistics.vue";
import IncidentsSpreadsheet from "./IncidentsSpreadsheet.vue";

import { getUniqueIdV4 } from "@/helpers/helper";
import { mapGetters } from 'vuex';

export default {
  name: "Safety",
  components: {
    IncidentsList,
    IncidentsStatistics,
    IncidentsSpreadsheet,
  },
  props: {
    isCollapsed: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters('tag', {
      tagLists: 'allTags',
    }),

    currentComponent() {
      return this.viewOptions.find((option) => option.isActive).component;
    },
    activeTabId() {
      return this.viewOptions.find((option) => option.isActive).id;
    },
  },
  data() {
    return {
      viewOptions: [
        {
          id: 1,
          title: "Spreadsheet",
          component: "IncidentsSpreadsheet",
          isActive: true,
        },
        {
          id: 2,
          title: "List",
          component: "IncidentsList",
          isActive: false,
        },
        {
          id: 3,
          title: "Statistics",
          component: "IncidentsStatistics",
          isActive: false,
        },
      ],
      allTags: [],
    };
  },
  created() {
    const { tab } = this.$route.query;
    const tabExists = (tabId) =>
      this.viewOptions.some(({ id }) => id === tabId);

    if (tab) {
      if (tabExists(parseInt(tab))) {
        this.changeTab(parseInt(tab));
      }

      this.$router.push({
        query: {},
      });
    }

    if (this.tagLists.length === 0) {
      this.getAllTags();
    } else {
      this.allTags = this.tagLists.map((item) => ({
        ...item,
        uniqueId: getUniqueIdV4(),
      }));
    }
  },
  methods: {
    changeTab(id) {
      this.viewOptions.forEach((option) => {
        option.isActive = option.id === id;
      });
    },
    async getAllTags() {
      try {
        const response = await this.$store.dispatch("tag/getAllTags");
        this.allTags = response.payload.data.map((item) => ({
          ...item,
          uniqueId: getUniqueIdV4(),
        }));
      } catch (error) {}
    },
  },
};
</script>

<style lang="scss" scoped>
.view-header {
  height: 60px;
  padding: 1.2rem;
  background: rgb(255, 255, 255);
  position: fixed;
  transition: all 0.4s ease;
  top: 0;
  border-bottom: 1px solid #0002;
  z-index: 998;
}

// Utility Classes

.expanded {
  width: calc(100% - 278px);
}

.collapsed {
  width: calc(100% - 97px);
}

.min-w-75 {
  min-width: 75px;
}

.mt-60 {
  margin-top: 60px;
}
</style>
