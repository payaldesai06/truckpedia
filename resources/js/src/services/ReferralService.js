import axios from '../http/axios'

export default {
  async getReferralLink() {
    return await axios.get(`/referral/get-referral-link`);
  },
  async submitReferral(payload) {
    return await axios.post(`/referral/submit-referral`, payload);
  },
  async getEarnings() {
    return await axios.post(`v2/referral/getEarnings`);
  },
}
