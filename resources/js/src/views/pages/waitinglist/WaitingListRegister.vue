<template>
  <div class="h-screen flex w-full bg-img vx-row no-gutter items-center justify-center">
    <div class="vx-col w-10/12 md:w-6/12 xl:w-4/12 sm:m-0 m-4">
      <vx-card claass="shadow-sm" no-shadow>
        <div slot="no-body" class="full-page-bg-color">
          <div class="vx-row no-gutter justify-center items-center">
            <div class="vx-col w-full d-theme-dark-bg">
              <div class="px-8 pt-8 pb-6 login-tabs-container">

                <div class="vx-card__title mb-4 w-full md:w-10/12 mx-auto">
                  <h2 class="flex items-center justify-center mb-4 text-3xl">👋 <span class="text-primary">{{
                      appName
                    }}</span></h2>

                  <div class="pt-2 text-dark">
                    <p><strong>Hey</strong>, we're still in
                      <strong>private beta</strong>, but we are working hard to <strong
                        class="border-b border-primary">open up
                        soon!</strong></p>
                    <p class="pt-1">Please fill out the form below to join our <strong>waitlist</strong>.</p>
                    <p class="pt-1 font-semibold">
                      we're looking forward to welcoming you.
                    </p>
                  </div>
                </div>

                <form @submit.prevent class="pt-4 w-full md:w-10/12 mx-auto">
                  <div class="w-full">
                    <label class="text-xs">Company Name
                      <field-required-sign/>
                    </label>

                    <vs-input type="text"
                              v-validate="'required'"
                              data-vv-validate-on="blur"
                              name="company_name"
                              v-model="company_name"
                              :placeholder="appName"
                              class="w-full"/>

                    <span class="text-danger text-sm">{{ errors.first('company_name') }}</span>
                  </div>

                  <div class="mt-4 w-full">
                    <label class="text-xs">Email
                      <field-required-sign/>
                    </label>

                    <vs-input type="email"
                              v-validate="'required|email|min:3'"
                              data-vv-validate-on="blur"
                              name="email"
                              v-model.trim="email"
                              placeholder="johndoe@example.com"
                              class="w-full"/>

                    <span class="text-danger text-sm">{{ errors.first('email') }}</span>
                  </div>

                  <div class="mt-4 w-full">
                    <label class="text-xs">Phone Number
                      <field-required-sign/>
                    </label>

                    <vs-input type="text"
                              v-validate="'required'"
                              data-vv-validate-on="blur"
                              name="phone_number"
                              v-model="phone_number"
                              placeholder="9876543210"
                              class="w-full"/>

                    <span class="text-danger text-sm">{{ errors.first('phone_number') }}</span>
                  </div>

                  <div class="mt-4 w-full">
                    <label class="text-xs"># of Trucks
                      <field-required-sign/>
                    </label>

                    <vs-input type="number"
                              v-validate="'required|numeric'"
                              data-vv-validate-on="blur"
                              name="number_of_trucks"
                              v-model="number_of_trucks"
                              placeholder="100"
                              class="w-full"/>

                    <span class="text-danger text-sm">{{ errors.first('number_of_trucks') }}</span>
                  </div>

                  <div class="mt-6 w-full">
                    <vs-button type="filled"
                               :disabled="!validateForm"
                               @click="submit">
                      Submit
                    </vs-button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </vx-card>
    </div>
  </div>
</template>

<script>
import config from '@/config/constants'
import axios from '@/http/axios'

// For custom error message
import { Validator } from 'vee-validate'

const dict = {
  custom: {
    company_name: {
      required: 'The company name field is required.'
    },
    phone_number: {
      required: 'The phone number field is required.',
      numeric: ''
    },
    number_of_trucks: {
      required: 'The number of trucks field is required.'
    }
  }
}

// register custom messages
Validator.localize('en', dict)

export default {
  name: 'WhiteListRegister',

  data () {
    return {
      appName: config.appName,

      // form
      company_name: '',
      email: '',
      number_of_trucks: '',
      phone_number: ''
    }
  },

  computed: {
    validateForm () {
      return !this.errors.any()
        && this.company_name !== ''
        && this.email !== ''
        && this.phone_number !== ''
        && this.number_of_trucks !== ''
    }
  },

  methods: {
    resetForm () {
      this.company_name = ''
      this.email = ''
      this.phone_number = ''
      this.number_of_trucks = ''
    },

    async submit () {
      const payload = {
        company_name: this.company_name,
        email: this.email,
        phone_number: this.phone_number,
        number_of_trucks: this.number_of_trucks
      }

      this.$vs.loading()

      await axios.post('/waiting-list', payload)
        .then(({data}) => {
          this.$vs.notify({
            title: 'Success',
            text: data.message,
            color: 'success'
          })

          this.resetForm()
        })
        .catch(error => {
          this.$vs.notify({
            title: 'Error',
            text: error.response.data.message,
            color: 'danger'
          })
        })
        .finally(() => {
          this.$vs.loading.close()
        })
    }
  }
}
</script>
