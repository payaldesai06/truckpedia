<template>
  <AddCampaignTemplate
    :template="template"
    :disabledFunctionality="true"
    :originalData="originalData"
    :enableButtonValidation="true"
    @templateSaved="handleSubmit"
  ></AddCampaignTemplate>
</template>
<script>
import { getApiErrorMsg, getObjectDifference } from '@/helpers/helper';

export default {
  name: 'AddCampaignTemplates',
  components: {
    AddCampaignTemplate: () => import('./components/AddCampaignTemplates.vue'),
  },
  data() {
    return {
      template: {},
      originalData: {},
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    async init() {
      const campaignTemplatesId = this.$route.params.id;
      if (campaignTemplatesId) {
        this.getTemplateDataById(campaignTemplatesId);
      }
    },
    async getTemplateDataById(campaignTemplatesId) {
      this.editMode = true;
      try {
        const { data } = await this.$store.dispatch(
          'marketing/getCampaignTemplateById',
          {
            id: campaignTemplatesId,
          }
        );
        this.template = data.payload;
        this.originalData = structuredClone(this.template);
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },

    async handleSubmit(payload) {
      try {
        if (!Object.keys(this.template).length) {
          const response = await this.$store.dispatch(
            'marketing/createCampaignTemplate',
            {
              ...payload,
            }
          );
          if (response.data.message === 'Success') {
            this.$vs.notify({
              color: 'primary',
              title: 'Success',
              text: `Campaign Template Added Successfully`,
            });
            this.$router.push({ name: 'campaign-templates' });
          }
        } else {
          if (!getObjectDifference(this.originalData, payload).name) {
            delete payload.name;
          }
          if (
            JSON.stringify(this.originalData.sequences) ===
            JSON.stringify(payload.sequences)
          ) {
            delete payload.sequences;
          }
          if (Object.keys(payload).length) {
            const response = await this.$store.dispatch(
              'marketing/updateCampaignTemplate',
              {
                id: this.templateId ? this.templateId : this.$route.params.id,
                payload,
              }
            );
            if (response.data.message == 'Success') {
              this.$vs.notify({
                color: 'primary',
                title: 'Success',
                text: `Campaign Template updated Successfully`,
              });
              this.$router.push({ name: 'campaign-templates' });
            }
          }
        }
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
  },
};
</script>
