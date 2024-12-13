<template>
  <div class="vx-row">
    <div class="vx-col w-full mb-8">
      <h2 class="text-2xl opacity-75">Marketplace</h2>
    </div>

    <div class="space-y-4 vx-col w-full">
      <div class="w-full">
        <label class="text-xs">Contact First Name</label>
        <vs-input
          type="text"
          v-model="formData.contactFirstName"
          class="w-full"
        />
      </div>
      <div class="w-full">
        <label class="text-xs">Contact Last Name</label>
        <vs-input
          type="text"
          v-model="formData.contactLastName"
          class="w-full"
        />
      </div>
      <div class="w-full">
        <label class="text-xs">Contact Phone Number</label>
        <vs-input type="text" v-model="formData.contactPhone" class="w-full" />
      </div>
      <div class="w-full">
        <label class="text-xs">Equipment Types</label>
        <v-select
          :options="equipmentTypeOptions"
          v-model="formData.equipmentTypes"
          label="title"
          :clearable="true"
          :reduce="(option) => option.value"
          multiple
        />
      </div>
      <div class="w-full">
        <label class="text-xs">About Company</label>
        <vs-textarea
          class="w-full"
          height="140px"
          v-model="formData.aboutTheCompany"
        />
      </div>
      <div class="w-full">
        <label class="text-xs">
          Shipper Carrier Agreement
          <vs-button
            color="primary"
            type="flat"
            style="padding: 0; margin-left: 1rem"
            @click="createAgreementTemplate"
            size="small"
          >
            Create With Template
          </vs-button>
        </label>
        <vue-editor
          v-model="formData.shipperCarrierAgreement"
          :editorToolbar="customToolbar"
        />
      </div>
      <div class="mt-8 vx-col w-full space-x-2">
        <vs-button type="filled" @click="submitForm" :disabled="isSubmitActive">
          Save Changes
        </vs-button>
      </div>
    </div>
  </div>
</template>
<script>
import { getApiErrorMsg } from '@/helpers/helper';
import { shipperAgreementTemplate } from './shipperCarrierAgreementTemplate';
import config from '@/config/constants.js';
import { VueEditor } from 'vue2-editor';
import { mapGetters } from 'vuex';

export default {
  name: 'Marketplace',
  components: {
    VueEditor,
  },
  computed: {
    ...mapGetters('auth', ['user']),

    companyDetailId() {
      const { admin_company_detail_id } =
        (this.user || {}).admin_company_details || {};

      return admin_company_detail_id || null;
    },

    isSubmitActive() {
      return (
        JSON.stringify(this.formData) === JSON.stringify(this.rawData) ||
        !this.companyDetailId
      );
    },
  },
  data() {
    return {
      formData: {
        contactFirstName: '',
        contactLastName: '',
        contactPhone: '',
        equipmentTypes: [],
        aboutTheCompany: '',
        shipperCarrierAgreement: '',
      },
      rawData: {},
      equipmentTypeOptions: config.planning.equipmentTypes,
      customToolbar: [
        [{ font: [] }],
        [{ header: [false, 1, 2, 3, 4, 5, 6] }],
        ['bold', 'italic', 'underline'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        [{ color: [] }, { background: [] }],
        ['link'],
      ],
    };
  },
  created() {
    this.initData();
  },
  methods: {
    async initData() {
      try {
        if (!this.companyDetailId) {
          return;
        }

        const { payload } = await this.$store.dispatch(
          'companies/getCompanyProfile',
          {
            id: this.companyDetailId,
            fields: [
              'contactFirstName',
              'contactLastName',
              'contactPhone',
              'equipmentTypes',
              'aboutTheCompany',
              'shipperCarrierAgreement',
            ],
          }
        );

        const { id, ...rest } = payload || {};
        this.formData = {
          ...this.formData,
          ...rest,
        };
        this.rawData = {
          ...this.formData,
        };
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    createAgreementTemplate() {
      this.formData.shipperCarrierAgreement = shipperAgreementTemplate;
    },
    async submitForm() {
      try {
        const payload = Object.keys(this.formData).reduce((acc, key) => {
          if (this.formData[key] !== this.rawData[key]) {
            acc[key] = this.formData[key] || null;
          }

          return acc;
        }, {});

        await this.$store.dispatch('companies/updateCompanyProfile', {
          id: this.companyDetailId,
          ...payload,
        });
        await this.initData();

        await this.$vs.notify({
          time: 8000,
          color: 'success',
          title: 'Success',
          text: 'Profile updated successfully',
        });
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
<style lang="scss" scoped></style>
