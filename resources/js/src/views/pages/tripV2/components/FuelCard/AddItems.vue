<template>
  <div>
    <vs-sidebar
      parent="body"
      position-right
      default-index="1"
      color="primary"
      spacer
      v-model="isModalShowing"
      class="fuel-card-sidebar"
    >
      <div class="px-4">
        <div class="flex items-center justify-between">
          <h4 class="sidebar-name">
            {{ this.data ? 'Edit' : 'Add' }} Fuel Card
          </h4>
          <feather-icon
            icon="XIcon"
            @click="onClose"
            class="cursor-pointer"
          ></feather-icon>
        </div>
        <vs-divider />
      </div>
      <div>
        <form class="vs-sidebar-form px-4 pb-5">
          <div class="vx-row mt-4">
            <div class="vx-col w-full">
              <div class="vx-row">
                <div class="vx-col w-1/2">
                  <label>Card No. <field-required-sign /> </label>
                  <vs-input
                    class="w-full"
                    v-model="formData.cardNumber"
                    data-vv-validate-on="blur"
                    v-validate="'required'"
                    name="cardNumber"
                  />
                  <span class="text-danger text-sm">
                    {{ errors.first('cardNumber') }}
                  </span>
                </div>
                <div class="vx-col w-1/2">
                  <label>Status <field-required-sign /></label>
                  <v-select
                    v-model="formData.status"
                    :closeOnSelect="true"
                    :clearable="true"
                    data-vv-validate-on="blur"
                    v-validate="'required'"
                    :reduce="(option) => option.value"
                    name="status"
                    :options="statusOptions"
                  />
                  <span class="text-danger text-sm">
                    {{ errors.first('status') }}
                  </span>
                </div>
                <div class="vx-col w-1/2 mt-3">
                  <label
                    >Expiration Date
                    <vs-button
                      color="warning"
                      type="flat"
                      size="small"
                      style="padding: 0; margin-left: 0.5rem"
                      :disabled="!formData.expirationDate"
                      @click="formData.expirationDate = ''"
                      >Clear</vs-button
                    >
                  </label>
                  <div class="fuel-card-input">
                    <img
                      src="@assets/images/custom/calendarIcon.svg"
                      alt="calender-icon"
                      width="24"
                    />
                    <flat-pickr
                      name="expirationDate"
                      class="w-full"
                      clearable
                      v-model="formData.expirationDate"
                    />
                  </div>
                </div>
                <div class="vx-col w-full mt-3">
                  <label>Notes</label>
                  <vs-textarea
                    class="w-full"
                    type="text"
                    v-model="formData.notes"
                    name="notes"
                    height="100px"
                  />
                </div>
              </div>
              <vs-divider />
              <div class="vx-row">
                <div class="vx-col w-full">
                  <div>
                    <vs-button
                      color="primary"
                      size="small"
                      type="border"
                      @click="addNewAssignment"
                    >
                      New Assignment
                    </vs-button>
                  </div>
                </div>
              </div>
              <div
                class="vx-row"
                v-for="(assignee, index) in formData.assignees"
                :key="index"
              >
                <div class="vx-col w-1/3 mt-3">
                  <label>Driver <field-required-sign /></label>
                  <v-select
                    v-model="assignee.userId"
                    :options="driverList"
                    label="fullName"
                    :reduce="(option) => option.id"
                    :closeOnSelect="true"
                    :clearable="true"
                    name="userId"
                  />
                </div>
                <div class="vx-col w-1/3 mt-3">
                  <label>Assigned Date <field-required-sign /></label>
                  <div class="fuel-card-input">
                    <img
                      src="@assets/images/custom/calendarIcon.svg"
                      alt="calender-icon"
                      width="24"
                    />
                    <flat-pickr
                      name="startDate"
                      class="w-full"
                      clearable
                      v-model="assignee.assignDate"
                    />
                  </div>
                </div>
                <div class="vx-col w-1/3 mt-3">
                  <label
                    >Returned Date
                    <vs-button
                      color="warning"
                      type="flat"
                      size="small"
                      style="padding: 0; margin-left: 0.5rem"
                      :disabled="!assignee.returnDate"
                      @click="assignee.returnDate = ''"
                      >Clear</vs-button
                    >
                  </label>
                  <div class="fuel-card-input">
                    <img
                      src="@assets/images/custom/calendarIcon.svg"
                      alt="calender-icon"
                      width="24"
                    />
                    <flat-pickr
                      name="endDate"
                      class="w-full"
                      clearable
                      v-model="assignee.returnDate"
                      :config="flatPickerConfig"
                    />
                  </div>
                </div>
                <div class="vx-col w-1/3 mt-3">
                  <label>Truck</label>
                  <v-select
                    v-model="assignee.truckId"
                    label="number"
                    :closeOnSelect="true"
                    :options="truckList"
                    :reduce="(option) => option.id"
                    :clearable="true"
                    name="truckId"
                  />
                </div>
                <div
                  class="vx-col w-1/2 mt-3 flex align-center"
                  v-if="formData.assignees.length > 1"
                >
                  <div class="flex items-center mt-4">
                    <!-- <div>
                      <label class="mb-2">Current</label>
                      <vs-switch v-model="assignee.isCurrent" />
                    </div> -->
                    <div class="mx-6">
                      <vs-icon
                        class="cursor-pointer text-danger mt-6"
                        size="small"
                        icon="delete"
                        @click="removeNewAssignment(index)"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex justify-end w-full mt-3">
            <vs-button
              class="mr-3 action-btn"
              type="border"
              @click.stop="onClose"
            >
              Cancel
            </vs-button>
            <vs-button
              class="action-btn"
              @click.stop="saveFuelCard"
              :disabled="isSubmitDisabled"
            >
              Save
            </vs-button>
          </div>
        </form>
      </div>
    </vs-sidebar>
  </div>
</template>

<script>
import { Validator } from 'vee-validate';
import { getApiErrorMsg, getObjectDifference } from '@/helpers/helper';
import { mapGetters } from 'vuex';
import { isEmpty, cloneDeep } from 'lodash';
const dict = {
  custom: {
    cardNumber: {
      required: 'The Card Number is required.',
    },
    status: {
      required: 'The Status field is required.',
    },
  },
};
Validator.localize('en', dict);
export default {
  name: 'AddItems',
  props: {
    isShow: {
      type: Boolean,
      default: () => false,
    },
    data: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      formData: {
        cardNumber: '',
        status: null,
        expirationDate: '',
        notes: '',
        assignees: [
          {
            userId: null,
            truckId: null,
            assignDate: '',
            returnDate: '',
          },
        ],
      },
      formDataForUpdate: null,
      showNewAssignmentFields: false,
      statusOptions: [
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
      ],
      customersList: [],
      usersPayload: {
        roles: ['driver'],
        fields: ['firstName', 'lastName'],
      },
      flatPickerConfig: {
        maxDate: this.$dayjs().toDate(),
      },
    };
  },
  watch: {
    isModalShowing(newVal) {
      if (newVal) {
        this.initData();
      } else {
        this.$validator.reset();
        this.formData = {
          cardNumber: '',
          status: null,
          expirationDate: '',
          notes: '',
          assignees: [
            {
              userId: null,
              truckId: null,
              assignDate: '',
              returnDate: '',
              id: null,
            },
          ],
        };
      }
    },
  },
  computed: {
    ...mapGetters('vehicleV2', ['getAllVehiclesList']),
    ...mapGetters('companyUserV2', ['getUsersList']),
    isModalShowing: {
      get() {
        return this.isShow;
      },
      set(val) {
        // this.onClose(); Sachin's code won't work, it causes bugs.
      },
    },
    validateForm() {
      return (
        !this.errors.any() &&
        this.formData.cardNumber &&
        this.formData.status &&
        this.formData.assignees.every((item) => item.userId && item.assignDate)
      );
    },
    isSubmitDisabled() {
      return (
        !this.isModalShowing ||
        !this.validateForm ||
        (this.data &&
          JSON.stringify(this.formData) ===
            JSON.stringify(this.formDataForUpdate))
      );
    },
    truckList() {
      if (!this.getAllVehiclesList.trucks) return [];
      return this.getAllVehiclesList.trucks.map((truck, index) => ({
        ...truck,
        uniqueId: `truck-${index}`,
      }));
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
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      try {
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
    removeEmptyFields(payload) {
      return Object.entries(payload).reduce((acc, [key, value]) => {
        if (value || value === false || value === 0) {
          acc[key] = value;
        }
        return acc;
      }, {});
    },
    async saveFuelCard() {
      const isValidate = await this.validate();
      if (isValidate) {
        if (
          this.formData.assignees.length > 1 &&
          !this.formData.assignees.some((item) => item.returnDate)
        ) {
          this.$vs.notify({
            time: 8000,
            color: 'danger',
            title: 'Error',
            text: `At least 1 assignee's end date is required`,
          });
          return;
        }
        try {
          if (this.data) {
            const payload = getObjectDifference(
              this.formDataForUpdate,
              this.formData
            );
            if (
              JSON.stringify(this.formData.assignees) ===
              JSON.stringify(this.formDataForUpdate.assignees)
            ) {
              delete payload.assignees;
            } else {
              payload.assignees = payload.assignees.map((item) => {
                Object.keys(item).map((key) => {
                  if (!item[key]) {
                    item[key] = null;
                  }
                });
                return item;
              });
            }
            const response = await this.$store.dispatch(
              'accounting/updateFuelCard',
              { id: this.data.id, ...payload }
            );
            if (response.status === 200) {
              this.$vs.notify({
                time: 8000,
                color: 'primary',
                title: 'Success',
                text: 'Updated successfully.',
              });
            }
          } else {
            const updatedAssignees = this.formData.assignees.map((item) =>
              this.removeEmptyFields(item)
            );
            this.formData.assignees = updatedAssignees;
            const payload = this.removeEmptyFields(this.formData);
            const response = await this.$store.dispatch(
              'accounting/createFuelCard',
              payload
            );
            if (response.status === 200) {
              this.$vs.notify({
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
          this.$vs.notify({
            time: 8000,
            color: 'danger',
            title: 'Error',
            text: getApiErrorMsg(error),
          });
        }
      }
    },
    async getAllCustomers() {
      const { payload } = await this.$store.dispatch(
        'customer/getAllCustomers'
      );
      this.customersList = payload.data || [];
    },
    addNewAssignment() {
      this.formData.assignees.push({
        userId: null,
        truckId: null,
        assignDate: '',
        returnDate: '',
      });
    },
    onClose() {
      this.$emit('onClose');
      this.$validator.reset();
    },
    async validate() {
      await this.$validator.validateAll();
      if (this.errors.items.length) {
        return false;
      }
      return true;
    },
    initData() {
      if (this.data) {
        this.formData = this.data;
        (this.formData.assignees = this.data.assignees.map((item) => {
          const finalAssignee = {
            ...item,
            truckId: item.truck && item.truck.id ? item.truck.id : null,
            userId: item.user && item.user.id ? item.user.id : null,
          };
          delete finalAssignee.user;
          delete finalAssignee.truck;
          return finalAssignee;
        })),
          (this.formDataForUpdate = cloneDeep(this.formData));
      } else {
        this.formData = {
          cardNumber: '',
          status: 'active',
          expirationDate: '',
          notes: '',
          assignees: [
            {
              userId: null,
              truckId: null,
              assignDate: '',
              returnDate: '',
            },
          ],
        };
      }
    },
    removeNewAssignment(index) {
      this.formData.assignees.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
:deep(.vs-sidebar .vs-sidebar--items) {
  overflow: auto;
}

label {
  color: #333;
  font-size: 1rem;
  font-weight: 400;
  line-height: 22px;
}
:deep(.vs__dropdown-toggle) {
  border-radius: 4px !important;
  border: 1px solid rgba(104, 104, 104, 0.5) !important;
}
:deep(.vs-con-input .vs-inputx) {
  border-radius: 4px !important;
  border: 1px solid rgba(104, 104, 104, 0.5) !important;
}

.sidebar-name {
  color: #000;
  font-size: 20px;
  font-weight: 500;
  line-height: 22px;
}
</style>

<style lang="scss" scoped>
.fuel-card-sidebar {
  ::v-deep .vs-sidebar {
    width: 50vw;
    max-width: 60vw;
  }
  .fuel-card-input {
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 4px;
    border: 1px solid rgba(104, 104, 104, 0.5);
    padding: 0rem 0.5rem;
    .flatpickr-input,
    &[type='hidden'] + input,
    &.active {
      border: none !important;
    }
  }
  .fuel-cards {
    position: relative;
    border-radius: 4px;
    border: 1px solid #1877f2;
    padding: 5px;
    margin: 1rem 0rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    label {
      color: #1877f2;
      text-align: center;
      font-size: 1rem;
      font-weight: 400;
      line-height: 22px;
    }
    .vs-con-input-label {
      position: absolute;
      top: 0;
      opacity: 0;
      width: 100%;
      height: 100%;
      left: 0;
      .vs-con-input {
        width: 100%;
        height: 100%;
        .vs-input--input.normal {
          padding: 0rem !important;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .fuel-card-sidebar {
    ::v-deep .vs-sidebar {
      width: 90vw;
      max-width: 90vw;
    }
  }
}
</style>
