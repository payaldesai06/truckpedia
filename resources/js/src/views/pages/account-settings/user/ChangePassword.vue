<template>
  <div class="vx-row">
    <div class="vx-col w-full">

      <div class="w-full mb-8">
        <h2 class="text-2xl opacity-75">Change Password</h2>
      </div>

      <div class="vx-col space-y-4">
        <div class="w-full">
          <label class="text-xs">Old Password <field-required-sign/></label>

          <vs-input type="password"
                    v-validate="'required'"
                    data-vv-validate-on="blur"
                    name="old_password"
                    v-model="old_password"
                    class="w-full"/>

          <span class="text-danger text-sm">{{ errors.first('old_password') }}</span>
        </div>

        <div class="w-full">
          <label class="text-xs">New Password <field-required-sign/></label>

          <vs-input type="password"
                    ref="new_password"
                    data-vv-validate-on="blur"
                    v-validate="'required|min:6'"
                    name="new_password"
                    v-model="new_password"
                    class="w-full"/>

          <span class="text-danger text-sm">{{ errors.first('new_password') }}</span>
        </div>

        <div class="w-full">
          <label class="text-xs">Confirm Password <field-required-sign/></label>

          <vs-input type="password"
                    v-validate="'confirmed:new_password'"
                    data-vv-validate-on="blur"
                    data-vv-as="new_password"
                    name="confirm_password"
                    v-model="confirm_password"
                    class="w-full"/>

          <span class="text-danger text-sm">{{ errors.first('confirm_password') }}</span>
        </div>
      </div>

      <div class="mt-8 vx-col w-full space-x-2">
        <vs-button type="filled" @click="submit" :disabled="!validateForm">Save Changes</vs-button>
        <vs-button type="border" color="danger" :to="{name: 'home'}">Cancel</vs-button>
      </div>
    </div>
  </div>
</template>

<script>
import adminService from '@/services/AdminService'
// For custom error message
import { Validator } from 'vee-validate'

const dict = {
  custom: {
    old_password: {
      required: 'Please enter your old password.'
    },
    new_password: {
      required: 'Please enter your new password.',
      min: 'Please enter at least 6 characters.'
    },
    confirm_password: {
      required: 'Please enter your confirm password.',
      confirmed: 'Password and Confirm password did not match.'
    }
  }
}

// register custom messages
Validator.localize('en', dict)

export default {
  name: 'ChangePassword',

  data () {
    return {
      old_password: '',
      new_password: '',
      confirm_password: ''
    }
  },

  computed: {
    validateForm () {
      return !this.errors.any()
        && this.old_password !== ''
        && this.new_password !== ''
        && this.confirm_password !== ''
    }
  },

  methods: {
    initValues () {
      this.old_password = ''
      this.new_password = ''
      this.confirm_password = ''
    },

    submit () {
      this.$validator.validateAll().then(result => {
        if (result) {
          this.$vs.loading()

          const payload = {
            old_password: this.old_password,
            new_password: this.new_password
          }

          adminService.changePassword(payload)
            .then(() => {
              this.initValues()

              this.$vs.notify({
                title: 'Password Changed',
                text: 'Password changed successfully.',
                color: 'primary'
              })
            })
            .catch(error => {
              console.error(error)
              // this.closeSidebar()
              this.$vs.notify({
                color: 'danger',
                title: 'Error',
                text: error.response.data.message
              })
            })
            .finally(() => (this.$vs.loading.close()))
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
