<template>
  <div class="dispatch-calender">
    <TimelineTab
      ref="timelineTab"
      :returnData="{
        loads: true,
        timeOffCalendars: false,
      }"
      :parentKey="'dispatchTimeline'"
      :showBarsInSingleRow="true"
      @updateLoad="editLoadSidebar"
    >
    </TimelineTab>
  </div>
</template>

<script>
import TimelineTab from '@/views/pages/tripV2/planning/TimelineTab';
export default {
  name: 'DispatchCalender',
  components: {
    TimelineTab,
  },
  methods: {
    editLoadSidebar(data) {
      this.$emit('editLoadSidebar', { loadId: data });
    },
    refreshPageContent() {
      const { refreshPageContent } = this.$refs.timelineTab || {};
      if (refreshPageContent) {
        this.$refs.timelineTab.refreshPageContent();
      }
    },
  },
};
</script>
