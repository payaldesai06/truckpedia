<template>
  <div class="vx-row">
    <div class="vx-col flex items-center justify-between w-full mb-10">
      <h2 class="text-2xl opacity-75">Setting Customizations</h2>
    </div>

    <div class="vx-col md:flex w-full mb-6 justify-between">
      <div class="md:w-11/12">
        <label
          class="block text-gray-200 mb-1 md:mb-0 pr-4"
          for="inline-full-name"
        >
          <b>1.</b> Show driver and truck on Dispatch Pipeline?
        </label>
      </div>

      <div class="md:w-4">
        <vs-checkbox
          class="h-full inline-flex"
          v-model="show_driver_truck_on_pipeline"
        ></vs-checkbox>
      </div>
    </div>

    <div class="vx-col md:flex w-full mb-6 justify-between">
      <div class="md:w-11/12">
        <label
          class="block text-gray-200 mb-1 md:mb-0 pr-4"
          for="inline-full-name"
        >
          <b>2.</b> Show QuickBooks Desktop invoice syncing status on Dispatch
          List?
        </label>
      </div>

      <div class="md:w-4">
        <vs-checkbox
          class="h-full inline-flex"
          v-model="show_qbd_invoice_sync_status_on_list"
        ></vs-checkbox>
      </div>
    </div>

    <div class="vx-col md:flex w-full mb-6 justify-between">
      <div class="md:w-11/12">
        <label
          class="block text-gray-200 mb-1 md:mb-0 pr-4"
          for="inline-full-name"
        >
          <b>3.</b> Show driver location on Calendar Map?
        </label>
      </div>

      <div class="md:w-4">
        <vs-checkbox
          class="h-full inline-flex"
          v-model="show_driver_location_on_calendar_map"
        ></vs-checkbox>
      </div>
    </div>

    <div class="vx-col md:flex w-full mb-6 justify-between">
      <div class="md:w-11/12">
        <label
          class="block text-gray-200 mb-1 md:mb-0 pr-4"
          for="inline-full-name"
        >
          <b>4.</b> Turn on simple mode for the driver's app? Drivers will only
          need to press the END LOAD and Upload POD buttons.
        </label>
      </div>

      <div class="md:w-4">
        <vs-checkbox
          class="h-full inline-flex"
          v-model="driver_app_variation"
        ></vs-checkbox>
      </div>
    </div>

    <div class="vx-col md:flex w-full mb-6 justify-between">
      <div class="md:w-11/12">
        <label
          class="block text-gray-200 mb-1 md:mb-0 pr-4"
          for="inline-full-name"
        >
          <b>5.</b> Show driver pay on mobile app?
        </label>
      </div>

      <div class="md:w-4">
        <vs-checkbox
          class="h-full inline-flex"
          v-model="showDriverPayOnMobileApp"
        ></vs-checkbox>
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
import { mapGetters } from 'vuex';

export default {
  name: 'Customization',
  data() {
    return {
      show_driver_truck_on_pipeline: false,
      show_qbd_invoice_sync_status_on_list: false,
      show_driver_location_on_calendar_map: false,
      driver_app_variation: false,
      showDriverPayOnMobileApp: false,
    };
  },

  computed: {
    ...mapGetters('customization', ['customization']),
  },

  created() {
    this.getCustomizations();
  },

  methods: {
    updateCustomization(value, key) {
      this.$store.commit('customization/CHANGE_CUSTOMIZATION', {
        [key]: value,
      });
    },

    updateCustomizationLocalCopy(data) {
      this.show_driver_truck_on_pipeline = data.show_driver_truck_on_pipeline;
      this.show_qbd_invoice_sync_status_on_list =
        data.show_qbd_invoice_sync_status_on_list;
      this.show_driver_location_on_calendar_map =
        data.show_driver_location_on_calendar_map;
      this.driver_app_variation = data.driver_app_variation;
      this.showDriverPayOnMobileApp = data.showDriverPayOnMobileApp;
    },

    getCustomizations() {
      this.loading = true;
      this.$store
        .dispatch('customization/getCustomizations')
        .then((data) => {
          this.updateCustomizationLocalCopy(data);
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        })
        .finally(() => (this.loading = false));
    },

    async submit() {
      try {
        await this.$store
          .dispatch('customization/updateCustomizations', {
            show_driver_truck_on_pipeline: this.show_driver_truck_on_pipeline,
            show_qbd_invoice_sync_status_on_list:
              this.show_qbd_invoice_sync_status_on_list,
            show_driver_location_on_calendar_map:
              this.show_driver_location_on_calendar_map,
            driver_app_variation: this.driver_app_variation,
            showDriverPayOnMobileApp: this.showDriverPayOnMobileApp,
          })
          .then((data) => {
            this.updateCustomizationLocalCopy(data);
            this.$vs.notify({
              color: 'primary',
              title: 'Customizations',
              text: 'Customizations updated successfully.',
            });
          });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
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
