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
                Driver time off calender
              </strong>
            </div>
          </div>
          <div class="ml-4 self-end">
            <vs-button
              color="primary"
              size="small"
              icon="add"
              @click="openTimeOffForm"
              type="filled"
            />
          </div>
        </div>
      </template>
      <!-- Body Section -->
      <div class="w-full mt-4">
        <section v-if="driverData">
          <template v-if="(driverData.timeOffCalendars || []).length">
            <div class="vx-row time-off-card" v-for="(offDates, ix) in driverData.timeOffCalendars" @click="openTimeOffForm(offDates)">
              <p class="block">
                <vs-icon name="clock" /> 
                <span v-if="offDates.start.date"> {{ offDates.start.date }}</span>
                <span v-if="offDates.start.time"> {{ offDates.start.time }}</span>
                <span v-if="offDates.start.timezone"> {{ offDates.start.timezone }}</span>
                <span> to </span>
                <span v-if="offDates.end.date"> {{ offDates.end.date }}</span>
                <span v-if="offDates.end.time"> {{ offDates.end.time }}</span>
                <span v-if="offDates.end.timezone"> {{ offDates.end.timezone }}</span>
              </p>
              <div class="ml-4 self-end time-off-delete-icon">
                <vs-icon
                  v-if="offDates.id"
                  class="cursor-pointer"
                  icon="delete"
                  size="small"
                  color="danger"
                  @click.stop.native="initDelete(offDates)"
                />
              </div>
            </div>
          </template>
          <section v-else>
            <strong class="text-primary">
              No time off records added
            </strong>
          </section>
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
    <DriverTimeOffCRUDDialog 
      ref="DriverTimeOffForm" 
      :isDialogActive="!!showDriverTimeOffForm"
      :selectedData="showDriverTimeOffForm"
      @submit="submitDriverTimeOffForm"
      @close="showDriverTimeOffForm = false"
      @delete="deleteDriverTimeOff"
    />
    <DeletePrompt
      id="delete-prompt"
      v-if="showDeletePrompt"
      :isPromptActive="showDeletePrompt"
      :label="'Do you want to delete this record ?'"
      @onAccept="deleteDriverTimeOff(dataToDelete)"
      @onClose="showDeletePrompt = false"
    >
    </DeletePrompt>
  </div>
</template>

<script>
export default {
  name :'DriverTimeOffCalender',
  components: {
    DriverTimeOffCRUDDialog: () => import('./DriverTimeOffCRUDDialog.vue'),
    DeletePrompt: () => import("./DeletePrompt.vue"),
  },
  data() {
    return {
      isDialogActive: false,
      showDriverTimeOffForm: false,
      driverData: null,
      showDeletePrompt: false,
      dataToDelete: null
    };
  },
  methods: {
    open(data) {
      this.isDialogActive = true;
      if(data) {
        this.driverData = data;
      }
    },
    toggleDialog() {
      this.isDialogActive = !this.isDialogActive;
    },
    close() {
      this.isDialogActive = false;
      this.$emit('close');
    },
    openTimeOffForm(data) {
      this.showDriverTimeOffForm = data || true;
    },
    closeTimeOffForm() {
      this.showDriverTimeOffForm = false;
    },
    submitDriverTimeOffForm(formData) {
      const { id } = formData;
      if (id) {
        this.updateDriverTimeOff(formData);
        return;
      } else {
        this.createDriverTimeOff({
          userId: (this.driverData || {}).userId,
          ...formData
        });
      }
    },
    async createDriverTimeOff(payload) {
      try {
        const { data } = await this.$store.dispatch(
          "planningV2/createDriverTimeOff",
          payload
        );
        this.$vs.notify({
          title: "Success",
          text: "Time off info added successfully",
          color: "success",
        });
        this.closeTimeOffForm();
        this.close();
        this.$emit('refresh');
      } catch (error) {
        console.log("error", error)
        this.$vs.notify({
          title: "Error",
          text: "Failed to submit time off info",
          color: "danger",
        });
      }
    },
    async updateDriverTimeOff(payload) {
      const { id, start, end } = payload || {};
      try {
        const { data } = await this.$store.dispatch(
          "planningV2/updateDriverTimeOff",
          { id, start, end }
        );
        this.$vs.notify({
          title: "Success",
          text: "Time off info updated successfully",
          color: "success",
        });
        this.closeTimeOffForm();
        this.close();
        this.$emit('refresh');
      } catch (error) {
        console.log("error", error)
        this.$vs.notify({
          title: "Error",
          text: "Failed to update time off info",
          color: "danger",
        });
      }
    },
    async deleteDriverTimeOff (payload) {
      this.showDeletePrompt = false;
      const { id } = payload || {};
      if (!id) return;
      try {
        const { data } = await this.$store.dispatch(
          "planningV2/deleteDriverTimeOff",
          { id }
        );
        this.$vs.notify({
          title: "Success",
          text: "Time off info deleted successfully",
          color: "success",
        });
        this.closeTimeOffForm();
        this.updateDriverData(id);
        this.$emit('refresh');
      } catch (error) {
        console.log("error", error)
        this.$vs.notify({
          title: "Error",
          text: "Failed to delete time off info",
          color: "danger",
        });
      }
    },
    initDelete(data) {
      this.showDeletePrompt = true;
      this.dataToDelete = data;
    },
    updateDriverData(deletedId) {
      this.driverData.timeOffCalendars = this.driverData.timeOffCalendars.filter(
        (item) => item.id !== deletedId
      );
    }
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