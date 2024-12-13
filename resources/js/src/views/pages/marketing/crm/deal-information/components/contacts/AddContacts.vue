<template>
  <vs-sidebar
    parent="body"
    position-right
    default-index="1"
    color="primary"
    class="contact-sidebar"
    spacer
    v-model="isModalShowing"
  >
    <div class="flex items-center justify-between vs-header-sidebar">
      <h4>{{ this.selectedContactId ? 'Edit' : 'New' }} Contact</h4>
      <feather-icon
        icon="XIcon"
        @click="onClose"
        class="cursor-pointer text-white"
      ></feather-icon>
    </div>
    <form class="vs-sidebar-form px-3 pb-5">
      <div class="vx-row w-full m-0">
        <div class="vx-col w-1/2 pb-4">
          <label>First Name <field-required-sign /> </label>
          <vs-input
            class="w-full"
            v-model="contactData.firstName"
            data-vv-validate-on="blur"
            v-validate="'required'"
            name="firstName"
          />
          <span class="text-danger text-sm">
            {{ errors.first('firstName') }}
          </span>
        </div>
        <div class="vx-col w-1/2 pb-4">
          <label>Last Name <field-required-sign /> </label>
          <vs-input
            class="w-full"
            v-model="contactData.lastName"
            data-vv-validate-on="blur"
            v-validate="'required'"
            name="lastName"
          />
          <span class="text-danger text-sm">
            {{ errors.first('lastName') }}
          </span>
        </div>
        <div class="vx-col w-1/2 pb-4">
          <label>Status <field-required-sign /></label>
          <v-select
            v-model="contactData.status"
            :options="statusess"
            label="label"
            :reduce="(option) => option.value"
            v-validate="'required'"
            data-vv-as="selected"
            :closeOnSelect="true"
            :clearable="true"
            name="status"
          />
          <span class="text-danger text-sm">
            {{ errors.first('status') }}
          </span>
        </div>
        <div class="vx-col w-1/2 pb-4">
          <vs-input
            label="Phone"
            class="w-full"
            v-model="contactData.phone"
            name="phone"
          />
        </div>
        <div class="vx-col w-1/2 pb-4">
          <vs-input
            label="Email"
            class="w-full"
            v-model="contactData.email"
            name="email"
          />
        </div>
        <div class="vx-col w-1/2 pb-4">
          <label>Company</label>
          <!-- <v-select
            v-model="contactData.customerId"
            :options="modifiedCusomerList"
            label="companyName"
            :reduce="(option) => option.id"
            :closeOnSelect="true"
            :clearable="true"
          /> -->
          <div>
            <AutoComplete
              v-model="contactData.companyName"
              :suggestions="companySuggestions"
              :autoHighlight="true"
              @item-select="handleAutoCompleteData($event)"
              @complete="autoComplete($event)"
              @clear="updateCompanyName"
              field="companyName"
              class="company-autocompelte"
            >
              <template #item="slotProps">
                <div>{{ slotProps.item.companyName }}</div>
              </template>
            </AutoComplete>
          </div>
        </div>
        <!-- <div class="vx-col w-1/2 pb-4">
          <label>Reminder Date</label>
          <div class="relative">
            <flat-pickr
              placeholder=""
              class="w-full"
              name="reminderDate"
              clearable
              v-model="contactData.reminderDate"
            />
            <span
              class="clear-date"
              v-if="contactData.reminderDate"
              @click="removeValue('reminderDate')"
            >
              <vs-icon icon="close"></vs-icon>
            </span>
          </div>
        </div>
        <div class="vx-col w-1/2 pb-4 relative">
          <label>Due Date</label>
          <div class="relative">
            <flat-pickr
              placeholder=""
              class="w-full"
              name="dueDate"
              clearable
              v-model="contactData.dueDate"
            />
            <span
              class="clear-date"
              v-if="contactData.dueDate"
              @click="removeValue('dueDate')"
            >
              <vs-icon icon="close"></vs-icon>
            </span>
          </div>
        </div> -->
        <div class="vx-col w-1/2 pb-4">
          <vs-input
            label="Address"
            class="w-full"
            v-model="contactData.address"
            name="address"
          />
        </div>
        <div class="vx-col w-1/2 pb-4">
          <label>Assign To </label>
          <v-select
            multiple
            v-model="contactData.assigneeIds"
            :options="userList"
            label="fullName"
            :reduce="(option) => option.id"
            :closeOnSelect="true"
            :clearable="true"
          />
        </div>
        <div class="vx-col w-1/2 pb-4">
          <label>Deals</label>
          <v-select
            v-model="contactData.dealIds"
            :options="dealList"
            multiple
            label="name"
            :reduce="(option) => option.id"
            :closeOnSelect="true"
            :clearable="true"
          />
        </div>
      </div>
      <!-- <div class="my-3">
        <AddBtn text="Add Secondary Contact" class="w-full" />
      </div> -->
      <div class="flex justify-end w-full mt-5">
        <vs-button
          color="#1877F2"
          class="mr-3 action-btn"
          type="border"
          @click.prevent="onClose"
        >
          Cancel
        </vs-button>
        <vs-button
          color="#1877F2"
          class="action-btn"
          :disabled="isSubmitDisabled"
          @click.stop="saveContact"
        >
          Save
        </vs-button>
      </div>
    </form>
  </vs-sidebar>
</template>

<script>
import { mapGetters } from 'vuex';
import { getApiErrorMsg, getObjectDifference } from '@/helpers/helper';
import AddBtn from '../AddBtn.vue';
import { Validator } from 'vee-validate';
const dict = {
  custom: {
    firstName: {
      required: 'The First Name field is required.',
    },
    lastName: {
      required: 'The Last Name field is required.',
    },
    status: {
      required: 'The Status field is required.',
    },
  },
};
Validator.localize('en', dict);

export default {
  name: 'add-new-contacts',
  components: { AddBtn },
  props: {
    isShow: {
      type: Boolean,
      default: () => false,
    },
    selectedContactId: {
      type: Number,
      default: 0,
    },
    location: {
      type: String,
      default: () => '',
    },
    editContactType: {
      type: String,
      default: () => '',
    },
    userList: {
      TypeError: Array,
      default: () => [],
    },
  },
  created() {
    this.init();
  },
  data() {
    return {
      contactData: {
        firstName: null,
        lastName: null,
        phone: null,
        email: null,
        // reminderDate: null,
        customerId: null,
        // dueDate: null,
        address: null,
        assigneeIds: null,
        status: 'active',
        assignees: [],
        deals: [],
        addAssigneeIds: [],
        removeAssigneeIds: [],
        dealIds: [],
        companyName: null,
      },
      contactDataForUpdate: null,
      statusess: [
        {
          label: 'Active',
          value: 'active',
        },
        {
          label: 'Inactive',
          value: 'inactive',
        },
      ],
      dealList: [],
      defaultPayloadForUsers: {
        roles: ['admin', 'dispatcher'],
        fields: ['firstName', 'lastName'],
      },
      companySuggestions: [],
    };
  },
  computed: {
    ...mapGetters('auth', ['user']),
    ...mapGetters('marketing', ['getAllDeals', 'selectedDeal']),
    ...mapGetters('customer', ['getCachedCustomers']),
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
    isModalShowing: {
      get() {
        return this.isShow;
      },
      set(val) {},
    },
    validateForm() {
      return (
        !this.errors.any() &&
        this.contactData.firstName &&
        this.contactData.lastName &&
        this.contactData.status
      );
    },
    editMode() {
      return this.selectedContactId > 0 &&
        this.editContactType !== 'existingContact'
        ? true
        : false;
    },
    isSubmitDisabled() {
      const isAssigneeIdsEqual =
        JSON.stringify(
          [...((this.contactData || {}).assigneeIds || [])].sort()
        ) ===
        JSON.stringify(
          [...((this.contactDataForUpdate || {}).assigneeIds || [])].sort()
        );
      const isDealIdsEqual =
        JSON.stringify([...((this.contactData || {}).dealIds || [])].sort()) ===
        JSON.stringify(
          [...((this.contactDataForUpdate || {}).dealIds || [])].sort()
        );
      const { assignees, assigneeIds, deals, dealIds, ...newData } =
        this.contactData || {};
      const {
        assignees: oldAssignees,
        assigneeIds: oldAssigneeIds,
        deals: oldDeals,
        dealIds: oldDealIds,
        ...oldData
      } = this.contactDataForUpdate || {};

      return (
        !this.isModalShowing ||
        !this.validateForm ||
        (this.editMode &&
          JSON.stringify(newData) === JSON.stringify(oldData) &&
          isAssigneeIdsEqual &&
          isDealIdsEqual)
      );
    },
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      try {
        const { data } = await this.$store.dispatch('marketing/getDeals', {});
        this.dealList = data.payload.deals;
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    onClose() {
      this.$emit('hideContactModal');
      this.$validator.reset();
    },
    async saveContact() {
      const isValidate = await this.validate();
      if (isValidate) {
        try {
          const originalAssigneeIds = this.contactData.assignees.map(
            (assignee) => assignee.id
          );
          const currentAssigneeIds = this.contactData.assigneeIds || [];

          const originalDealIds = this.contactData.deals.map((deal) => deal.id);
          const currentDealIds = this.contactData.dealIds || [];

          let payload = null;
          if (this.selectedContactId) {
            const changedValues = getObjectDifference(
              this.contactDataForUpdate,
              this.contactData
            );
            payload = Object.entries(changedValues).reduce(
              (acc, [key, value]) => {
                acc[key] = value === '' ? null : value;
                return acc;
              },
              {}
            );
          } else {
            payload = Object.entries(this.contactData).reduce(
              (acc, [key, value]) => {
                if (
                  (!Array.isArray(value) && value) ||
                  value === false ||
                  value === 0 ||
                  (Array.isArray(value) && value.length)
                ) {
                  acc[key] = value;
                }
                return acc;
              },
              {}
            );
          }
          delete payload.assignees;
          delete payload.customer;
          delete payload.deals;

          // checking if companyName exists in DB but user remove that while editing the form so setting null to send to backend
          if (payload.customerId) {
            if (
              this.selectedContactId &&
              this.contactDataForUpdate.companyName
            ) {
              payload.companyName = null;
            } else {
              delete payload.companyName;
            }
          } else {
            if (
              this.selectedContactId &&
              this.contactDataForUpdate.customerId &&
              payload.companyName
            ) {
              payload.customerId = null;
            }
          }

          if (this.selectedContactId) {
            delete payload.assigneeIds;
            delete payload.id;
            delete payload.dealIds;

            const addAssigneeIds = currentAssigneeIds.filter(
              (id) => !originalAssigneeIds.includes(id)
            );

            const removeAssigneeIds = originalAssigneeIds.filter(
              (id) => !currentAssigneeIds.includes(id)
            );

            const addDealIds = currentDealIds.filter(
              (id) => !originalDealIds.includes(id)
            );

            const removeDealIds = originalDealIds.filter(
              (id) => !currentDealIds.includes(id)
            );

            if (addAssigneeIds.length) {
              payload.addAssigneeIds = addAssigneeIds;
            }

            if (removeAssigneeIds.length) {
              payload.removeAssigneeIds = removeAssigneeIds;
            }

            if (addDealIds.length) {
              payload.addDealIds = addDealIds;
            }

            if (removeDealIds.length) {
              payload.removeDealIds = removeDealIds;
            }
            if (Object.keys(payload).length) {
              const response = await this.$store.dispatch(
                'marketing/updateContacts',
                {
                  id: this.selectedContactId,
                  payload,
                }
              );
              if (response.status === 200) {
                await this.$vs.notify({
                  time: 8000,
                  color: 'primary',
                  title: 'Success',
                  text: 'Contact updated successfully.',
                });
              }
            }
          } else {
            const response = await this.$store.dispatch(
              'marketing/saveContacts',
              payload
            );
            if (response.status === 200) {
              await this.$vs.notify({
                time: 8000,
                color: 'primary',
                title: 'Success',
                text: 'Contact created successfully.',
              });
            }
          }
          this.$store.commit('marketing/setAllContacts', []);
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
    removeValue(key) {
      this.contactData[key] = null;
    },
    handleAutoCompleteData(event) {
      this.contactData.customerId = event.value.id;
      this.contactData.companyName = event.value.companyName;
    },
    autoComplete(event) {
      this.contactData.companyName = event.query;
      this.companySuggestions = this.modifiedCusomerList.filter((customer) => {
        return customer.companyName
          .toLowerCase()
          .includes(event.query.toLowerCase());
      });
    },
    updateCompanyName() {
      this.contactData.companyName = null;
      this.contactData.customerId = null;
    },
  },
  watch: {
    async selectedContactId(newVal, oldVal) {
      if (newVal) {
        try {
          const payload = { id: newVal };
          const response = await this.$store.dispatch(
            'marketing/getContactDetail',
            payload
          );
          this.contactData = response.data.payload.contact;
          this.contactData.assigneeIds = this.contactData.assignees
            ? this.contactData.assignees.map((assignee) => assignee.id)
            : [];
          this.contactData.customerId = this.contactData.customer
            ? this.contactData.customer.id
            : null;
          this.contactData.companyName = this.contactData.customer
            ? this.contactData.customer.name
            : null;
          this.contactData.dealIds = this.contactData.deals
            ? this.contactData.deals.map((deal) => deal.id)
            : [];
          this.contactData.phone =
            this.contactData.phone === null ? '' : this.contactData.phone;
          this.contactData.email =
            this.contactData.email === null ? '' : this.contactData.email;
          this.contactData.address =
            this.contactData.address === null ? '' : this.contactData.address;
          this.contactDataForUpdate = structuredClone(this.contactData);
          this.contactData = {
            ...this.contactData,
          };
        } catch (error) {
          await this.$vs.notify({
            time: 8000,
            color: 'danger',
            title: 'Error',
            text: getApiErrorMsg(error),
          });
        }
      } else {
        this.contactData = {
          firstName: null,
          lastName: null,
          phone: null,
          email: null,
          // reminderDate: null,
          customerId: null,
          // dueDate: null,
          address: null,
          assigneeIds: null,
          status: 'active',
          dealIds: [],
          assignees: [],
          deals: [],
          addAssigneeIds: [],
          removeAssigneeIds: [],
        };
      }
    },
  },
};
</script>

<style lang="scss">
.contact-sidebar {
  .vs-sidebar--items {
    overflow: auto;
  }
  .vs-sidebar {
    width: 45vw !important;
    max-width: 50vw !important;
  }
  .vs-input--label {
    padding-left: 0px;
  }
  .clear-date {
    position: absolute;
    inset: 0 0 0 auto;
    display: flex;
    align-items: center;
    cursor: pointer;
    width: 25px;
  }
  .company-autocompelte {
    display: block;
    input {
      width: 100%;
      border-radius: 5px;
      padding: 0.7rem;
      &:hover {
        border: 1px solid rgba(0, 0, 0, 0.2);
      }
      &:focus {
        box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.15);
        border: 1px solid rgba(var(--vs-primary), 1);
      }
    }
  }
}
</style>
