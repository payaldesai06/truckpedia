import stripeService from '@/services/StripeService'

export default {
  addCard ({commit}, payload) {
    return stripeService.addCard(payload)
      .then(({data}) => data)
  },

  getCard ({commit}, payload) {
    return stripeService.getCard(payload)
      .then(({data}) => data)
  },

  removeCard ({dispatch}) {
    return stripeService.removeCard()
      .then(({data}) => {
        dispatch('auth/removeCard', {}, {root: true})
        return data
      })
  },

  /**
   * Make Manual Payment Request
   *
   * From `Suspended` to `Active`
   */
  makeManualPaymentRequest ({commit, dispatch}, {subscriptionId}) {
    return stripeService.makeManualPaymentRequest(subscriptionId)
      .then(({data}) => {
        dispatch('auth/setUser', data.payload, {root: true})
        return data
      })
  },

  /**
   * Subscription/Plan
   */
  // Active Subscription
  subscriptionActive ({dispatch}) {
    return stripeService.subscriptionActive()
      .then(({data}) => {
        dispatch('auth/setUser', data.payload, {root: true})
        return data
      })
  },

  // Cancel Subscription
  subscriptionCancel ({dispatch}) {
    return stripeService.subscriptionCancel()
      .then(({data}) => {
        dispatch('auth/setUser', data.payload, {root: true})
        return data
      })
  }
}
