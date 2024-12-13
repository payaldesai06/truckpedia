<template>
  <div>
    <vs-popup
      classContent="popup-example"
      :active.sync="togglePopup"
      title="New campaign"
    >
      <template>
        <div>
          <div class="w-full">
            <vs-input
              class="w-full mb-5"
              label="Campaign Name"
              v-model="campaignName"
              placeholder="Give your campaign a name"
            />
          </div>
        </div>
      </template>
      <div class="flex items-center justify-between mt-5">
        <vs-button type="border" @click="closePopup()"> Cancel </vs-button>
        <vs-button type="filled" @click="handleSubmit()">
          {{ isRename ? 'Rename' : 'Continue' }}
        </vs-button>
      </div>
    </vs-popup>
  </div>
</template>

<script>
import { getApiErrorMsg } from '@/helpers/helper';

export default {
  name: 'CampaignNamePopup',
  props: {
    popupActive: {
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
      campaignName: '',
      loading: false,
    };
  },
  mounted() {
    this.init();
  },
  computed: {
    togglePopup: {
      get() {
        return this.popupActive;
      },
      set(val) {
        if (!val) {
          this.closePopup();
        }
      },
    },
    isRename() {
      return !!this.data.campaignId;
    },
  },
  methods: {
    closePopup(refresh = false) {
      this.$emit('closePopup', refresh);
    },
    init() {
      this.campaignName = this.data.campaignName || '';
      this.loading = false;
    },

    async handleSubmit() {
      try {
        if (!this.campaignName) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Please enter campaign name.',
          });
          return;
        }

        this.loading = true;
        let response;
        if (this.data.campaignId) {
          response = await this.$store.dispatch('marketing/updateCampaign', {
            id: this.data.campaignId,
            name: this.campaignName,
          });
        } else {
          response = await this.$store.dispatch('marketing/createCampaign', {
            name: this.campaignName,
          });
        }
        if (response && response.data) {
          this.$vs.notify({
            color: 'primary',
            title: this.data.campaignId ? 'Updated' : 'Created',
            text: this.data.campaignId
              ? 'Campaign updated successfully.'
              : 'New campaign created successfully.',
          });
          this.closePopup(true);

          this.$nextTick(() => {
            const { data } = response;
            const id = ((data.payload || {}).campaign || {}).id;
            if (!this.data.campaignId && id) {
              this.$router
                .push({
                  name: 'campaign-overview',
                  params: { id },
                  query: { tab: 'leads' },
                })
                .catch(() => true);
            }
          });
          this.$store.commit('marketing/setContactsForCampaign', []);
        } else {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Invalid response from the server.',
          });
        }
      } catch (error) {
        console.log(error);
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.loading = false;
      }
    },
  },
  watch: {
    data: {
      handler() {
        this.init();
      },
      deep: true,
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep {
  .vs-popup {
    width: 350px;
  }
  .vs-popup--header {
    display: none;
  }
}
</style>
