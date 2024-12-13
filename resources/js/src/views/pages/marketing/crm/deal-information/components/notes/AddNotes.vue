<template>
  <Dialog
    :visible="isShow"
    :style="{ width: '45rem' }"
    :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
    position="bottomright"
    header="Header"
  >
    <template #header>
      <div class="flex items-center w-full">
        <vs-icon size="25px" icon="chevron_right" class="mr-2 down-angle" />
        <h5 class="font-bold pt-2">{{ !isEdit ? 'New' : 'Edit' }} Note</h5>
        <vs-icon
          class="cursor-pointer ml-auto"
          icon="close"
          size="small"
          @click="onClose"
        />
      </div>
    </template>
    <div class="content">
      <vue-editor v-model="content" :editorToolbar="customToolbar"></vue-editor>
      <div class="flex items-center my-3">
        <!-- <small>
          <vs-checkbox class="h-full inline-flex" v-model="createTodotask">
            Create a to-do task
            <vs-icon size="15px" icon="chevron_right" class="down-angle" />
          </vs-checkbox>
        </small>

        <small class="ml-auto inline-flex items-center">
          Follow Up in 2 business days
          <vs-icon size="15px" icon="chevron_right" class="down-angle" />
        </small> -->
        <vs-button
          color="primary"
          class="mx-3 action-btn"
          type="border"
          size="small"
          @click="onClose"
        >
          Cancel
        </vs-button>
        <vs-button
          color="primary"
          size="small"
          class="action-btn"
          @click="saveOrUpdateDealNotes"
          :disabled="isSubmitDisabled"
        >
          Save
        </vs-button>
      </div>
    </div>
  </Dialog>
</template>

<script>
import { VueEditor } from 'vue2-editor';
export default {
  name: 'add-notes',
  components: { VueEditor },
  props: {
    isShow: {
      type: Boolean,
      default: () => false,
    },
    noteDetails: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      content: '',
      createTodotask: false,
      customToolbar: [
        [{ font: [] }],

        // [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ['bold', 'italic', 'underline'],
        // [{ list: 'ordered' }, { list: 'bullet' }],
        // [{ color: [] }, { background: [] }],
        // ['link'],
      ],
      dealId: null,
    };
  },
  mounted() {
    this.dealId = Number(this.$route.params.id);
  },
  watch: {
    noteDetails: {
      handler(val) {
        this.content = val.content;
      },
    },
  },
  computed: {
    isEdit() {
      return Object.keys(this.noteDetails).length > 0;
    },
    isSubmitDisabled() {
      if (this.isEdit && this.content === this.noteDetails.content) {
        return true;
      }
      return !this.content || this.showErrorMessage;
    },
  },
  methods: {
    onClose() {
      this.content = '';
      this.showErrorMessage = false;
      this.$emit('toggleShowBox');
    },
    createPayload() {
      if (this.isEdit) {
        return {
          id: this.dealId,
          noteId: this.noteDetails.id,
          content: this.content || null,
        };
      } else {
        return {
          id: this.dealId,
          type: 'note',
          content: this.content,
        };
      }
    },

    async saveOrUpdateDealNotes() {
      if (this.showErrorMessage) return;
      if (!this.content) return;
      try {
        const action = this.isEdit
          ? 'marketing/updateMarketingDealNotes'
          : 'marketing/createMarketingDealNotes';
        const payload = this.createPayload();
        const { data } = await this.$store.dispatch(action, payload);

        if (data.result) {
          this.$vs.notify({
            time: 8000,
            color: 'success',
            title: 'Success',
            text: !this.isEdit
              ? 'Note created successfully'
              : 'Note content updated successfully',
          });
          this.$emit('getDealNotes');
        } else {
          this.handleApiError('Failed to update deal notes');
        }
      } catch (error) {
        this.handleApiError(
          'An error occurred while updating deal notes',
          error
        );
      } finally {
        this.showErrorMessage = false;
      }
    },
    handleApiError(errorMessage, error = null) {
      this.$vs.notify({
        time: 8000,
        color: 'error',
        title: 'Error',
        text: errorMessage,
      });
    },
  },
};
</script>

<style lang="scss">
.content {
  .con-vs-checkbox {
    .vs-checkbox {
      height: 15px;
      width: 15px;
    }
    .con-slot-label {
      display: inline-flex;
      align-items: center;
    }
  }
  .down-angle {
    margin-left: 0.25rem;
  }
}
</style>
