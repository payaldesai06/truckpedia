import { loadStripe } from '@stripe/stripe-js/pure'
import config from '@/config/constants'

export default {
  async install (Vue, options) {
    Vue.prototype.$stripe = await loadStripe(config.stripe.key)
  }
}

