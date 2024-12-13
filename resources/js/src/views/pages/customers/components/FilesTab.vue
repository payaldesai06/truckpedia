<template>
  <div>
    <Folders
      :dataArray="files"
      :showFileUploadIcon="true"
      :imagePreview="isEditMode"
      :showDownload="isEditMode"
      @addFolder="addFolder"
      @deleteFile="deleteFile"
      @uploadFiles="uploadFiles"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getApiErrorMsg, getFileExtension } from '@/helpers/helper';

export default {
  name: 'FilesTab',
  components: {
    Folders: () => import('@/components/folders/Folders'),
  },
  props: {
    dataObj: {
      type: Object,
      default: () => ({}),
    },
    isEditMode: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters('customerV2', ['getFolderList']),

    customerId() {
      return this.isEditMode && this.dataObj
        ? parseInt(this.dataObj.customer_id)
        : null;
    },
    files() {
      return this.getFolderList.map((folder) => {
        let files = [];
        if (this.isEditMode) {
          files = this.filesList.filter((file) => file.folderId === folder.id);
        } else if (
          this.dataObj &&
          this.dataObj.files &&
          this.dataObj.files.length > 0
        ) {
          files = this.dataObj.files.filter(
            (file) => file.folderId === folder.id
          );
        }

        return {
          ...folder,
          files,
        };
      });
    },
  },
  data() {
    return {
      filesList: [],
      uploadPercentage: 0,
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      try {
        if (this.getFolderList.length === 0 || this.isEditMode) {
          this.$vs.loading();
        }

        if (this.getFolderList.length === 0) {
          await this.fetchFolders();
        }

        if (this.isEditMode && this.customerId) {
          await this.fetchFiles();
        }
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    async fetchFolders() {
      try {
        return await this.$store.dispatch('customerV2/fetchFolderList');
      } catch (error) {}
    },
    async fetchFiles() {
      try {
        const {
          data: { payload },
        } = await this.$store.dispatch(
          'customerV2/fetchFiles',
          this.customerId
        );

        this.filesList = payload || [];
      } catch (error) {}
    },
    async addFolder({ isEdit, id, folderName }) {
      try {
        isEdit
          ? await this.$store.dispatch('customerV2/updateFolder', {
              folderId: id,
              folderName,
            })
          : await this.$store.dispatch('customerV2/createFolder', {
              folderName,
            });
        await this.fetchFolders();
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    async generateS3NameAndURL(files) {
      try {
        if (files.length === 0) return;

        const allFiles = await getFileExtension(files);
        const {
          data: { result, payload },
        } = await this.$store.dispatch('customerV2/getUploadUrls', {
          files: allFiles,
        });

        return result && payload ? payload : [];
      } catch (error) {}
    },
    async uploadAttachmentsToS3(s3FileNameAndURL, files) {
      try {
        if (s3FileNameAndURL) {
          const loadingText = (fileNumber, percentage) => {
            return `Uploading file ${fileNumber} of ${s3FileNameAndURL.length} - ${percentage}%`;
          };
          this.$vs.loading({
            text:
              s3FileNameAndURL.length > 1
                ? loadingText(1, 0)
                : `${this.uploadPercentage}%`,
          });
          const attachments = [];

          for (let i = 0; i < s3FileNameAndURL.length; i++) {
            const { fileName, url } = s3FileNameAndURL[i];
            const file = files[i];

            const { status } = await this.$store.dispatch(
              'uploadFileToS3ViaPresignedUrl',
              {
                url,
                file,
                extension: fileName.split('.').pop(),
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
                fileName,
                originalFileName: file.name,
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
    async uploadFiles({ folderId, files }) {
      try {
        // Process attachments
        const s3FileNameAndURL = await this.generateS3NameAndURL(files);
        const attachments =
          (await this.uploadAttachmentsToS3(s3FileNameAndURL, files)) || [];

        if (this.isEditMode && this.customerId) {
          const payload = {
            folderId,
            customerId: this.customerId,
            files: attachments,
          };
          await this.$store.dispatch('customerV2/uploadFiles', payload);
          await this.fetchFiles();
        } else {
          const payload = attachments.map((file, index) => ({
            ...file,
            url: s3FileNameAndURL[index].url,
            folderId,
          }));

          const files = this.dataObj.files
            ? [...this.dataObj.files, ...payload]
            : [...payload];

          this.$emit('update:Files', {
            files,
          });
        }
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    async deleteFile({ file: { id }, index }) {
      try {
        if (!this.isEditMode) {
          const payload = {
            files: this.dataObj.files.filter((_, i) => i !== index),
          };
          this.$emit('update:Files', payload);
          return;
        }

        await this.$store.dispatch('customerV2/deleteFile', id);
        await this.fetchFiles();

        this.$vs.notify({
          time: 2000,
          color: 'success',
          title: 'File Deleted',
          text: 'File deleted successfully',
        });
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
  },
};
</script>
