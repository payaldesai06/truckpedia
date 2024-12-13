<template>
  <vs-sidebar
    click-not-close
    position-right
    parent="body"
    default-index="1"
    color="primary"
    class="add-new-data-sidebar items-no-padding"
    spacer
    :value="isSidebarActive"
  >
    <div class="mt-6 flex items-center justify-between px-6">
      <h4>{{ isCreateMode ? 'Add' : 'Edit' }} Address</h4>
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
      <div class="p-6">
        <div class="vx-row">
          <div class="vx-col w-full">
            <label class="text-xs">
              Name
              <field-required-sign />
            </label>

            <vs-input v-model="name" class="w-full" />
          </div>

          <div class="vx-col w-full mt-4">
            <label class="text-xs">
              Address
              <field-required-sign />
            </label>

            <!-- <vs-input v-model="address" class="w-full" /> -->
            <gmap-autocomplete
              class="vs-inputx vs-input--input normal hasValue"
              :value="address"
              placeholder=""
              @place_changed="getChangedPlace($event)"
              :options="googleMapAutoCompleteOptions"
              :select-first-on-enter="true"
            >
            </gmap-autocomplete>
          </div>

          <div class="vx-col w-full mt-4">
            <label class="text-xs">
              City
              <field-required-sign />
            </label>
            <vs-input v-model="city" class="w-full" />
          </div>

          <div class="vx-col w-full">
            <div class="vx-row">
              <div class="vx-col w-1/2 mt-4">
                <label class="text-xs">
                  State
                  <field-required-sign />
                </label>
                <vs-input v-model="state" class="w-full" />
              </div>

              <div class="vx-col w-1/2 mt-4">
                <label class="text-xs">
                  Zip Code
                  <field-required-sign />
                </label>

                <vs-input v-model="zip_code" class="w-full" />
              </div>
            </div>
          </div>

          <div class="vx-col w-full mt-4">
            <label class="text-xs"> Contact </label>

            <vs-input v-model="contact" class="w-full" />
          </div>

          <div class="vx-col w-full mt-4">
            <label class="text-xs"> Phone </label>

            <vs-input v-model="phone" class="w-full" />
          </div>

          <div class="vx-col w-full mt-4">
            <label class="text-xs"> Email </label>

            <vs-input v-model.trim="email" class="w-full" />
          </div>

          <div class="vx-col w-full mt-4">
            <label class="text-xs">Tagged Customer</label>
            <v-select
              :options="customerOptions"
              label="company_name"
              :dir="$vs.rtl ? 'rtl' : 'ltr'"
              v-model="tagged_customer"
              class="mb-4 md:mb-0"
            />
          </div>
          <div class="vx-col w-full mt-4">
            <label class="text-xs"> Zone </label>
            <vs-input v-model="zone" class="w-full" />
          </div>

          <div class="vx-col w-full mt-4">
            <label class="text-xs"> Trailer Recovery Fee </label>
            <vs-input
              v-model="trailerRecoveryFee"
              type="number"
              class="w-full"
            />
          </div>
        </div>
      </div>
    </component>

    <div class="flex flex-wrap items-center p-6 space-x-2" slot="footer">
      <vs-button type="filled" color="primary" @click="submit">
        Submit
      </vs-button>
      <vs-button type="border" color="danger" @click.stop="closeSidebar">
        Cancel
      </vs-button>
    </div>
  </vs-sidebar>
</template>
<!-- eslint-disable multiline-ternary -->
<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import CloseSidebarMixin from '@/mixins/closeSidebarMixin';
import config from '@/config/constants.js';
import setPlaceMixin from '@/mixins/setPlaceMixin.js';
import { getApiErrorMsg } from '@/helpers/helper';

export default {
  name: 'SavedAddressesSidebar',

  mixins: [CloseSidebarMixin, setPlaceMixin],

  props: {
    isSidebarActive: {
      type: Boolean,
      required: true,
    },
    data: {
      type: Object,
      default: () => {},
    },
    customerOptions: {
      type: Array,
      default: () => [],
    },
  },

  components: {
    VuePerfectScrollbar,
  },

  data() {
    return {
      id: '',
      name: '',
      address: '',
      state: '',
      city: '',
      zip_code: '',
      latitude: null,
      longitude: null,
      contact: '',
      phone: '',
      email: '',
      zone: '',
      trailerRecoveryFee: null,
      tagged_customer: null,
      // google map autocomplete options
      googleMapAutoCompleteOptions: config.googleMapAutoCompleteOptions,
      settings: {
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
    };
  },

  computed: {
    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
    isCreateMode() {
      return !!(Object.entries(this.data).length === 0);
    },
  },

  created() {
    this.initValues();
  },

  methods: {
    getChangedPlace(place) {
      // Extract address components from the provided place
      const { address, city, state, zipCode, latitude, longitude } =
        this.setPlace(place);
      this.latitude = latitude;
      this.longitude = longitude;
      this.address = address;
      this.state = state;
      this.city = city;
      this.zip_code = zipCode;
    },

    async initValues(data = {}) {
      const savedAddress = this.data.id ? { ...this.data } : data;
      this.id = savedAddress.id;
      this.name = savedAddress.name;
      this.address = savedAddress.address;
      this.state = savedAddress.state;
      this.city = savedAddress.city;
      this.zip_code = savedAddress.zip_code;
      this.latitude = savedAddress.latitude;
      this.longitude = savedAddress.longitude;
      this.contact = savedAddress.contact;
      this.phone = savedAddress.phone;
      this.email = savedAddress.email;
      this.zone = savedAddress.zone;
      this.trailerRecoveryFee = savedAddress.trailerRecoveryFee;

      if (savedAddress.taggedCustomerId) {
        this.tagged_customer = {
          customer_id: savedAddress.taggedCustomerId,
          company_name: savedAddress.taggedCustomerName,
        };
        if (savedAddress.taggedCustomerBillToCode) {
          this.tagged_customer.company_name = `${savedAddress.taggedCustomerName} - ${savedAddress.taggedCustomerBillToCode}`;
          this.tagged_customer.bill_to_code =
            savedAddress.taggedCustomerBillToCode;
        } else {
          this.tagged_customer.bill_to_code = null;
        }
      }
    },

    closeSidebar() {
      this.$emit('closeSidebar');
    },

    async submit() {
      this.$vs.loading();
      let payload = {
        name: this.name,
        address: this.address,
        state: this.state,
        city: this.city,
        zip_code: this.zip_code,
        latitude: this.latitude,
        longitude: this.longitude,
        contact: this.contact,
        phone: this.phone,
        email: this.email,
        zone: this.zone,
        trailerRecoveryFee: this.trailerRecoveryFee,
        taggedCustomerId: this.tagged_customer
          ? this.tagged_customer.customer_id
          : null,
        taggedCustomerBillToCode: this.tagged_customer
          ? this.tagged_customer.bill_to_code
          : null,
      };

      if (!this.isCreateMode) {
        payload.id = this.data.id;
      }

      this.isCreateMode
        ? this.createAddress(payload)
        : this.updateAddress(payload);
    },

    createAddress(payload) {
      this.$vs.loading();
      this.$store
        .dispatch('saved-addresses/createAddress', payload)
        .then(() => {
          this.closeSidebar();
          this.$vs.notify({
            color: 'primary',
            title: 'Address Added',
            text: 'Address added successfully.',
          });
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

    updateAddress(payload) {
      this.$vs.loading();
      this.$store
        .dispatch('saved-addresses/updateAddress', payload)
        .then(() => {
          this.closeSidebar();
          this.$emit('address-updated');
          this.$vs.notify({
            color: 'primary',
            title: 'Address Updated',
            text: 'Address updated successfully.',
          });
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
  },
};
</script>

<style lang="scss" scoped>
@import '@sass/custom/sidebar.scss';

::v-deep .vs__dropdown-menu {
  max-height: 180px !important;
}
</style>
