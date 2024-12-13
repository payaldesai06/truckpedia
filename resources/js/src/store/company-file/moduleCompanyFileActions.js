import companyFileService from '@/services/CompanyFileService';

export default {
  getUploadS3Url({ commit }, payload) {
    return companyFileService.getUploadS3Url(payload);
  },
  createFiles({ commit }, payload) {
    return companyFileService.createFiles(payload);
  },
  getCompanyFiles({ commit }, payload) {
    return companyFileService.getCompanyFiles(payload);
  },
  deleteFile({ commit }, payload) {
    return companyFileService.deleteFile(payload);
  },
};
