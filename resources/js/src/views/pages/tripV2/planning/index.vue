<template>
  <div class="planning-page">
    <!-- Header Tab  -->
    <Header
      v-if="selectedComponentId"
      :viewOptions="viewOptions"
      :activeId="selectedComponentId"
      @changeTab="changeTab"
      @addSchedule="openScheduleForm"
    />
    <!-- Content -->
    <div class="content-container" v-if="currentComponent">
      <component
        :is="currentComponent"
        ref="componentData"
        @updateSchedule="openScheduleForm"
        @updateLoad="openLoadSidebar"
      />
    </div>
    <!-- Schedule Form Pop Up  -->
    <ScheduleForm
      v-if="showScheduleForm"
      :isDialogActive="showScheduleForm"
      :schedulesArray="scheduleFormData"
      :truckOptions="truckOptions"
      @close="closeScheduleForm"
      @refresh="refreshTimeline"
    />

    <!-- Load Sidebar, turn on if needed @refreshCallingUi="refreshPageContent" -->
    <load-sidebar
      v-show="isSidebarActive"
      :isSidebarActive="isSidebarActive"
      @closeSidebar="closeLoadSidebar"
      :data="sidebarData"
      @refreshCallingUi="refreshPageContent"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: "PlanningPage",
  components: {
    Header: () => import("./components/Header"),
    PlanningTab: () => import("./PlanningTab"),
    TimelineTab: () => import("./TimelineTab"),
    ScheduleForm: () => import("./components/ScheduleFormDialog"),
    LoadSidebar: () => import('@/views/pages/dispatch/load/LoadSidebar.vue')
  },
  provide() {
    return {
      openLoadSidebar: this.openLoadSidebar,
    };
  },
  data() {
    return {
      selectedComponentId: null,
      showScheduleForm: false,
      scheduleFormData: null,
      isSidebarActive: false,
      sidebarData: {},
    };
  },
  async created() {
    this.selectedComponentId = this.viewOptions[0].id;
    await this.$store.dispatch('load/getAllDriverTruckTrailerForLoadDriver');
  },
  computed: {
    ...mapGetters('load', ['allDriverTruckTrailerForLoadDriver']),
    viewOptions() {
      return [
        {
          id: 1,
          title: "Planning",
          name: "PlanningTab",
          isActive: true,
        },
        {
          id: 2,
          title: "Timeline",
          name: "TimelineTab",
          isActive: false,
        },
      ];
    },
    currentComponent() {
      const { name } =
        this.viewOptions.find((item) => item.id === this.selectedComponentId) ||
        {};
      return name || null;
    },
    truckOptions() {
      return this.allDriverTruckTrailerForLoadDriver.trucks;
    },
  },
  methods: {
    changeTab(tabId) {
      this.selectedComponentId = tabId;
    },
    openScheduleForm(data = null) {
      this.showScheduleForm = true;
      this.scheduleFormData = data || null;
    },
    refreshPageContent() {
      if (this.currentComponent === 'TimelineTab') {
        this.refreshTimeline();
      } else if (this.currentComponent === 'PlanningTab') {
        this.refreshPlanningTab();
      }
    },
    refreshTimeline() {
      if (this.currentComponent === 'TimelineTab' && this.$refs.componentData) {
        const { refreshPageContent } = this.$refs.componentData || {};
        if (refreshPageContent) {
          this.$refs.componentData.refreshPageContent();
        }
      }
    },
    refreshPlanningTab() {
      if (this.currentComponent === 'PlanningTab' && this.$refs.componentData) {
        const { getLoadsForPlanning } = this.$refs.componentData || {};
        if (getLoadsForPlanning) {
          this.$refs.componentData.getLoadsForPlanning();
        }
      }
    },
    closeScheduleForm() {
      this.showScheduleForm = false;
      this.scheduleFormData = null;
    },
    openLoadSidebar(loadId) {
      this.sidebarData = { loadId };
      this.isSidebarActive = true;
    },
    closeLoadSidebar() {
      this.isSidebarActive = false;
      this.sidebarData = {};
    },
  },
};
</script>
