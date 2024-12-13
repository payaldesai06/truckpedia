<!-- =========================================================================================
File Name: RegisterJWT.vue
Description: Register Page for JWT
----------------------------------------------------------------------------------------
Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="pb-4">
    <div class="vx-row">
      <div class="vx-col md:w-1/2">
        <div class="mt-8">
          <vs-input
            v-validate="'required'"
            data-vv-validate-on="blur"
            label-placeholder="Business Name"
            name="business_name"
            v-model="business_name"
            class="w-full"/>
          <span class="text-danger text-sm">{{ errors.first('business_name') }}</span>
        </div>
      </div>
      <div class="vx-col md:w-1/2">
        <div class="mt-8">
          <vs-input
            v-validate="'required'"
            data-vv-validate-on="blur"
            label-placeholder="USDOT Number"
            name="usdot_number"
            v-model="usdot_number"
            class="w-full"/>
          <span class="text-danger text-sm">{{ errors.first('usdot_number') }}</span>
        </div>
      </div>
    </div>
    <div class="vx-row no-gutter">
    <div class="vx-col sm:w-full md:w-full  mx-auto self-center  d-theme-dark-bg">
      <div class="pt-8">
        <div class="vx-card__title mb-4">
          <h4 class="mb-4">Business Address</h4>
          <p>Start entering your address, we will pull the address using Google map.</p>
        </div>

      </div>
    </div>
    </div>
    <div class="vx-row">
      <div class="vx-col w-1/2">
        <div class="mt-8">
          <vs-input
            v-validate="'required'"
            data-vv-validate-on="blur"
            label-placeholder="Look Up Address"
            name="lookup_address"
            v-model="lookup_address"
            class="w-full"/>
          <span class="text-danger text-sm">{{ errors.first('lookup_address') }}</span>
        </div>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-1/2">
        <div class="mt-8">
          <vs-checkbox v-model="is_manual_address">Enter Address Manually</vs-checkbox>
<!--          <vs-input-->
<!--            v-validate="'required'"-->
<!--            data-vv-validate-on="blur"-->
<!--            label-placeholder="Look Up Address"-->
<!--            name="lookup_address"-->
<!--            v-model="lookup_address"-->
<!--            class="w-full"/>-->
<!--          <span class="text-danger text-sm">{{ errors.first('lookup_address') }}</span>-->
        </div>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-1/2">
        <div class="mt-8">
<!--          <vs-checkbox v-model="is_manual_address">Enter Address Manually</vs-checkbox>-->
                    <vs-input
                      v-validate="'required'"
                      data-vv-validate-on="blur"
                      label-placeholder="Address"
                      name="address"
                      v-model="address"
                      class="w-full"/>
                    <span class="text-danger text-sm">{{ errors.first('address') }}</span>
        </div>
        <div class="mt-8">
          <!--          <vs-checkbox v-model="is_manual_address">Enter Address Manually</vs-checkbox>-->
          <vs-input
            v-validate="'required'"
            data-vv-validate-on="blur"
            label-placeholder="City"
            name="city"
            v-model="city"
            class="w-full"/>
          <span class="text-danger text-sm">{{ errors.first('city') }}</span>
        </div>
        <div class="mt-8">
          <!--          <vs-checkbox v-model="is_manual_address">Enter Address Manually</vs-checkbox>-->
          <vs-input
            v-validate="'required'"
            data-vv-validate-on="blur"
            label-placeholder="State"
            name="state"
            v-model="state"
            class="w-full"/>
          <span class="text-danger text-sm">{{ errors.first('state') }}</span>
        </div>

        <div class="mt-8">
          <!--          <vs-checkbox v-model="is_manual_address">Enter Address Manually</vs-checkbox>-->
          <vs-input
            v-validate="'required'"
            data-vv-validate-on="blur"
            label-placeholder="Zipcode"
            name="zipcode"
            v-model="zipcode"
            class="w-full"/>
          <span class="text-danger text-sm">{{ errors.first('zipcode') }}</span>
        </div>
        <div class="mt-8">
          <!--          <vs-checkbox v-model="is_manual_address">Enter Address Manually</vs-checkbox>-->
          <vs-input
            v-validate="'required'"
            data-vv-validate-on="blur"
            label-placeholder="Phone Number"
            name="phone_number"
            v-model="phone_number"
            class="w-full"/>
          <span class="text-danger text-sm">{{ errors.first('phone_number') }}</span>
        </div>
        <div class="mt-8">
          <!--          <vs-checkbox v-model="is_manual_address">Enter Address Manually</vs-checkbox>-->
          <vs-input
            v-validate="'required'"
            data-vv-validate-on="blur"
            label-placeholder="Fax"
            name="fax"
            v-model="fax"
            class="w-full"/>
          <span class="text-danger text-sm">{{ errors.first('fax') }}</span>
        </div>
      </div>


      <div class="vx-col w-1/2">
        <div class="mt-8">
          <!--          <vs-checkbox v-model="is_manual_address">Enter Address Manually</vs-checkbox>-->
          <vs-input
            v-validate="'required'"
            data-vv-validate-on="blur"
            label-placeholder="Time Zone"
            name="time_zone"
            v-model="time_zone"
            class="w-full"/>
          <span class="text-danger text-sm">{{ errors.first('time_zone') }}</span>
        </div>
    </div>
    </div>



<!--    <div class="mt-8">-->
<!--      <vs-input-->
<!--        v-validate="'required'"-->
<!--        data-vv-validate-on="blur"-->
<!--        label-placeholder="Last Name"-->
<!--        name="last_name"-->
<!--        v-model="last_name"-->
<!--        class="w-full"/>-->
<!--      <span class="text-danger text-sm">{{ errors.first('last_name') }}</span>-->
<!--    </div>-->

<!--    <div class="mt-8">-->
<!--      <vs-input-->
<!--        v-validate="'required|email|min:3'"-->
<!--        data-vv-validate-on="blur"-->
<!--        name="email"-->
<!--        type="email"-->
<!--        label-placeholder="Email"-->
<!--        placeholder="Email"-->
<!--        v-model="email"-->
<!--        class="w-full"/>-->
<!--      <span class="text-danger text-sm">{{ errors.first('email') }}</span>-->
<!--    </div>-->

<!--    <div class="mt-8">-->
<!--      <vs-input-->
<!--        v-validate="'required|min:6'"-->
<!--        data-vv-validate-on="blur"-->
<!--        ref="password"-->
<!--        type="password"-->
<!--        name="password"-->
<!--        label-placeholder="Password"-->
<!--        placeholder="Password"-->
<!--        v-model="password"-->
<!--        class="w-full"/>-->
<!--      <span class="text-danger text-sm">{{ errors.first('password') }}</span>-->
<!--    </div>-->

<!--    <div class="mt-8">-->
<!--      <vs-input-->
<!--        v-validate="'min:6|confirmed:password'"-->
<!--        data-vv-validate-on="blur"-->
<!--        data-vv-as="password"-->
<!--        type="password"-->
<!--        name="confirm_password"-->
<!--        label-placeholder="Confirm Password"-->
<!--        placeholder="Confirm Password"-->
<!--        v-model="confirm_password"-->
<!--        class="w-full"/>-->
<!--      <span class="text-danger text-sm">{{ errors.first('confirm_password') }}</span>-->
<!--    </div>-->

<!--    <vs-checkbox v-model="isTermsConditionAccepted" class="mt-6">I accept the terms & conditions.</vs-checkbox>-->
    <vs-button type="border" to="/login" class="mt-6">Login</vs-button>
    <vs-button class="float-right mt-6" @click="registerUserJWt" :disabled="!validateForm">Register</vs-button>
  </div>
</template>

<script>
// For custom error message
import {Validator} from 'vee-validate'

const dict = {
  custom: {
    business_name: {
      required: 'Please enter your business name',
      alpha: 'Your business name may only contain alphabetic characters'
    },
    usdot_number: {
      required: 'Please enter your USDOT Number',
      alpha: 'Your USDOT Number may only contain alphabetic characters'
    }
  }
}

// register custom messages
Validator.localize('en', dict)

export default {
  data () {
    return {
      business_name: '',
      usdot_number: '',
      lookup_address:'',
      email: '',
      password: '',
      confirm_password: '',
      isTermsConditionAccepted: true,
      is_manual_address:'',
      address: '',
      zipcode:'',
      city:'',
      state: '',
      time_zone:'',
      fax:'',
      phone_number:'',

    }
  },
  computed: {
    validateForm () {
      return !this.errors.any() && this.first_name !== '' && this.last_name !== '' && this.email !== '' && this.password !== '' && this.confirm_password !== '' && this.isTermsConditionAccepted === true
    }
  },
  methods: {
    checkLogin () {
      // If user is already logged in notify
      if (this.$store.state.auth.isUserLoggedIn()) {

        // Close animation if passed as payload
        // this.$vs.loading.close()

        this.$vs.notify({
          title: 'Login Attempt',
          text: 'You are already logged in!',
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'warning'
        })

        return false
      }
      return true
    },

    async registerUserJWt () {
      try {
        // If form is not validated or user is already login return
        if (!this.validateForm) return

        // const payload = {
        //   userDetails: {
        //     displayName: this.displayName,
        //     email: this.email,
        //     password: this.password,
        //     confirmPassword: this.confirm_password
        //   },
        //   notify: this.$vs.notify
        // }
        this.$vs.loading()

        const payload = {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirm_password,
          notify: this.$vs.notify
        }

        await this.$store.dispatch('auth/registerUserJWT', payload)

        this.$vs.loading.close()

        this.$router.push({name: 'home'})
          .catch(() => {
          })
      } catch (error) {
        this.$vs.loading.close()

        this.$vs.notify({
          title: 'Error',
          text: error.message,
          iconPack: 'feather',
          icon: 'icon-alert-circle',
          color: 'danger'
        })
      }
    }
  }
}
</script>
