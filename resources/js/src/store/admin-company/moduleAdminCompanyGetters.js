import config from '@/config/constants'

export default {
  getFormattedSubscriptionStatus () {
    const subscription = config.status.subscription
    return {
      [subscription.in_active]: 'In Active',
      [subscription.active]: 'Active',
      [subscription.suspended]: 'Suspended',
      [subscription.canceled]: 'Canceled'
    }
  }
}
