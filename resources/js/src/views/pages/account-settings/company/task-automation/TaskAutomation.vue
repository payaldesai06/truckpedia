<template>
  <div class="vx-row">
    <div class="vx-col flex items-center justify-between w-full mb-10">
      <h2 class="text-2xl opacity-75">Task Automation</h2>
    </div>
    <!-- <div class="vx-col md:flex w-full mb-6 justify-between">
      <div class="md:w-11/12">
        <label class="block text-gray-200 mb-1 md:mb-0 pr-4">
          <b>1.</b> Send email updates to collaborators automatically when the
          assigned driver updates the driver app?
        </label>
      </div>

      <div class="md:w-4">
        <vs-checkbox
          class="h-full inline-flex"
          v-model="taskAutomation.auto_send_status_updates_to_collaborators"
        >
        </vs-checkbox>
      </div>
    </div>

    <div class="vx-col md:flex w-full mb-6 justify-between">
      <div class="md:w-11/12">
        <label class="block text-gray-200 mb-1 md:mb-0 pr-4">
          <b>2.</b> Send email updates to dispatcher automatically when the
          assigned driver updates the driver app?
        </label>
      </div>

      <div class="md:w-4">
        <vs-checkbox
          class="h-full inline-flex"
          v-model="taskAutomation.auto_send_status_updates_to_dispatcher"
        >
        </vs-checkbox>
      </div>
    </div>

    <div class="vx-col md:flex w-full mb-6 justify-between">
      <div class="md:w-11/12">
        <label class="block text-gray-200 mb-1 md:mb-0 pr-4">
          <b>3.</b> Send POD to collaborators automatically when the assigned
          driver ends the load in the driver app?
        </label>
      </div>

      <div class="md:w-4">
        <vs-checkbox
          class="h-full inline-flex"
          v-model="taskAutomation.auto_send_pod_to_collaborators"
        >
        </vs-checkbox>
      </div>
    </div> -->

    <div class="vx-col md:flex w-full mb-6 justify-between">
      <div class="md:w-11/12">
        <label
          class="block text-gray-200 mb-1 md:mb-0 pr-4"
          for="inline-full-name"
        >
          <b>1.</b> Send detention requests to collaborators automatically on
          all loads?
        </label>
      </div>

      <div class="md:w-4">
        <vs-checkbox
          class="h-full inline-flex"
          v-model="taskAutomation.auto_send_detention_requests_to_collaborators"
        >
        </vs-checkbox>
      </div>
    </div>

    <div class="vx-col md:flex md:items-center mb-6">
      <div class="md:w-full">
        <div class="md:flex items-center">
          <div class="indent">$</div>
          <input
            class="w-16 appearance-none bg-transparent border-0 border-b-2 border-grey text-gray-700 px-2 focus:outline-none"
            type="decimal"
            v-model="taskAutomation.detention_charge_per_hour"
            aria-label="Full name"
          />
          per hour after

          <input
            class="w-16 appearance-none bg-transparent border-0 border-b-2 border-grey text-gray-700 px-2 focus:outline-none"
            type="number"
            v-model="taskAutomation.detention_free_time_in_minutes"
            aria-label="Full name"
          />
          minutes of free waiting time.
        </div>
      </div>
    </div>

    <div class="vx-col md:flex w-full mb-6 justify-between">
      <div class="md:w-11/12">
        <label
          class="block text-gray-200 mb-1 md:mb-0 pr-4"
          for="inline-full-name"
        >
          <b>2.</b> Auto show and deduct dispatcher fee on QuickBooks and
          invoice?
        </label>
      </div>

      <div class="md:w-4">
        <vs-checkbox
          class="h-full inline-flex"
          v-model="taskAutomation.show_dispatcher_fee_on_invoice"
        >
        </vs-checkbox>
      </div>
    </div>

    <div class="vx-col md:flex w-full mb-6 justify-between">
      <div class="md:w-11/12">
        <label
          class="block text-gray-200 mb-1 md:mb-0 pr-4"
          for="inline-full-name"
        >
          <b>3.</b> Auto show and deduct factoring fee on QuickBooks and
          invoice?
        </label>
      </div>

      <div class="md:w-4">
        <vs-checkbox
          class="h-full inline-flex"
          v-model="taskAutomation.show_factoring_fee_on_invoice"
        >
        </vs-checkbox>
      </div>
    </div>

    <div
      class="vx-col w-full justify-end md:flex md:items-center mb-6 p-0 mt-5"
    >
      <vs-button type="filled" color="primary" @click="submit"
        >Submit</vs-button
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskAutomation",

  data() {
    return {
      taskAutomation: {
        auto_send_status_updates_to_collaborators: false,
        auto_send_status_updates_to_dispatcher: false,
        auto_send_pod_to_collaborators: false,
        auto_send_detention_requests_to_collaborators: false,
        show_dispatcher_fee_on_invoice: false,
        show_factoring_fee_on_invoice: false,
        detention_free_time_in_minutes: 0,
        detention_charge_per_hour: 0,
      },
    };
  },

  mounted() {
    this.getTaskAutomationDetails();
  },

  methods: {
    getTaskAutomationDetails() {
      this.loading = true;
      this.$store
        .dispatch("task-automation/getTaskAutomation")
        .then((result) => {
          this.taskAutomation = result.data.payload;
        })
        .catch((error) => {
          console.log("error", error);
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text: error.response.data.message,
          });
        })
        .finally(() => (this.loading = false));
    },

    async submit() {
      this.$vs.loading();
      try {
        await this.$store
          .dispatch("task-automation/updateTaskAutomation", this.taskAutomation)
          .then((result) => {
            this.$vs.notify({
              color: "primary",
              title: "Task Automation",
              text: "Task automation updated successfully.",
            });
          });
      } catch (error) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
div.indent {
  text-indent: 50px;
}
</style>
