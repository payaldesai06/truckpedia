<template>
  <vs-popup
    class="pipeline-popup-active"
    :title="popupTitle"
    :active.sync="togglePopup"
  >
    <div class="flex flex-col space-y-4">
      <div class="vx-col w-full">
        <label class="text-xs">Pipeline Name</label>
        <vs-input
          v-validate="'required'"
          data-vv-validate-on="blur"
          name="pipelineName"
          v-model="pipelineName"
          class="w-full mt-2"
        />
        <span class="text-danger text-sm">{{
          errors.first('pipelineName')
        }}</span>
      </div>
      <div class="flex justify-end space-x-2">
        <vs-button type="border" @click="closePopup">Cancel</vs-button>
        <vs-button
          :disabled="!validateForm"
          @click="handleAddandEditPipeline"
          >{{ editMode ? 'Update' : 'Save' }}</vs-button
        >
      </div>
    </div>
  </vs-popup>
</template>
<script>
import { Validator } from 'vee-validate';

const dict = {
  custom: {
    pipelineName: {
      required: 'Name is required',
      max_value: "Name's length must be less than 225",
      min_value: "Name's length must be greater than 0",
    },
  },
};
Validator.localize('en', dict);
export default {
  name: 'CreateEditPipelinePopup',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      pipelineName: '',
    };
  },
  computed: {
    togglePopup: {
      get() {
        return this.isActive;
      },
      set(val) {
        if (!val) {
          this.closePopup();
        }
      },
    },
    popupTitle() {
      return Object.keys(this.data || {}).length
        ? 'Rename Pipeline'
        : 'Add Pipeline';
    },
    editMode() {
      return Object.keys(this.data || {}).length ? true : false;
    },
    validateForm() {
      return (
        (!this.errors.any() && this.pipelineName !== '') ||
        (this.pipelineName.length > 0 && this.pipelineName.length <= 225)
      );
    },
  },

  methods: {
    closePopup() {
      this.$emit('closePopup');
      this.errors.clear();
    },
    showNotification(message, type) {
      this.$vs.notify({
        color: type,
        title: type == 'danger' ? 'Error' : 'Success',
        text: message,
      });
    },
    async handleAddandEditPipeline() {
      try {
        let response = null;
        if (this.editMode) {
          const payload = { id: this.data.id, name: this.pipelineName };
          response = await this.$store.dispatch(
            'marketing/editPipeline',
            payload
          );
        } else {
          const payload = {
            name: this.pipelineName,
          };

          response = await this.$store.dispatch(
            'marketing/createPipeline',
            payload
          );
        }
        this.$store.dispatch(
          'marketing/updateMarketingPipelines',
          response.data.payload.pipeline
        );
        this.closePopup();
        this.showNotification(
          this.editMode
            ? 'Pipeline Updated Successfully'
            : 'New Pipeline Created Successfully',
          'primary'
        );
      } catch (error) {
        this.showNotification(error.response.message, 'danger');
      }
    },
  },
  watch: {
    isActive(val) {
      if (val) {
        this.$nextTick(() => {
          this.pipelineName = (this.data || {}).name || '';
        });
      }
      this.pipelineName = '';
    },
  },
};
</script>
<style lang="scss" scoped></style>
