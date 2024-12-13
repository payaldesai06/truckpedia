<template>
  <div>
    <div class="under-line">
      <h4 class="pt-3">Accounts to use</h4>
      <vs-row class="gap-2" vs-w="12">
        <vs-col vs-lg="4" vs-sm="4" vs-xs="12">
          <div class="w-full">
            <label class="text-sm w-full opacity-75 mr-2">
              Select one or more accounts to send emails from
            </label>
            <v-select
              v-model="formData.emailAccounts"
              :options="emailAccounts"
              label="email"
              class="w-full"
              multiple
              :closeOnSelect="false"
              :reduce="(option) => option.id"
            ></v-select>
          </div>
        </vs-col>
        <vs-col vs-lg="3" vs-sm="3" vs-xs="12">
          <div class="w-full">
            <label class="text-xs"> No. of Leads <field-required-sign /></label>
            <vs-input
              v-model="formData.noOfLeads"
              class="w-full"
              type="number"
              data-vv-name="noOfLeads"
              v-validate="'required|integer|min_value:1|max_value:1000'"
              data-vv-validate-on="blur"
              :min="1"
              :max="1000"
            />
            <span class="text-danger text-sm">
              {{ errors.first('noOfLeads') }}
            </span>
          </div>
        </vs-col>
        <vs-col vs-lg="3" vs-sm="3" vs-xs="12">
          <div class="w-full">
            <label class="text-xs"> Daily Limit <field-required-sign /></label>
            <vs-input
              v-model="dailyEmailLimit"
              type="number"
              name="dailyLimit"
              data-vv-validate-on="blur"
              v-validate="'required|integer|min_value:0|max_value:10000'"
              class="w-full"
              placeholder="200"
            />
            <span class="text-danger text-sm">
              {{ errors.first('dailyLimit') }}
            </span>
          </div>
        </vs-col>
        <vs-col vs-lg="1" vs-sm="2" vs-xs="12">
          <vs-button
            color="primary"
            type="border"
            class="action-btn mt-6"
            :icon="actionBtnIcon"
            @click="handleCampaign"
          >
            {{ actionBtnText }}
          </vs-button>
        </vs-col>
      </vs-row>
      <h4 class="pt-3">Search leads based on</h4>
      <div class="w-full">
        <vs-row vs-w="12">
          <vs-col class="pr-2" vs-lg="3" vs-sm="3" vs-xs="12">
            <div class="w-full">
              <label class="text-sm w-full opacity-75 mr-2">Industry</label>
              <v-select
                :options="industries"
                v-model="formData.industry"
                class="w-full industry-dropdown"
                dense
                :reduce="(option) => option.value"
              ></v-select>
            </div>
          </vs-col>
          <vs-col class="pr-2" vs-lg="3" vs-sm="3" vs-xs="12">
            <div class="w-full">
              <div class="w-full">
                <label class="text-xs"> City </label>
                <vs-input v-model="formData.city" class="w-full" />
              </div>
            </div>
          </vs-col>
          <vs-col
            class="pr-2"
            vs-type="flex"
            vs-justify="left"
            vs-align="center"
            vs-lg="3"
            vs-sm="3"
            vs-xs="12"
          >
            <div class="w-full">
              <label class="text-xs">
                State
                <field-required-sign v-if="formData.city" />
              </label>
              <v-select
                :options="listOfStates"
                v-model="formData.state"
                label="Select state"
                class="w-full state-dropdown"
                dense
              ></v-select>
            </div>
          </vs-col>
          <vs-col
            vs-type="flex"
            vs-justify="left"
            vs-align="end"
            vs-lg="3"
            vs-sm="3"
            vs-xs="12"
          >
            <vs-button
              color="primary"
              @click="onSubmit"
              :disabled="isSubmitDisabled"
            >
              Submit
            </vs-button>
          </vs-col>
        </vs-row>
      </div>
    </div>
    <div class="under-line">
      <h4 class="pt-5">Results:</h4>
      <div class="flex gap-5 justify-center">
        <div class="p-10 custom-border">
          <p class="leads-heading">Added Leads</p>
          <p class="lead-text pt-3">{{ addedLeads }}</p>
        </div>
        <div class="p-10 custom-border">
          <p class="leads-heading">Target Number</p>
          <p class="lead-text pt-3">{{ formData.noOfLeads }}</p>
        </div>
      </div>
    </div>
    <div class="pt-10">
      <div class="flex justify-start">
        <div class="w-1/4">
          <label class="text-sm w-full opacity-75 mr-2">
            <strong>Select Template</strong>
          </label>
          <v-select
            :options="templates"
            label="name"
            class="w-full"
            :reduce="(option) => option.id"
            @input="getTemplateDataById"
          ></v-select>
        </div>
      </div>
      <div class="pt-10">
        <AddCampaignTemplate
          @templateSaved="handleSaveTemplate"
          @showCampaigns="handleShowCampaigns"
          :template="template"
          :showTemplateName="false"
          :disabledSaveButton="disabledSaveButton"
          :scheduleData="scheduleData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { VueEditor } from 'vue2-editor';
import { mapGetters } from 'vuex';
import { getApiErrorMsg } from '@/helpers/helper';
import AddCampaignTemplate from '../campaign-templates/add-campaign-template/components/AddCampaignTemplates.vue';
import GeoJson from '@/config/geo';
import Industries from '@/config/industries';
import { isEmpty } from 'lodash';
import { Validator } from 'vee-validate';
const dict = {
  custom: {
    noOfLeads: {
      required: 'No. of Leads is required',
      integer: 'No. of Leads field must be an integer',
    },
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
  name: 'CampaignEmailDetails',
  components: { VueEditor, AddCampaignTemplate },
  props: {
    campaignId: {
      type: Number || null,
      default: 0,
    },
  },
  data() {
    return {
      formData: {
        emailAccounts: [],
        state: null,
        city: null,
        industry: null,
        noOfLeads: 0,
      },
      dailyEmailLimit: null,
      actionBtnText: 'Start',
      actionBtnIcon: 'play_arrow',
      actionStatus: '',
      addedLeads: 0,
      templates: [],
      template: {},
      sequences: [],
      emailAccounts: [],
      industries: Industries,
      listOfStates: GeoJson.usStatesFullNames,
      validationDict: {
        custom: {
          noOfLeads: {
            required: 'No. of Leads is required',
            min_value: 'No. of Leads must be between 1 and 1000',
            max_value: 'No. of Leads must be between 1 and 1000',
          },
        },
      },
      scheduleData: {},
    };
  },
  async mounted() {
    this.$validator.localize('en', this.validationDict);
    this.init();
  },
  computed: {
    ...mapGetters('marketing', [
      'getCachedMarketingEmails',
      'getCampaignTemplates',
    ]),
    companyId() {
      return this.$route.params.id;
    },
    isSubmitDisabled() {
      return (
        !this.formData.noOfLeads ||
        (!isEmpty(this.formData.noOfLeads) &&
          (this.formData.noOfLeads > 1000 || this.formData.noOfLeads < 0)) ||
        (isEmpty(this.formData.state) && !isEmpty(this.formData.city))
      );
    },
    disabledSaveButton() {
      return this.errors.any() || !this.dailyEmailLimit;
    },
  },
  methods: {
    async init() {
      try {
        if (
          !this.getCampaignTemplates ||
          (this.getCampaignTemplates && this.getCampaignTemplates.meta)
        ) {
          this.getEmailTemplates();
        } else {
          this.templates = this.getCampaignTemplates.templates;
        }
        if (this.getCachedMarketingEmails[this.companyId]) {
          this.emailAccounts = this.getCachedMarketingEmails[this.companyId];
        } else {
          this.getEmailAccountList();
        }

        this.getSequenceData();
        this.getCampaign();
        this.getCampaignLeads();
      } catch (error) {}
    },
    async getCampaign() {
      try {
        const id = this.campaignId;
        const {
          data: { payload },
        } = await this.$store.dispatch('marketing/getCampaignById', {
          id,
          superAdminOverwriteCompanyId: this.companyId,
        });

        if (payload && payload.campaign) {
          this.formData.emailAccounts = payload.campaign.emailAccounts.map(
            ({ emailAccountId }) => emailAccountId
          );
          this.dailyEmailLimit = payload.campaign.dailyLimit || null;
          this.scheduleData = {
            daysOfWeekTimes: payload.campaign.daysOfWeekTimes,
            timezone: payload.campaign.timezone,
          };
          const status = payload.campaign.status;
          switch (status) {
            case 'draft':
              this.actionBtnIcon = 'play_arrow';
              this.actionBtnText = 'Start';
              this.actionStatus = 'active';
              break;
            case 'active':
              this.actionBtnIcon = 'pause';
              this.actionBtnText = 'Pause';
              this.actionStatus = 'paused';
              break;
            case 'paused':
              this.actionBtnIcon = 'play_arrow';
              this.actionBtnText = 'Resume';
              this.actionStatus = 'active';
              break;
            default:
              break;
          }
        }
      } catch (error) {
        await this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    async handleCampaign() {
      try {
        const response = await this.$store.dispatch(
          'marketing/updateCampaign',
          {
            id: this.campaignId.toString(),
            status: this.actionStatus,
            superAdminOverwriteCompanyId: this.companyId,
          }
        );
        if (response && response.data) {
          this.$vs.notify({
            color: 'primary',
            title: 'Campaign updated',
            text: 'Campaign updated successfully.',
          });
          switch (this.actionStatus) {
            case 'draft':
              this.actionBtnIcon = 'play_arrow';
              this.actionBtnText = 'Start';
              this.actionStatus = 'active';
              break;
            case 'active':
              this.actionBtnIcon = 'pause';
              this.actionBtnText = 'Pause';
              this.actionStatus = 'paused';
              break;
            case 'paused':
              this.actionBtnIcon = 'play_arrow';
              this.actionBtnText = 'Resume';
              this.actionStatus = 'active';
              break;
            default:
              break;
          }
        } else {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: 'Invalid response from the server.',
          });
        }
      } catch (error) {
        await this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    async getEmailTemplates() {
      const { data } = await this.$store.dispatch(
        'marketing/getCampaignTemplates'
      );
      this.templates = data.payload.templates;
    },
    async getCampaignLeads() {
      const { data } = await this.$store.dispatch('marketing/getLeads', {
        superAdminOverwriteCompanyId: this.companyId,
        campaignId: this.campaignId,
      });

      this.addedLeads =
        (data.payload.meta && data.payload.meta.totalItems) || 0;

      this.formData.noOfLeads =
        (data.payload.meta && data.payload.meta.totalItems) || 0;
    },
    async getEmailAccountList() {
      const { data } = await this.$store.dispatch(
        'marketing/getEmailAccountList',
        {
          superAdminOverwriteCompanyId: this.companyId,
        }
      );
      this.emailAccounts = data.payload.emailAccounts || [];
      this.$store.commit('marketing/setCachedMarketingEmails', {
        id: this.companyId,
        emails: this.emailAccounts,
      });
    },
    async getSequenceData() {
      const {
        data: { payload },
      } = await this.$store.dispatch('marketing/getSequence', {
        id: Number(this.campaignId),
        params: {
          superAdminOverwriteCompanyId: this.companyId,
        },
      });

      if (payload && payload.sequences.length) {
        this.template = {
          sequences: payload.sequences.map((sequence) => {
            const { content, subject } = sequence.variants[0];

            return {
              ...sequence,
              content,
              subject,
              variants: sequence.variants,
            };
          }),
        };
      }
    },
    async getTemplateDataById(templateId) {
      if (!templateId) {
        this.template = {};
        this.originalData = {};
        return;
      }

      try {
        const { data } = await this.$store.dispatch(
          'marketing/getCampaignTemplateById',
          {
            id: templateId,
          }
        );
        this.template = data.payload;
        this.originalData = structuredClone(this.template);
      } catch (error) {
        await this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    handleShowCampaigns(value) {
      this.$emit('showCampaigns', value);
    },
    async onSubmit() {
      if (this.formData.noOfLeads > 0) {
        try {
          const keysToCheck = ['city', 'state', 'industry'];
          const payload = {};

          keysToCheck.forEach((key) => {
            if (key === 'industry') {
              if (this.formData[key]) {
                payload[key] = [this.formData[key]];
              }
            } else if (this.formData[key]) {
              payload[key] = this.formData[key];
            }
          });
          if (
            Number(this.formData.noOfLeads) <= 0 ||
            Number(this.formData.noOfLeads) <= this.addedLeads
          ) {
            this.$vs.notify({
              color: 'warning',
              title: 'No leads',
              text: 'Your lead count is already full',
            });
            return;
          }
          const response = await this.$store.dispatch(
            'marketing/getLeadsforCampaign',
            {
              id: this.campaignId,
              leadsNeeded: Number(this.formData.noOfLeads) - this.addedLeads,
              superAdminOverwriteCompanyId: Number(this.companyId),
              ...payload,
            }
          );

          if (response && response.data.payload) {
            this.addedLeads = response.data.payload.totalLeads;
            if (response.data.payload.leadsAdded) {
              this.$vs.notify({
                color: 'primary',
                title: 'Success',
                text: `${response.data.payload.leadsAdded} leads have been successfully added.`,
              });
            } else {
              this.$vs.notify({
                color: 'warning',
                title: 'No leads',
                text: 'No new leads were added. Please try again.',
              });
            }
          }
        } catch (error) {
          await this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: getApiErrorMsg(error),
          });
        }
      } else {
        await this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: 'Please Add Valid Leads!',
        });
      }
    },
    async handleSaveTemplate(data) {
      const { sequences, timezone, daysOfWeekTimes } = data;
      const emailPayload = {
        id: this.campaignId,
        dailyLimit: this.dailyEmailLimit.toString(), //If we don't change it then it goes int in the payload then need to send string to the BE
        superAdminOverwriteCompanyId: Number(this.$route.params.id),
        ...(timezone && { timezone }),
        ...(daysOfWeekTimes && { daysOfWeekTimes }),
      };
      if (
        JSON.stringify(this.formData.emailAccounts) !==
        JSON.stringify(this.emailAccounts)
      ) {
        emailPayload.emailAccounts = this.formData.emailAccounts.map((id) => ({
          emailAccountId: id,
        }));
      }

      await this.$store.dispatch('marketing/updateCampaign', emailPayload);
      if (sequences && sequences.length) {
        this.sequences = sequences.map((sequence, index) => ({
          id: sequence.id || null,
          step: index + 1,
          nextStepWaitForDays: sequence.nextStepWaitForDays,
          variants: sequence.variants
            ? sequence.variants.map((data) => {
                return {
                  id: data.id,
                  content: sequence.content,
                  subject: sequence.subject,
                };
              })
            : [
                {
                  id: null,
                  content: sequence.content,
                  subject: sequence.subject,
                },
              ],
        }));
      }
      const payload = {
        superAdminOverwriteCompanyId: this.companyId,
        sequences: this.sequences,
      };
      const { data: sequenceData } = await this.$store.dispatch(
        'marketing/upsertSequence',
        {
          id: Number(this.campaignId),
          payload: payload,
        }
      );

      if (sequenceData.payload && sequenceData.payload.sequences.length) {
        this.template = {
          sequences: sequenceData.payload.sequences.map((sequence) => {
            return {
              ...sequence,
              ...sequence.variants[0],
            };
          }),
        };
      }

      this.$vs.notify({
        color: 'primary',
        title: 'Success',
        text: 'Campaign updated Successfully',
      });
    },
  },
};
</script>

<style lang="scss">
.lead-text {
  font-size: 40px;
  font-weight: 700;
  line-height: 22px;
  text-align: center;
  color: #1877f2;
}
.custom-border {
  border-radius: 12px;
  border: 1px solid #1877f2;
  min-width: 20vw;
}
.leads-heading {
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  text-align: center;
}
.custom-bg {
  background-color: #f3f4f7;
  padding: 8px !important;
}
.under-line {
  border-bottom: 1px solid #cfcfd3;
  padding-bottom: 2rem;
}
.template-button {
  color: #1877f2;
  border: 1px solid #1877f2;
  border-radius: 4px;
  background-color: #ffffff;
}
.scrollable-height {
  height: 50rem;
}

.send-email-wrap {
  border-radius: 8px;
  border: 1px solid var(--gray-200, #e5e7eb);
  background: var(--brand-neutrals-white, #fff);
  margin: 15px;
  margin-top: 0px;
  .send-email-header {
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    input {
      outline: none;
      border: none;
      min-width: 75%;
    }
  }
}

.template-name-input {
  margin: 15px;
}

.custom-toolbar .ql-toolbar.ql-snow,
.custom-toolbar .ql-container.ql-snow {
  border: none;
}
.custom-toolbar .ql-container.ql-snow {
  height: 372px;
}
.industry-dropdown .vs__dropdown-menu {
  max-height: 200px;
  overflow-y: auto;
}
.delay-day-input {
  width: 80px;
}
</style>

<style lang="scss" scoped>
.action-btn {
  width: 150px;
}
</style>
