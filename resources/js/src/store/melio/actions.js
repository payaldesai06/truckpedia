import MelioPaymentService from '../../services/MelioPaymentService';

export default {
  async connectionStatus() {
    const response = await MelioPaymentService.connectionStatus();
    return response;
  },

  async onboardingUrl() {
    const response = await MelioPaymentService.onboardingUrl();
    return response;
  },
  
  async onboardingStatus(_, payload) {
    const response = await MelioPaymentService.onboardingStatus(payload);
    return response;
  },
};
