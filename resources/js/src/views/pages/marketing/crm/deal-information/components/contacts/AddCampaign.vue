<template>
  <Dialog
    :visible="isShow"
    :style="{ width: '40vw' }"
    :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
    :modal="true"
  >
    <template #header>
      <div class="flex items-center justify-between w-full">
        <h5>Add to Campaign</h5>
        <vs-icon
          class="cursor-pointer"
          icon="close"
          size="small"
          @click="onClose"
        />
      </div>
    </template>
    <label>Select Campaign <field-required-sign /></label>
    <v-select
      :options="allCampaigns"
      :clearable="true"
      :appendToBody="true"
      label="name"
      v-model="selectedCampaignId"
      class="mb-4 md:mb-0"
      :reduce="(option) => option.id"
    />
    <div class="flex justify-end w-full mt-3">
      <vs-button class="mr-3 action-btn" type="border" @click="onClose">
        Cancel
      </vs-button>
      <vs-button
        class="action-btn"
        :disabled="!selectedCampaignId"
        @click="handleAddCampaign"
      >
        Save
      </vs-button>
    </div>
  </Dialog>
</template>

<script>
import { getApiErrorMsg } from '@/helpers/helper';
import { mapGetters } from 'vuex';
export default {
  name: 'add-campaign',
  props: {
    isShow: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {
      selectedCampaignId: '',
      allCampaigns: [],
    };
  },
  mounted() {
    this.fetchCampaigns();
  },
  computed: {
    ...mapGetters('marketing', ['getContactsForCampaign']),
  },
  watch: {
    isShow: {
      handler() {
        this.selectedContactId = '';
      },
    },
  },
  methods: {
    async fetchCampaigns() {
      if (this.getContactsForCampaign.length) {
        this.allCampaigns = this.getContactsForCampaign;
      } else {
        try {
          const { data } = await this.$store.dispatch(
            'marketing/getCampaigns',
            {
              page: 1,
              pageSize: 100,
            }
          );
          this.allCampaigns = data.payload.campaigns || [];
          this.$store.commit(
            'marketing/setContactsForCampaign',
            this.allCampaigns
          );
        } catch (error) {
          await this.$vs.notify({
            time: 8000,
            color: 'danger',
            title: 'Error',
            text: getApiErrorMsg(error),
          });
        }
      }
    },

    onClose() {
      this.$emit('hideCampaignModal');
    },
    handleAddCampaign() {
      this.$emit('hanldeAddCampaign', this.selectedCampaignId);
    },
  },
};
</script>

<style>
body ul[role='listbox'] {
  z-index: 100000 !important;
}
</style>
