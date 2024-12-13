<template>
  <div class="registration-modal">
    <div class="vs-row">
      <div class="vs-col w-full pb-3">
        <label class="text-xs">
          US DOT Number (type to search your company) <field-required-sign />
        </label>
        <AutoComplete
          v-model="formFields.usNumber"
          name="usNumber"
          v-validate="'required'"
          data-vv-validate-on="blur"
          :suggestions="items"
          :autoHighlight="true"
          @item-select="handleAutoCompleteData($event, 'usNumber')"
          @complete="autoComplete($event, 'usNumber')"
          class="inputx w-full"
          field="legalName"
        />
        <!-- <vs-input
          v-validate="'required'"
          name="usNumber"
          label="US DOT Number (type to search your company)"
          data-vv-validate-on="blur"
          class="inputx w-full"
          v-model="formFields.usNumber"
        /> -->
        <span class="text-danger text-sm">{{ errors.first('usNumber') }}</span>
      </div>
    </div>
    <div class="vs-row pb-3">
      <div class="vs-col w-1/2 pr-3 pb-3">
        <label class="text-xs"> First Name <field-required-sign /> </label>
        <vs-input
          v-validate="'required'"
          name="fName"
          data-vv-validate-on="blur"
          class="inputx w-full"
          v-model="formFields.fName"
        />
        <span class="text-danger text-sm">{{ errors.first('fName') }}</span>
      </div>
      <div class="vs-col w-1/2 pb-3">
        <label class="text-xs"> Last Name <field-required-sign /> </label>
        <vs-input
          v-validate="'required'"
          name="lName"
          data-vv-validate-on="blur"
          class="inputx w-full"
          v-model="formFields.lName"
        />
        <span class="text-danger text-sm">{{ errors.first('lName') }}</span>
      </div>
    </div>
    <div class="vs-row">
      <div class="vs-col w-full pb-3">
        <label class="text-xs"> Email <field-required-sign /> </label>
        <vs-input
          v-validate="'required|email'"
          name="email"
          data-vv-validate-on="blur"
          class="inputx w-full"
          v-model="formFields.email"
        />
        <span class="text-danger text-sm">{{ errors.first('email') }}</span>
      </div>
    </div>

    <div class="vs-row">
      <div class="vs-col w-full pb-3">
        <vs-input
          name="phoneNumber"
          class="inputx w-full"
          label="Phone Number"
          v-model="formFields.phoneNumber"
        />
        <span class="text-danger text-sm">{{
          errors.first('phoneNumber')
        }}</span>
      </div>
      <!-- <div class="vs-col w-1/2 pb-3">
        <vs-input
          name="faxNumber"
          data-vv-validate-on="blur"
          class="inputx w-full"
          placeholder="Fax"
          v-model="formFields.faxNumber"
        />
        <span class="text-danger text-sm">{{ errors.first('faxNumber') }}</span>
      </div> -->
    </div>
    <!-- <div class="vs-row">
      <div class="vs-col w-full pb-3">
        <vs-input
          v-validate="'required|min:6'"
          name="password"
          data-vv-validate-on="blur"
          type="password"
          class="inputx w-full"
          placeholder="Password"
          v-model="formFields.password"
        />
        <span class="text-danger text-sm">{{ errors.first('password') }}</span>
      </div>
    </div>
    <div class="vs-row">
      <div class="vs-col w-full pb-3">
        <vs-input
          v-validate="'required|min:6'"
          name="cPassword"
          data-vv-validate-on="blur"
          type="password"
          class="inputx w-full"
          placeholder="Confirm Password"
          v-model="formFields.cPassword"
        />
        <span class="text-danger text-sm">{{ errors.first('cPassword') }}</span>
      </div>
    </div> -->

    <div class="vs-row">
      <div class="vs-col w-full pb-3">
        <label class="text-xs"> Business Name <field-required-sign /> </label>
        <vs-input
          v-validate="'required'"
          name="bussinessName"
          data-vv-validate-on="blur"
          class="inputx w-full"
          v-model="formFields.bussinessName"
        />
        <span class="text-danger text-sm">{{
          errors.first('bussinessName')
        }}</span>
      </div>
    </div>

    <!-- <div class="vs-row">
      <div class="vs-col w-full pb-3">
        <vs-input
          v-validate="'required|email'"
          name="billingEmail"
          data-vv-validate-on="blur"
          class="inputx w-full"
          placeholder="Billing Email"
          v-model="formFields.billingEmail"
        />
        <span class="text-danger text-sm">{{
          errors.first('billingEmail')
        }}</span>
      </div>
    </div> -->

    <!-- <div class="vs-row">
      <div class="vs-col w-full pb-3">
        <vs-input
          v-validate="'required|numeric'"
          name="loadStartFrom"
          data-vv-validate-on="blur"
          class="inputx w-full"
          placeholder="Load # Start From"
          v-model="formFields.loadStartFrom"
        />
        <span class="text-danger text-sm">{{
          errors.first('loadStartFrom')
        }}</span>
      </div>
    </div> -->

    <div class="vs-row pb-3">
      <div class="vs-col w-1/2 pr-3 pb-3">
        <vs-input
          name="streetAddress"
          class="inputx w-full"
          label="Address Street"
          v-model="formFields.streetAddress"
        />
        <span class="text-danger text-sm">{{
          errors.first('streetAddress')
        }}</span>
      </div>
      <div class="vs-col w-1/2 pb-3">
        <vs-input
          name="city"
          class="inputx w-full"
          label="City"
          v-model="formFields.city"
        />
        <span class="text-danger text-sm">{{ errors.first('city') }}</span>
      </div>
    </div>

    <div class="vs-row pb-3">
      <div class="vs-col w-1/2 pr-3 pb-3">
        <vs-input
          name="state"
          class="inputx w-full"
          label="State"
          v-model="formFields.state"
        />
        <span class="text-danger text-sm">{{ errors.first('state') }}</span>
      </div>
      <div class="vs-col w-1/2 pb-3">
        <vs-input
          name="zipCode"
          class="inputx w-full"
          label="Zip Code"
          v-model="formFields.zipCode"
        />
        <span class="text-danger text-sm">{{ errors.first('zipCode') }}</span>
      </div>
    </div>

    <!-- <div class="vs-row">
      <div class="vs-col w-full pb-3">
        <v-select
          v-validate="'required'"
          data-vv-validate-on="selected"
          name="timeZone"
          label="label"
          :options="timezoneOptions"
          :reduce="(option) => option.value"
          :clearable="false"
          v-model="formFields.timeZone"
          class="w-full"
          placeholder="Timezone"
        />
        <span class="text-danger text-sm">{{ errors.first('timeZone') }}</span>
      </div>
    </div> -->

    <vs-button class="w-full" @click="register">Submit</vs-button>
  </div>
</template>

<script>
import { getApiErrorMsg } from '@/helpers/helper';
const dict = {
  custom: {
    fName: {
      required: 'Please enter your first name',
    },
    lName: {
      required: 'Please enter your last name',
    },
    email: {
      required: 'Please enter your email',
      email: 'Please enter a valid email address',
    },
    // password: {
    //   required: 'Please enter your password',
    //   min: 'Password must be at least 6 characters',
    // },
    // cPassword: {
    //   required: 'Please confirm your password',
    //   confirmed: 'Passwords do not match',
    //   min: 'Password must be at least 6 characters',
    // },
    bussinessName: {
      required: 'Please enter your business name',
    },
    usNumber: {
      required: 'Please enter your US DOT Number',
    },
    // billingEmail: {
    //   required: 'Please enter your billing email',
    //   email: 'Please enter a valid billing email address',
    // },
    // loadStartFrom: {
    //   required: 'Please enter Load # Start From',
    // },
    phoneNumber: {
      required: 'Please enter your phone number',
    },
    // timeZone: {
    //   required: 'Please select your time zone',
    // },
  },
};
export default {
  name: 'SingleStepRegistration',
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      formFields: {
        fName: null,
        lName: null,
        email: null,
        // password: null,
        // cPassword: null,
        bussinessName: null,
        usNumber: null,
        // billingEmail: null,
        // loadStartFrom: null,
        streetAddress: null,
        city: null,
        state: null,
        zipCode: null,
        phoneNumber: null,
        // faxNumber: null,
        // timeZone: null,
        // timezoneOptions: null,
      },
      items: [],
    };
  },
  created() {
    this.$validator.localize('en', dict);
    // const timezone = {
    //   'America/Los_Angeles': 'Pacific Time - US and Canada',
    //   'America/Edmonton': 'Mountain Time - US and Canada',
    //   'America/Winnipeg': 'Central Time - US and Canada',
    //   'America/New_York': 'Eastern Time - US and Canada',
    //   'America/Halifax': 'Atlantic Time',
    // };

    // this.timezoneOptions = Object.entries(timezone).map((timezone) => ({
    //   label: timezone[1],
    //   value: timezone[0],
    // }));
  },
  methods: {
    async register() {
      await this.$validator.validateAll();
      if (this.errors.items.length > 0) return;
      // if (this.formFields.password !== this.formFields.cPassword) {
      //   this.$vs.notify({
      //     title: 'Error',
      //     text: 'Passwords do not match',
      //     iconPack: 'feather',
      //     icon: 'icon-alert-circle',
      //     color: 'danger',
      //   });
      //   return;
      // }
      this.$vs.loading();
      let payload = {
        first_name: this.formFields.fName,
        last_name: this.formFields.lName,
        email: this.formFields.email,
        // password: this.formFields.password,
        business_name: this.formFields.bussinessName,
        usdot_number: this.formFields.usNumber,
        // business_email: this.formFields.billingEmail,
        // load_unique_id_started_from: this.formFields.loadStartFrom,
        address: this.formFields.streetAddress,
        city: this.formFields.city,
        state: this.formFields.state,
        zipcode: this.formFields.zipCode,
        phone_number: this.formFields.phoneNumber,
        // fax_number: this.formFields.faxNumber,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      };
      if (this.formFields.billingEmail) {
        payload = { ...payload, business_email: this.formFields.billingEmail };
      }
      const data = await this.$store
        .dispatch('auth/singleStepRegistration', payload)
        .then((data) => {
          this.$vs.notify({
            title: 'Success',
            text: data.message,
            iconPack: 'feather',
            color: 'success',
          });
          this.$emit('closeRegistrationPopup', true);
        })
        .catch((error) => {
          this.$vs.notify({
            title: 'Error',
            text: getApiErrorMsg(error),
            iconPack: 'feather',
            icon: 'icon-alert-circle',
            color: 'danger',
          });
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    },
    async autoComplete(event, type) {
      try {
        this.$store
          .dispatch('quote/getAllCarriers', {
            filters: { dotNumber: event.query.trim() },
          })
          .then((data) => {
            this.items = data.carriers || [];
          });
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    async handleAutoCompleteData(data, type) {
      this.formFields.usNumber = data.value.dotNumber;
      this.formFields.bussinessName = data.value.legalName;
      this.formFields.city = data.value.phyCity;
      this.formFields.state = data.value.phyState;
      this.formFields.zipCode = data.value.phyZip;
      this.formFields.streetAddress = data.value.phyStreet;
      this.formFields.billingEmail = data.value.emailAddress;
      this.formFields.phoneNumber = data.value.telephone;
    },
  },
  watch: {
    isActive(val) {
      if (val) {
        Object.keys(this.formFields).forEach((key) => {
          this.formFields[key] = null;
        });
        this.$validator.reset();
      }
    },
  },
};
</script>

<style lang="scss">
.p-autocomplete-input {
  width: 100%;
}

.registration-modal {
  .vs-input--label {
    padding-left: 0px;
  }
}
</style>
