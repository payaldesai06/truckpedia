import axiosNode from '../http/axiosNode';

export default {
  async connectionStatus() {
    return await axiosNode.get(`/melio/connectionStatus`);
  },
  async onboardingUrl() {
    return await axiosNode.get(`/melio/onboardingUrl`);
  },
  async onboardingStatus(token) {
    return await axiosNode.post(`/melio/onboarded`, token);
  },
};
