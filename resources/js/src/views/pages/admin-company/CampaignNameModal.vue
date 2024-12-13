<template>
  <vs-popup
    class="email-campaigns"
    :title="`${campaignId ? 'Edit' : 'Add'} Campaign Name`"
    :active.sync="showNameModal"
  >
    <div class="vx-row px-5 mt-3">
      <label for="Campaign Name"></label>
      <vs-input
        v-model="campaignName"
        type="text"
        placeholder="Give your campaign a name"
        class="p-column-filter w-full"
      />
    </div>
    <div class="w-full flex gap-4 justify-end mt-5">
      <vs-button color="primary" type="border" @click="onClose">
        Cancel
      </vs-button>
      <vs-button color="primary" @click="onSubmit" :disabled="!isValidForm">
        Continue
      </vs-button>
    </div>
  </vs-popup>
</template>

<script>
import { getApiErrorMsg } from '@/helpers/helper';
export default {
  name: 'CampaignNameModal',
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object || null,
      default: null,
    },
  },
  data() {
    return {
      campaignName: '',
      campaignId: null,
    };
  },
  computed: {
    showNameModal: {
      get() {
        return this.dialogVisible;
      },
      set(val) {
        if (!val) {
          this.onClose();
        }
      },
    },
    isValidForm() {
      return this.campaignName;
    },
  },
  methods: {
    onClose() {
      this.$emit('onClose');
      this.campaignName = '';
      this.campaignId = null;
    },
    async onSubmit() {
      try {
        if (this.campaignId) {
          await this.$store.dispatch('marketing/updateCampaign', {
            id: this.campaignId,
            superAdminOverwriteCompanyId: Number(this.$route.params.id),
            name: this.campaignName,
          });
        } else {
          const { data } = await this.$store.dispatch(
            'marketing/createCampaign',
            {
              superAdminOverwriteCompanyId: Number(this.$route.params.id),
              name: this.campaignName,
            }
          );
          this.$emit('showEmailDetails', true, data.payload.campaign.id);
        }
        this.$vs.notify({
          color: 'primary',
          title: 'Success',
          text: `Campaign ${this.campaignId ? 'Update' : 'Added'} Successfully`,
        });
        this.onClose();
        this.$emit('refresh');
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
  },
  watch: {
    data({ name, id }) {
      this.campaignName = name || name;
      this.campaignId = id || id;
    },
  },
};
</script>

<style lang="scss">
.email-campaigns {
  .p-dialog {
    width: 40vw;
  }
}
</style>
