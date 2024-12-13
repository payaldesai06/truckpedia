<template>
  <div class="chat-system">
    <div class="chat-window-header">
      <ChatWindowHeaderVue
        v-if="chatData"
        :chatData="chatData"
        @addNewUsers="addNewUsers"
      />
    </div>
    <div class="chat-message-items">
      <MessageItem
        ref="chat"
        :currentMessages="messages"
        :userId="userId"
        :chatData="chatData"
      />
      <div
        v-if="showNewMessageAlert"
        class="scroll-button"
        @click="scrollToBottom(true)"
      >
        <p>New Message</p>
      </div>
    </div>
    <div class="chat-message-input" v-if="chatId">
      <MessageInput
        :chatId="chatId"
        @getMessages="getMessages"
        @sendFiles="sendFiles"
      />
    </div>
  </div>
</template>

<script>
import ChatWindowHeaderVue from './ChatWindowHeader.vue';
import MessageInput from './MessageInput.vue';
import MessageItem from './MessageItem.vue';
import { mapGetters } from 'vuex';
import { EventBus } from '../../../../helpers/eventBus';

import { getFileExtension } from '../../../../helpers/helper';
import constants from '../../../../config/constants';
export default {
  name: 'ChatWindow',
  components: { ChatWindowHeaderVue, MessageInput, MessageItem },
  props: {
    userId: {
      type: Number | String,
      required: true,
    },
  },
  data() {
    return {
      id: null,
      chatId: null,
      messages: [],
      chatData: '',
      prevInnerDivHeight: null,
      showNewMessageAlert: false,
      uploadPercentage: 0,
      scrollPosition: null,
      page: 1,
      pageSize: 50,
      // TODO: This is to prevent paged 2nd getMessages API being called before
      // 1st returns, however I highly doubt it's correct.
      isLoading: false,
      paginationMeta: {},
    };
  },
  computed: {
    ...mapGetters('chat', ['chatList']),
  },

  mounted() {
    // Add event listener for the scroll event
    if (this.$refs.chat && this.$refs.chat.$refs.chatBox) {
      this.$refs.chat.$refs.chatBox.addEventListener('scroll', () => {
        const chatBox = this.$refs.chat.$refs.chatBox;
        const scrollPosition = chatBox.scrollTop;

        if (scrollPosition === this.prevInnerDivHeight) {
          this.showNewMessageAlert = false;
        }

        if (scrollPosition === 0) {
          this.handlePagination();
        }
      });
    }

    EventBus.$on(constants.socketIoEvents.newMessages, this.onNewMessage);
  },

  methods: {
    async getChats() {
      this.$vs.loading();
      await this.$store.dispatch('chat/getChats');
      this.$vs.loading.close();
    },
    async sendFiles(files, chatId) {
      const allFiles = getFileExtension(files);
      const payload = {
        chatId: chatId,
        files: allFiles,
      };
      const s3FileNameAndURL = await this.$store.dispatch(
        'chat/getUploadUrls',
        payload
      );
      const attachments =
        (await this.uploadAttachmentsToS3(s3FileNameAndURL, files)) || [];

      const messagePayload = {
        chatId: this.chatId,
        messages: attachments.map((attachment) => ({
          storageFilename: attachment.storageFilename,
          originalFilename: attachment.originalFilename,
          type: 'file',
        })),
      };

      await this.$store
        .dispatch('chat/sendMessages', messagePayload)
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        });
      // TODO: why we call getMessages() here?
      // NO need to call this api here
      // this.getMessages();

      this.scrollToBottom(false, true);
      this.$vs.loading.close();
    },
    async uploadAttachmentsToS3(s3FileNameAndURL, files) {
      try {
        const loadingText = (fileNumber, percentage) => {
          return `Uploading file ${fileNumber} of ${s3FileNameAndURL.length} - ${percentage}%`;
        };
        this.$vs.loading({
          text:
            s3FileNameAndURL.length > 1
              ? loadingText(1, 0)
              : `${this.uploadPercentage}%`,
        });
        if (s3FileNameAndURL) {
          const attachments = [];

          for (let i = 0; i < s3FileNameAndURL.length; i++) {
            const { storageFilename, url } = s3FileNameAndURL[i];
            const file = files[i];

            const { status } = await this.$store.dispatch(
              'uploadFileToS3ViaPresignedUrl',
              {
                url,
                file,
                extension: storageFilename.split('.').pop(),
                setImagePreviewHeaders: false,
                onUploadProgress: (progressEvent) => {
                  this.uploadPercentage = parseInt(
                    Math.round(
                      (progressEvent.loaded * 100) / progressEvent.total
                    )
                  );

                  // Get loader text by class name and update the text
                  const h4 =
                    document.getElementsByClassName('title-loading')[0];
                  if (h4) {
                    h4.innerText =
                      s3FileNameAndURL.length > 1
                        ? loadingText(i + 1, this.uploadPercentage)
                        : `${this.uploadPercentage}%`;
                  }
                },
              }
            );

            if (status === 200)
              attachments.push({
                storageFilename,
                originalFilename: file.name,
              });
          }
          return attachments;
        }
      } catch (error) {
      } finally {
        this.$vs.loading.close();
        this.uploadPercentage = 0;
      }
    },
    setSelectedChatData(id, data) {
      this.chatData = data;
      this.id = id;
      this.page = 1;
      this.scrollPosition = null;
    },
    async getMessages(val = {}, shouldCreate = false) {
      // TODO: why this is always true?
      // Answer: We have set this condition to ensure that the chatUsers and other necessary data are always displayed in the headers.
      this.isLoading = true;
      const payload = {
        needChatMetaData: true,
        page: this.page,
        pageSize: this.pageSize,
      };

      // Determine the payload based on the chat type.
      if (this.chatData) {
        const { chatType, intercompanyData } = this.chatData;

        switch (chatType) {
          case 'group':
            payload.queryChatType = 'group';
            payload.chatId = this.id;
            break;

          case 'load':
            payload.queryChatType = 'load';
            payload.loadId = this.id;
            break;

          case 'intercompany':
            payload.queryChatType = 'intercompany';
            payload.otherCompanyId =
              intercompanyData.otherCompanyId ||
              intercompanyData.syncedCompanyId ||
              this.id;
            break;

          default:
            payload.queryChatType = 'oneOnOne';
            payload.targetUserId = this.id;
            break;
        }
      }

      // Dispatch the 'getMessages' action to retrieve chat data.
      this.$store
        .dispatch('chat/getMessages', payload)
        .then((data) => {
          // Update chatId and messages with retrieved data.
          this.chatId = data.chat.chatId;

          if (this.page === 1) {
            this.messages = data.messages;
          } else {
            this.messages = [...this.messages, ...data.messages].reduce(
              (unique = [], item) => {
                let isExists = unique.some(
                  (e) => e.messageId === item.messageId
                );
                if (!isExists) unique.push(item);
                return unique;
              },
              []
            );
          }

          //set pagination data
          this.paginationMeta = data.meta;

          // For 'load' type chats, set chatUsers data if it's from a load.
          if (
            this.chatData.chatType === 'load' &&
            this.chatData.loadData.isFromLoad
          ) {
            // TODO: can anyone teach me what we are doing here? Thanks.
            // Answer: We are setting the chat users' data to the chatUsers object, but only for the 'load' type.
            this.$set(this.chatData, 'chatUsers', data.chat.chatUsers);
          }

          // If 'intercompany' chat and shouldCreate flag is true, trigger getChats().
          if (
            this.chatData &&
            this.chatData.chatType === 'intercompany' &&
            shouldCreate
          ) {
            this.getChats();
            this.$set(this.chatData, 'chatUsers', data.chat.chatUsers);
          }

          // If scroll flag is true, scroll to the bottom of the chat.
          if (val.scroll) {
            this.scrollToBottom(false, true);
          }

          if (val.scrollPosition) {
            this.handleScrollPosition();
          }
        })
        .catch((error) => {
          // Display error notification in case of an error.
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        })
        .finally(() => {
          // Close loading indicator when the process completes.
          this.$vs.loading.close();
          this.isLoading = false;
        });
    },
    // get next message
    handlePagination() {
      if (!this.isLoading && this.page < this.paginationMeta.totalPage) {
        this.trackScrollPosition();
        this.page += 1;
        this.getMessages({ scroll: false, scrollPosition: true });
      }
    },
    // track scroll position
    trackScrollPosition() {
      if (this.$refs.chat && this.$refs.chat.$refs.chatBox) {
        const chatBox = this.$refs.chat.$refs.chatBox;
        this.scrollPosition = chatBox.scrollHeight;
      }
    },

    // keep scroll bar at same position
    handleScrollPosition() {
      if (this.$refs.chat && this.$refs.chat.$refs.chatBox) {
        this.$nextTick(() => {
          const chatBox = this.$refs.chat.$refs.chatBox;
          chatBox.scrollTop = chatBox.scrollHeight - this.scrollPosition;
        });
      }
    },

    onNewMessage(newMessage) {
      if (newMessage.chat.chatId === this.chatId) {
        this.messages.push(...newMessage.messages);
        this.scrollToBottom(true);
      } else {
        this.$emit('newMessagesNotificationChatId', newMessage.chat.chatId);
      }
    },
    async addNewUsers({ chatUsers }) {
      try {
        const { chat } = await this.$store.dispatch('chat/addNewUsers', {
          chatId: this.chatId,
          chatUsers,
        });

        if (chat) {
          this.chatId = chat.chatId;
          this.$store.commit('chat/UPDATE_CHAT_USERS', chat);
          // Update chat users in chatData
          const chatUsers = (
            this.chatList.filter(({ chatId }) => chatId === this.chatId)[0] || {
              chatUsers: [],
            }
          ).chatUsers;

          if (chatUsers.length) {
            this.$set(this.chatData, 'chatUsers', chatUsers);
          } else {
            this.chatData.chatUsers = chat.chatUsers;
          }
        }
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      }
    },

    scrollToBottom(isSmoothScroll = false, forceScroll = false) {
      this.$nextTick(() => {
        if (this.$refs.chat && this.$refs.chat.$refs.chatBox) {
          const chatBox = this.$refs.chat.$refs.chatBox;
          const scrollPosition = chatBox.scrollTop;
          const offset = chatBox.scrollHeight - chatBox.offsetHeight;

          if (!forceScroll) {
            if (!isSmoothScroll && scrollPosition === this.prevInnerDivHeight) {
              chatBox.scrollTop = chatBox.scrollHeight;
            } else if (isSmoothScroll) {
              chatBox.scrollTo({
                top: chatBox.scrollHeight,
                behavior: 'smooth',
              });
            }

            this.showNewMessageAlert =
              !isSmoothScroll && scrollPosition < this.prevInnerDivHeight;
          } else {
            chatBox.scrollTop = chatBox.scrollHeight;
          }

          this.prevInnerDivHeight = offset;
        }
      });
    },
  },
};
</script>

<style scoped lang="scss">
.chat-system {
  position: relative;
  height: calc(100vh - 5vh);
  width: 100%;

  .chat-window-header {
    width: calc(100% - 0%);
    border: 1px solid #d4d4d4;
  }

  .chat-message-items {
    display: flex;
    height: 80%;
    justify-content: flex-end;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    overflow: auto;
    border: 1px solid #d4d4d4;
    border-top: none;
    // padding: 10px;
  }

  .chat-message-input {
    // position: absolute;
    // bottom: 40px;
    width: calc(100% - 0%);
  }

  .scroll-button {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 10px;
    border-radius: 50px;
    width: auto;
    background-color: rgb(242, 19, 93);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>
