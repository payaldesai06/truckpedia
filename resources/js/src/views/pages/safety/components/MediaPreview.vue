<template>
  <Dialog
    class="dialog"
    :visible="isDialogActive"
    :closable="false"
    :modal="true"
    :breakpoints="{ '960px': '50vw', '640px': '80vw' }"
    :style="{ width: '80vw' }"
  >
    <!-- Header Section -->
    <template #header>
      <div class="w-full flex items-center justify-end">
        <vs-icon
          class="cursor-pointer ml-2"
          icon="close"
          size="small"
          @click="onClose"
        />
      </div>
    </template>

    <!-- Main Content -->
    <template>
      <div class="w-full">
        <!-- Image Preview -->
        <div
          class="w-full flex items-center justify-center"
          v-if="fileType === 'image'"
        >
          <img
            v-show="!isImageLoading"
            :src="fileURL"
            :alt="fileData.originalFilename"
            @load="onImageLoad"
            class="w-full h-full"
          />

          <template v-if="isImageLoading">
            <Skeleton height="50vh"></Skeleton>
          </template>
        </div>

        <!-- Video Preview -->
        <div
          class="w-full flex items-center justify-center"
          v-else-if="fileType === 'video'"
        >
          <video
            :src="fileURL"
            :alt="fileData.originalFilename"
            class="w-full h-full"
            controls
          />
        </div>

        <!-- PDF/Document Preview -->
        <div
          class="iframe-wrapper"
          v-else-if="fileType === 'pdf' || docTypes.includes(fileType)"
        >
          <iframe
            :src="fileURL"
            :alt="fileData.originalFilename"
            class="iframe"
          />
        </div>

        <div class="w-full message-details" v-else-if="fileType === 'msg'">
          <div v-if="!isMsgLoading && html">
            <table>
              <tbody>
                <tr v-if="msgFile.messageDeliveryTime">
                  <th>Time:</th>
                  <td>
                    {{ msgFile.messageDeliveryTime }}
                  </td>
                </tr>
                <tr v-if="msgFile.senderName">
                  <th>From:</th>
                  <td>{{ msgFile.senderName }}</td>
                </tr>
                <tr v-if="msgFile.to">
                  <th>To:</th>
                  <td>
                    {{ msgFile.to }}
                  </td>
                </tr>
                <tr v-if="msgFile.cc">
                  <th>Cc:</th>
                  <td>
                    {{ msgFile.cc }}
                  </td>
                </tr>
                <tr v-if="msgFile.bcc">
                  <th>Bcc:</th>
                  <td>
                    {{ msgFile.bcc }}
                  </td>
                </tr>
                <tr v-if="msgFile.subject">
                  <th>Subject:</th>
                  <td>{{ msgFile.subject }}</td>
                </tr>
                <tr
                  v-if="msgFile.attachments && msgFile.attachments.length > 0"
                >
                  <th class="align-text-top">Attachments:</th>
                  <td class="flex flex-col">
                    <span
                      v-for="(item, index) in msgFile.attachments"
                      :key="index"
                    >
                      {{ item.fileName }} -
                      <a :download="item.fileName" :href="item.downloadUrl">
                        Download
                      </a>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <vs-divider />
            <div v-html="html"></div>
          </div>
          <div v-else-if="isMsgLoading">
            <Skeleton height="50vh"></Skeleton>
          </div>
        </div>
      </div>
    </template>
  </Dialog>
</template>

<script>
import config from '@/config/constants';
import axios from 'axios';
import MsgReader from '@kenjiuno/msgreader';
import { decompressRTF } from '@kenjiuno/decompressrtf';
import { Buffer } from 'buffer';
import { deEncapsulateSync } from 'rtf-stream-parser';
import iconv from 'iconv-lite';

export default {
  name: 'MediaPreview',
  components: {
    Skeleton: () => import('primevue/skeleton'),
  },
  props: {
    isDialogActive: {
      type: Boolean,
      default: false,
    },
    fileData: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    fileType() {
      if (this.fileData) {
        const { storageFilename, originalFilename } = this.fileData;
        const extension = storageFilename
          ? storageFilename.split('.').pop()
          : originalFilename.split('.').pop();

        return config.fileTypes[extension.toLowerCase()];
      }

      return '';
    },
    fileURL() {
      const validTypes = ['video', 'image', 'pdf', 'doc', 'xls'];

      if (
        this.fileData &&
        validTypes.includes(this.fileType) &&
        (this.fileData.storageFileUrl || this.fileData.file)
      ) {
        if (this.docTypes.includes(this.fileType)) {
          // Encode file url
          const encodedFileUrl = encodeURIComponent(
            this.fileData.storageFileUrl ||
              window.URL.createObjectURL(this.fileData.file)
          );

          // Return office file preview url
          return `https://view.officeapps.live.com/op/embed.aspx?src=${encodedFileUrl}`;
        }

        return (
          this.fileData.storageFileUrl ||
          window.URL.createObjectURL(this.fileData.file)
        );
      }

      return '';
    },
  },
  data() {
    return {
      docTypes: ['doc', 'xls'],
      isImageLoading: false,
      isMsgLoading: false,
      rtf: '',
      html: '',
      msgFile: {},
    };
  },
  created() {
    this.isImageLoading = this.fileType === 'image';

    if (this.fileType === 'msg') {
      this.isMsgLoading = true;
      this.msgFilePreview();
    }
  },
  methods: {
    onClose() {
      this.$emit('close');
    },
    onImageLoad() {
      this.isImageLoading = false;
    },
    msgFilePreview() {
      /* 
        REFERENCE:
        https://github.com/HiraokaHyperTools/msgreader_demo2/blob/master/app/src/App.tsx
        https://github.com/HiraokaHyperTools/msgreader_demo3/blob/master/app/src/App.tsx
       */
      axios({
        method: 'get',
        url: this.fileData.storageFileUrl,
        responseType: 'arraybuffer',
      }).then((response) => {
        const msgRead = new MsgReader(response.data);
        const { compressedRtf, ...rest } = msgRead.getFileData();
        this.msgFile = rest;

        if (rest.recipients && rest.recipients.length > 0) {
          const toEmails = [];
          const ccEmails = [];
          const bccEmails = [];

          rest.recipients.forEach((item) => {
            if (item.recipType === 'to') {
              toEmails.push(item.name);
            } else if (item.recipType === 'cc') {
              ccEmails.push(item.name);
            } else if (item.recipType === 'bcc') {
              bccEmails.push(item.name);
            }
          });

          this.msgFile.to = toEmails.join(', ');
          this.msgFile.cc = ccEmails.join(', ');
          this.msgFile.bcc = bccEmails.join(', ');
        }

        if (rest.attachments && rest.attachments.length > 0) {
          this.msgFile.attachments = rest.attachments.map((item) => {
            const attachmentEntity = msgRead.getAttachment(item);
            return {
              fileName: attachmentEntity.fileName,
              downloadUrl: URL.createObjectURL(
                new Blob([attachmentEntity.content])
              ),
            };
          });
        }

        if (compressedRtf) {
          const rtfBlob = decompressRTF(Array.from(compressedRtf));
          this.rtf = iconv.decode(Buffer.from(rtfBlob), 'latin1');
        } else {
          this.rtf = '';
        }
        this.isMsgLoading = false;
      });
    },
  },
  watch: {
    rtf: {
      handler() {
        if (this.fileType !== 'msg') return;

        if (this.rtf.length !== 0) {
          try {
            const result = deEncapsulateSync(this.rtf, {
              decode: iconv.decode,
            });
            this.html = result.text + '';
          } catch (ex) {
            this.html = ex + '';
          }
        } else {
          this.html = '';
        }
      },
      immediate: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.iframe-wrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  padding-top: 25px;
  height: 0;
}

.iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.msg-content {
  overflow-x: hidden; /* Hide horizontal scrollbar */
  border: 1px solid #eee;
  padding: 15px;
}

.message-details {
  th {
    padding: 5px;
    font-weight: bold;
    font-size: 1rem;
  }
}
</style>
