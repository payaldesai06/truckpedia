<template>
  <div>
    <vx-card class="w-10/12">
      <div class="flex flex-col gap-8 p-12">
        <div class="justify-between vx-row">
          <div class="vx-col">
            <h5 class="font-bold">Accounts to use</h5>
            <h5 class="text-sm">
              Select one or more accounts to send emails from
            </h5>
          </div>
          <div class="vx-col w-1/4">
            <v-select
              name="accounts"
              :options="accountsList"
              label="email"
              :clearable="true"
              v-model="accounts"
              class="w-full"
              placeholder="Select"
              :reduce="(option) => option.id"
              multiple
            />
            <div
              class="py-5 flex items-center"
              style="flex-direction: column"
              v-if="accountsList.length === 0"
            >
              <p class="font-medium text-center">
                Add at least 1 account to send emails from
              </p>
              <button
                class="add-email-btn text-center"
                @click.stop="toggleEmailLinkPopup"
              >
                Add email account
              </button>
            </div>
          </div>
        </div>
        <!-- Commented out the Replied Count-->
        <!-- <div class="justify-between vx-row">
          <div class="vx-col">
            <h5 class="font-bold">Stop sending emails on reply</h5>
            <h5 class="text-sm">
              Stop sending emails to a lead if a response has been received
            </h5>
          </div>
          <div class="flex gap-8 vx-col items-center">
            <span class="my-1">
              <label for="stopOnReply">Stop on auto-reply</label>
            </span>
            <vs-switch v-model="stopOnReply" />
          </div>
        </div> -->
        <div class="justify-between vx-row">
          <div class="vx-col">
            <h5 class="font-bold">Daily Limit</h5>
            <h5 class="text-sm">
              Max number of emails to send per day for this campaign
            </h5>
          </div>
          <div class="vx-col">
            <vs-input
              v-validate="'required|integer|min_value:0|max_value:10000'"
              name="dailyLimit"
              data-vv-validate-on="blur"
              type="number"
              class="w-[320px] ml-auto"
              v-model="dailyLimit"
              placeholder="200"
            />
            <span class="text-danger text-sm">
              {{ errors.first('dailyLimit') }}
            </span>
          </div>
        </div>
      </div>
    </vx-card>
    <div class="mt-6">
      <vs-button
        class="add-filter-btn"
        color="primary"
        type="border"
        @click="handleSubmit"
      >
        Save
      </vs-button>
    </div>
    <link-email-account-popup
      :popupActive="isEmailAccountPopupActive"
      @closePopup="toggleEmailLinkPopup"
    />
  </div>
</template>

<script>
import { EventBus } from '@/helpers/eventBus';
import { getApiErrorMsg } from '@/helpers/helper';
import LinkEmailAccountPopup from '../EmailAccounts/LinkEmailAccountPopup.vue';
import { Validator } from 'vee-validate';
const dict = {
  custom: {
    dailyLimit: {
      required: 'The field must be numeric and may contain 0 decimal points',
      integer: 'The field must be an integer',
      min_value: 'The value must be greater than or equal to 0',
      max_value: 'The value must be less than or equal to 10000',
    },
  },
};
Validator.localize('en', dict);

export default {
  name: 'Options',
  components: {
    LinkEmailAccountPopup,
  },
  props: {
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      accountsList: [],
      accounts: [],
      dailyLimit: 30,
      textOnly: false,
      stopOnReply: false,
      openTracking: false,
      isEmailAccountPopupActive: false,
      emailAccounts: [],
    };
  },
  created() {
    this.init();
    this.getEmails();
  },
  mounted() {
    EventBus.$on('refreshEmailAccounts', this.getEmails);
  },
  watch: {
    openTracking(val) {
      if (val && this.textOnly) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: "Turn off 'Send emails as text-only' before enabling open tracking",
        });
        this.openTracking = false;
      }
    },
    textOnly(val) {
      if (val && this.openTracking) {
        this.openTracking = false;
      }
    },
  },
  methods: {
    init() {
      if (this.data) {
        const { stopOnReply, dailyLimit, emailAccounts } = this.data;

        this.stopOnReply = stopOnReply;
        this.dailyLimit = dailyLimit;
        this.emailAccounts = emailAccounts;
        this.accounts = emailAccounts.map(
          ({ emailAccountId }) => emailAccountId
        );
      }
    },
    async getEmails() {
      const { data } = await this.$store.dispatch(
        'marketing/getEmailAccountList',
        {
          fieldsToQuery: null,
        }
      );

      this.accountsList = data.payload.emailAccounts || [];
    },
    async validate() {
      await this.$validator.validateAll();
      if (this.errors.items.length) {
        return false;
      }
      return true;
    },
    async handleSubmit() {
      const formValidated = await this.validate();
      if (!formValidated) return;

      try {
        const campaignId = this.$route.params.id;
        this.loading = true;
        const payload = {
          id: campaignId,
          stopOnReply: this.stopOnReply,
          dailyLimit: this.dailyLimit,
        };
        const selectedEmailAccounts = this.accounts.map((id) => ({
          emailAccountId: id,
        }));
        if (
          JSON.stringify(selectedEmailAccounts) !==
          JSON.stringify(this.emailAccounts)
        ) {
          payload.emailAccounts = selectedEmailAccounts;
        }

        const response = await this.$store.dispatch(
          'marketing/updateCampaign',
          payload
        );
        if (response && response.data) {
          this.$vs.notify({
            color: 'primary',
            title: 'Campaign updated',
            text: 'Campaign updated successfully.',
          });
          this.$emit('update:Options', {
            campaign: payload,
          });
          this.emailAccounts = selectedEmailAccounts;
        } else {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Invalid response from the server.',
          });
        }
      } catch (error) {
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
    toggleEmailLinkPopup() {
      this.isEmailAccountPopupActive = !this.isEmailAccountPopupActive;
    },
  },
};
</script>

<style scoped>
.add-email-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  padding: 8px 15px;
  border-radius: 5px;
  outline: none;
  border: 1px solid blue;
  color: blue;
  min-width: 200px;
  min-height: 40px;
  margin-top: 15px;
  font-size: 16px;
  cursor: pointer;
}
</style>
