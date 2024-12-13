<template>
  <div class="overflow-auto">
    <vs-sidebar
      position-right
      parent="body"
      default-index="1"
      color="primary"
      class="pipeline-sidebar"
      :click-not-close="true"
      spacer
      v-model="isSidebarActiveLocal"
    >
      <div>
        <div class="flex justify-between items-center vs-header-sidebar">
          <div>
            <h4>{{ editMode ? 'Edit' : 'New' }} Deal</h4>
          </div>
          <div
            @click.stop="closeSidebar"
            style="width: 30px"
            class="cursor-pointer text-white"
          >
            <svg
              class="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              style="color: rgb(109, 114, 126)"
              size="24"
              id="sideModalCloseButton"
              fill="#FFFFFF"
            >
              <path
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              ></path>
            </svg>
          </div>
        </div>
        <template>
          <div class="vs-sidebar-form">
            <div class="vs-row justify-between">
              <div class="vs-col w-1/2 pr-3">
                <label>Deal Name <field-required-sign /></label>
                <vs-input
                  v-validate="'required'"
                  data-vv-validate-on="blur"
                  name="dealName"
                  class="inputx w-full"
                  v-model="dealData.name"
                />
                <span class="text-danger text-sm">{{
                  errors.first('dealName')
                }}</span>
              </div>
              <div class="vs-col w-1/2">
                <label>Company</label>
                <v-select
                  :options="modifiedCusomerList"
                  :clearable="true"
                  label="companyName"
                  v-model="dealData.customerId"
                  :reduce="(option) => option.id"
                  class="custom-height"
                />
              </div>
            </div>
            <div class="vs-row justify-between">
              <div class="vs-col w-1/2 mt-2 pr-3">
                <label>Deal Stage <field-required-sign /></label>
                <v-select
                  :options="selectedStages"
                  :clearable="true"
                  label="name"
                  name="dealStage"
                  v-validate="'required'"
                  data-vv-as="selected"
                  v-model="dealData.stageId"
                  :reduce="(option) => option.id"
                  class="custom-height"
                />
                <span class="text-danger text-sm">{{
                  errors.first('dealStage')
                }}</span>
              </div>
              <div class="vs-col w-1/2 mt-2">
                <label>Estimated Close Date</label>
                <vs-button
                  color="warning"
                  type="flat"
                  size="small"
                  style="padding: 0; margin-left: 1rem"
                  @click="estimatedCloseDateClear"
                  :disabled="!dealData.estimatedCloseDate"
                  >Clear</vs-button
                >
                <flat-pickr
                  class="w-full"
                  v-model="dealData.estimatedCloseDate"
                  :config="configDateFlatPickr"
                />
              </div>
            </div>
            <div class="vs-row justify-between">
              <div class="vs-col w-1/2 mt-2 pr-3">
                <label>Assign To</label>
                <v-select
                  :options="modifiedUserList"
                  v-model="dealData.assigneeIds"
                  :clearable="true"
                  label="fullName"
                  multiple
                  :reduce="(option) => option.id"
                  class="custom-height"
                />
              </div>
              <div class="vs-col w-1/2 mt-2">
                <label>Amount</label>
                <vs-input
                  ref="amount"
                  icon="attach_money"
                  name="amount"
                  class="inputx w-full"
                  type="number"
                  v-model="dealData.amount"
                  v-validate="'decimal:2'"
                  @keypress="validateAmountInput"
                />
                <p class="text-danger text-sm">
                  {{ errors.first('amount') }}
                </p>
              </div>
            </div>
            <div class="vs-row justify-between">
              <div class="vs-col w-1/2 mt-2 pr-3">
                <label>Deal Probability (%)</label>
                <vs-input
                  type="number"
                  class="inputx w-full"
                  v-model="dealData.probability"
                  name="probability"
                  v-validate="'numeric|min_value:0|max_value:100'"
                  data-vv-as="probability"
                  @keydown="
                    (evt) =>
                      ['e', 'E', '+', '-', '.'].includes(evt.key) &&
                      evt.preventDefault()
                  "
                />
                <span class="text-danger text-sm">
                  {{ errors.first('probability') }}
                </span>
              </div>
              <div class="vs-col w-1/2 mt-2">
                <label>Contact</label>
                <vs-input class="inputx w-full" v-model="dealData.phone" />
              </div>
            </div>
            <div class="vs-row justify-between">
              <div class="vs-col w-1/2 mt-2">
                <label>Contacts</label>
                <v-select
                  :options="modifiedContactList"
                  v-model="dealData.contactIds"
                  :clearable="true"
                  label="fullName"
                  multiple
                  :reduce="(option) => option.id"
                  class="custom-height"
                />
              </div>
            </div>
            <div class="vs-row">
              <div class="vs-col w-full mt-2">
                <div class="vs-row pt-6 flex justify-end space-x-2">
                  <vs-button type="border" @click.stop="closeSidebar"
                    >Cancel</vs-button
                  >
                  <vs-button
                    :disabled="isSubmitDisabled"
                    @click="handleAddandEditDeal"
                    >{{ editMode ? 'Update' : 'Save' }}</vs-button
                  >
                </div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </vs-sidebar>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import { getApiErrorMsg, getObjectDifference } from '@/helpers/helper';
import { Validator } from 'vee-validate';
import './index.scss';
const dict = {
  custom: {
    dealName: {
      required: 'Deal Name is required',
      max_value: "Deal Name's length must be less than 225",
      min_value: "Deal Name's length must be greater than 0",
    },
    dealStage: {
      required: 'Deal Stage is required',
    },
    amount: {
      decimal: 'Max 2 decimals',
    },
    probability: {
      numeric: 'Probablity must be between 0 to 100',
    },
  },
};
Validator.localize('en', dict);
export default {
  name: 'PipelineDealSidebar',
  props: {
    dealSidebar: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters('marketing', [
      'selectedPipeline',
      'getDealContacts',
      'getAllContacts',
    ]),
    ...mapGetters('customer', ['getCachedCustomers']),
    ...mapGetters('companyUserV2', ['getUsersList']),
    modifiedUserList() {
      const usersPayload = {
        roles: ['admin', 'dispatcher'],
        fields: ['firstName', 'lastName'],
      };
      return (this.getUsersList[JSON.stringify(usersPayload)] || []).map(
        (user) => ({
          id: user.id,
          fullName: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
        })
      );
    },
    modifiedCusomerList() {
      const payload = {
        filters: { status: ['active'] },
      };
      return (this.getCachedCustomers[JSON.stringify(payload)] || []).map(
        (user) => ({
          id: user.id,
          companyName: user.companyName,
        })
      );
    },
    modifiedContactList() {
      return (this.getAllContacts || []).map((user) => ({
        id: user.id,
        fullName: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
      }));
    },
    isSidebarActiveLocal: {
      get() {
        return this.dealSidebar.isActive;
      },
      set(val) {
        if (!val) {
          this.closeSidebar();
        }
      },
    },
    editMode() {
      return Object.keys(this.dealSidebar.data).length ? true : false;
    },
    selectedStages() {
      return this.selectedPipeline ? this.selectedPipeline.stages : [];
    },
    validateForm() {
      return (
        !this.errors.any() &&
        this.dealData.name !== '' &&
        this.dealData.name.length > 0 &&
        this.dealData.name.length <= 225 &&
        this.dealData.stageId !== ''
      );
    },
    isSubmitDisabled() {
      const isAssigneeIdsEqual =
        JSON.stringify([...(this.dealForUpdate.assigneeIds || [])].sort()) ===
        JSON.stringify([...(this.dealData.assigneeIds || [])].sort());
      const isContactIdsEqual =
        JSON.stringify([...(this.dealForUpdate.contactIds || [])].sort()) ===
        JSON.stringify([...(this.dealData.contactIds || [])].sort());
      const { assigneeIds, contactIds, ...oldDealData } = this.dealForUpdate;
      const {
        assigneeIds: newAssigneeIds,
        contactIds: newContactIds,
        ...newDealData
      } = this.dealData;
      if (newDealData.probability) {
        newDealData.probability = Number(newDealData.probability); // converting string into number for camparing json strings
      }
      return (
        !this.isSidebarActiveLocal ||
        !this.validateForm ||
        (this.editMode &&
          JSON.stringify(oldDealData) === JSON.stringify(newDealData) &&
          isAssigneeIdsEqual &&
          isContactIdsEqual)
      );
    },
  },
  data() {
    return {
      configDateFlatPickr: {
        enableTime: false,
        dateFormat: 'Y-m-d',
      },
      dealData: {
        name: '',
        stageId: '',
        estimatedCloseDate: null,
        amount: '',
        customerId: null,
        assigneeIds: [],
        contactIds: [],
        probability: null,
      },
      dealForUpdate: [],
    };
  },
  methods: {
    async init() {
      try {
        if (!this.getAllContacts || !this.getAllContacts.length) {
          const { data } = await this.$store.dispatch(
            'marketing/getContacts',
            {}
          );
          const contactList = data.payload.contacts;
          this.$store.commit('marketing/setAllContacts', contactList);
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
    closeSidebar() {
      this.$emit('closeSidebar');
      this.reset();
      this.$validator.reset();
    },
    reset() {
      this.dealData = {
        name: '',
        stageId: '',
        estimatedCloseDate: null,
        amount: '',
        assigneeIds: [],
        contactIds: [],
        contact: '',
        customerId: null,
        probability: null,
      };
    },
    async handleAddandEditDeal() {
      try {
        let payload = null;
        let response = null;
        if (this.editMode) {
          const changedValues = getObjectDifference(
            this.dealForUpdate,
            this.dealData
          );
          const removeAssigneeIds = this.dealForUpdate.assigneeIds.filter(
            (id) => !this.dealData.assigneeIds.includes(id)
          );
          const addAssigneeIds = this.dealData.assigneeIds.filter(
            (id) =>
              !removeAssigneeIds.includes(id) &&
              !this.dealForUpdate.assigneeIds.includes(id)
          );
          const removeContactIds = this.dealForUpdate.contactIds.filter(
            (id) => !this.dealData.contactIds.includes(id)
          );
          const addContactIds = this.dealData.contactIds.filter(
            (id) =>
              !removeAssigneeIds.includes(id) &&
              !this.dealForUpdate.contactIds.includes(id)
          );
          const { pipeline, ...rest } = changedValues;
          payload = {
            id: this.dealForUpdate.id,
            ...rest,
            ...(addAssigneeIds.length &&
              JSON.stringify(addAssigneeIds) !==
                JSON.stringify(this.dealForUpdate.assigneeIds) && {
                addAssigneeIds: addAssigneeIds,
              }),
            ...(removeAssigneeIds.length && {
              removeAssigneeIds: removeAssigneeIds,
            }),
            ...(addContactIds.length &&
              JSON.stringify(addContactIds) !==
                JSON.stringify(this.dealForUpdate.contactIds) && {
                addContactIds: addContactIds,
              }),
            ...(removeContactIds.length && {
              removeContactIds: removeContactIds,
            }),
            amount: changedValues.amount == '' ? null : changedValues.amount,
            phone: changedValues.phone == '' ? null : changedValues.phone,
            probability:
              changedValues.probability === '' // checking empty string
                ? null
                : changedValues.probability // checking if value exists
                ? Number(changedValues.probability)
                : changedValues.probability, // returning undefined
          };
          delete payload.assigneeIds;
          delete payload.contactIds;
          response = await this.$store.dispatch('marketing/editDeal', payload);
        } else {
          payload = Object.fromEntries(
            Object.entries({
              ...this.dealData,
              ...(this.dealData.probability && {
                probability: Number(this.dealData.probability),
              }),
              pipelineId: this.selectedPipeline.id,
            }).filter(
              ([_, v]) =>
                (v != '' && v != null) ||
                (typeof val == 'object' && v != null && val.length)
            )
          );
          response = await this.$store.dispatch(
            'marketing/createDeal',
            payload
          );
        }
        if (response.data.result) {
          this.$vs.notify({
            title: 'Success',
            text: this.editMode
              ? 'Deal Updated Successfully'
              : 'New Deal Added Successfully',
            color: 'primary',
          });
          this.closeSidebar();
          this.$emit('dealAdded');
        }
      } catch (error) {
        this.$vs.notify({
          title: 'Error',
          text: getApiErrorMsg(error),
          color: 'danger',
        });
      }
    },
    setInitialValue(data) {
      this.dealData = {
        ...data,
        assigneeIds: data.assignees.length
          ? data.assignees.map((item) => item.id)
          : [],
        stageId: data.stage ? data.stage.id : '',
        customerId: data.customer ? data.customer.id : null,
        amount: data.amount || '', // getting null and need string on frontend side
        phone: data.phone || '',
        probability: data.probability || '',
        estimatedCloseDate: data.estimatedCloseDate,
        contactIds: this.getDealContacts.length
          ? this.getDealContacts.map((item) => item.id)
          : [],
      };
      delete this.dealData.assignees;
      delete this.dealData.stage;
      delete this.dealData.customer;
      this.dealForUpdate = structuredClone(this.dealData);
    },
    validateAmountInput(event) {
      const charCode = event.keyCode;
      if (
        (charCode >= 48 && charCode <= 57) ||
        charCode === 8 ||
        charCode === 46
      ) {
        return true;
      } else {
        event.preventDefault();
        return false;
      }
    },
    estimatedCloseDateClear() {
      this.dealData.estimatedCloseDate = null;
    },
  },
  watch: {
    'dealSidebar.isActive': {
      handler(val) {
        if (val) {
          if (Object.keys(this.dealSidebar.data).length) {
            this.setInitialValue(this.dealSidebar.data);
          } else {
            this.reset();
            this.errors.clear();
          }
          this.init();
        } else {
          this.reset();
        }
      },
      immediate: true,
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep {
  .vs-sidebar {
    max-width: 50vw;
    z-index: 52010;
  }
  .vs-sidebar--background {
    z-index: 52010;
  }
  .vs-input--icon {
    top: 12px;
  }
}

.custom-height {
  ::v-deep .vs__dropdown-menu {
    max-height: 180px !important;
  }
}
</style>

<style>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}
</style>
