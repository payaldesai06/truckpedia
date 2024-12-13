<template>
  <vs-sidebar
    parent="body"
    position-right
    default-index="1"
    color="primary"
    class="task-sidebar"
    spacer
    v-model="isModalShowing"
  >
    <div class="flex items-center justify-between px-3">
      <h4>{{ this.selectedItemId ? 'Edit' : 'New' }} Expense</h4>
      <feather-icon
        icon="XIcon"
        @click="onClose"
        class="cursor-pointer"
      ></feather-icon>
    </div>
    <vs-divider />
    <form class="vs-sidebar-form px-4 pb-5">
      <div class="vx-row mt-4">
        <div class="vx-col w-full">
          <div class="vx-row">
            <div class="vx-col w-1/2">
              <label>Date <field-required-sign /> </label>
              <div class="relative">
                <flat-pickr
                  placeholder=""
                  name="date"
                  class="w-full"
                  data-vv-validate-on="on-change"
                  v-validate="'required'"
                  clearable
                  v-model="itemData.date"
                />
                <span
                  class="clear-date"
                  v-if="itemData.date"
                  @click="removeValue('date')"
                >
                  <vs-icon icon="close"></vs-icon>
                </span>
              </div>
              <span class="text-danger text-sm">
                {{ errors.first('date') }}
              </span>
            </div>
            <div class="vx-col w-1/2">
              <label>Vendor</label>
              <v-select
                v-model="itemData.payToCustomerId"
                :options="customersList"
                label="company_name"
                :reduce="(option) => option.customer_id"
                :closeOnSelect="true"
                :clearable="true"
                name="payToCustomerId"
              />
            </div>
          </div>
          <div class="vx-row mt-4">
            <div class="vx-col w-1/2">
              <label>Amount <field-required-sign /> </label>
              <vs-input
                class="w-full"
                type="number"
                v-model="itemData.amount"
                data-vv-validate-on="blur"
                v-validate="'required'"
                name="amount"
              />
              <span class="text-danger text-sm">
                {{ errors.first('amount') }}
              </span>
            </div>
            <div class="vx-col w-1/2">
              <label>Category <field-required-sign /> </label>
              <v-select
                v-model="itemData.accountId"
                :options="accountList"
                label="name"
                :reduce="(option) => option.id"
                v-validate="'required'"
                data-vv-as="selected"
                :closeOnSelect="true"
                :clearable="true"
                name="accountId"
              />
              <span class="text-danger text-sm">
                {{ errors.first('accountId') }}
              </span>
            </div>
          </div>
          <div class="vx-row mt-4">
            <div class="vx-col w-full">
              <label>Notes</label>
              <vs-textarea class="w-full" v-model="itemData.notes" />
            </div>
          </div>
        </div>
      </div>
      <div class="vx-row mt-4">
        <div class="vx-col w-full">
          <label class="text-xl">Link to</label>
        </div>
        <div class="vx-col w-1/2 mt-4">
          <label>Driver </label>
          <v-select
            v-model="itemData.linkedUserId"
            :options="driverList"
            label="fullName"
            :reduce="(option) => option.id"
            :closeOnSelect="true"
            :clearable="true"
            name="linkedUserId"
          />
        </div>
        <div class="vx-col w-1/2 mt-4">
          <label>Truck </label>
          <v-select
            v-model="itemData.linkedTruckId"
            :options="truckList"
            label="number"
            :reduce="(option) => option.id"
            :closeOnSelect="true"
            :clearable="true"
            name="linkedTruckId"
          />
        </div>
        <div class="vx-col w-1/2 mt-4">
          <label>Trailer </label>
          <v-select
            v-model="itemData.linkedTrailerId"
            :options="trailerList"
            label="number"
            :reduce="(option) => option.id"
            :closeOnSelect="true"
            :clearable="true"
            name="linkedTrailerId"
          />
        </div>
      </div>
      <div class="flex justify-end w-full mt-5">
        <vs-button class="mr-3 action-btn" type="border" @click.stop="onClose">
          Cancel
        </vs-button>
        <vs-button
          class="action-btn"
          @click.stop="saveExpense"
          :disabled="isSubmitDisabled"
        >
          Save
        </vs-button>
      </div>
    </form>
  </vs-sidebar>
</template>

<script>
import { getApiErrorMsg, getObjectDifference } from '@/helpers/helper';
import { mapGetters } from 'vuex';
import { Validator } from 'vee-validate';
import { isEmpty } from 'lodash';
const dict = {
  custom: {
    amount: {
      required: 'The Amount field is required.',
    },
    date: {
      required: 'The Date field is required.',
    },
    accountId: {
      required: 'The Category field is required.',
    },
  },
};
Validator.localize('en', dict);

export default {
  name: 'AddItem',
  props: {
    isShow: {
      type: Boolean,
      default: () => false,
    },
    selectedItemId: {
      type: Number,
      default: null,
    },
    data: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      itemData: {
        accountId: null,
        date: null,
        amount: null,
        notes: null,
        payToCustomerId: null,
        linkedUserId: null,
        linkedTruckId: null,
        linkedTrailerId: null,
      },
      accountList: [],
      customersList: [],
      itemDataForUpdate: null,
      usersPayload: {
        roles: ['driver'],
        fields: ['firstName', 'lastName'],
      },
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      try {
        await this.getAccounts();
        if (!this.getUsersList[JSON.stringify(this.usersPayload)]) {
          await this.$store.dispatch(
            'companyUserV2/fetchUsers',
            this.usersPayload
          );
        }
        if (isEmpty(this.getAllVehiclesList)) {
          await this.$store.dispatch('vehicleV2/fetchAllVehicles');
        }
        await this.getAllCustomers();
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },

    initData() {
      if (this.selectedItemId && this.data) {
        this.itemData = {
          accountId: this.data.account.id,
          date: this.data.date,
          amount: this.data.amount,
          notes: this.data.notes,
          payToCustomerId: this.data.payToCustomer
            ? this.data.payToCustomer.id
            : null,
          linkedUserId: this.data.linkedUser ? this.data.linkedUser.id : null,
          linkedTruckId: this.data.linkedTruck
            ? this.data.linkedTruck.id
            : null,
          linkedTrailerId: this.data.linkedTrailer
            ? this.data.linkedTrailer.id
            : null,
        };

        this.itemDataForUpdate = structuredClone(this.itemData);
      }
    },
    async getAllCustomers() {
      const { payload } = await this.$store.dispatch(
        'customer/getAllCustomers'
      );

      this.customersList = payload.data || [];
    },
    async getAccounts() {
      try {
        const res = await this.$store.dispatch('accounting/getAccounts', {
          params: {
            fields: ['type', 'name', 'description', 'parentAccount'],
          },
        });
        this.accountList = res.data.payload.accounts.filter(
          (item) => item.type === 'expense'
        );
      } catch (error) {
        console.log(error);
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },

    removeValue(key) {
      this.itemData[key] = null;
    },

    onClose() {
      this.$emit('onClose');
      this.$validator.reset();
    },
    async saveExpense() {
      const isValidate = await this.validate();
      if (isValidate) {
        try {
          if (this.selectedItemId) {
            const payload = getObjectDifference(
              this.itemDataForUpdate,
              this.itemData
            );

            delete payload.type;
            delete payload.id;
            const response = await this.$store.dispatch(
              'accounting/updateExpense',
              { id: this.selectedItemId, payload }
            );
            if (response.status === 200) {
              await this.$vs.notify({
                time: 8000,
                color: 'primary',
                title: 'Success',
                text: 'Updated successfully.',
              });
            }
          } else {
            const payload = Object.entries(this.itemData).reduce(
              (acc, [key, value]) => {
                if (value || value === false || value === 0) {
                  acc[key] = value;
                }
                return acc;
              },
              {}
            );
            const response = await this.$store.dispatch(
              'accounting/createExpense',
              payload
            );
            if (response.status === 200) {
              await this.$vs.notify({
                time: 8000,
                color: 'primary',
                title: 'Success',
                text: 'Created successfully.',
              });
            }
          }
          this.onClose();
          this.$emit('refresh');
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
    async validate() {
      await this.$validator.validateAll();
      if (this.errors.items.length) {
        return false;
      }
      return true;
    },
  },
  computed: {
    ...mapGetters('companyUserV2', ['getUsersList']),
    ...mapGetters('vehicleV2', ['getAllVehiclesList']),

    isModalShowing: {
      get() {
        return this.isShow;
      },
      set(val) {},
    },
    driverList() {
      if (!this.getUsersList[JSON.stringify(this.usersPayload)]) return [];

      return this.getUsersList[JSON.stringify(this.usersPayload)].map(
        (user, index) => ({
          ...user,
          fullName: `${user.firstName || ''} ${user.lastName || ''}`.trim(),
          uniqueId: `user-${index}`,
        })
      );
    },
    truckList() {
      if (!this.getAllVehiclesList.trucks) return [];

      return this.getAllVehiclesList.trucks.map((truck, index) => ({
        ...truck,
        uniqueId: `truck-${index}`,
      }));
    },
    trailerList() {
      if (!this.getAllVehiclesList.trailers) return [];

      return this.getAllVehiclesList.trailers.map((trailer, index) => ({
        ...trailer,
        uniqueId: `trailer-${index}`,
      }));
    },
    validateForm() {
      return (
        !this.errors.any() &&
        this.itemData.date &&
        this.itemData.amount &&
        this.itemData.accountId
      );
    },
    isSubmitDisabled() {
      return (
        !this.isModalShowing ||
        !this.validateForm ||
        (this.selectedItemId > 0 &&
          JSON.stringify(this.itemData) ===
            JSON.stringify(this.itemDataForUpdate))
      );
    },
  },
  watch: {
    isModalShowing(newVal) {
      if (newVal) {
        this.initData();
      } else {
        this.$validator.reset();
        this.itemData = {
          accountId: null,
          date: null,
          amount: null,
          notes: null,
          payToCustomerId: null,
          linkedUserId: null,
          linkedTruckId: null,
          linkedTrailerId: null,
        };
      }
    },
  },
};
</script>

<style lang="scss">
.task-sidebar {
  .vs-sidebar--items {
    overflow: auto;
  }
  .vs-sidebar {
    width: 45vw !important;
    max-width: 50vw !important;
  }
  .task-form textarea {
    resize: none !important;
  }

  .clear-date {
    position: absolute;
    inset: 0 0 0 auto;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 25px;
  }
}
</style>

<style lang="scss" scoped>
::v-deep .vs__dropdown-menu {
  max-height: 240px !important;
}
</style>
