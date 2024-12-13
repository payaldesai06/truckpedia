<template>
  <div class="pb-4">
    <div class="vx-row">
      <div class="vx-col w-full md:w-1/2">
        <div class="vx-row">
          <div class="vx-col sm:w-1/3 w-full sm:text-right">
            <span class="font-semibold opacity-75 text-sm"
              >Business Name <field-required-sign
            /></span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input
              v-validate="'required'"
              data-vv-validate-on="blur"
              name="business_name"
              v-model="business_name"
              class="w-full"
            />

            <span class="text-danger text-sm">{{
              errors.first("business_name")
            }}</span>
          </div>
        </div>
      </div>

      <div class="vx-col w-full md:w-1/2">
        <div class="vx-row">
          <div class="vx-col sm:w-1/3 w-full sm:text-right">
            <span class="font-semibold opacity-75 text-sm"
              >USDOT Number <field-required-sign
            /></span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input
              v-validate="'required'"
              data-vv-validate-on="blur"
              name="usdot_number"
              v-model="usdot_number"
              class="w-full"
            />

            <span class="text-danger text-sm">{{
              errors.first("usdot_number")
            }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="vx-row mt-8">
      <div class="vx-col w-full md:w-1/2">
        <div class="vx-row">
          <div class="vx-col sm:w-1/3 w-full sm:text-right">
            <span class="font-semibold opacity-75 text-sm"
              >Billing Email <field-required-sign
            /></span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input
              v-validate="'required|email'"
              data-vv-validate-on="blur"
              name="email"
              v-model="email"
              class="w-full"
            />

            <span class="text-danger text-sm">{{ errors.first("email") }}</span>
          </div>
        </div>
      </div>

      <div class="vx-col w-full md:w-1/2">
        <div class="vx-row">
          <div class="vx-col sm:w-1/3 w-full sm:text-right">
            <div class="flex flex-nowrap sm:justify-end">
              <span class="font-semibold opacity-75 text-sm"
                >Load# start from <field-required-sign
              /></span>

              <vx-tooltip
                text="Provided number will be starting number of the LOAD ID."
                class="w-1"
              >
                <feather-icon
                  icon="InfoIcon"
                  svgClasses="h-4 w-4 hover:text-primary cursor-pointer"
                  class="ml-2"
                />
              </vx-tooltip>
            </div>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input
              v-validate="'required|numeric'"
              data-vv-validate-on="blur"
              name="load_unique_id_started_from"
              type="number"
              v-model="load_unique_id_started_from"
              class="w-full"
            />

            <span class="text-danger text-sm">{{
              errors.first("load_unique_id_started_from")
            }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="vx-row no-gutter">
      <div
        class="vx-col sm:w-full md:w-full mx-auto self-center d-theme-dark-bg"
      >
        <div class="pt-8">
          <div class="vx-card__title mb-8">
            <h4 class="text-xl opacity-75">Business Address</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="vx-row mb-8">
      <div class="vx-col w-full md:w-1/2">
        <div class="vx-row">
          <div class="vx-col sm:w-1/3 w-full sm:text-right">
            <span class="font-semibold opacity-75 text-sm"
              >Address <field-required-sign
            /></span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <div
              class="vs-component vs-con-input-label vs-input w-full vs-input-primary"
            >
              <div class="vs-con-input">
                <vs-input
                  v-validate="'required'"
                  data-vv-validate-on="blur"
                  name="address"
                  v-model="address"
                  class="w-full"
                />
              </div>
            </div>
            <span
              class="text-danger text-sm"
              v-if="errors.first('address') && address == ''"
              >{{ errors.first("address") }}</span
            >

            <!--            <p class="mt-2 text-xs">Start entering your address, we will pull the address using Google map.</p>-->
          </div>
        </div>
      </div>

      <div class="vx-col w-full md:w-1/2">
        <div class="vx-row">
          <div class="vx-col sm:w-1/3 w-full sm:text-right">
            <span class="font-semibold opacity-75 text-sm"
              >City <field-required-sign
            /></span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input
              v-validate="'required'"
              data-vv-validate-on="blur"
              name="city"
              v-model="city"
              class="w-full"
            />

            <span
              class="text-danger text-sm"
              v-if="errors.first('city') && city == ''"
              >{{ errors.first("city") }}</span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="vx-row mb-8">
      <div class="vx-col w-full md:w-1/2">
        <div class="vx-row">
          <div class="vx-col sm:w-1/3 w-full sm:text-right">
            <span class="font-semibold opacity-75 text-sm"
              >State <field-required-sign
            /></span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input
              v-validate="'required'"
              data-vv-validate-on="blur"
              name="state"
              v-model="state"
              class="w-full"
            />

            <span
              class="text-danger text-sm"
              v-if="errors.first('state') && state == ''"
              >{{ errors.first("state") }}</span
            >
          </div>
        </div>
      </div>

      <div class="vx-col w-full md:w-1/2">
        <div class="vx-row">
          <div class="vx-col sm:w-1/3 w-full sm:text-right">
            <span class="font-semibold opacity-75 text-sm"
              >Zipcode <field-required-sign
            /></span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input
              v-validate="'required'"
              data-vv-validate-on="blur"
              name="zipcode"
              v-model="zipcode"
              class="w-full"
            />

            <span
              class="text-danger text-sm"
              v-if="errors.first('zipcode') && zipcode == ''"
              >{{ errors.first("zipcode") }}</span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full md:w-1/2">
        <div class="vx-row">
          <div class="vx-col sm:w-1/3 w-full sm:text-right">
            <span class="font-semibold opacity-75 text-sm"
              >Phone Number <field-required-sign
            /></span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input
              v-validate="'required'"
              data-vv-validate-on="blur"
              name="phone_number"
              v-model="phone_number"
              class="w-full"
            />

            <span class="text-danger text-sm">{{
              errors.first("phone_number")
            }}</span>
          </div>
        </div>
      </div>

      <div class="vx-col w-full md:w-1/2">
        <div class="vx-row">
          <div class="vx-col sm:w-1/3 w-full sm:text-right">
            <span class="font-semibold opacity-75 text-sm">Fax</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input name="fax_number" v-model="fax_number" class="w-full" />

            <span class="text-danger text-sm">{{
              errors.first("fax_number")
            }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="vx-row no-gutter">
      <div
        class="vx-col sm:w-full md:w-full mx-auto self-center d-theme-dark-bg"
      >
        <div class="pt-8">
          <div class="vx-card__title mb-8">
            <h4 class="text-xl opacity-75">Time Zone</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full md:w-1/2">
        <div class="vx-row">
          <div class="vx-col sm:w-1/3 w-full sm:text-right">
            <span class="font-semibold opacity-75 text-sm"
              >Time Zone <field-required-sign
            /></span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <v-select
              v-validate="'required'"
              data-vv-as="selected"
              name="timezone"
              label="label"
              :options="timezone_options"
              :reduce="(option) => option.value"
              :clearable="false"
              v-model="time_zone"
              class="w-full"
            />

            <span class="text-danger text-sm">{{
              errors.first("timezone")
            }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="vx-row no-gutter">
      <div
        class="vx-col sm:w-full md:w-full mx-auto self-center d-theme-dark-bg"
      >
        <div class="pt-8">
          <div class="vx-card__title mb-8">
            <h4 class="text-xl opacity-75">Referral</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full md:w-1/2">
        <div class="vx-row">
          <div class="vx-col sm:w-1/3 w-full sm:text-right">
            <span class="font-semibold opacity-75 text-sm">Referral Code</span>
          </div>
          <div class="vx-col sm:w-2/3 w-full">
            <vs-input v-model="referralCode" class="w-full" />
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 vx-row">
      <vs-divider />

      <div class="vx-col w-full py-2 flex items-center justify-between">
        <vs-button color="danger" type="border" @click="logout"
          >Logout
        </vs-button>

        <vs-button :disabled="!validateForm" @click="submit">Submit </vs-button>
      </div>
    </div>
  </div>
</template>

<script>
import config from "@/config/constants.js";

// For custom error message
import { Validator } from "vee-validate";

const dict = {
  custom: {
    business_name: {
      required: "The business name field is required",
      // alpha: 'Your business name may only contain alphabetic characters'
    },
    usdot_number: {
      required: "The usdot number field is required",
      // alpha: 'Your USDOT Number may only contain alphabetic characters'
    },
    email: {
      required: "The billing email field is required.",
      email: "Please enter valid email address.",
    },
    load_unique_id_started_from: {
      required: "The load id field is required",
      numeric: "Please enter only numeric value.",
    },
    address: {
      required: "The address field is required",
    },
    state: {
      required: "The state field is required",
    },
    city: {
      required: "The city field is required",
    },
    zipcode: {
      required: "The zipcode field is required",
    },
    phone_number: {
      required: "The phone number field is required",
    },
    fax_number: {
      required: "The fax number field is required",
    },
    timezone: {
      required: "The timezone field is required",
    },
  },
};

// register custom messages
Validator.localize("en", dict);

export default {
  data() {
    return {
      business_name: "",
      usdot_number: "",
      email: "",
      load_unique_id_started_from: "",
      address: "",
      zipcode: "",
      city: "",
      state: "",
      timezone_options: [],
      time_zone: "",
      fax_number: "",
      phone_number: "",
      referralCode: null,
      // google map autocomplete options
      googleMapAutoCompleteOptions: config.googleMapAutoCompleteOptions,
    };
  },

  async created() {
    window.addEventListener("storage", this.checkLogout);

    try {
      // const {data} = await this.$store.dispatch('auth/getTimezoneList')
      //
      // console.log(data.payload)
      const timezone = {
        "America/Los_Angeles": "Pacific Time - US and Canada",
        "America/Edmonton": "Mountain Time - US and Canada",
        "America/Winnipeg": "Central Time - US and Canada",
        "America/New_York": "Eastern Time - US and Canada",
        "America/Halifax": "Atlantic Time",
      };

      this.timezone_options = Object.entries(timezone).map((timezone) => ({
        label: timezone[1],
        value: timezone[0],
      }));
    } catch (error) {
      this.$vs.notify({
        color: "danger",
        title: "Error",
        text: error.response.data.message,
      });
    }
    this.referralCode = this.$route.query.referralCode;
  },

  computed: {
    validateForm() {
      return (
        !this.errors.any() &&
        this.business_name !== "" &&
        this.usdot_number !== "" &&
        this.email !== "" &&
        this.load_unique_id_started_from !== "" &&
        this.address !== "" &&
        this.city !== "" &&
        this.state !== "" &&
        this.zipcode !== "" &&
        this.phone_number !== "" &&
        // && this.fax_number !== ''
        this.time_zone !== ""
      );
    },
  },

  methods: {
    checkLogout() {
      try {
        if (!localStorage.getItem("access_token")) {
          window.location.reload();
        }
      } catch (e) {
        console.log(`Error while logging out: ${e}`);
      }
    },

    async submit() {
      this.$validator.validateAll().then(async (result) => {
        if (result) {
          try {
            this.$vs.loading();

            const payload = {
              business_name: this.business_name,
              usdot_number: this.usdot_number,
              email: this.email,
              load_unique_id_started_from: this.load_unique_id_started_from,
              address: this.address,
              city: this.city,
              state: this.state,
              zipcode: this.zipcode,
              phone_number: this.phone_number,
              fax_number: this.fax_number,
              timezone: this.time_zone,
              referralCode: this.referralCode,
            };

            // console.log(payload)

            await this.$store.dispatch("auth/adminSetupProfile", payload);

            await this.$router.push({ name: "home" });

            this.$vs.notify({
              color: "success",
              title: "Profile Setup",
              text: "Profile set up successfully.",
            });
          } catch (error) {
            this.$vs.notify({
              title: "Error",
              text: error.response.data.message,
              color: "danger",
              time: 5000,
            });
          } finally {
            this.$vs.loading.close();
          }
        }
      });
    },

    async logout() {
      this.$vs.loading();

      try {
        await this.$store.dispatch("auth/logout");

        await this.$router.push({ name: "page-login" }).catch(() => {});

        this.$vs.notify({
          title: "Logout.",
          color: "success",
          text: "You logout successfully.",
        });
      } catch (error) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },
  },
};
</script>
