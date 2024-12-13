import axios from '../http/axios'

export default {
  async addCard (payload) {
    return await axios.post('/card', payload)
  },

  async getCard (payload) {
    return await axios.get('/card', payload)
  },

  async removeCard () {
    return await axios.delete('/card')
  },

  /**
   * Make Manual Payment Request
   *
   * From `Suspended` to `Active`
   */
  async makeManualPaymentRequest (subscriptionId) {
    return await axios.patch(`/subscriptions/${subscriptionId}/manual`)
  },

  /**
   * Subscription/Plan
   */
  // Active Subscription
  async subscriptionActive () {
    return await axios.post('/subscriptions/active')
  },

  // Cancel Subscription
  async subscriptionCancel () {
    return await axios.post('/subscriptions/cancel')
  }
}
