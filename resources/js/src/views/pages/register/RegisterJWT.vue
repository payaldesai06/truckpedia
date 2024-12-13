<!-- =========================================================================================
File Name: RegisterJWT.vue
Description: Register Page for JWT
----------------------------------------------------------------------------------------
Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
Author URL: http://www.themeforest.net/user/pixinvent
========================================================================================== -->


<template>
  <div class="pb-4 space-y-4">

    <div>
      <label class="text-xs">
        First Name
        <field-required-sign/>
      </label>

      <vs-input
        v-validate="'required'"
        data-vv-validate-on="blur"
        name="first_name"
        v-model="first_name"
        class="w-full"/>

      <span class="text-danger text-sm">{{ errors.first('first_name') }}</span>
    </div>

    <div>
      <label class="text-xs">
        Last Name
        <field-required-sign/>
      </label>

      <vs-input
        v-validate="'required'"
        data-vv-validate-on="blur"
        name="last_name"
        v-model="last_name"
        class="w-full"/>

      <span class="text-danger text-sm">{{ errors.first('last_name') }}</span>
    </div>

    <div>
      <label class="text-xs">
        Email
        <field-required-sign/>
      </label>

      <vs-input
        v-validate="'required|email|min:3'"
        data-vv-validate-on="blur"
        name="email"
        type="email"
        v-model="email"
        class="w-full"/>

      <span class="text-danger text-sm">{{ errors.first('email') }}</span>
    </div>

    <div>
      <label class="text-xs">
        Password
        <field-required-sign/>
      </label>

      <vs-input
        v-validate="'required|min:6'"
        data-vv-validate-on="blur"
        ref="password"
        type="password"
        name="password"
        v-model="password"
        class="w-full"/>

      <span class="text-danger text-sm">{{ errors.first('password') }}</span>
    </div>

    <div>
      <label class="text-xs">
        Confirm Password
        <field-required-sign/>
      </label>

      <vs-input
        v-validate="'min:6|confirmed:password'"
        data-vv-validate-on="blur"
        data-vv-as="password"
        type="password"
        name="confirm_password"
        v-model="confirm_password"
        class="w-full"/>

      <span class="text-danger text-sm">{{ errors.first('confirm_password') }}</span>
    </div>

    <vs-checkbox v-model="isTermsConditionAccepted"
                 class="mt-6">
      I accept the terms & conditions.
    </vs-checkbox>

    <vs-button type="border"
               to="/login"
               class="mt-6">
      Login
    </vs-button>

    <vs-button @click="registerUserJWt"
               :disabled="!validateForm"
               class="float-right mt-6">
      Register
    </vs-button>
  </div>
</template>

<script>
// For custom error message
import { Validator } from 'vee-validate'

const dict = {
  custom: {
    first_name: {
      required: 'The first name field is required.',
      alpha: 'Your first name may only contain alphabetic characters'
    },
    last_name: {
      required: 'The last name field is required.',
      alpha: 'Your last name may only contain alphabetic characters'
    }
  }
}

// register custom messages
Validator.localize('en', dict)

export default {
  data () {
    return {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      confirm_password: '',
      isTermsConditionAccepted: true
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
        const referralCode = this.$route.query.referralCode;
        this.$router.push({name: 'free-trial', query: { referralCode }})
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
