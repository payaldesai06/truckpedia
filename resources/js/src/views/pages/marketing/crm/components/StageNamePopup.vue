<template>
  <vs-popup
    :title="popupTitle"
    class="satge-popup-active"
    :active.sync="togglePopup"
  >
    <div class="flex flex-col space-y-4">
      <div class="vx-col w-full">
        <label class="text-xs">Stage Name</label>
        <vs-input
          id="pipeline-name"
          v-model="stageName"
          type="text"
          class="w-full mt-2"
        />
      </div>
      <div class="flex justify-end space-x-2">
        <vs-button color="#1877f2" type="border" @click="closePopup"
          >Cancel</vs-button
        >
        <vs-button
          color="#1877f2"
          :disabled="!stageName"
          @click="handleStageActions"
          >Save</vs-button
        >
      </div>
    </div>
  </vs-popup>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
  name: 'stageNamePopup',
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
  computed: {
    ...mapGetters('marketing', ['selectedPipeline']),
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
      return this.editMode ? 'Rename Stage' : 'Add Stage';
    },
    editMode() {
      return Object.values(this.data).length ? true : false;
    },
  },
  data() {
    return {
      stageName: '',
    };
  },
  methods: {
    closePopup() {
      this.$emit('closePopup');
    },
    showNotification(message, type) {
      this.$vs.notify({
        color: type,
        title: type == 'danger' ? 'Error' : 'Success',
        text: message,
      });
    },
    async handleStageActions() {
      const clonnedPipeline = structuredClone(this.selectedPipeline); // deep copying
      try {
        if (this.editMode) {
          const stageIndex = clonnedPipeline.stages.findIndex(
            (item) => item.id === this.data.id
          );
          clonnedPipeline.stages[stageIndex].name = this.stageName;
          clonnedPipeline.stages = clonnedPipeline.stages.map(
            (item, index) => ({
              id: item.id,
              ...(index === stageIndex && { name: item.name }),
            })
          );
        } else {
          clonnedPipeline.stages.push({ name: this.stageName });
        }
        delete clonnedPipeline.name;
        const { data } = await this.$store.dispatch(
          'marketing/editPipeline',
          clonnedPipeline
        );
        this.$store.dispatch(
          'marketing/updateMarketingPipelines',
          data.payload.pipeline
        );
        this.showNotification(
          this.editMode
            ? 'Stage Updated Successfully'
            : 'New Stage Added Successfully',
          'primary'
        );
      } catch (error) {
        this.showNotification(error.response.message, 'danger');
      } finally {
        this.closePopup();
      }
    },
  },
  watch: {
    isActive(val) {
      if (val) {
        this.$nextTick(() => {
          this.stageName = (this.data || {}).name || '';
        });
      }
      this.stageName = '';
    },
  },
};
</script>
<style lang="scss" scoped></style>
