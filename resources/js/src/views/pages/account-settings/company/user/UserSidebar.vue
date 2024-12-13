<template>
  <vs-sidebar
    click-not-close
    position-right
    parent="body"
    default-index="1"
    color="primary"
    class="add-new-data-sidebar items-no-padding"
    spacer
    v-model="isSidebarActiveLocal"
  >
    <div class="mt-6 flex items-center justify-between px-6">
      <!--      <h4>{{ Object.entries(this.data).length === 0 ? 'ADD NEW' : 'UPDATE' }} ITEM</h4>-->
      <h4>{{ isCreateMode ? 'Add' : 'Edit' }} User</h4>
      <feather-icon
        icon="XIcon"
        @click.stop="closeSidebar"
        class="cursor-pointer"
      ></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <component
      :is="scrollbarTag"
      class="scroll-area--data-list-add-new"
      :settings="settings"
      :key="$vs.rtl"
    >
      <div class="p-6 space-y-6">
        <div class="w-full">
          <label class="text-xs">
            First Name
            <field-required-sign />
          </label>

          <vs-input
            v-validate="'required'"
            data-vv-validate-on="blur"
            name="first_name"
            v-model="first_name"
            class="w-full"
          />

          <span class="text-danger text-sm">{{
            errors.first('first_name')
          }}</span>
        </div>

        <div class="w-full">
          <label class="text-xs">
            Last Name
            <field-required-sign />
          </label>

          <vs-input
            v-validate="'required'"
            data-vv-validate-on="blur"
            name="last_name"
            v-model="last_name"
            class="w-full"
          />

          <span class="text-danger text-sm">{{
            errors.first('last_name')
          }}</span>
        </div>

        <div class="w-full">
          <label class="text-xs">
            Email
            <field-required-sign />
          </label>

          <vs-input
            v-validate="'required|email'"
            data-vv-validate-on="blur"
            name="email"
            v-model="email"
            class="w-full"
          />

          <span class="text-danger text-sm">{{ errors.first('email') }}</span>
        </div>

        <div class="w-full">
          <label class="text-xs">
            Role
            <field-required-sign />
          </label>

          <v-select
            v-validate="
              'required|included:admin,dispatcher,warehouse_operator,tag_operator,maintenance'
            "
            data-vv-as="selected"
            data-vv-name="role"
            name="role"
            :options="roleOptions"
            :clearable="false"
            v-model="selected_role_option"
            :reduce="(option) => option.value"
            class="mb-4 md:mb-0"
          />

          <span class="text-danger text-sm">{{ errors.first('role') }}</span>

          <vs-checkbox
            v-if="selected_role_option === config.roles.admin"
            v-model="adminAlsoBeDispatcher"
            class="h-full inline-flex mt-2"
          >
            Allow this admin to also be a dispatcher?
          </vs-checkbox>
        </div>

        <div class="w-full">
          <label class="text-xs">
            Tags
            <field-required-sign
              v-if="selected_role_option === config.roles.tag_operator"
            />
          </label>

          <v-select
            data-vv-name="tags"
            name="tags"
            :options="allTags"
            :clearable="false"
            v-model="selectedTags"
            :reduce="(option) => option.tag_id"
            label="business_name"
            class="mb-4 md:mb-0"
            multiple
            v-validate="
              selected_role_option === config.roles.tag_operator
                ? 'required'
                : ''
            "
          />

          <span class="text-danger text-sm">{{ errors.first('tags') }}</span>

          <vs-checkbox
            v-if="isHideLoadsCheckboxVisible"
            v-model="hideLoadsWithNoTag"
            class="h-full inline-flex mt-2"
          >
            Hide non-tagged loads from this user
          </vs-checkbox>
        </div>
        <!-- commission block start here -->
        <div
          class="flex flex-row items-center justify-between"
          v-if="
            selected_role_option === config.roles.dispatcher ||
            (selected_role_option === config.roles.admin &&
              adminAlsoBeDispatcher)
          "
        >
          <div class="w-1/2 relative">
            <label class="text-xs">
              Commission
              <!-- <field-required-sign /> -->
            </label>

            <!-- v-validate="'required'" -->
            <vs-input
              data-vv-validate-on="blur"
              type="number"
              :min="0"
              :step="0.01"
              :max="100"
              name="commission_fractional"
              v-model.number="commission_fractional"
              class="w-full"
            />
            <div
              class="absolute flex items-center"
              style="bottom: 7px; right: 50px"
            >
              %
            </div>
          </div>

          <div class="mt-4 p-3">of</div>
          <div class="w-1/2">
            <label class="text-xs" style="visibility: hidden">
              Commission On
              <!-- <field-required-sign /> -->
            </label>
            <!-- v-validate="'required'" -->
            <v-select
              data-vv-as="selected"
              data-vv-name="commission_on"
              name="commission_on"
              :options="commissionOptions"
              :clearable="false"
              v-model="selected_commission_on"
              :reduce="(option) => option.value"
              class="mb-4 md:mb-0"
            />
          </div>
        </div>
        <!-- By Formula Block -->
        <div
          class="by-formula-commission mt-5"
          v-if="selected_commission_on === 'custom_formula'"
        >
          <div class="flex items-center">
            <div class="fees-dropdowns">
              <v-select
                :options="commissionFormulaPrimaryOptions"
                v-model="commissionDataByFormula.primaryFeeType"
                :reduce="(option) => option.value"
                :clearable="false"
              />
              <v-select
                :options="commissionMethods"
                v-model="commissionDataByFormula.operator"
                :reduce="(option) => option.value"
                :searchable="false"
                :clearable="false"
              />
              <v-select
                :options="commissionFormulaSecondaryOptions"
                v-model="commissionDataByFormula.secondaryFeeType"
                :reduce="(option) => option.value"
                :clearable="false"
              />
            </div>
          </div>
        </div>
        <!-- commission block end here  -->
      </div>
    </component>

    <div class="flex flex-wrap items-center p-6 space-x-2" slot="footer">
      <vs-button
        type="filled"
        color="primary"
        @click="submit"
        :disabled="!validateForm"
      >
        {{ isCreateMode ? 'Submit' : 'Update' }}
      </vs-button>
      <vs-button type="border" color="danger" @click="closeSidebar"
        >Cancel</vs-button
      >
    </div>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import CloseSidebarMixin from '@/mixins/closeSidebarMixin';
import config from '@/config/constants';

// For custom error message
import { Validator } from 'vee-validate';
import { mapState, mapGetters } from 'vuex';

const dict = {
  custom: {
    first_name: {
      required: 'The first name field is required.',
    },
    last_name: {
      required: 'The last name field is required.',
    },
    role: {
      required: 'The role field is required.',
    },
    email: {
      required: 'The email field is required.',
    },
    inspection_expiry: {
      required: 'Please enter inspection expiry date',
    },
    tags: {
      required: 'Tag is required.',
    },
  },
};

// register custom messages
Validator.localize('en', dict);

export default {
  name: 'UserSidebar',

  mixins: [CloseSidebarMixin],

  props: {
    isSidebarActive: {
      type: Boolean,
      required: true,
    },
    data: {
      type: Object,
      default: () => {},
    },
  },

  components: {
    VuePerfectScrollbar,
  },

  data() {
    return {
      first_name: '',
      last_name: '',
      email: '',
      selected_role_option: '',
      commission_fractional: '',
      selected_commission_on: '',
      selectedTags: [],
      config: config,
      roleOptions: [
        { label: 'Admin', value: 'admin' },
        { label: 'Dispatcher', value: 'dispatcher' },
        { label: 'Warehouse Operator', value: 'warehouse_operator' },
        { label: 'Tag Operator', value: 'tag_operator' },
        { label: 'Maintenance', value: 'maintenance' },
      ],

      commissionOptions: [
        { label: 'Hauling Fee', value: 'hauling_fee' },
        {
          label: 'Hauling Fee + Accessorial Fees',
          value: 'hauling_fee_with_accessorial_fee',
        },
        { label: 'Total Income', value: 'total_income' },
        { label: 'By Formula', value: 'custom_formula' },
      ],

      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
      adminAlsoBeDispatcher: false,
      hideLoadsWithNoTag: false,
      commissionDataByFormula: {
        primaryFeeType: null,
        operator: null,
        secondaryFeeType: null,
      },
      commissionMethods: [
        {
          label: 'Subtract (-)',
          value: 'subtract',
        },
        {
          label: 'Add (+)',
          value: 'add',
        },
      ],
      commissionFormulaPrimaryOptions: [
        { label: 'Hauling Fee', value: 'haulingFee' },
        {
          label: 'Hauling Fee + Accessorial Fees',
          value: 'haulingFeeAndAccessorialFee',
        },
        { label: 'Total Income', value: 'totalIncome' },
        {
          label: 'Third Party Hauling Fee',
          value: 'thirdPartyHaulingFee',
        },
        {
          label: 'Third Party Hauling Fee + Accessorial Fees',
          value: 'thirdPartyHaulingFeeAndAccessorialFee',
        },
        {
          label: 'Third Party Total Cost',
          value: 'thirdPartyTotalCost',
        },
      ],
      commissionFormulaSecondaryOptions: [
        {
          label: 'Third Party Hauling Fee',
          value: 'thirdPartyHaulingFee',
        },
        {
          label: 'Third Party Hauling Fee + Accessorial Fees',
          value: 'thirdPartyHaulingFeeAndAccessorialFee',
        },
        {
          label: 'Third Party Total Cost',
          value: 'thirdPartyTotalCost',
        },
      ],
    };
  },

  watch: {
    isSidebarActive(val) {
      if (!val) return;
      if (this.isCreateMode) {
        this.initValues();
        this.$validator.reset();
      } else {
        this.initValues();
        this.$validator.reset();
      }
      this.getAllTags();
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    },

    selected_commission_on(val) {
      if (val !== 'custom_formula') {
        this.commissionDataByFormula = {
          primaryFeeType: null,
          operator: null,
          secondaryFeeType: null,
        };
      }
    },
  },

  computed: {
    ...mapGetters('tag', ['allTags']),

    isCustomCommissionFieldsValid() {
      if (this.selected_commission_on === 'custom_formula') {
        return (
          this.commissionDataByFormula.primaryFeeType &&
          this.commissionDataByFormula.operator &&
          this.commissionDataByFormula.secondaryFeeType
        );
      }
      return true;
    },

    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive;
      },
      set(val) {
        if (!val) {
          // this.$emit('closeSidebar')
          this.$validator.reset();
          this.initValues();
        }
      },
    },

    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },

    validateForm() {
      return (
        !this.errors.any() &&
        this.first_name !== '' &&
        this.last_name !== '' &&
        this.email !== '' &&
        this.selected_role_option !== '' &&
        this.isCustomCommissionFieldsValid
      );
    },

    isCreateMode() {
      return !!(Object.entries(this.data).length === 0);
    },

    isHideLoadsCheckboxVisible() {
      return (
        (this.selected_role_option === config.roles.admin ||
          this.selected_role_option === config.roles.dispatcher) &&
        this.selectedTags.length > 0
      );
    },
  },

  methods: {
    initValues(data = {}) {
      const user = this.data.user_id ? this.data : data;
      this.user_id = user.user_id;
      this.email = user.email;
      this.selected_role_option = user.role;
      this.first_name = user.user_details ? user.user_details.first_name : '';
      this.last_name = user.user_details ? user.user_details.last_name : '';
      this.commission_fractional = user.user_details
        ? user.user_details.commission_fractional * 100
        : '';
      this.selected_commission_on = user.user_details
        ? user.user_details.commission_on
        : '';
      this.selectedTags = user.tags || [];
      this.adminAlsoBeDispatcher = user.multiple_roles || false;
      this.hideLoadsWithNoTag = user.tagAccess || false;
      if (this.selected_commission_on === 'custom_formula') {
        this.commissionDataByFormula.primaryFeeType =
          user.user_details.customFormulaPrimary;
        this.commissionDataByFormula.operator =
          user.user_details.commissionCustomFormulaOperator;
        this.commissionDataByFormula.secondaryFeeType =
          user.user_details.customFormulaSecondary;
      }
    },

    closeSidebar() {
      this.$emit('closeSidebar');
      // this.initValues()
    },

    submit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          let payload = {
            id: this.user_id,
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            role: this.selected_role_option,
            adminAlsoBeDispatcher: this.adminAlsoBeDispatcher,
            hideLoadsWithNoTag: this.isHideLoadsCheckboxVisible
              ? this.hideLoadsWithNoTag
              : false,
          };
          if ((this.selectedTags || []).length) {
            payload.tags = this.selectedTags;
          }

          if (
            this.selected_role_option == config.roles.dispatcher ||
            this.adminAlsoBeDispatcher
          ) {
            if (this.commission_fractional) {
              payload.commission_fractional = this.commission_fractional / 100;
            } else {
              payload.commission_fractional = 0;
            }
            payload.commission_on = this.selected_commission_on
              ? this.selected_commission_on
              : 'total_income';

            if (this.selected_commission_on === 'custom_formula') {
              payload.customFormulaPrimary =
                this.commissionDataByFormula.primaryFeeType;
              payload.commissionCustomFormulaOperator =
                this.commissionDataByFormula.operator;
              payload.customFormulaSecondary =
                this.commissionDataByFormula.secondaryFeeType;
            }
          }

          this.isCreateMode
            ? this.createUser(payload)
            : this.updateUser(payload);
        }
      });
    },

    createUser(payload) {
      delete payload.id;

      this.$vs.loading();

      this.$store
        .dispatch('company-user/createCompanyUser', payload)
        .then(() => {
          this.closeSidebar();

          this.$vs.notify({
            color: 'primary',
            title: 'User Added',
            text: 'User added successfully and an invitation to set up the account has been emailed.',
          });
          this.$emit('onUserChange');
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        })
        .finally(() => {
          this.resetCachedUsers();
          this.$vs.loading.close();
        });
    },

    updateUser(payload) {
      this.$vs.loading();

      this.$store
        .dispatch('company-user/updateCompanyUser', payload)
        .then(() => {
          this.closeSidebar();

          this.$vs.notify({
            color: 'primary',
            title: 'User Updated',
            text: 'User updated successfully.',
          });
          this.$emit('onUserChange');
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        })
        .finally(() => {
          this.resetCachedUsers();
          this.$vs.loading.close();
        });
    },

    resetCachedUsers() {
      this.$store.commit('companyUserV2/resetCachedUsers');
    },

    getAllTags() {
      this.$store.dispatch('tag/getAllTags');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@sass/custom/sidebar.scss';

.by-formula-commission {
  min-height: 150px;
  & > div {
    gap: 10px;
    height: max-content;
  }
  .fees-dropdowns {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1;
    & > * {
      &:first-child,
      &:last-child {
        flex: 2;
      }
      &:nth-child(2) {
        flex: 1;
      }
    }
  }
}
</style>
