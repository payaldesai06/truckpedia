<template>
  <div>
    <Dialog
      class="dialog"
      :visible="isDialogActive"
      :closable="false"
      :modal="true"
      :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
      :style="{ width: '40vw' }"
      :contentStyle="{ overflow: 'auto', padding: '2px 70px 30px' }"
    >
      <!-- Header Section -->
      <template #header>
        <div class="w-full flex items-center justify-between">
          <div class="w-full flex justify-between border-right">
            <div class="flex self-center">
              <strong>
                Schedules List of {{ 'TruckNumber' }}
              </strong>
            </div>
          </div>
          <div class="ml-4 self-end">
            <vs-button
              color="primary"
              size="small"
              icon="add"
              @click="openScheduleForm(null)"
              type="filled"
            />
          </div>
        </div>
      </template>
      <!-- Body Section -->
      <div class="w-full mt-4">
        <section v-if="(schedulesList || []).length">
					<div class="vx-row time-off-card" v-for="(schedule, ix) in schedules" @click="openScheduleForm(schedule)">
							<p class="flex align-center">
                <vs-icon name="clock" />
                <section v-if="schedule.frequentType === 'once'">
                  <span v-if="schedule.startDate"> {{ new Date(schedule.startDate).toISOString().slice(0, 10) }}</span>
                  <span> to </span>
                  <span v-if="schedule.endDate"> {{ new Date(schedule.endDate).toISOString().slice(0, 10)  }}</span>
                </section>
                <section v-else-if="schedule.frequentType === 'weekly'">
                  Weekly on {{ repeatingDaysText(schedule.weeklySelectedDays) }}
                </section>
							</p>
							<div class="ml-4 self-end time-off-delete-icon">
							<vs-icon
									v-if="schedule.id"
									class="cursor-pointer"
									icon="delete"
									size="small"
									color="danger"
									@click.stop.native="initDelete(schedule)"
							/>
							</div>
					</div>
        </section>
      </div>
      <!-- Footer Section -->
      <template #footer>
        <div class="w-full mt-4">
          <div class="w-1/4 flex ml-auto flex-end">
            <vs-button
              class="w-full mr-0"
              color="primary"
              type="border"
              @click.stop="close"
            >
              Close
            </vs-button>
          </div>
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script>
export default {
  name :'SchedulesListDialog',
  data() {
    return {
      isDialogActive: false,
      showDriverTimeOffForm: false,
      schedules: null,
      showDeletePrompt: false,
      dataToDelete: null,
      weekDays: [
        { text: "Mon", value: 1 },
        { text: "Tue", value: 2 },
        { text: "Wed", value: 3 },
        { text: "Thu", value: 4 },
        { text: "Fri", value: 5 },
        { text: "Sat", value: 6 },
        { text: "Sun", value: 7 },
      ],
    };
  },
  computed: {
    schedulesList() {
      const weekly = (this.schedules || []).filter(schedule => schedule.frequentType === 'weekly');
      const once = (this.schedules || []).filter(schedule => schedule.frequentType === 'once').sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
      return [...weekly, ...once];
    },
    weekDaysMap () {
      return this.weekDays.reduce((acc, curr) => {
        acc[curr.value] = curr.text;
        return acc;
      }, {});
    },
  },
  methods: {
    open(data) {
      this.isDialogActive = true;
      if(data) {
        this.schedules = data;
      }
    },
    toggleDialog() {
      this.isDialogActive = !this.isDialogActive;
    },
    close() {
      this.isDialogActive = false;
      this.$emit('close');
    },
    initDelete(data) {
      this.showDeletePrompt = true;
      this.dataToDelete = data;
    },
    openScheduleForm(data) {
      this.$emit('updateSchedule', data);
    },
    repeatingDaysText(days) {
      return days.map(day => this.weekDaysMap[day]).join(', ');
    },
  },
}
</script>

<style lang="scss" scoped>
.time-off-card {
  min-height: 40px;
  background-color: aliceblue;
  align-items: center;
  padding: 0 10px;
  border: 1px solid #EEEEEE;
  display: flex;
  justify-content: space-between;
}
.time-off-delete-icon{
  display: contents !important;
}
</style>