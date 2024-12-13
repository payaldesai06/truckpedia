<template>
  <div class="w-full">
    <Folders
      :dataArray="dataArray"
      :showFileUploadIcon="true"
      :imagePreview="false"
      :showDownload="true"
      @deleteFile="onConfirmDelete"
      @uploadFiles="uploadFiles"
    />
  </div>
</template>

<script>
import Folders from './components/Folders';
import { getApiErrorMsg } from '@/helpers/helper';
export default {
  name: 'Files',
  components: {
    Folders,
  },
  data() {
    return {
      uploadedFiles: {
        carrierSetupPacket: [],
        w9: [],
        insurance: [],
        operatingAuthority: [],
      },
      files: [],
    };
  },
  created() {
    this.getFiles();
  },
  computed: {
    dataArray() {
      const data = {
        carrierSetupPacket: [],
        w9: [],
        insurance: [],
        operatingAuthority: [],
      };
      this.files.map((item) => {
        item.originalFileName = item.originalFilename;
        data[item.type].push(item);
      });

      return Object.keys(data).map((key) => ({
        id: key,
        folderName: this.getLabel(key),
        files: data[key],
      }));
    },
  },
  methods: {
    async getFiles() {
      const response = await this.$store.dispatch(
        'company-file/getCompanyFiles'
      );
      this.files = response.data.payload.files;
    },

    getLabel(key) {
      const labelMap = {
        carrierSetupPacket: 'Carrier Setup Packet',
        w9: 'W9',
        insurance: 'Insurance',
        operatingAuthority: 'Operations Authority',
      };
      return labelMap[key] || '';
    },

    onConfirmDelete({ file: { id }, index }) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'primary',
        title: 'Confirm',
        text: 'Are you sure. You want to delete this file?',
        acceptText: 'Yes',
        accept: () => this.deleteFile(id),
      });
    },

    async deleteFile(id) {
      try {
        await this.$store.dispatch('company-file/deleteFile', { id: id });
        this.getFiles();
        this.$vs.notify({
          time: 2000,
          color: 'success',
          title: 'File Deleted',
          text: 'File deleted successfully',
        });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },

    async uploadFiles({ folderId, files }) {
      this.$vs.loading();
      try {
        const s3FileNameAndURL = await this.generateS3NameAndURL(files);
        const attachments =
          (await this.uploadAttachmentsToS3(s3FileNameAndURL, files)) || [];

        const payload = {
          type: folderId,
          files: attachments,
        };
        await this.$store.dispatch('company-file/createFiles', payload);
        await this.getFiles();

        this.$vs.notify({
          time: 2000,
          color: 'success',
          title: 'Success',
          text: 'Files uploaded successfully',
        });
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

    async uploadAttachmentsToS3(s3FileNameAndURL, files) {
      try {
        if (s3FileNameAndURL) {
          const attachments = [];
          for (let i = 0; i < s3FileNameAndURL.length; i++) {
            const { storageFilename, url } = s3FileNameAndURL[i];
            const file = files[i];

            const { status } = await this.$store.dispatch(
              'uploadFileToS3ViaPresignedUrl',
              { url, file, extension: storageFilename.split('.').pop() }
            );

            if (status === 200)
              attachments.push({
                storageFilename,
                originalFilename: file.name,
              });
          }
          return attachments;
        }
      } catch (error) {}
    },

    getFileExtension(files) {
      const fileExtension = files.map((file) => {
        const extension = file.name.split('.').pop();
        return { extension };
      });

      return fileExtension;
    },
    async generateS3NameAndURL(files) {
      try {
        if (files.length === 0) return;

        const allFiles = await this.getFileExtension(files);
        const {
          data: { result, payload },
        } = await this.$store.dispatch('company-file/getUploadS3Url', {
          files: allFiles,
        });

        return result && payload ? payload : [];
      } catch (error) {}
    },
  },
};
</script>

<style></style>
