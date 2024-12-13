<template>
  <div class="chat-board">
    <div class="user-window" v-if="!isLoadChatExists">
      <UserList
        @openChatWindow="openChatWindow"
        :newMessagesNotificationChatIds="newMessagesNotificationChatIds"
      ></UserList>
    </div>
    <div v-show="chatWindowOpen" class="w-full">
      <ChatWindowVue
        ref="chatWindow"
        :userId="userId"
        @closeOpenedChatWindow="closeChatWindow"
        @newMessagesNotificationChatId="newMessagesNotificationChatId"
      />
    </div>
  </div>
</template>

<script>
import ChatWindowVue from './components/ChatWindow.vue';
import UserList from './components/UserList.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'ChatSystem',
  components: { ChatWindowVue, UserList },
  props: {
    chatLoadId: {
      type: Number,
      default: null,
    },
    isLoadChatExists: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      userId: '',
      allChat: [],
      chatWindowOpen: false,
      activeChat: null,
      newMessagesNotificationChatIds: [],
    };
  },
  computed: {
    ...mapGetters('auth', ['user']),
  },
  watch: {
    isLoadChatExists: {
      handler(val) {
        if (!val) return;
        const loadData = {
          chatType: 'load',
          loadData: {
            loadId: val.loadId,
            number: val.number,
            reference: val.reference,
            isFromLoad: val.isExists,
          },
        };
        this.$nextTick(() => {
          this.openChatWindow(val.loadId, loadData);
        });
      },
      deep: true,
      immediate: true,
    },
  },
  async created() {
    //clear chat session storage on load
    sessionStorage.removeItem('openChatId');
  },
  methods: {
    newMessagesNotificationChatId(newMessageChatId) {
      this.newMessagesNotificationChatIds.push(newMessageChatId);
    },
    async openChatWindow(id, chatData, shouldCreate, chatId) {
      this.newMessagesNotificationChatIds = this.newMessagesNotificationChatIds.filter((e) => e !== (chatData.chatId || chatId))
      this.chatWindowOpen = true;
      this.userId = id;
      this.$refs.chatWindow.setSelectedChatData(id, chatData);
      this.$refs.chatWindow.getMessages({ scroll: true }, shouldCreate);
    },
    closeChatWindow() {
      this.chatWindowOpen = false;
      this.activeChat = null;
    },
  },
};
</script>

<style scoped lang="scss">
.chat-board {
  display: flex;
  .user-window {
    width: calc(100% - 75%);
    // border-right: 1px solid #D4D4D4;
  }
  .chat-window {
    background: #ececec;
    width: calc(100% - 15%);
  }
}
</style>
