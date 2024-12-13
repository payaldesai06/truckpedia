<template>
  <div class="chat-messaging-system messages">
    <div class="w-full">
      <div
        ref="contentEditable"
        class="chat-input"
        contenteditable="true"
        @keydown.enter="handleSendMessageOnEnter"
        @click.stop="placeholderText = ''"
      >
        {{ placeholderText }}
      </div>
    </div>
    <div class="chat-btn-group">
      <div class="px-2">
        <FileUpload @addFiles="sendFiles" />
      </div>
      <div class="px-2">
        <EmojiWindowVue @addEmoji="addEmoji" />
      </div>
      <vs-button color="primary" type="filled" @click="sendMessage"
        >Send</vs-button
      >
    </div>
  </div>
</template>

<script>
import EmojiWindowVue from './EmojiWindow.vue';
import FileUpload from './FileUpload.vue';

export default {
  name: 'MessageInput',
  components: { EmojiWindowVue, FileUpload },
  props: {
    chatId: {
      type: Number | String,
      required: true,
    },
  },
  data() {
    return {
      placeholderText: 'Type your message...',
    };
  },
  methods: {
    handleSendMessageOnEnter(event) {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        this.sendMessage();
      }
    },
    async sendMessage() {
      const message =
        this.placeholderText === '' ? this.$refs.contentEditable.innerText : '';
      if (!message) return;
      const payload = {
        chatId: this.chatId,
        messages: [
          {
            type: 'text',
            textMessage: message,
          },
        ],
      };
      await this.$store
        .dispatch('chat/sendMessages', payload)
        .then((res) => {
          //update last message time without calling getChat API
          this.$store.commit('chat/UPDATE_CHAT_LAST_MSG_DATE_TIME', {
            chatId: this.chatId,
            isCurrentUser: true,
          });
        })
        .catch((error) => {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: error.response.data.message,
          });
        })
        .finally(() => {
          this.clearContentEditable();
        });
      // this.$emit('getMessages', { scroll: true });
    },
    addEmoji(emoji) {
      const contentEditable = this.$refs.contentEditable;
      contentEditable.innerHTML += emoji;
    },
    async sendFiles(files) {
      try {
        if (!files.length) {
          return;
        }
        this.$emit('sendFiles', files, this.chatId);
      } catch (error) {
        console.log('error=>', error);
        alert('Error parsing media.');
      }
    },
    clearContentEditable() {
      this.$refs.contentEditable.innerHTML = ''; // Clear the content editable
    },
  },
};
</script>

<style scoped lang="scss">
.chat-messaging-system {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px;
  justify-content: space-between;
  background-color: #fff;
  margin: 0 auto;
  border: 1px solid #d4d4d4;
  border-top: none;
  .chat-btn-group {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .chat-input {
    background-color: #fff;
    border: none;
    width: 100%;
    padding: 8px;
    font-size: 1.2rem;
    max-height: 60px;
    overflow: auto;
    word-break: break-all;
  }
}
</style>
