import CompaniesService from '@/services/CompaniesService';

export default {
  async getCompanyProfile(_, payload) {
    const { data } = await CompaniesService.getCompanyProfile(payload);
    return data;
  },
  async updateCompanyProfile(_, payload) {
    const { data } = await CompaniesService.updateCompanyProfile(payload);
    return data;
  },
};
