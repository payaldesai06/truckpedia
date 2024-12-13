<template>
  <vs-sidebar position-right parent="body" default-index="1" color="primary"
              class="add-new-data-sidebar items-no-padding" spacer
              v-model="isSidebarActiveLocal">

    <div class="mt-6 flex items-center justify-between px-6">
      <h4>{{ isCreateMode ? 'Add New' : 'Edit' }} Truck</h4>
      <feather-icon icon="XIcon" @click.stop="closeSidebar" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <component :is="scrollbarTag" class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">
      <div class="p-6 space-y-4">
        <div class="w-full">
          <label class="text-xs">Truck Number <field-required-sign/></label>
          <vs-input v-validate="'required'"
                    data-vv-validate-on="blur"
                    name="truck_number"
                    v-model="truck_number"
                    class="w-full"/>
          <span class="text-danger text-sm">{{ errors.first('truck_number') }}</span>
        </div>

        <div class="w-full">
          <label class="text-xs">Truck VIN</label>
          <vs-input name="truck_vin"
                    v-model="truck_vin"
                    class="w-full"/>
          <span class="text-danger text-sm">{{ errors.first('truck_vin') }}</span>
        </div>

        <div class="w-full">
          <label class="text-xs">Make</label>
          <vs-input name="make" v-model="make" class="w-full" />
          <span class="text-danger text-sm">{{ errors.first("make") }}</span>
        </div>

        <div class="w-full">
          <label class="text-xs">Year</label>
          <Calendar v-model="year" view="year" :manualInput="false" name="year" dateFormat="yy" class="w-full" />
          <span class="text-danger text-sm">{{ errors.first("year") }}</span>
        </div>

        <div class="w-full">
          <label class="text-xs">Truck Type</label>
          <!--          v-validate="'required'"-->
          <!--          data-vv-validate-on="blur"-->
          <vs-input name="truck_type"
                    v-model="truck_type"
                    class="w-full"/>
          <span class="text-danger text-sm">{{ errors.first('truck_type') }}</span>
        </div>

        <div class="w-full">
          <label class="text-xs">Licence Plate</label>
          <!--          v-validate="'required'"-->
          <!--          data-vv-validate-on="blur"-->
          <vs-input name="licence_plate"
                    v-model="licence_plate"
                    class="w-full"/>

          <span class="text-danger text-sm">{{ errors.first('licence_plate') }}</span>
        </div>

        <div class="w-full">
          <label class="text-xs">Registration Expiration Date</label>
          <!--          v-validate="'required'"-->
          <!--          data-vv-validate-on="blur"-->
          <flat-pickr name="licence_plate_expiry"
                      v-model="licence_plate_expiry"
                      class="w-full"/>

          <span class="text-danger text-sm"
                v-if="errors.first('licence_plate_expiry') && licence_plate_expiry == ''">
            {{ errors.first('licence_plate_expiry') }}
          </span>
        </div>

        <div class="w-full">
          <label class="text-xs">Inspection Expiration Date</label>
          <!--          v-validate="'required'"-->
          <!--          data-vv-validate-on="blur"-->
          <flat-pickr name="inspection_expiry"
                      v-model="inspection_expiry"
                      class="w-full"/>

          <span class="text-danger text-sm"
                v-if=" errors.first('inspection_expiry') && inspection_expiry == ''">
            {{ errors.first('inspection_expiry') }}
          </span>
        </div>

        <div class="w-full">
          <label class="text-xs">Status</label>
          <v-select v-validate="'included:active,inactive'"
                    data-vv-as="selected"
                    name="status"
                    label="label"
                    :options="statusOptions"
                    :reduce="(option) => option.value"
                    v-model="status"
                    :clearable="false"
                    class="mb-4 md:mb-0"/>

          <span class="text-danger text-sm">{{ errors.first('status') }}</span>
        </div>

        <div class="w-full">
          <h5 class="text-sm">Ownership</h5>

          <ul class="mt-4 ml-4 flex items-center space-x-4" id="ownership">
            <li>
              <!--              v-validate="'required'"-->
              <vs-radio v-model="ownership"
                        name="ownership"
                        vs-value="company_truck">Company Truck
              </vs-radio>
            </li>
            <li>
              <!--              v-validate="'required'"-->
              <vs-radio v-model="ownership"
                        name="ownership"
                        vs-value="owner_operator">Owner Operator
              </vs-radio>
            </li>
            <li>
              <!--              v-validate="'required'"-->
              <vs-radio
                v-model="ownership"
                name="ownership"
                vs-value="leased">
                Leased
              </vs-radio>
            </li>
          </ul>
        </div>
      </div>
    </component>

    <div class="flex flex-wrap items-center p-6 space-x-2" slot="footer">
      <vs-button type="filled" color="primary" @click="submit" :disabled="!validateForm">
        {{ isCreateMode ? 'Submit' : 'Update' }}
      </vs-button>
      <vs-button type="border" color="danger" @click="closeSidebar">Cancel</vs-button>
    </div>

  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import '@sass/custom/radio-button.css'
import CloseSidebarMixin from '@/mixins/closeSidebarMixin'

// For custom error message
import { Validator } from 'vee-validate'
import Vue from 'vue'
import PrimeVue from 'primevue/config';
import Calendar from 'primevue/calendar';

const dict = {
  custom: {
    truck_number: {
      required: 'The truck number field is required.'
    },
    truck_type: {
      required: 'The truck type field is required.'
    },
    licence_plate: {
      required: 'The licence registration plate field is required.'
    },
    licence_plate_expiry: {
      required: 'The registration expiration date field is required.'
    },
    inspection_expiry: {
      required: 'The inspection expiration date field is required.'
    }
  }
}

// register custom messages
Validator.localize('en', dict)

Vue.use(PrimeVue, {
    locale: {}
});
export default {
  name: 'TruckSidebar',

  mixins: [CloseSidebarMixin],

  props: {
    isSidebarActive: {
      type: Boolean,
      required: true
    },
    data: {
      type: Object,
      default: () => {
      }
    }
  },

  components: {
    VuePerfectScrollbar,
    Calendar
  },

  data () {
    return {
      truck_id: '',
      truck_number: '',
      truck_type: '',
      truck_vin: '',
      make: '',
      year: '',
      licence_plate: '',
      status: 'active',
      statusOptions: [
        {label: 'Active', value: 'active'},
        {label: 'Inactive', value: 'inactive'}
      ],
      licence_plate_expiry: '',
      inspection_expiry: '',
      ownership: '',

      settings: { // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      }
    }
  },

  watch: {
    isSidebarActive (val) {
      if (!val) return
      if (this.isCreateMode) {
        this.initValues()
        this.$validator.reset()
      } else {
        this.initValues()
        this.$validator.reset()
      }
      // Object.entries(this.data).length === 0 ? this.initValues() : { this.dataId, this.dataName, this.dataCategory, this.dataOrder_status, this.dataPrice } = JSON.parse(JSON.stringify(this.data))
    }
  },

  computed: {
    isSidebarActiveLocal: {
      get () {
        return this.isSidebarActive
      },
      set (val) {
        if (!val) {
          // this.$emit('closeSidebar')
          // this.$validator.reset()
          // this.initValues()
        }
      }
    },

    scrollbarTag () {
      return this.$store.getters.scrollbarTag
    },

    validateForm () {
      return !this.errors.any()
        && this.truck_number !== ''
      // && this.licence_plate !== ''
      // && this.status !== ''
      // && this.licence_plate_expiry !== ''
      // && this.inspection_expiry !== ''
      // && this.ownership !== ''
    },

    isCreateMode () {
      return !!(Object.entries(this.data).length === 0)
    }
  },

  methods: {
    initValues (data = {}) {
      const truck = this.data.truck_id ? this.data : data
      this.truck_id = truck.truck_id
      this.truck_number = truck.truck_number
      this.truck_type = truck.truck_type
      this.truck_vin = truck.truck_vin
      this.make = truck.make
      this.year = truck.year
      this.licence_plate = truck.licence_plate
      this.status = truck.status ? truck.status : 'active'
      this.licence_plate_expiry = truck.licence_plate_expiry
      this.inspection_expiry = truck.inspection_expiry
      this.ownership = truck.ownership
    },

    closeSidebar () {
      this.$emit('closeSidebar')
      this.initValues()
    },

    submit () {
      this.$validator.validateAll().then(result => {
        if (result) {
          const payload = {
            'id': this.truck_id,
            'truck_number': this.truck_number,
            'truck_type': this.truck_type,
            'truck_vin': this.truck_vin,
            'make': this.make,
            'year': String(new Date(this.year).getFullYear()),
            'licence_plate': this.licence_plate,
            'status': this.status,
            'licence_plate_expiry': this.licence_plate_expiry,
            'inspection_expiry': this.inspection_expiry,
            'ownership': this.ownership
          }

          this.isCreateMode ? this.createTruck(payload) : this.updateTruck(payload)
        }
      })
    },

    createTruck (payload) {
      delete payload.id

      this.$vs.loading()

      this.$store.dispatch('truck/createTruck', payload)
        .then(() => {
          this.closeSidebar()

          this.$emit('truck:added')

          this.$vs.notify({
            color: 'primary',
            title: 'Truck Added',
            text: 'Truck added successfully.'
          })
        })
        .catch(error => {
          this.$vs.notify({
            title: 'Error',
            text: error.response.data.message,
            color: 'danger'
          })
        })
        .finally(() => (this.$vs.loading.close()))
    },

    updateTruck (payload) {
      this.$vs.loading()

      this.$store.dispatch('truck/updateTruck', payload)
        .then(() => {
          this.closeSidebar()

          this.$emit('truck:updated')

          this.$vs.notify({
            color: 'primary',
            title: 'Truck Updated',
            text: 'Truck updated successfully.'
          })
        })
        .catch(error => {
          this.$vs.notify({
            title: 'Error',
            text: error.response.data.message,
            color: 'danger'
          })
        })
        .finally(() => (this.$vs.loading.close()))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@sass/custom/sidebar.scss';
</style>
