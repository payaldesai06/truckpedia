import axios from '../http/axiosNode/index';

export default {
  async getUploadS3Url({ files }) {
    return axios.post('company/files/getUploadUrls', { files });
  },
  async createFiles(payload) {
    return await axios.post('company/files/create', payload);
  },
  async getCompanyFiles() {
    return await axios.get('company/files');
  },
  async deleteFile(payload) {
    return await axios.delete('company/files', { data: payload });
  },
};
