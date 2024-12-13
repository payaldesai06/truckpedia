<template>
  <div>
    <div>
      <div class="header"></div>
      <div class="subHeader">
        <div class="flex justify-between items-center mt-5">
          <div class="flex items-center justify-between w-full flex-wrap">
            <div v-if="selectedThread.messages" class="w-full">
              <div class="flex items-center">
                <div>
                  <div class="profileCircle mr-3">
                    {{
                      (
                        selectedThread.messages[0].from ||
                        selectedThread.messages[0].sender
                      )
                        .charAt(0)
                        .toUpperCase()
                    }}
                  </div>
                </div>
                <div>
                  <h6 class="fw-bold">
                    {{ selectedThread.messages[0].sender }}
                  </h6>
                </div>
              </div>
              <vs-divider />
            </div>
          </div>
        </div>
      </div>

      <div class="overflow-auto" style="max-height: calc(100vh - 120px)">
        <div>
          <div v-if="selectedThread && selectedThread.messages">
            <div
              v-for="(message, index) in selectedThread.messages"
              :key="index"
            >
              <vs-divider v-if="index > 0" />
              <div
                v-if="collapsedMessageIds.includes(message.id)"
                class="cursor-pointer"
                @click.stop="expandMessage(message.id)"
              >
                <span class="font-bold">
                  {{ message.from || message.sender || '' }}
                </span>
                <p class="truncate">
                  {{ getContentString(message.content) }}
                </p>
              </div>
              <div v-else>
                <div
                  @click.stop="collapseMessage(message.id)"
                  class="cursor-pointer mb-5"
                >
                  <h3 class="mb-3">{{ message.subject }}</h3>
                  <p>
                    <span class="font-bold">From: </span>
                    {{ (message.from || '') + ' ' + message.sender }}
                    <span v-if="isDeleteLeadVisible(message)">
                      <vs-button
                        color="danger"
                        type="flat"
                        style="padding: 0; margin-left: 1rem"
                        size="small"
                        @click.stop="onDeleteLead(message)"
                      >
                        Delete Lead
                      </vs-button>
                    </span>
                  </p>
                  <p>
                    <span class="font-bold">Date: </span
                    >{{ utcToLocalTime(message.utcDate) }}
                  </p>
                </div>
                <div style="width: 100%">
                  <email-preview :content="message.content" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { base64UrlToBase64, b64toBlob, getApiErrorMsg } from '@/helpers/helper';

export default {
  name: 'MailViewBox',
  props: {
    selectedThread: {
      type: Object,
      default: () => {},
    },
    userEmailAccounts: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      collapsedMessageIds: [],
      loadedMessageIds: [],
    };
  },
  watch: {
    selectedThread(newVal, oldVal) {
      if (newVal.id !== oldVal.id && newVal.id && newVal.messages) {
        this.collapsedMessageIds = [];
        this.loadedMessageIds = [];
        if (newVal.messages.length == 0) {
          // Should not happen.
          return;
        }

        if (newVal.messages.length === 1) {
          this.loadInlineAttachments(newVal.messages[0]);
        } else {
          // If all messages are already read, then collapse all messages except
          // the last one and load inline attachments for the last message only.
          if (newVal.messages.every((item) => !item.unread)) {
            this.collapsedMessageIds = newVal.messages
              .slice(0, newVal.messages.length - 1)
              .map((item) => item.id);
            this.loadInlineAttachments(
              newVal.messages[newVal.messages.length - 1]
            );
          } else {
            // If some messages are unread, then collapse the read messages and
            // load inline attachments for all unread messages.
            this.collapsedMessageIds = newVal.messages
              .filter((item) => !item.unread)
              .map((item) => item.id);
            // Note here we need to filter unread messages before we call
            // markMessageAsUnread, otherwise all unread messages except the
            // first will not be loaded, cause unread is changed in
            // markMessageAsUnread.
            this.loadMessagesInlineAttachments(
              newVal.messages.filter((item) => item.unread)
            );
          }
        }

        this.markMessageAsUnread(newVal);
        this.$emit('threadUpdated', newVal);
      }
    },
  },
  created() {},
  methods: {
    utcToLocalTime(utcTime) {
      return this.$dayjs.utc(utcTime).local().format('MMM DD, YYYY h:mm A');
    },
    async loadMessagesInlineAttachments(messages) {
      for (const message of messages) {
        await this.loadInlineAttachments(message);
      }
    },
    // For one message.
    async loadInlineAttachments(message) {
      if (!message.attachments) {
        return;
      }
      const attachmentIds = message.attachments
        .filter(
          (item) =>
            item.cid &&
            (item.contentDisposition === 'inline' ||
              (item.contentType.startsWith('image') &&
                message.content.includes('src="cid:' + item.cid + '"'))) // inline image
        )
        .map((item) => item.id);
      if (attachmentIds.length == 0) {
        return;
      }

      const loadedAttachments = await this.getMessageAttachments(
        message.id,
        attachmentIds
      );

      const temp = document.createElement('div');
      temp.innerHTML = message.content;

      for (const loaded of loadedAttachments) {
        const attachment = message.attachments.find((a) => a.id === loaded.id);
        if (!attachment) {
          continue;
        }
        const base64Content = base64UrlToBase64(loaded.content);
        const blobSrc = URL.createObjectURL(
          b64toBlob(base64Content, attachment.contentType)
        );

        // const base64Src =
        // 'data:' + attachment.contentType + ';base64,' + base64Content;
        // const imgTags = message.content.match(/<img [^>]*src="[^"]*"[^>]*>/gm);
        temp.querySelectorAll('img').forEach((img) => {
          if (
            /^cid:/.test(img.src) &&
            attachment.cid == img.src.slice(4).trim()
          ) {
            img.src = blobSrc;
          }
        });
      }
      message.content = temp.innerHTML;

      this.loadedMessageIds.push(message.id);
    },

    async getMessageAttachments(messageId, attachmentIds) {
      try {
        const { data } = await this.$store.dispatch(
          'marketing/getMessageAttachments',
          {
            id: this.selectedThread.emailAccountId,
            messageId,
            payload: {
              attachmentIds,
            },
          }
        );
        return data.payload.message.attachments;
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    async markMessageAsUnread(thread) {
      try {
        const unreadMessageIds = [];
        thread.messages.forEach((m) => {
          if (m.unread) {
            m.unread = false;
            unreadMessageIds.push(m.id);
          }
        });
        if (unreadMessageIds.length == 0) {
          return;
        }

        await this.$store.dispatch('marketing/updateThreadMessage', {
          id: this.selectedThread.emailAccountId,
          threadId: thread.id,
          messageIds: unreadMessageIds,
          unread: false,
        });
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    getContentString(content) {
      const parser = new DOMParser();
      const doc = parser.parseFromString(content, 'text/html');
      return doc.body.textContent || doc.body.innerText || '';
    },
    expandMessage(messageId) {
      this.collapsedMessageIds = this.collapsedMessageIds.filter(
        (id) => id !== messageId
      );

      if (!this.loadedMessageIds.includes(messageId)) {
        const message = this.selectedThread.messages.find(
          (item) => item.id === messageId
        );
        this.loadInlineAttachments(message);
      }
    },
    collapseMessage(messageId) {
      this.collapsedMessageIds.push(messageId);
    },
    isDeleteLeadVisible({ sender }) {
      if (sender) {
        return !this.userEmailAccounts.some(
          ({ email }) =>
            email.toLowerCase().trim() === sender.toLowerCase().trim()
        );
      }
    },
    onDeleteLead({ sender }) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Delete Lead',
        text: `Are you sure you want to remove ${sender} from all campaigns? (No effect if ${sender} is not a lead.)`,
        acceptText: 'Yes',
        accept: async () => {
          try {
            await this.$store.dispatch('marketing/deleteSelectedLead', {
              email: sender,
            });
            await this.$vs.notify({
              time: 2000,
              color: 'success',
              text: 'Success',
            });
          } catch (error) {
            await this.$vs.notify({
              time: 4000,
              color: 'danger',
              title: 'Error',
              text: getApiErrorMsg(error),
            });
          }
        },
      });
    },
  },
};
</script>

<style scoped lang="scss">
.inboxBtn {
  border-radius: 4px;
  background: #ddd;
  padding: 3px 4px;
  cursor: pointer;
}

.profileCircle {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.12) inset;
  background-color: rgb(218, 218, 218);
  border-radius: 50%;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 500;
}

.smallTxt {
  color: var(--grayText, #585858);
  font-size: 12px;
  font-weight: 400;
}

.text-underline {
  text-decoration: underline;
}

.content {
  display: flex;
  min-height: 63vh;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;
}
</style>
