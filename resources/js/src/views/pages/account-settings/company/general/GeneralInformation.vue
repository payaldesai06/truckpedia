<template>
  <div class="vx-row">
    <div class="vx-col w-full mb-8">
      <h2 class="text-2xl opacity-75">Company Information</h2>
    </div>

    <div class="vx-col w-full">
      <div class="flex items-center flex-col sm:flex-row">
        <vs-avatar
          :src="company_image"
          size="64px"
          class="mb-4 sm:mb-0 sm:mr-4"
        />
        <div>
          <input
            type="file"
            class="hidden"
            ref="update_company_image_input"
            @change="update_company_image"
            accept="image/*"
          />

          <vs-button
            type="border"
            class="mr-4"
            @click="$refs.update_company_image_input.click()"
          >
            Company Photo
          </vs-button>

          <vs-button type="flat" color="danger" @click="reset_company_image"
            >Remove</vs-button
          >
        </div>
      </div>
    </div>

    <div class="mt-8 space-y-4 vx-col w-full">
      <div class="w-full">
        <label class="text-xs">Name <field-required-sign /></label>

        <vs-input type="text" v-model="business_name" class="w-full" />
      </div>

      <div class="w-full">
        <label class="text-xs">Billing Email <field-required-sign /></label>

        <vs-input type="email" v-model="email" class="w-full" />
      </div>

      <div class="w-full">
        <label class="text-xs">Billing CC Emails </label>

        <vs-input v-model="ccEmail" class="w-full" @keypress.space.prevent />
        <p class="small text-xs">Separate multiple emails with commas</p>
      </div>

      <div class="w-full">
        <label class="text-xs">Phone Number<field-required-sign /></label>
        <vs-input type="text" v-model="phone_number" class="w-full" />
      </div>

      <div class="justify-between px-4 vx-row">
        <div style="width: 48%">
          <label class="text-xs">Address<field-required-sign /></label>
          <vs-input
            class="w-full"
            v-validate="'required'"
            data-vv-validate-on="blur"
            name="address"
            v-model="address"
            placeholder=""
          />
          <span
            class="text-danger text-sm"
            v-if="errors.first('address') && address == ''"
            >{{ errors.first('address') }}</span
          >
        </div>

        <div style="width: 48%">
          <div class="vx-col sm:w-1/3 w-full">
            <span class="font-semibold opacity-75 text-sm"
              >City<field-required-sign
            /></span>
          </div>
          <div class="vx-col w-full">
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
              >{{ errors.first('city') }}</span
            >
          </div>
        </div>

        <div style="width: 48%">
          <div class="vx-col sm:w-1/3 w-full">
            <span class="font-semibold opacity-75 text-sm"
              >State<field-required-sign
            /></span>
          </div>
          <div class="vx-col w-full">
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
              >{{ errors.first('state') }}</span
            >
          </div>
        </div>
        <div style="width: 48%">
          <div class="vx-col w-full">
            <span class="font-semibold opacity-75 text-sm"
              >Zipcode<field-required-sign
            /></span>
          </div>
          <div class="vx-col w-full">
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
              >{{ errors.first('zipcode') }}</span
            >
          </div>
        </div>
      </div>
    </div>

    <div class="mt-8 vx-col w-full space-x-2">
      <vs-button type="filled" @click="submit">Save Changes</vs-button>
      <!--
      TODO: this button has no effect at all.
         <vs-button type="border" color="danger">Cancel</vs-button> -->
    </div>
  </div>
</template>

<script>
// import image from '@assets/images/portrait/small/avatar-s-15.jpg'
import { mapGetters } from 'vuex';
import Files from '@/components/files/Files';
import { validateEmail, resizeImage } from '@/helpers/helper';
import config from '@/config/constants.js';

export default {
  name: 'GeneralInformation',
  components: {
    Files,
  },
  data() {
    return {
      business_name: '',
      email: '',
      company_image: '',
      company_image_file: '',
      phone_number: '',
      address: '',
      state: '',
      city: '',
      zipcode: '',
      // google map autocomplete options
      googleMapAutoCompleteOptions: config.googleMapAutoCompleteOptions,
      ccEmail: '',
      removedImage: false,
    };
  },

  created() {
    this.business_name = this.authUser.admin_company_details.business_name;
    this.email = this.authUser.admin_company_details.email;
    this.company_image = this.authUser.admin_company_details.company_image
      ? this.authUser.admin_company_details.company_image_url
      : '';
    this.phone_number = this.authUser.admin_company_details.phone_number;
    this.address = this.authUser.admin_company_details.address;
    this.state = this.authUser.admin_company_details.state;
    this.city = this.authUser.admin_company_details.city;
    this.zipcode = this.authUser.admin_company_details.zipcode;
    this.ccEmail =
      this.authUser.admin_company_details.billing_cc_emails != ''
        ? this.authUser.admin_company_details.billing_cc_emails.join(',')
        : '';
  },

  computed: {
    ...mapGetters('auth', { authUser: 'user' }),
    ...mapGetters('auth', ['isUserBrokerOrShipper']),
  },

  methods: {
    reset_company_image() {
      this.company_image_file = '';
      this.company_image = '';
      this.$refs.update_company_image_input.value = '';
      this.removedImage = true;
    },

    update_company_image(input) {
      if (input.target.files && input.target.files[0]) {
        const reader = new FileReader();

        this.company_image_file = input.target.files[0];

        reader.onload = (e) => {
          this.company_image = e.target.result;
        };
        reader.readAsDataURL(input.target.files[0]);
        resizeImage(input.target.files[0], (result) => {
          this.company_image_file = result;
        });
      }
    },

    async submit() {
      if (this.ccEmail) {
        for (const item of this.ccEmail.split(',')) {
          const validte = await validateEmail(item);
          if (!validte) {
            this.$vs.notify({
              color: 'danger',
              title: 'Error',
              text: 'You have entered an invalid email address!',
            });
            return;
          }
        }
      }
      this.$vs.loading();

      const payload = {
        business_name: this.business_name,
        email: this.email,
        phone_number: this.phone_number,
        address: this.address,
        state: this.state,
        city: this.city,
        zipcode: this.zipcode,
        billing_cc_emails: this.ccEmail
          .split(',')
          .map((ele) => ele.trim())
          .filter(Boolean),
        removedImage: this.removedImage,
      };

      try {
        if (this.company_image_file) {
          const extension = this.company_image_file.name.split('.').pop();
          const {
            data: {
              payload: { storageFileName, url },
            },
          } = await this.$store.dispatch(
            'company-user/getCompanyLogoPreSignedS3Url',
            {
              companyId: this.authUser.user_id,
              extension,
              type: 'logo',
            }
          );

          if (storageFileName && url) {
            const { status } = await this.$store.dispatch('uploadFileToS3', {
              url,
              file: this.company_image_file,
            });
            if (status === 200) {
              payload.company_image = storageFileName;
            }
          }

          this.company_image_file = '';
        }

        await this.$store.dispatch('auth/updateAdminCompanyProfile', payload);
        this.$store.commit('auth/setUserLatLang', null);
        this.$vs.notify({
          title: 'Company Info. Updated',
          text: 'Company information updated successfully.',
          color: 'primary',
        });
      } catch (error) {
        console.error(error);

        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  img {
    @apply object-cover;
  }
}
</style>
