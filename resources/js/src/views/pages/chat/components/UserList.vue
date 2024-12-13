<template>
  <div class="relative">
    <!-- User section -->
    <div v-if="userData" class="user px-2 py-4">
      <div class="user-align">
        <div class="user-short-name">
          <h2>{{ userData.shortName }}</h2>
        </div>
        <div class="user-name">
          <p class="name">{{ userData.fullName }}</p>
          <!-- <p class="lead">{{ userData.role }}</p> -->
        </div>
      </div>
    </div>
    <div class="all-chats flex justify-between items-center mt-5 mb-3 px-3">
      <h3>Chats</h3>
      <vs-button
        color="primary"
        icon="edit"
        @click="handleToggleChatModal(true)"
        >New Chat</vs-button
      >
    </div>
    <div class="chat-list">
      <div class="group-chat pt-5">
        <div style="overflow: auto">
          <div
            v-for="chat in filteredChatList"
            :key="chat.chatId"
            class="py-3 cursor-pointer"
            @click="
              chat.chatType == 'oneOnOne'
                ? openChat(chat.chatUser.userId, chat.chatUser, chat.chatId)
                : chat.chatType == 'load'
                ? openChat(chat.loadData.loadId, chat)
                : openChat(chat.chatId, chat)
            "
          >
            <div class="flex items-center">
              <template v-if="chat.chatType == 'oneOnOne'">
                <vs-avatar
                  :size="chat.chatUser.avatarSize"
                  :src="chat.chatUser.avatarSrc"
                  class="mr-3"
                />
                <h5>
                  {{ chat.chatUser.firstName }}
                  {{ chat.chatUser.lastName }}
                </h5>
              </template>
              <template v-else-if="chat.chatType == 'intercompany'">
                <vs-avatar
                  color="primary"
                  :text="
                    getInitialsForChat(chat.intercompanyData.otherCompanyName)
                  "
                  class="mr-3"
                />
                <h5>
                  {{ chat.intercompanyData.otherCompanyName }}
                </h5>
              </template>
              <template v-else-if="chat.chatType == 'group'">
                <vs-avatar
                  color="primary"
                  :text="getInitialsForChat(chat.groupData.name)"
                  class="mr-3"
                />
                <h5>
                  {{ chat.groupData.name }}
                </h5>
              </template>
              <template v-else-if="chat.chatType == 'load'">
                <h5
                  class="ml-4"
                  v-if="chat && chat.loadData && chat.loadData.number"
                >
                  Load #{{ chat.loadData.number }}
              </h5>
              </template>

              <div
                v-if="
                  chat.chatType == 'oneOnOne'
                    ? hasNewMessagesAvailable(
                        chat.chatUser.userId,
                        chat.lastMessageUtc,
                        chat.lastSeenUtc,
                        chat.chatId
                      )
                    : chat.chatType == 'load'
                    ? hasNewMessagesAvailable(
                        chat.loadData.loadId,
                        chat.lastMessageUtc,
                        chat.lastSeenUtc,
                        chat.chatId
                      )
                    : hasNewMessagesAvailable(
                        chat.chatId,
                        chat.lastMessageUtc,
                        chat.lastSeenUtc
                      )
                "
                class="new-message-dot"
              ></div>
            </div>
          </div>
        </div>
      </div>

      <create-new-chat
        v-if="toggleChatModal"
        :toggleChatModal="toggleChatModal"
        :customersList="customersList"
        @onUserSelected="onUserSelected"
        @refreshChats="getChats"
        @getMessage="getMessage"
        @closeChatModal="handleToggleChatModal(false)"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getInitialFromFullName } from '@/helpers/helper';
import { EventBus } from '../../../../helpers/eventBus';
import CreateNewChat from './CreateNewChat.vue';

export default {
  name: 'UserList',
  components: { CreateNewChat },
  props: {
    chatLoadId: {
      type: Number,
      default: null,
    },
    newMessagesNotificationChatIds: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      addGroupMembersSidebar: false,
      selectedUser: '',
      filteredUsers: [],
      showSearchUserInput: false,
      latestSeenId: [],
      individualChatUsers: [],
      customersList: [],
      isIntercompanyChat: false,
      toggleChatModal: false,
    };
  },
  computed: {
    ...mapGetters('chat', ['chatList']),
    ...mapGetters('companyUserV2', ['getAllUsersList']),
    ...mapGetters('auth', ['user']),

    hasNewMessagesAvailable() {
      return (id, lastMessageUtc, lastSeenUtc, chatId) => {
        if (id != this.latestSeenId[this.latestSeenId.length - 1]) {
          if (
            chatId &&
            this.newMessagesNotificationChatIds.some((item) => item === chatId)
          )
            return true;
          if (this.newMessagesNotificationChatIds.some((item) => item === id))
            return true;
        }

        if (this.latestSeenId.some((item) => item === id)) return false;
        if (lastMessageUtc && lastSeenUtc) {
          const lastMessageLocal = this.$dayjs.utc(lastMessageUtc).local();
          const lastSeenLocal = this.$dayjs.utc(lastSeenUtc).local();
          return lastMessageLocal.isAfter(lastSeenLocal);
        }

        //for new chat show based on lastMessageUtc
        if (lastMessageUtc && !lastSeenUtc) {
          return true;
        }
        return false;
      };
    },
    userData() {
      return {
        shortName: this.getInitials(this.user.firstName, this.user.lastName),
        fullName: `${this.user.firstName} ${this.user.lastName}`,
        role: this.user.role,
      };
    },
    getInitialsForChat() {
      return (name) => {
        const first = name.split(' ')[0];
        const second = name.split(' ')[1];
        return this.getInitials(first, second);
      };
    },
    filteredChatList() {
      return (this.chatList || []).map((item) => {
        if (item.chatType === 'oneOnOne') {
          item.chatUser = item.chatUsers
            ? item.chatUsers.filter((cu) => cu.userId != this.user.user_id)[0]
            : item.chatUser
            ? item.chatUser
            : {};
        }
        return item;
      });
    },
    getCompanyUsersList() {
      const existingChatUserIds = [
        ...new Set(
          this.individualChatUsers.map((item) => item.chatUser.userId).flat()
        ),
      ];

      return this.getAllUsersList.filter(
        (item) =>
          item.id != this.user.user_id && !existingChatUserIds.includes(item.id)
      );
    },
  },

  async created() {
    const dayjsUtc = require('dayjs/plugin/utc');
    this.$dayjs.extend(dayjsUtc);

    await this.$store.dispatch('companyUserV2/fetchAllUsers');
    this.getAllCustomers();
  },

  mounted() {
    EventBus.$on('openIntercompanyChat', this.openIntercompanyChat);
  },

  methods: {
    getMessage(otherCompanyId, intercompanyUser, shouldCreate) {
      this.$emit(
        'openChatWindow',
        otherCompanyId,
        intercompanyUser,
        shouldCreate
      );
    },
    async getAllCustomers() {
      const { payload } = await this.$store.dispatch(
        'customer/getAllCustomers'
      );

      this.customersList = payload.data || [];
    },
    addIntercompanyChat() {
      this.isIntercompanyChat = true;
      this.addGroupMembersSidebar = true;
    },
    async getChats(addedGroup) {
      this.$vs.loading();
      await this.$store.dispatch('chat/getChats');
      // TODO: Duplicate detection by name is not correct. However, I did a test, it will return the newest matched chat, so I guess it would be OK.
      const foundGroup = this.chatList.find(
        (chat) => chat.groupData.name === addedGroup.name
      );
      this.openChat(foundGroup.chatId, foundGroup);
      this.$vs.loading.close();
    },
    onUserSelected(data) {
      if (data) {
        const [firstName, ...lastName] = data.fullName.split(' ');
        const user = {
          firstName: firstName,
          lastName: lastName.join(' '),
          userId: data.id,
        };
        const payload = [...this.chatList];
        payload.unshift({ chatUser: user, chatType: 'oneOnOne' });
        this.$store.commit('chat/SET_CHAT_LIST', payload);
        this.openChat(data.id, user);
        this.toggleUserList();
      }
    },
    toggleUserList() {
      this.showSearchUserInput = !this.showSearchUserInput;
      if (!this.showSearchUserInput) {
        this.selectedUser = '';
      }
    },
    searchUsers(event) {
      if (!event.query.trim().length) {
        this.filteredUsers = [...this.getAllUsersList].filter(
          (item) => item.id != this.user.user_id
        );
      } else {
        this.filteredUsers = this.getAllUsersList.filter((item) => {
          if (item.id !== this.user.user_id) {
            return item.fullName
              .toLowerCase()
              .startsWith(event.query.toLowerCase());
          }
        });
      }
    },
    closeAddUserSidebar() {
      this.isIntercompanyChat = false;
      this.addGroupMembersSidebar = false;
    },
    openChat(chatUserId, chatData, chatId) {
      this.$emit('closeOpenedChatWindow');
      this.latestSeenId.push(chatUserId);
      this.$emit('openChatWindow', chatUserId, chatData, false, chatId);
      let selectedChatId = chatId || chatUserId;
      EventBus.$emit('lastSeenChatId', selectedChatId);
      sessionStorage.setItem('openChatId', selectedChatId);
    },
    openSettings() {
      console.log('Open settings');
    },
    addIndividualChat() {
      this.showSearchUserInput = true;
    },
    addGroupChat() {
      if (this.showSearchUserInput) {
        this.toggleUserList();
      }
      this.addGroupMembersSidebar = true;
    },
    getInitials(firstName, lastName) {
      const fullName = `${firstName || ''} ${lastName || ''}`;
      return getInitialFromFullName(fullName);
    },
    openIntercompanyChat({ chatId, ...rest }) {
      this.openChat(chatId, rest);
    },
    handleToggleChatModal(value) {
      this.toggleChatModal = value;
    },
  },

  beforeDestroy() {
    sessionStorage.removeItem('openChatId');
  },
};
</script>

<style scoped lang="scss">
.user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .user-align {
    display: flex;
    align-items: center;
    .user-short-name {
      margin-right: 15px;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid rgba(var(--vs-primary), 1);
      display: flex;
      align-items: center;
      justify-content: center;
      h2 {
        color: rgba(var(--vs-primary), 1);
        text-transform: uppercase;
        font-size: 20px;
      }
    }
    .user-name {
      .name {
        font-weight: 700;
      }
      .lead {
        font-size: 12px;
        color: gray;
      }
    }
  }
}
.individual-chat {
  h5 {
    font-weight: 500;
    font-size: 16px;
  }
  .chat-users {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .details {
      p {
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        font-size: 12px;
        max-width: 75%;
        margin-top: 3px;
        color: #263151;
      }
    }
    h5 {
      font-size: 14px;
    }
  }
  .notification {
    background: rgb(241, 251, 225);
    padding: 3px 10px;
    border-radius: 5px;
    span {
      color: green;
    }
  }
}

.group-avtar {
  position: relative;
  display: flex;
  align-items: center;
  width: calc(100% - 65%);
  .profile-icons {
    .con-vs-avatar.large {
      border: 2px solid #fff;
    }
  }
  .waiting-more {
    position: absolute;
    right: -10px;
    color: gray;
  }
}
.loads {
  h5 {
    font-size: 16px;
  }
  .link {
    margin-top: 20px;
    a {
      color: #333;
      text-decoration: none;
      :hover {
        color: #333;
      }
    }
  }
}
.add-more-btn {
  button {
    padding: 10px;
    border: 1px solid #7367f0;
    background: #7367f0;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
  }
}

.btns {
  background-color: #e3e3fa;
  min-width: 25px;
  min-height: 25px;
  color: #9188ec;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
}

#parentx {
  overflow: hidden;
  height: 500px;
  position: relative;
}

.avatars {
  display: flex;
  list-style-type: none;
  margin: auto;
  padding: 0px;
  flex-direction: row;
  &__item {
    background-color: #596376;
    border: 2px solid #1f2532;
    border-radius: 100%;
    color: #ffffff;
    display: block;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 100;
    height: 45px;
    width: 45px;
    line-height: 45px;
    text-align: center;
    transition: margin 0.1s ease-in-out;
    overflow: hidden;
    margin-left: -10px;
    &:first-child {
      z-index: 5;
    }
    &:nth-child(2) {
      z-index: 4;
    }
    &:nth-child(3) {
      z-index: 3;
    }
    &:nth-child(4) {
      z-index: 2;
    }
    &:nth-child(5) {
      z-index: 1;
    }
    &:last-child {
      z-index: 0;
    }
    img {
      width: 100%;
    }
  }
  &:hover {
    .avatars__item {
      margin-right: 10px;
    }
  }
}

.new-message-dot {
  width: 10px;
  height: 10px;
  background-color: red; /* Or any color you prefer for the dot */
  border-radius: 50%;
  display: inline-block;
  margin-left: 5px;
}

.chat-list {
  overflow: auto;
  max-height: 90vh;
}

.custom-height {
  ::v-deep .vs__dropdown-menu {
    max-height: 180px !important;
  }
}
</style>
