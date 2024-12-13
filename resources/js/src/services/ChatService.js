import axios from '../http/axiosNode/index';

export default {
  async getChats() {
    return axios.post('/chat/getChats').then((res) => {
      return res.data.payload;
    });
  },
  async createGroupChat(payload) {
    return axios.post('/chat/createGroupChat', payload).then((res) => {
      return res.data.payload;
    });
  },
  async getMessages(payload) {
    return axios.post('/chat/messages/getMessages', payload).then((res) => {
      return res.data.payload;
    });
  },
  async sendMessages(payload) {
    return axios.post('/chat/messages/sendMessages', payload).then((res) => {
      return res.data.payload;
    });
  },

  async getUploadUrls(payload) {
    return axios.post('/chat/files/getUploadUrls', payload).then((res) => {
      return res.data.payload;
    });
  },

  async addNewUsers(payload) {
    return axios.patch('/chat/addUsersToChat', payload).then((res) => {
      return res.data.payload;
    });
  },
  async changeGroupChatName(payload) {
    return axios.patch('/chat/changeGroupChatName', payload).then((res) => {
      return res.data.payload;
    });
  },
};
