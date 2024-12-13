

import referralService from '@/services/ReferralService'

export default {
  getReferralLink({commit}) {
    return referralService.getReferralLink().then(({data}) => {
      return data;
    });
  },

  submitReferral({commit}, payload) {
    return referralService.submitReferral(payload).then(({data}) => {
      return data;
    });
  },
  getEarnings({commit}) {
    return referralService.getEarnings().then(({data}) => {
      return data;
    });
  }
}