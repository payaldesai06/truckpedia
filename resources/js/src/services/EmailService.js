import axiosNode from '../http/axiosNode';

export default {
  async sendEmail(payload) {
    return await axiosNode.post('/email/send', payload);
  },
};
