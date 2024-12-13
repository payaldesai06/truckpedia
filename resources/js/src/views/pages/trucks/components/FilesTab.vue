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
      @fileDragStart="fileDragStart"
      @fileDropEnd="fileDropEnd"
    />
  </div>
</template>

<script>
export default {
  name: "FilesTab",
  components: {
    Folders: () => import("@/components/folders/Folders"),
  },
  props: {
    truckData: {
      required: false,
      type: Object,
      default: null,
    },
  },
  computed: {
    files() {
      return this.foldersList.map((folder) => {
        let files = [];
        if (this.isEditMode) {
          files = this.filesList.filter((file) => file.folderId === folder.id);
        } else {
          files = this.filesPayload.filter((file) => file.folderId === folder.id);
        }
        return {
          ...folder,
          files,
        };
      });
    },
    isEditMode() {
      return this.$route.name === "UpdateTrucks";
    },
    truckId() {
      return this.$route.params.id;
    },
  },
  data() {
    return {
      foldersList: [],
      filesList: [],
      filesPayload: [],
      dragStartFile: null,
    };
  },
  created() {
    this.init();
  },
  methods: {
    fileDragStart(file) {
      this.dragStartFile = [file];
    },
    fileDropEnd(file) {
      if (this.isEditMode) {
        const getFileId = this.dragStartFile.map((item) => {
          return { fileId: item.id };
        });
        const payload = {
          folderId: file.folderId,
          files: getFileId,
        };
        this.$store.dispatch('trucksV2/truckFileChangeFolder', payload);
        this.fetchFiles();
      }
    },
    async fetchFolders() {
      const { data } = await this.$store.dispatch("trucksV2/fetchFolders");
      this.foldersList = (data || {}).payload || [];
      return data;
    },
    async fetchFiles() {
      const { data } = await this.$store.dispatch(
        "trucksV2/fetchFiles",
        this.truckId
      );
      this.filesList = (data || {}).payload || [];
      return data;
    },
    getErrorMsg(error) {
      return error &&
        error.response &&
        error.response.data &&
        error.response.data.message
        ? error.response.data.message
        : "Something went wrong";
    },
    async init() {
      try {
        if (this.foldersList.length === 0 || this.isEditMode) {
          this.$vs.loading();
        }
        if (this.foldersList.length === 0) await this.fetchFolders();
        if (this.isEditMode) await this.fetchFiles();
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: "danger",
          title: "Error",
          text: this.getErrorMsg(error),
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    async addFolder({ isEdit, id, folderName }) {
      try {
        isEdit
          ? await this.$store.dispatch("trucksV2/updateFolder", {
              folderId: id,
              folderName,
            })
          : await this.$store.dispatch("trucksV2/createFolder", {
              folderName,
            });
        await this.fetchFolders();
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: "danger",
          title: "Error",
          text: error.response.data.message || error.message,
        });
      }
    },
    async deleteFile({ file }) {
      if (!this.isEditMode) {
        this.filesPayload = this.filesPayload.filter(
          (item) => item.fileName !== file.fileName
        );
        return;
      }
      try {
        const { id } = file || {};
        await this.$store.dispatch("trucksV2/deleteFile", id);
        await this.fetchFiles();

        this.$vs.notify({
          time: 2000,
          color: "success",
          title: "File Deleted",
          text: "File deleted successfully",
        });
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: "danger",
          title: "Error",
          text: this.getErrorMsg(error),
        });
      }
    },
    getFileExtension(files) {
      const fileExtension = files.map((file) => {
        const extension = file.name.split(".").pop();
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
        } = await this.$store.dispatch("trucksV2/uploadAttachment", {
          files: allFiles,
        });

        return result && payload ? payload : [];
      } catch (error) {

      }
    },
    async uploadAttachmentsToS3(s3FileNameAndURL, files) {
      try {
        if (s3FileNameAndURL) {
          const attachments = [];

          for (let i = 0; i < s3FileNameAndURL.length; i++) {
            const { fileName, url } = s3FileNameAndURL[i];
            const file = files[i];

            const { status } = await this.$store.dispatch(
              "uploadFileToS3ViaPresignedUrl",
              { url, file, extension: fileName.split(".").pop() }
            );

            if (status === 200)
              attachments.push({
                fileName,
                originalFileName: file.name,
              });
          }
          return attachments;
        }
      } catch (error) {}
    },
    async uploadFiles({ folderId, files }) {
      this.$vs.loading()
      try {
        // Process attachments
        const s3FileNameAndURL = await this.generateS3NameAndURL(files);
        const attachments =
          (await this.uploadAttachmentsToS3(s3FileNameAndURL, files)) || [];

        if (!this.isEditMode) {
          const payload = attachments.map(file => { return {...file, folderId} });
          this.filesPayload = [...this.filesPayload, ...payload];
          return;
        }

        const payload = {
          folderId,
          truckId: parseInt(this.truckId),
          files: attachments,
        };
        await this.$store.dispatch("trucksV2/uploadFiles", payload);
        await this.fetchFiles();

        this.$vs.notify({
          time: 2000,
          color: "success",
          title: "Success",
          text: "Files uploaded successfully",
        });
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: "danger",
          title: "Error",
          text: this.getErrorMsg(error),
        });
      }finally{
        this.$vs.loading.close();
      }
    },
  },
};
</script>
