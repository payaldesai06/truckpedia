<template>
  <div class="chat-box-parent overflow-y-auto" ref="chatBox">
    <div
      v-for="(msg, index) in filteredAllMessages"
      :key="index"
      :class="[
        msg.senderUserId == user.user_id ? 'sent-message' : 'received-message',
        msg.hasOwnProperty('dateSeparator') ? 'date-separator' : '',
      ]"
    >
      <template>
        <p
          class="senderName ml-3 font-medium mb-1"
          v-if="
            (msg.senderUserId != user.user_id &&
              (chatData.chatType === 'group' ||
                chatData.chatType === 'load')) ||
            chatData.chatType === 'intercompany'
          "
        >
          {{ msg.senderFirstName }}
          <span v-if="msg.senderLastName">{{ msg.senderLastName }}</span>
        </p>
        <div v-if="msg && msg.hasOwnProperty('dateSeparator')">
          {{ msg.dateSeparator }}
        </div>
        <div
          v-else
          class="chat-box"
          :class="[messageType(msg), chatData.chatType]"
          v-viewer="imageViewerOptions"
        >
          <!-- Text Message -->
          <template v-if="msg.textMessage">
            <p class="message-content">{{ msg.textMessage }}</p>
            <div class="text-xs createTime">
              {{ msg.createdAt | utcDatetimeToLocalTimeOnly }}
            </div>
          </template>

          <!-- Image Message -->
          <template v-if="getMediaType(msg.originalFilename) === 'image'">
            <img class="msgImg" :src="msg.storageFileUrl" />
            <div class="text-xs createTime">
              {{ msg.createdAt | utcDatetimeToLocalTimeOnly }}
            </div>
          </template>

          <!-- Video Message -->
          <template v-if="getMediaType(msg.originalFilename) === 'video'">
            <div class="fileContainer" @click="playVideo(msg)">
              <feather-icon
                icon="PlayIcon"
                style="color: #7c72e9"
                class="play"
              />
              <span class="fileName">{{ msg.originalFilename }}</span>
            </div>
            <div class="text-xs createTime">
              {{ msg.createdAt | utcDatetimeToLocalTimeOnly }}
            </div>
          </template>

          <!-- PDF Message -->
          <template v-if="getMediaType(msg.originalFilename) === 'pdf'">
            <a :href="msg.storageFileUrl" target="_blank" class="pdf">
              <img
                :src="pdfPlaceHolderImage"
                alt="pdfIcon"
                style="width: 22px"
              />
              <span class="pdfName">{{ msg.originalFilename }}</span>
            </a>
            <div class="text-xs createTime">
              {{ msg.createdAt | utcDatetimeToLocalTimeOnly }}
            </div>
          </template>

          <!-- Download Other Files -->
          <template v-if="messageType(msg) === 'file'">
            <div
              class="fileContainer"
              @click="downloadFile(msg.storageFileUrl)"
            >
              <feather-icon
                icon="DownloadIcon"
                style="color: #7c72e9"
                class="play"
              />
              <span class="fileName">{{ msg.originalFilename }}</span>
            </div>
            <div class="text-xs createTime">
              {{ msg.createdAt | utcDatetimeToLocalTimeOnly }}
            </div>
          </template>
        </div>
      </template>
    </div>
    <VideoPlayer
      :showVideoPlayer="openVideoPlayer"
      :video="selectedVideo"
      @closePlayer="closePlayer"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import config from '@/config/constants';
import VideoPlayer from './VideoPlayer.vue';
import { redirectToNewTab } from '@/helpers/helper';
import pdfPlaceHolder from '@assets/images/custom/pdf_images.png';

export default {
  name: 'MessageItem',
  components: { VideoPlayer },
  props: {
    currentMessages: {
      default: [],
      type: Array,
    },
    chatUsers: {
      default: () => [],
      type: Array,
    },
    userId: {
      type: Number | String,
      default: '',
    },
    chatData: {
      type: Object | String,
      default: () => {},
    },
  },
  data() {
    return {
      pdfPlaceHolderImage: pdfPlaceHolder,
      imageViewerOptions: {
        movable: false,
        rotatable: false,
        keyboard: false,
        navbar: false,
        toolbar: false,
        title: false,
      },
      openVideoPlayer: false,
      selectedVideo: {},
    };
  },
  computed: {
    ...mapGetters('auth', ['user']),
    filteredAllMessages() {
      const sortMessages = this.currentMessages.sort(
        (a, b) => a.messageId - b.messageId
      );
      if (sortMessages && sortMessages.length) {
        const modifiedMessages = sortMessages.reduce(
          (result, curr, index, array) => {
            result.push(curr);

            if (index < array.length - 1) {
              const currentDate = this.$dayjs
                .utc(curr.createdAt)
                .local()
                .format('YYYY-MM-DD');
              const nextDate = this.$dayjs
                .utc(array[index + 1].createdAt)
                .local()
                .format('YYYY-MM-DD');

              if (currentDate !== nextDate) {
                const formattedDate =
                  this.$dayjs(nextDate).format('ddd, MMM D');
                result.push({
                  textMessage: '',
                  dateSeparator: formattedDate,
                });
              }
            }

            return result;
          },
          []
        );
        if (
          modifiedMessages &&
          modifiedMessages.length &&
          !modifiedMessages[0].hasOwnProperty('sortMessages') &
            modifiedMessages[0].hasOwnProperty('createdAt')
        ) {
          const formattedDate = this.$dayjs
            .utc(modifiedMessages[0].createdAt)
            .local()
            .format('ddd, MMM D');

          modifiedMessages.unshift({
            textMessage: '',
            dateSeparator: formattedDate,
          });
        }
        return modifiedMessages;
      }
      return [];
    },

    messageType() {
      return (message) => {
        let supporttedMedia = ['image', 'video', 'pdf'];
        if (message.storageFileUrl) {
          let mediaType = this.getMediaType(message.originalFilename);
          return supporttedMedia.includes(mediaType) ? mediaType : 'file';
        } else {
          return 'text';
        }
      };
    },
  },
  methods: {
    playVideo(messsageData) {
      if (!messsageData.storageFileUrl) {
        return;
      }
      this.selectedVideo = {
        url: messsageData.storageFileUrl,
      };
      this.openVideoPlayer = true;
    },
    closePlayer() {
      this.openVideoPlayer = false;
      this.selectedVideo = {};
    },
    getMediaType(fileName) {
      if (!fileName) {
        return 'other';
      }
      const fileExtension = fileName.split('.').pop();
      return config.fileTypes[fileExtension.toLowerCase()] || 'other';
    },
    downloadFile(url) {
      redirectToNewTab(url);
    },
  },
};
</script>

<style scoped lang="scss">
.chat-box-parent {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  padding: 20px;

  .chat-box {
    background: #fff;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.14);
    padding: 1rem;
    margin-bottom: 10px;
    width: fit-content;
    border-radius: 22px 6px 22px 22px;
    display: flex;
    flex-direction: column;

    > .msg {
      display: flex;
      flex-direction: column;

      > .createChat {
        align-self: flex-end;
      }
    }

    > .senderName {
      margin-bottom: 0.6rem;
    }

    & .createTime {
      margin-top: 0.3rem;
      align-self: flex-end;
    }
  }

  .sent-message {
    align-self: flex-end;

    /* Align sent messages to the left side */
    > .chat-box {
      background-color: #1877F2;
      color: #ffffff;
    }
  }

  .received-message {
    align-self: flex-start;

    /* Align received messages to the right side */
    > .chat-box {
      background-color: #d9d9d9;

      > .senderName {
        align-self: flex-start;
      }
    }

    > .chat-box.image.group {
      > img {
        height: 76%;
      }
    }
  }

  .chat-box.image {
    width: 15rem;
    min-height: 8rem;
    // max-height: 15rem;
    padding: 1rem;
    cursor: pointer;

    > img {
      width: 100%;
      height: 90%;
      border-radius: 1rem;
      object-fit: cover;
    }
  }

  .chat-box.video,
  .chat-box.file {
    position: relative;
    min-width: 12rem;
    max-width: 35rem;
    min-height: 5rem;
    padding: 1rem;
    justify-content: center;
    cursor: pointer;

    > .fileContainer {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      > .fileName {
        margin-left: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 20rem;
      }
    }
  }

  .chat-box.pdf {
    position: relative;
    min-width: 12rem;
    max-width: 25rem;
    min-height: 5rem;
    padding: 1rem;
    justify-content: center;
    cursor: pointer;

    > a {
      display: flex;
      flex-direction: row;
      align-items: center;

      > .pdfName {
        margin-left: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 20rem;
        color: #626262;
      }
    }
  }

  .chat-box.file {
    position: relative;
    min-width: 12rem;
    max-width: 25rem;
    min-height: 5rem;
    padding: 1rem;
    justify-content: center;
    cursor: pointer;
    > .fileContainer {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      > .fileName {
        margin-left: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 20rem;
      }
    }
  }

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}

.date-separator {
  position: sticky;
  top: 0;
  padding: 10px;
  font-weight: 400;
  z-index: 1;
  align-self: center !important;
  border-radius: 11px;
  color: #a0a0a7;
  font-size: 14px;
  background-color: #ffffff;
}

.message-content {
  white-space: pre-line;
  word-break: break-all;
}
</style>
