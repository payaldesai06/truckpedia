import chatService from '@/services/ChatService';

export default {
  getChats({ commit }) {
    return chatService.getChats().then((data) => {
      commit('SET_CHAT_LIST', data.chats);
      return data;
    });
  },
  createGroupChat({ commit }, payload) {
    return chatService.createGroupChat(payload).then((data) => {
      return data;
    });
  },
  getMessages({ commit }, payload) {
    return chatService.getMessages(payload).then((data) => {
      return data;
    });
  },
  sendMessages({ commit }, payload) {
    return chatService.sendMessages(payload).then((data) => {
      return data;
    });
  },
  getUploadUrls({ commit }, payload) {
    return chatService.getUploadUrls(payload).then((data) => {
      return data;
    });
  },
  addNewUsers(_, payload) {
    return chatService.addNewUsers(payload).then((data) => {
      return data;
    });
  },
  changeGroupChatName({ commit }, payload) {
    return chatService.changeGroupChatName(payload).then((data) => {
      commit('CHANGE_CHAT_NAME', payload);
      return data;
    });
  },
};
