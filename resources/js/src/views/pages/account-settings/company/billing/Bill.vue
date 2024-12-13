<template>
  <div class="w-full space-y-12">
    <div class="vx-row">
      <div class="vx-col w-full mb-8">
        <h2 class="text-2xl opacity-75">Billing Overview</h2>
      </div>

      <div class="vx-col w-full">
        <div class="vx-row w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div class="vx-col">
            <div class="h-full w-full p-4 text-center border border-grey rounded">
              <h4 class="text-lg uppercase font-semibold"
                  :class="{'text-primary': isFreeTrialActive}">Free Trial</h4>

              <div class="flex items-center justify-center mt-10">
                <vs-chip transparent :color="isFreeTrialActive ? 'primary' : 'danger'">
                  {{ isFreeTrialActive ? 'active' : 'expired' }}
                </vs-chip>
              </div>

              <template v-if="isFreeTrialActive">
                <div class="mt-4">
                  <p class="mt-2 text-lg">
                    <span class="font-semibold italic underline text-primary">{{ trialRemainingDays }} days</span>
                    remaining for
                    <span class="font-semibold">free trial</span>.
                  </p>
                </div>
              </template>
            </div>
          </div>

          <div class="vx-col">
            <div class="h-full w-full p-4 text-center border border-grey rounded">
              <pay-as-you-go-card />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="vx-row">
      <div class="vx-col w-full mb-8">
        <h2 class="text-2xl opacity-75">Card Detail</h2>
      </div>

      <div class="vx-col w-full vs-con-loading__container" id="card-with-loading">
        <div class="vx-row w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6" style="min-height: 4rem;">
          <template v-if="!adminCardLoading">
            <template v-if="adminCard">
              <div class="vx-col w-full md:flex">
                <table class="w-full md:w-5/6">
                  <tr>
                    <td class="font-semibold">Type</td>
                    <td class="font-semibold">Card Number</td>
                    <td class="font-semibold">M/YYYY</td>
                  </tr>

                  <tr>
                    <td class="uppercase">{{ adminCard.card_type }}</td>
                    <td>{{ `**** **** **** ${adminCard.last4}` }}</td>
                    <td>{{ `${adminCard.card_expiration_month}/${adminCard.card_expiration_year}` }}</td>
                  </tr>
                </table>

                <div class="w-full md:w-1/6 flex items-center justify-center space-x-2">
                  <vx-tooltip text="Remove Card">
                    <vs-button color="danger"
                               type="border"
                               icon-pack="feather"
                               icon="icon-trash"
                               size="small"
                               @click="onRemoveCard"
                               radius></vs-button>
                  </vx-tooltip>

                  <vx-tooltip text="Replace Card">
                    <vs-button color="warning"
                               type="filled"
                               icon-pack="feather"
                               icon="icon-edit"
                               size="small"
                               @click="replaceCard"
                               radius></vs-button>
                  </vx-tooltip>
                </div>
              </div>
            </template>

            <template>
              <div class="vx-col w-full" v-show="!adminCard || wantToReplaceCart">
                <div class="alert alert-success" id="success_msg" style="display: none;"></div>
                <div class="alert alert-danger" id="error_msg" style="display: none;"></div>
                <div class="form-group">
                  <div class="">
                    <div id="card-element">
                      <!-- Elements will create input elements here -->
                    </div>
                    <!-- We'll put the error messages in this element -->
                    <div id="card-errors" role="alert" class="mt-2 text-sm font-semibold text-danger"></div>
                  </div>

                  <div class="mt-6 flex justify-end">
                    <vs-button type="filled"
                               color="primary"
                               size="small"
                               @click="addCard">Save
                    </vs-button>
                  </div>
                </div>
              </div>
            </template>
          </template>
        </div>
      </div>
    </div>

    <!--    <div class="vx-row mt-base">-->
    <!--      <div class="vx-col w-full">-->
    <!--        <div class="p-4 text-center border">-->
    <!--          <p class="pt-4">You haven't entered the billing information yet, but you will still be able to use your days-->
    <!--            of trail</p>-->
    <!--          <p class="mt-2 pb-4">Once your trial ends you will be charged the amount matching the plan selected-->
    <!--            initially.</p>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->

    <!--    <div class="vx-row mt-base">-->
    <!--      <div class="vx-col w-full">-->
    <!--        <div class="px-4 py-6 border">-->
    <!--          <div class="mb-4 text-center">-->
    <!--            <h5>Add your billing detail</h5>-->
    <!--          </div>-->

    <!--          <div class="">-->
    <!--            <div class="mb-2">-->
    <!--              <h6 class="opacity-75">Billing Contact</h6>-->
    <!--            </div>-->

    <!--            <div class="ml-10 mt-4 space-y-4">-->
    <!--              <div class="vx-row w-1/2">-->
    <!--                <div class="vx-col w-1/2">-->
    <!--                  <vs-input label-placeholder="First Name" name="first_name" v-model="first_name" class="w-full"/>-->
    <!--                </div>-->
    <!--                <div class="vx-col w-1/2">-->
    <!--                  <vs-input label-placeholder="Last Name" name="last_name" v-model="last_name" class="w-full"/>-->
    <!--                </div>-->
    <!--              </div>-->

    <!--              <div class="vx-row w-1/2">-->
    <!--                <div class="vx-col w-full">-->
    <!--                  <vs-input label-placeholder="Company Name" name="company_name" v-model="company_name"-->
    <!--                            class="w-full"/>-->
    <!--                </div>-->
    <!--              </div>-->

    <!--              <div class="vx-row w-1/2">-->
    <!--                <div class="vx-col w-full">-->
    <!--                  <vs-input label-placeholder="Email" name="email" v-model="email" class="w-full"/>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->

    <!--            <p class="ml-10 mt-6">We will be sening invoice to the email</p>-->
    <!--          </div>-->

    <!--          <div class="mt-base">-->
    <!--            <div class="mb-2">-->
    <!--              <h6 class="opacity-75">Billing Address</h6>-->
    <!--            </div>-->

    <!--            <div class="ml-10 mt-4 space-y-4">-->
    <!--              <div class="vx-row w-1/2">-->
    <!--                <div class="vx-col w-full">-->
    <!--                  <label class="text-sm opacity-75">Country</label>-->
    <!--                  <v-select label="Country" :options="countryOptions" :clearable="false" v-model="country"-->
    <!--                            class="mb-4 md:mb-0"/>-->
    <!--                </div>-->
    <!--              </div>-->

    <!--              <div class="vx-row w-1/2">-->
    <!--                <div class="vx-col w-full">-->
    <!--                  <vs-input label-placeholder="Street" name="street" v-model="street" class="w-full"/>-->
    <!--                </div>-->
    <!--              </div>-->

    <!--              <div class="vx-row w-1/2">-->
    <!--                <div class="vx-col w-full">-->
    <!--                  <vs-input label-placeholder="App/Suite" name="app_suite" v-model="app_suite" class="w-full"/>-->
    <!--                </div>-->
    <!--              </div>-->

    <!--              <div class="vx-row w-1/2">-->
    <!--                <div class="vx-col w-full">-->
    <!--                  <vs-input label-placeholder="City" name="city" v-model="city" class="w-full"/>-->
    <!--                </div>-->
    <!--              </div>-->

    <!--              <div class="vx-row w-1/2">-->
    <!--                <div class="vx-col w-full">-->
    <!--                  <vs-input label-placeholder="State" name="state" v-model="state" class="w-full"/>-->
    <!--                </div>-->
    <!--              </div>-->

    <!--              <div class="vx-row w-1/2">-->
    <!--                <div class="vx-col w-full">-->
    <!--                  <vs-input label-placeholder="Zip/Postal" name="zip" v-model="zip" class="w-full"/>-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->

    <!--          <div class="mt-base">-->
    <!--            <div class="mb-2">-->
    <!--              <h6 class="opacity-75">Billing Contact</h6>-->
    <!--            </div>-->

    <!--            <div class="ml-10 mt-4 space-y-4">-->
    <!--              <div class="vx-row w-1/2">-->
    <!--                <div class="vx-col w-full">-->
    <!--                  <vs-input label-placeholder="Name on Creadit Card" name="creaditcard_name" v-model="creaditcard_name"-->
    <!--                            class="w-full"/>-->
    <!--                </div>-->
    <!--              </div>-->

    <!--              <div class="vx-row w-1/2">-->
    <!--                <div class="vx-col w-full">-->
    <!--                  <label class="text-sm opacity-75">Enter Credit Card Number</label>-->
    <!--                  <input-mask v-model="creaditcard_number" mask="9999-9999-9999-9999" maskChar=" "-->
    <!--                              class="input-style w-full"></input-mask>-->

    <!--                  &lt;!&ndash;                  <vs-input label-placeholder="Enter Credit Card Number" name="creaditcard_number"&ndash;&gt;-->
    <!--                  &lt;!&ndash;                            v-model="creaditcard_number" class="w-full"/>&ndash;&gt;-->
    <!--                </div>-->
    <!--              </div>-->

    <!--              <div class="vx-row flex items-end w-1/2">-->
    <!--                <div class="vx-col w-2/3">-->
    <!--                  <label class="text-sm opacity-75">Enter Credit Card Expiry date</label>-->
    <!--                  <input-mask v-model="creaditcard_exp_date" mask="99/9999" maskChar=" "-->
    <!--                              class="input-style"></input-mask>-->

    <!--                  &lt;!&ndash;                  <datepicker :minimumView="'month'" :maximumView="'year'" :format="date_format"&ndash;&gt;-->
    <!--                  &lt;!&ndash;                              v-model="creaditcard_exp_date"&ndash;&gt;-->
    <!--                  &lt;!&ndash;                              name="creaditcard_exp_date" class="w-full"></datepicker>&ndash;&gt;-->
    <!--                </div>-->

    <!--                <div class="vx-col w-1/3">-->
    <!--                  <label class="text-sm opacity-75">Enter CVV</label>-->
    <!--                  <input-mask v-model="creaditcard_cvv" mask="999" maskChar=" " class="input-style"></input-mask>-->
    <!--                  &lt;!&ndash;                  <vs-input label-placeholder="Enter CVV" name="creaditcard_cvv" v-model="creaditcard_cvv"&ndash;&gt;-->
    <!--                  &lt;!&ndash;                            class="w-full"/>&ndash;&gt;-->
    <!--                </div>-->
    <!--              </div>-->
    <!--            </div>-->
    <!--          </div>-->

    <!--          <div class="mt-base text-center">-->
    <!--            <vs-button type="filled" color="primary">Pay $99.99</vs-button>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>

</template>

<script>
import Datepicker from 'vuejs-datepicker'
import InputMask from 'vue-input-mask'
import PayAsYouGoCard from './components/PayAsYouGoCard'
import config from '@/config/constants'
import { mapGetters } from 'vuex'

export default {
  name: 'Bill',

  components: {
    Datepicker,
    InputMask,
    PayAsYouGoCard
  },

  data () {
    return {
      wantToReplaceCart: false,
      adminCardLoading: false,
      adminCard: null,
      stripeCardElement: null,

      first_name: '',
      last_name: '',
      company_name: '',
      email: '',
      country: '',
      countryOptions: [
        'United States',
        'India',
        'Australia'
      ],
      street: '',
      app_suite: '',
      city: '',
      state: '',
      zip: '',
      creaditcard_name: '',
      creaditcard_number: '',
      creaditcard_exp_date: '',
      creaditcard_cvv: '',
      date_format: 'MM yyyy'
    }
  },

  created () {
    this.initialStripeValue()
  },

  async mounted () {
    this.adminCardLoading = true

    try {
      if (this.hasCard) {
        await this.getCard()
      }

      if (!this.adminCard) {
        this.adminCardLoading = false
        await this.configureStripeElements()
      }
    } catch (error) {
      this.$vs.notify({
        color: 'danger',
        title: 'Error',
        text: error.response.data.message
      })
    } finally {
      this.adminCardLoading = false
    }
  },

  computed: {
    ...mapGetters('auth', ['hasCard', 'isFreeTrialActive', 'trialRemainingDays'])
  },

  methods: {
    async addCard () {
      this.$vs.loading({
        container: '#card-with-loading',
        scale: 0.6
      })

      try {
        const result = await this.$stripe.createPaymentMethod({
          type: 'card',
          card: this.stripeCardElement
        })

        if (!result.error) {
          const payload = {
            payment_method_id: result.paymentMethod.id
          }

          await this.$store.dispatch('stripe/addCard', payload)
        }

        await this.initialStripeValue()

        await this.getCard()
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        })
      } finally {
        this.wantToReplaceCart = false
        this.$vs.loading.close('#card-with-loading > .con-vs-loading')
      }
    },

    async getCard () {
      this.adminCardLoading = true
      this.$vs.loading({
        container: '#card-with-loading',
        scale: 0.6
      })

      try {
        const {payload} = await this.$store.dispatch('stripe/getCard')

        this.adminCard = payload
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        })
      } finally {
        this.adminCardLoading = false
        this.$vs.loading.close('#card-with-loading > .con-vs-loading')
      }
    },

    configureStripeElements () {
      const elements = this.$stripe.elements()
      const style = config.stripe.style

      this.stripeCardElement = elements.create('card', {style})

      this.stripeCardElement.mount('#card-element')

      this.stripeCardElement.addEventListener('change', function (event) {
        const displayError = document.getElementById('card-errors')
        if (event.error) {
          displayError.textContent = event.error.message
        } else {
          displayError.textContent = ''
        }
      })
    },

    replaceCard () {
      this.wantToReplaceCart = true
      this.configureStripeElements()
    },

    onRemoveCard () {
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        title: 'Remove Card',
        text: 'Are you sure. You want to remove your card?',
        acceptText: 'Yes',
        accept: () => this.removeCard()
      })
    },

    async removeCard () {
      this.$vs.loading()

      try {
        await this.$store.dispatch('stripe/removeCard')

        this.adminCard = null
        await this.configureStripeElements()

        this.$vs.notify({
          color: 'primary',
          title: 'Card',
          text: 'Card removed successfully.'
        })
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message
        })
      } finally {
        this.$vs.loading.close()
      }
    },

    initialStripeValue () {
      this.wantToReplaceCart = false
      this.adminCardLoading = false
      this.adminCard = null
      this.stripeCardElement = null
    }
  }
}
</script>

<style scoped>
.border {
  border: 1px solid black;
}

.input-style {
  color: inherit;
  position: relative;
  padding: .7rem;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, .2);
  box-sizing: border-box;
  box-shadow: 0 0 0 0 rgba(0, 0, 0, .15);
  transition: all .3s ease;
  width: 100%;
}
</style>
