<template>
  <div class="dispatch-calender">
    <DragAndDropTimeline
      ref="dragAndDropTimeline"
      :returnData="{
        loads: true,
        timeOffCalendars: false,
      }"
      :parentKey="'dispatchTimeline'"
      :showBarsInSingleRow="true"
      :infoClassList="['v-centered-info']"
      @updateLoad="editLoadSidebar"
    >
    </DragAndDropTimeline>
  </div>
</template>

<script>
import DragAndDropTimeline from './calendar/dragAndDrop';
export default {
  name: 'DispatchCalender',
  components: {
    DragAndDropTimeline,
  },
  methods: {
    editLoadSidebar(data) {
      this.$emit('editLoadSidebar', { loadId: data });
    },
    refreshPageContent() {
      const { refreshPageContent } = this.$refs.dragAndDropTimeline || {};
      if (refreshPageContent) {
        this.$refs.dragAndDropTimeline.refreshPageContent();
      }
    },
  },
};
</script>
