<template>
  <div>
    <div v-if="!editMode">
      <div>
        <div class="flex justify-end">
          <vs-button type="filled" icon="add" @click="dialogVisible = true">
            Add New
          </vs-button>
        </div>
      </div>

      <campaign-table
        :campaignList="campaignList"
        :paginationMetaData="paginationMetaData"
        :totalRecords="totalRecords"
        @refresh="getCampaignList"
        @dataForUpdate="getDataForUpdate"
        @deleteCampaign="openDeleteConfirmation"
      />
    </div>
    <campaign-email-details
      v-else
      :campaignId="campaignId"
      @showCampaigns="toggleEmailDetails"
    />

    <campaign-name-modal
      :dialogVisible="dialogVisible"
      :data="dataForUpdate"
      @onClose="dialogVisible = false"
      @refresh="getCampaignList"
      @showEmailDetails="toggleEmailDetails"
    />
  </div>
</template>

<script>
import CampaignNameModal from './CampaignNameModal.vue';
import CampaignTable from './CampaignTable.vue';
import { getApiErrorMsg } from '@/helpers/helper';
import CampaignEmailDetails from './CampaignEmailDetails.vue';
import globalMixins from '@/mixins/globalMixins';

export default {
  name: 'EmailCampaigns',
  components: {
    CampaignNameModal,
    CampaignTable,
    CampaignEmailDetails,
  },
  mixins: [globalMixins],
  data() {
    return {
      campaignList: [],
      dialogVisible: false,
      editMode: false,
      paginationMetaData: null,
      totalRecords: 0,
      dataForUpdate: null,
      campaignId: null,
    };
  },
  created() {
    this.getCampaignList();
  },
  methods: {
    async getCampaignList(currentPage = 1, pageSize = 25) {
      try {
        this.$vs.loading();
        const payload = {
          page: currentPage,
          pageSize,
          superAdminOverwriteCompanyId: Number(this.$route.params.id),
        };
        const { data } = await this.$store.dispatch(
          'marketing/getCampaigns',
          payload
        );
        this.campaignList = data.payload.campaigns;
        const { meta } = (data || {}).payload || {};
        const { totalItems } = meta || {};
        this.totalRecords = totalItems || 0;
        this.paginationMetaData = meta;
        this.currentPage = meta.currentPage;
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    async getDataForUpdate(data) {
      if (data.name) {
        this.dialogVisible = true;
        this.dataForUpdate = data;
      } else {
        this.campaignId = data; // here id is coming in data
        this.toggleEmailDetails(true);
      }
    },
    toggleEmailDetails(value, campaignId) {
      this.editMode = value;
      if (!value) {
        this.getCampaignList();
      }
      if (campaignId) {
        this.campaignId = campaignId;
      }
    },
    async openDeleteConfirmation(id) {
      await this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Delete Campaign',
        text: 'Are you sure you want to remove this campaign?',
        accept: () => this.deleteCampaign(id),
      });
    },
    async deleteCampaign(id) {
      try {
        await this.$store.dispatch('marketing/deleteCampaign', {
          id,
          superAdminOverwriteCompanyId: Number(this.$route.params.id),
        });
        this.showSuccessMessage('Campaign Deleted Successfully', 3000);
        if (
          this.campaignList.length === 1 &&
          this.paginationMetaData.currentPage > 1
        ) {
          // if there is only  one element on current page go back to previous page
          document.querySelector('.p-highlight').previousSibling.click();
        } else {
          // refresh the current page
          document.querySelector('.p-highlight').click();
        }
      } catch (error) {
        this.showErrorMessage(getApiErrorMsg(error));
      }
    },
  },
};
</script>
