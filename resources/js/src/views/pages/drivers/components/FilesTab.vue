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

<!-- eslint-disable multiline-ternary nonblock-statement-body-position -->
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'FilesTab',
  components: {
    Folders: () => import('@/components/folders/Folders')
  },
  data() {
    return {
      dragStartFile: null,
    };
  },
  props: {
    dataObj: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    ...mapGetters('driverV2', [
      'getFileList',
      'getFolderList',
      'getSelectedDriver'
    ]),

    files () {
      return this.getFolderList.map((folder) => {
        let files = []
        if (this.isEditMode)
          files = this.getFileList.filter(
            (file) => file.folderId === folder.id
          )
        else if (
          this.dataObj &&
          this.dataObj.files &&
          this.dataObj.files.length > 0
        )
          files = this.dataObj.files.filter(
            (file) => file.folderId === folder.id
          )

        return {
          ...folder,
          files
        }
      })
    },
    isEditMode () {
      return this.$route.name === 'drivers-edit'
    },
    driverId () {
      return this.$route.params.id
    }
  },
  created () {
    this.init()
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
        this.$store.dispatch('driverV2/driverFileChangeFolder', payload);
        this.fetchFiles();
      }
    },
    fetchFolders () {
      return this.$store.dispatch('driverV2/fetchFolderList')
    },
    fetchFiles () {
      return this.$store.dispatch('driverV2/fetchFiles', this.driverId)
    },
    getErrorMsg (error) {
      return error &&
        error.response &&
        error.response.data &&
        error.response.data.message
        ? error.response.data.message
        : 'Something went wrong'
    },
    async init () {
      try {
        if (this.getFolderList.length === 0 || this.isEditMode)
          this.$vs.loading()

        if (this.getFolderList.length === 0) await this.fetchFolders()
        if (this.isEditMode) await this.fetchFiles()
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: this.getErrorMsg(error)
        })
      } finally {
        this.$vs.loading.close()
      }
    },
    async addFolder ({ isEdit, id, folderName }) {
      try {
        isEdit
          ? await this.$store.dispatch('driverV2/updateFolder', {
            folderId: id,
            folderName
          })
          : await this.$store.dispatch('driverV2/createFolder', {
            folderName
          })
        await this.fetchFolders()
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: error.response.data.message || error.message
        })
      }
    },
    async deleteFile ({ file: { id }, index }) {
      try {
        if (!this.isEditMode) {
          const payload = {
            files: this.dataObj.files.filter((file, i) => i !== index)
          }
          this.$emit('update:Files', payload)
          return
        }

        await this.$store.dispatch('driverV2/deleteFile', id)
        await this.fetchFiles()

        this.$vs.notify({
          time: 2000,
          color: 'success',
          title: 'File Deleted',
          text: 'File deleted successfully'
        })
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: this.getErrorMsg(error)
        })
      }
    },
    getFileExtension (files) {
      const fileExtension = files.map((file) => {
        const extension = file.name.split('.').pop()
        return { extension }
      })

      return fileExtension
    },
    async generateS3NameAndURL (files) {
      try {
        if (files.length === 0) return

        const allFiles = await this.getFileExtension(files)
        const {
          data: { result, payload }
        } = await this.$store.dispatch('driverV2/uploadAttachment', {
          files: allFiles
        })

        return result && payload ? payload : []
      } catch (error) {}
    },
    async uploadAttachmentsToS3 (s3FileNameAndURL, files) {
      this.$vs.loading()
      try {
        if (s3FileNameAndURL) {
          const attachments = []

          for (let i = 0; i < s3FileNameAndURL.length; i++) {
            const { fileName, url } = s3FileNameAndURL[i]
            const file = files[i]

            const { status } = await this.$store.dispatch('uploadFileToS3ViaPresignedUrl', {
              url,
              file,
              extension: fileName.split(".").pop()
            })

            if (status === 200)
              attachments.push({
                fileName,
                originalFileName: file.name
              })
          }

          return attachments
        }
      } catch (error) {
      } finally {
        this.$vs.loading.close()
      }
    },
    async uploadFiles ({ folderId, files }) {
      try {
        // Process attachments
        const s3FileNameAndURL = await this.generateS3NameAndURL(files)
        const attachments =
          (await this.uploadAttachmentsToS3(s3FileNameAndURL, files)) || []

        if (this.isEditMode) {
          const payload = {
            folderId,
            userId: parseInt(this.driverId),
            files: attachments
          }
          await this.$store.dispatch('driverV2/uploadFiles', payload)
          await this.fetchFiles()
        } else {
          const payload = attachments.map((file, index) => ({
            ...file,
            url: s3FileNameAndURL[index].url,
            folderId
          }))

          const files = this.dataObj.files
            ? [...this.dataObj.files, ...payload]
            : [...payload]

          this.$emit('update:Files', {
            files
          })
        }
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: this.getErrorMsg(error)
        })
      }
    }
  }
}
</script>
