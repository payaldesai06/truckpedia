export default {
  SET_CHAT_LIST(state, data) {
    state.chatList = data;
  },
  ADD_TO_CHAT_LIST(state, data, index = 0) {
    state.chatList.splice(index, 0, data);
  },
  UPDATE_CHAT_USERS(state, data) {
    state.chatList.forEach((chat) => {
      if (chat.chatId === data.chatId) {
        chat.chatUsers = data.chatUsers;
      }
    });
  },
  UPDATE_CHAT_LAST_MSG_DATE_TIME(state, data) {
    state.chatList.forEach((chat) => {
      if (chat.chatId === data.chatId) {
        if (data.lastMessageUtc) {
          chat.lastMessageUtc = data.lastMessageUtc;
        } else {
          chat.lastMessageUtc = new Date().toISOString().slice(0, 19).replace('T', ' ');
        }
      }
      
      // used for sorting chatslist which calling getChats API
      chat.isCurrentUser = data.isCurrentUser || false;
      
    })
  },
  CHANGE_CHAT_NAME(state, data) {
    state.chatList.forEach((chat) => {
      if (chat.chatId === data.chatId && chat.groupData) {
        chat.groupData.name = data.name;
      }
    });
  }
};
