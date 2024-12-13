<template>
  <div>
    <!-- Overview Details -->
    <div class="vx-row w-full m-0">
      <!-- First Column -->
      <div class="vx-col w-full pl-0 md:w-1/2 mb-8 md:mb-0">
        <!-- Company Form -->
        <vx-card>
          <div class="vx-row">
            <div class="vx-col">
              <h5 class="font-bold">Company</h5>
            </div>
            <vs-divider />
            <div class="vx-col w-full">
              <label class="text-xs">Status <field-required-sign /></label>
              <v-select
                :options="statusOptions"
                v-model="company.status"
                :clearable="false"
                :reduce="(option) => option.value"
                class="mb-4 md:mb-0"
              />
            </div>
            <div class="vx-col w-full pb-2">
              <label class="text-xs">
                Customer Type
                <field-required-sign />
              </label>
              <v-select
                :options="customerOptions"
                v-model="company.customer_type"
                :clearable="false"
                :reduce="(option) => option.value"
                class="mb-4 md:mb-0"
              />
            </div>
            <div class="vx-col w-full pb-2">
              <label class="text-xs">Company Name<field-required-sign /></label>
              <vs-input
                v-model="company.name"
                name="company_name"
                class="w-full"
              />
            </div>
            <div class="vx-col w-full">
              <div class="flex items-center py-2">
                <vs-checkbox class="ml-0" v-model="company.internal">
                </vs-checkbox>
                Internal customer?
              </div>
            </div>
            <div class="bill-chips px-4 pb-2">
              <label class="text-xs">
                <!-- Variable from accessMixin -->
                {{ showBillToCodeAsJobCode ? 'Job #' : 'Bill To Code' }}
              </label>
              <vs-input
                class="w-full"
                v-model="billToCodeEmails"
                @keypress.space.prevent
              ></vs-input>
              <p class="small text-xs">Separate code with a comma</p>
            </div>
            <div class="vx-col w-full pb-2">
              <label class="text-xs">MC #</label>
              <vs-input
                v-model="company.mcNumber"
                name="company_mcNumber"
                class="w-full"
              />
            </div>
            <div class="vx-col w-full pb-2">
              <label class="text-xs">Address</label>
              <vs-input
                v-model="company.address"
                name="company_address"
                class="w-full"
              />
            </div>
            <div class="vx-col w-full pb-2">
              <label class="text-xs">City</label>

              <vs-input
                v-model="company.city"
                name="company_city"
                class="w-full"
              />
            </div>

            <div class="vx-col w-full pb-2">
              <div class="vx-row">
                <div class="vx-col w-1/2">
                  <label class="text-xs">State</label>

                  <vs-input
                    v-model="company.state"
                    name="company_state"
                    class="w-full"
                  />
                </div>

                <div class="vx-col w-1/2">
                  <label class="text-xs">Zip/Postal</label>

                  <vs-input
                    v-model="company.zip"
                    name="company_zip"
                    class="w-full"
                  />
                </div>
              </div>
            </div>

            <div class="vx-col w-full pb-2">
              <label class="text-xs">Primary Contact</label>

              <vs-input
                v-model="company.contact"
                name="company_primary_contact"
                class="w-full"
              />
            </div>

            <div class="vx-col w-full pb-2">
              <label class="text-xs">Phone</label>
              <vs-input
                v-model="company.phone_number"
                name="company_zip"
                class="w-full"
              />
            </div>

            <div class="vx-col w-full pb-2">
              <label class="text-xs">Email</label>
              <vs-input
                type="email"
                v-model.trim="company.email"
                name="company_email"
                class="w-full"
              />
            </div>

            <div class="vx-col w-full pb-2">
              <label class="text-xs">CC Emails</label>
              <vs-input
                v-model="ccEmails"
                class="w-full"
                @keypress.space.prevent
              />
              <p class="small text-xs">Separate multiple emails with commas</p>
            </div>
            <div class="vx-col w-full">
              <label class="text-xs">Notes</label>
              <vs-textarea class="w-full" v-model="company.notes" />
            </div>
            <div
              class="vx-col w-full pb-2"
              v-if="companiesWithInvoiceRecordPopupAccess"
            >
              <label class="text-xs">Sales Rep</label>

              <vs-input
                v-model.trim="company.salesRep"
                name="company_email"
                class="w-full"
              />
            </div>
            <div
              class="vx-col w-full"
              v-if="companiesWithInvoiceRecordPopupAccess"
            >
              <label class="text-xs">Shipping Carrier Account</label>

              <vs-input
                v-model.trim="company.shippingCarrierAcct"
                name="company_email"
                class="w-full"
              />
            </div>
          </div>
        </vx-card>
      </div>
      <!-- Second Column -->
      <div class="vx-col w-full md:w-1/2 mb-8 md:mb-0">
        <!-- Billing Form -->
        <vx-card>
          <div class="vx-row">
            <div class="vx-col">
              <h5 class="font-bold">Billing</h5>
            </div>
          </div>
          <vs-divider />
          <div class="vx-col w-full">
            <div class="flex items-center py-2">
              <vs-checkbox
                class="ml-0"
                v-model="is_bill_address_same_as_company_address"
              >
              </vs-checkbox>
              (Check here if same as mailing address)
            </div>
          </div>
          <div class="vx-col w-full pb-2">
            <label class="text-xs">Billing Address</label>
            <vs-input v-model="bill.address" class="w-full" />
          </div>
          <div class="vx-col w-full pb-2">
            <label class="text-xs">City</label>
            <vs-input v-model="bill.city" class="w-full" />
          </div>
          <div class="vx-col w-full pb-2">
            <div class="vx-row">
              <div class="vx-col w-1/2">
                <label class="text-xs">State</label>
                <vs-input v-model="bill.state" class="w-full" />
              </div>
              <div class="vx-col w-1/2">
                <label class="text-xs">Zip/Postal</label>
                <vs-input v-model="bill.zip" class="w-full" />
              </div>
            </div>
          </div>
          <div class="vx-col w-full pb-2">
            <label class="text-xs">Billing Contact</label>
            <vs-input v-model="bill.contact" class="w-full" />
          </div>
          <div class="vx-col w-full pb-2">
            <label class="text-xs">Billing Phone</label>
            <vs-input v-model="bill.phone_number" class="w-full" />
          </div>
          <div class="vx-col w-full pb-2">
            <label class="text-xs">Billing Email</label>
            <vs-input v-model.trim="bill.email" type="email" class="w-full" />
          </div>
          <div class="vx-col w-full pb-2">
            <label class="text-xs">Billing CC Emails</label>
            <vs-input
              v-model="ccEmail"
              class="w-full"
              @keypress.space.prevent
            />
            <p class="small text-xs">Separate multiple emails with commas</p>
          </div>
          <div class="vx-col w-full">
            <label class="text-xs">
              Payment Terms (No. of Days) <field-required-sign />
            </label>
            <vs-input
              type="number"
              v-model.number="bill.payment_terms"
              class="w-full"
            />
          </div>
        </vx-card>
      </div>
    </div>
    <vx-card class="mt-4">
      <div class="vx-row">
        <div class="vx-col ml-auto">
          <vs-button @click.stop="submitForm">SAVE</vs-button>
          <vs-button type="border" @click.stop="redirectToCustomerList">
            CANCEL
          </vs-button>
        </div>
      </div>
    </vx-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { isArray } from 'lodash';
import config from '@/config/constants';
import { validateEmail, getApiErrorMsg } from '@/helpers/helper';

export default {
  name: 'OverviewTab',
  props: {
    dataObj: {
      type: Object,
      default: () => ({}),
    },
    isEditMode: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters('auth', ['user']),
    companiesWithInvoiceRecordPopupAccess() {
      return (
        this.user &&
        this.user.admin_company_details &&
        this.user.admin_company_details.admin_company_detail_id &&
        config.companiesWithInvoiceRecordPopupAccess.includes(
          Number(this.user.admin_company_details.admin_company_detail_id)
        )
      );
    },
    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
  },
  data() {
    return {
      billToCodeEmails: '',
      is_bill_address_same_as_company_address: false,
      ccEmail: '',
      ccEmails: '',
      company: {
        // billToCodes: [],
        customer_type: '',
        name: '',
        mcNumber: '',
        address: '',
        state: '',
        city: '',
        zip: '',
        contact: '',
        phone_number: '',
        email: '',
        internal: '',
        salesRep: '',
        shippingCarrierAcct: '',
        carrierSetupPackageStorageUrl: '',
        status: 'active',
        notes: '',
      },
      bill: {
        address: '',
        state: '',
        city: '',
        zip: '',
        contact: '',
        phone_number: '',
        email: '',
        payment_terms: 1,
      },
      statusOptions: [
        {
          label: 'Active',
          value: 'active',
        },
        {
          label: 'Inactive',
          value: 'inactive',
        },
        {
          label: 'Banned',
          value: 'banned',
        },
      ],
      customerOptions: [
        {
          label: 'Broker',
          value: 'broker',
        },
        {
          label: 'Customer',
          value: 'customer',
        },
        {
          label: 'Factoring Companies',
          value: 'factoring_companies',
        },
        {
          label: 'Carrier',
          value: 'carrier',
        },
        {
          label: 'Insurance Company',
          value: 'insurance_company',
        },
      ],
    };
  },
  created() {
    if (this.dataObj) {
      this.initValues();
    }
  },
  beforeDestroy() {
    const payload = this.generatePayload();
    payload.type = payload.customer_type;
    payload.payment_terms_day = payload.payment_terms_day;

    this.$emit('update:Overview', {
      ...payload,
    });
  },
  methods: {
    initValues() {
      const {
        type = 'carrier',
        company_name = '',
        mcNumber = '',
        address = '',
        city = '',
        state = '',
        zip_code = '',
        primary_contact = '',
        phone_number = '',
        email = '',
        ccEmails = '',
        internal = '',
        billing_address = '',
        billing_city = '',
        billing_state = '',
        billing_zip_code = '',
        billing_contact = '',
        billing_phone_number = '',
        billing_email = '',
        payment_terms_day = 1,
        billToCodes = [],
        billing_cc_emails = '',
        salesRep = '',
        shippingCarrierAcct = '',
        carrierSetupPackageStorageUrl = '',
        status = 'active',
        notes = '',
      } = this.dataObj;
      this.billToCodeEmails = billToCodes.join(',');
      this.ccEmail = isArray(billing_cc_emails)
        ? billing_cc_emails.join(',')
        : billing_cc_emails;
      this.ccEmails = isArray(ccEmails) ? ccEmails.join(',') : ccEmails;
      this.company = {
        customer_type: type,
        name: company_name,
        mcNumber,
        address,
        state,
        city,
        zip: zip_code,
        contact: primary_contact,
        phone_number,
        email,
        internal,
        shippingCarrierAcct,
        salesRep,
        carrierSetupPackageStorageUrl,
        status,
        notes,
      };
      this.bill = {
        address: billing_address,
        state: billing_state,
        city: billing_city,
        zip: billing_zip_code,
        contact: billing_contact,
        phone_number: billing_phone_number,
        email: billing_email,
        payment_terms: payment_terms_day,
      };
    },
    generatePayload() {
      return {
        customer_type: this.company.customer_type,
        company_name: this.company.name,
        mcNumber: this.company.mcNumber,
        address: this.company.address,
        city: this.company.city,
        state: this.company.state,
        zip_code: this.company.zip,
        primary_contact: this.company.contact,
        phone_number: this.company.phone_number,
        email: this.company.email,
        ccEmails: this.ccEmails
          ? this.ccEmails
              .split(',')
              .map((item) => item.trim())
              .filter(Boolean)
          : [],
        internal: this.company.internal,
        billing_address: this.bill.address,
        billing_city: this.bill.city,
        billing_state: this.bill.state,
        billing_zip_code: this.bill.zip,
        billing_contact: this.bill.contact,
        billing_phone_number: this.bill.phone_number,
        billing_email: this.bill.email,
        payment_terms_day: this.bill.payment_terms,
        billToCodes: this.billToCodeEmails
          ? this.billToCodeEmails
              .split(',')
              .map((element) => {
                return element.trim();
              })
              .filter(Boolean)
          : [],
        billing_cc_emails: this.ccEmail
          ? this.ccEmail
              .split(',')
              .map((item) => item.trim())
              .filter(Boolean)
          : [],
        shippingCarrierAcct: this.company.shippingCarrierAcct,
        salesRep: this.company.salesRep,
        status: this.company.status,
        notes: this.company.notes,
      };
    },
    async submitForm() {
      if (this.ccEmail) {
        for (const item of this.ccEmail.split(',')) {
          const validate = await validateEmail(item);
          if (!validate) {
            this.$vs.notify({
              color: 'danger',
              title: 'Error',
              text: 'You have entered an invalid billing cc email address!',
            });
            return;
          }
        }
      }
      if (this.ccEmails) {
        for (const item of this.ccEmails.split(',')) {
          const validate = await validateEmail(item);
          if (!validate) {
            this.$vs.notify({
              color: 'danger',
              title: 'Error',
              text: 'You have entered an invalid cc email address!',
            });
            return;
          }
        }
      }

      const payload = this.generatePayload();
      if (this.isEditMode) {
        payload.id = this.dataObj.customer_id;
      } else {
        payload.files = ((this.dataObj || {}).files || []).map(
          ({ folderId, originalFileName, fileName }) => ({
            folderId,
            originalFileName,
            fileName,
          })
        );
      }

      this.isEditMode
        ? this.updateCustomer(payload)
        : this.createCustomer(payload);
    },
    createCustomer(payload) {
      this.$vs.loading();

      this.$store
        .dispatch('customer/createCustomer', payload)
        .then(() => {
          this.redirectToCustomerList();

          this.$vs.notify({
            color: 'primary',
            title: 'Carrier Added',
            text: 'Carrier added successfully.',
          });
          this.$store.commit('customer/resetCachedCustomers');
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: getApiErrorMsg(error),
          });
        })
        .finally(() => this.$vs.loading.close());
    },
    updateCustomer(payload) {
      this.$vs.loading();
      this.$store
        .dispatch('customer/updateCustomer', payload)
        .then(() => {
          this.redirectToCustomerList();

          this.$vs.notify({
            color: 'primary',
            title: 'Carrier Updated',
            text: 'Carrier updated successfully.',
          });
          this.$store.commit('customer/resetCachedCustomers');
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: getApiErrorMsg(error),
          });
        })
        .finally(() => this.$vs.loading.close());
    },
    redirectToCustomerList() {
      this.$router.push({ name: 'carriers' }).catch(() => true);
    },
  },
  watch: {
    is_bill_address_same_as_company_address(newVal) {
      if (newVal) {
        this.bill = {
          ...this.company,
          payment_terms: this.bill.payment_terms,
        };
      } else {
        this.bill = {
          address: '',
          state: '',
          city: '',
          zip: '',
          contact: '',
          phone_number: '',
          email: '',
          payment_terms: this.bill.payment_terms,
        };
      }
    },
    dataObj: {
      handler(newVal) {
        if (newVal) {
          this.initValues();
        }
      },
      deep: true,
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@sass/custom/sidebar.scss';
::v-deep {
  .bill-chips {
    width: 100%;
  }
}

::v-deep .con-chips {
  border: 1px solid rgba(0, 0, 0, 0.2) !important;
  box-shadow: none !important;
}
</style>
