<template>
  <vs-sidebar position-right parent="body" default-index="1" color="primary"
              class="add-new-data-sidebar items-no-padding" spacer
              v-model="isSidebarActiveLocal">

    <div class="mt-6 flex items-center justify-between px-6">
      <h4>{{ Object.entries(this.data).length === 0 ? 'Add New' : 'Edit' }} Trailer</h4>
      <feather-icon icon="XIcon" @click.stop="$emit('closeSidebar')" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <component :is="scrollbarTag" class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">
      <div class="p-6 space-y-4">
        <div class="w-full">
          <label class="text-xs">Trailer Number <field-required-sign/></label>

          <vs-input v-validate="'required'"
                    data-vv-validate-on="blur"
                    name="trailer_number"
                    v-model="trailer_number"
                    class="w-full"/>

          <span class="text-danger text-sm">{{ errors.first('trailer_number') }}</span>
        </div>

        <div class="w-full">
          <label class="text-xs">Trailer VIN</label>
          <vs-input name="vin" v-model="vin" class="w-full" />
          <span class="text-danger text-sm">{{ errors.first("vin") }}</span>
        </div>

        <div class="w-full">
          <label class="text-xs">Make</label>
          <vs-input name="make" v-model="make" class="w-full" />
          <span class="text-danger text-sm">{{ errors.first("make") }}</span>
        </div>

        <div class="w-full">
          <label class="text-xs">Year</label>
          <Calendar v-model="year" view="year" :manualInput="false"  name="year" dateFormat="yy" class="w-full" />
          <span class="text-danger text-sm">{{ errors.first("year") }}</span>
        </div>

        <div class="w-full">
          <label class="text-xs">Trailer Type</label>
          <!--          v-validate="'required'"-->
          <!--          data-vv-validate-on="blur"-->
          <vs-input name="trailer_type"
                    v-model="trailer_type"
                    class="w-full"/>

          <span class="text-danger text-sm">{{ errors.first('trailer_type') }}</span>
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
          <flat-pickr name="plate_exp_date"
                      v-model="plate_exp_date"
                      class="w-full"/>

          <span class="text-danger text-sm" v-if="errors.first('plate_exp_date') && plate_exp_date == ''">
            {{ errors.first('plate_exp_date') }}
          </span>
        </div>

        <div class="w-full">
          <label class="text-xs">Inspection Expiration Date</label>
          <!--          v-validate="'required'"-->
          <!--          data-vv-validate-on="blur"-->
          <flat-pickr name="inspection_exp_date"
                      v-model="inspection_exp_date"
                      class="w-full"/>

          <span class="text-danger text-sm"
                v-if="errors.first('inspection_exp_date') && inspection_exp_date ==''">
            {{ errors.first('inspection_exp_date') }}
          </span>
        </div>

        <div class="w-full">
          <label class="text-xs">Status</label>
          <v-select v-validate="'included:active,inactive'"
                    data-vv-as="selected"
                    :options="statusOptions"
                    label="label"
                    :reduce="(option) => option.value"
                    :clearable="false"
                    v-model="status"
                    class="mb-4 md:mb-0"/>

          <span class="text-danger text-sm">{{ errors.first('status') }}</span>
        </div>

        <div class="w-full">
          <h5 class="text-sm">Ownership</h5>

          <ul class="mt-4 ml-4 flex items-center space-x-4" id="ownership">
            <li>
              <!--              v-validate="'required'"-->
              <vs-radio v-model="ownership"
                        vs-value="company_trailer">
                Company Trailer
              </vs-radio>
            </li>
            <li>
              <!--              v-validate="'required'"-->
              <vs-radio v-model="ownership"
                        vs-value="owner_operator">
                Owner Operator
              </vs-radio>
            </li>
            <li>
              <!--              v-validate="'required'"-->
              <vs-radio v-model="ownership"
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
        {{ Object.entries(this.data).length === 0 ? 'Submit' : 'Update' }}
      </vs-button>
      <vs-button type="border" color="danger" @click="$emit('closeSidebar')">Cancel</vs-button>
    </div>

  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import '@sass/custom/radio-button.css'
import CloseSidebarMixin from '@/mixins/closeSidebarMixin'
import Calendar from 'primevue/calendar';

// For custom error message
import { Validator } from 'vee-validate'
import Vue from 'vue'
import PrimeVue from 'primevue/config';

const dict = {
  custom: {
    trailer_number: {
      required: 'The trailer number field is required.'
    },
    trailer_type: {
      required: 'The trailer type field is required.'
    },
    licence_plate: {
      required: 'The licence plate field is required.'
    },
    plate_exp_date: {
      required: 'The registration expiration date field is required.'
    },
    inspection_exp_date: {
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
  name: 'TrailerSidebar',

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
      trailer_id: '',
      trailer_number: '',
      vin: '',
      make: '',
      year: '',
      trailer_type: '',
      licence_plate: '',
      status: 'active',
      statusOptions: [
        {label: 'Active', value: 'active'},
        {label: 'Inactive', value: 'inactive'}
      ],
      plate_exp_date: '',
      inspection_exp_date: '',
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
      if (Object.entries(this.data).length === 0) {
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
        && this.trailer_number !== ''
        // && this.trailer_type !== ''
        // && this.licence_plate !== ''
        // && this.status !== ''
        // && this.plate_exp_date !== ''
        // && this.inspection_exp_date !== ''
        // && this.ownership !== ''
    },

    isCreateMode () {
      return !!(Object.entries(this.data).length === 0)
    }
  },

  methods: {
    initValues () {
      const {
        trailer_id = '',
        trailer_number = '',
        trailer_type = '',
        licence_plate = '',
        status = 'active',
        licence_plate_expiry = '',
        inspection_expiry = '',
        ownership = '',
        vin = '',
        make = '',
        year = ''
      } = this.data

      this.trailer_id = trailer_id
      this.trailer_number = trailer_number
      this.vin = vin
      this.make = make
      this.year = year
      this.trailer_type = trailer_type
      this.licence_plate = licence_plate
      this.status = status
      this.plate_exp_date = licence_plate_expiry
      this.inspection_exp_date = inspection_expiry
      this.ownership = ownership
    },

    closeSidebar () {
      this.$emit('closeSidebar')
      this.initValues()
    },

    submit () {
      this.$validator.validateAll().then(result => {
        if (result) {
          const payload = {
            'id': this.trailer_id,
            'trailer_number': this.trailer_number,
            'vin': this.vin,
            'make': this.make,
            'year': String(new Date(this.year).getFullYear()),
            'trailer_type': this.trailer_type,
            'licence_plate': this.licence_plate,
            'status': this.status,
            'licence_plate_expiry': this.plate_exp_date,
            'inspection_expiry': this.inspection_exp_date,
            'ownership': this.ownership
          }

          this.isCreateMode ? this.createTrailer(payload) : this.updateTrailer(payload)
        }
      })
    },

    createTrailer (payload) {
      delete payload.id

      this.$vs.loading()

      this.$store.dispatch('trailer/createTrailer', payload)
        .then(() => {
          this.closeSidebar()

          this.$emit('trailer:added')

          this.$vs.notify({
            color: 'primary',
            title: 'Trailer Added',
            text: 'Trailer added successfully.'
          })
        })
        .catch(error => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message
          })
        })
        .finally(() => (this.$vs.loading.close()))
    },

    updateTrailer (payload) {
      this.$vs.loading()

      this.$store.dispatch('trailer/updateTrailer', payload)
        .then(() => {
          this.closeSidebar()

          this.$emit('trailer:updated')

          this.$vs.notify({
            color: 'primary',
            title: 'Trailer Updated',
            text: 'Trailer updated successfully.'
          })
        })
        .catch(error => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message
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
