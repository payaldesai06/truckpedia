<template>
  <vs-sidebar click-not-close position-right parent="body" default-index="1" color="primary"
              class="add-new-data-sidebar items-no-padding" spacer v-model="isSidebarActiveLocal">
    <div class="mt-6 flex items-center justify-between px-6">
      <h4>Add Factorying companies</h4>
      <feather-icon icon="XIcon" @click.stop="isSidebarActiveLocal = false" class="cursor-pointer"></feather-icon>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <component :is="scrollbarTag" class="scroll-area--data-list-add-new" :settings="settings" :key="$vs.rtl">
      <div class="p-6">

        <form-wizard color="rgba(var(--vs-primary), 1)" :title="null" :subtitle="null" finishButtonText="Submit"
                     @on-complete="formSubmitted">
          <tab-content title="Company Info" class="mb-5">

            <!-- tab 1 content -->
            <div class="vx-row">
              <div class="vx-col w-full mt-4">
                <vs-input label-placeholder="Factoring Company Name" v-model="company.name" class="w-full"/>
              </div>

              <div class="vx-col w-full mt-4">
                <vs-input label-placeholder="Address" v-model="company.address" class="w-full"/>
              </div>

              <div class="vx-col w-full mt-4">
                <vs-input label-placeholder="State" v-model="company.state" class="w-full"/>
              </div>

              <div class="vx-col w-full">
                <div class="vx-row">
                  <div class="vx-col w-1/2 mt-4">
                    <vs-input label-placeholder="City" v-model="company.city" class="w-full"/>
                  </div>

                  <div class="vx-col w-1/2 mt-4">
                    <vs-input label-placeholder="Zip/Postal" v-model="company.zip" class="w-full"/>
                  </div>
                </div>
              </div>

              <div class="vx-col w-full mt-4">
                <vs-input label-placeholder="Primary Contact" v-model="company.contact" class="w-full"/>
              </div>

              <div class="vx-col w-full mt-4">
                <vs-input label-placeholder="Phone" v-model="company.phone_number" class="w-full"/>
              </div>

              <div class="vx-col w-full mt-4">
                <vs-input label-placeholder="Email" v-model="company.email" class="w-full"/>
              </div>
            </div>
          </tab-content>

          <!-- tab 2 content -->
          <tab-content title="Billing Info" class="mb-5">
            <div class="vx-row">
              <div class="vx-col w-full mt-4">
                <h4 class="mb-4 text-base opacity-75">Billing Address</h4>

                <vs-checkbox v-model="is_bill_address_same_as_factoring_company_address">
                  (Check here if same as mailing address)
                </vs-checkbox>
              </div>

              <div class="vx-col w-full mt-4">
                <vs-input label-placeholder="Billing Address" v-model="bill.address" class="w-full"/>
              </div>

              <div class="vx-col w-full mt-4">
                <vs-input label-placeholder="State" v-model="bill.state" class="w-full"/>
              </div>

              <div class="vx-col w-full">
                <div class="vx-row">
                  <div class="vx-col w-1/2 mt-4">
                    <vs-input label-placeholder="City" v-model="bill.city" class="w-full"/>
                  </div>

                  <div class="vx-col w-1/2 mt-4">
                    <vs-input label-placeholder="Zip/Postal" v-model="bill.zip" class="w-full"/>
                  </div>
                </div>
              </div>

              <div class="vx-col w-full mt-4">
                <vs-input label-placeholder="Billing Contact" v-model="bill.contact" class="w-full"/>
              </div>

              <div class="vx-col w-full mt-4">
                <vs-input label-placeholder="Billing Phone" v-model="bill.phone_number" class="w-full"/>
              </div>

              <div class="vx-col w-full mt-4">
                <vs-input label-placeholder="Billing Email" v-model="bill.email" class="w-full"/>
              </div>

              <div class="vx-col w-full mt-4">
                <vs-input label-placeholder="Payment Terms (No. of Days)" v-model="bill.payment_terms" class="w-full"/>
              </div>
            </div>
          </tab-content>
        </form-wizard>
      </div>
    </component>

    <div class="flex flex-wrap items-center p-6 space-x-2" slot="footer">
    </div>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'

export default {
  name: 'AddFactoryCompany',

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
    FormWizard,
    TabContent
  },

  data () {
    return {
      is_bill_address_same_as_factoring_company_address: false,
      company: {
        name: '',
        address: '',
        state: '',
        city: '',
        zip: '',
        contact: '',
        phone_number: '',
        email: ''
      },
      bill: {
        address: '',
        state: '',
        city: '',
        zip: '',
        contact: '',
        phone_number: '',
        email: '',
        payment_terms: ''
      },

      settings: { // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      }
    }
  },

  computed: {
    isSidebarActiveLocal: {
      get () {
        return this.isSidebarActive
      },
      set (val) {
        if (!val) {
          this.$emit('closeSidebar')
          // this.$validator.reset()
          // this.initValues()
        }
      }
    },
    scrollbarTag () {
      return this.$store.getters.scrollbarTag
    }
  },

  methods: {
    formSubmitted () {
      this.$emit('closeSidebar')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@sass/custom/sidebar.scss';
</style>
