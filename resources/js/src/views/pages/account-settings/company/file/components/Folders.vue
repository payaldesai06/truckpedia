<template>
  <div>
    <div v-if="dataArray && dataArray.length > 0">
      <Panel
        class="w-full mt-5"
        :toggleable="true"
        :collapsed="showCollapsed"
        v-for="folder in dataArray"
        :key="folder.id"
      >
        <template #icons>
          <div class="vx-row">
            <div class="vx-col flex gap-1 items-center">
              <vs-icon
                v-if="showFileUploadIcon"
                class="cursor-pointer"
                size="small"
                icon="file_upload"
                @click="toggleFileUploadPrompt(folder.id)"
              />
            </div>
          </div>
        </template>
        <template #header>
          <div class="vx-row w-full">
            <div class="vx-col flex items-center">
              <vs-icon size="small" icon="folder" />
              <label class="text-sm font-semibold ml-2">
                {{ folder.folderName }}
              </label>
            </div>
          </div>
        </template>
        <div>
          <span :id="folder.id" class="drag-box">
            <input
              type="file"
              multiple
              @change="(event) => dragNdrop(event, folder.id)"
              @dragover="drag(folder.id)"
              @dragleave="dragLeave(folder.id)"
              @dragenter="dragEnter(folder.id)"
              @drop="drop(folder.id)"
            />
            <template v-if="folder.files.length > 0">
              <Files
                :imagePreview="imagePreview"
                :isDownloadAllowed="showDownload"
                :fileList="folder.files"
                @deleteFile="
                  ({ file, index }) => $emit('deleteFile', { file, index })
                "
              />
            </template>
            <template v-else>
              <div class="vx-row justify-center">
                <div class="vx-col">
                  <span class="text-gray-500"
                    >Drag and drop files to upload or click here to upload</span
                  >
                </div>
              </div>
            </template>
          </span>
          <!-- <div id="preview" /> -->
        </div>
      </Panel>
    </div>
    <div v-else>
      <div class="vx-row">
        <div class="vx-col">
          <label class="text-gray-500">No records found</label>
        </div>
      </div>
    </div>
    <FolderNamePrompt
      :isEditMode="isEdit"
      :currentFolderName="editFolder.folderName"
      :isPromptActive="isFolderNamePromptVisible"
      @onAccept="addFolder"
      @onClose="toggleFolderPrompt"
      @resetEditMode="resetEditMode"
    />

    <!-- File Upload Prompt -->
    <FileUploadPrompt
      :isPromptActive="isFileUploadPromptVisible"
      @onClose="toggleFileUploadPrompt"
      @onAccept="uploadFiles"
    />
  </div>
</template>
<script>
export default {
  name: 'Folders',
  components: {
    Files: () => import('@/components/files/Files'),
    FolderNamePrompt: () => import('@/components/folders/FolderNamePrompt.vue'),
    FileUploadPrompt: () => import('@/components/files/FileUploadPrompt'),
  },
  props: {
    dataArray: {
      type: Array,
      default: () => [],
    },
    showFileUploadIcon: {
      type: Boolean,
      default: false,
    },
    showCollapsed: {
      type: Boolean,
      default: false,
    },
    imagePreview: {
      type: Boolean,
      default: true,
    },
    showDownload: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isFolderNamePromptVisible: false,
      isFileUploadPromptVisible: false,
      isEdit: false,
      editFolder: {
        id: null,
        folderName: '',
      },
      folderIDForFiles: null,
      dragging: false,
    };
  },
  methods: {
    dragNdrop(event, folderId) {
      const files = event.target.files;
      const filesHolder = [];
      for (let i = 0; i < files.length; i++) {
        filesHolder.push(files[i]);
      }
      this.folderIDForFiles = folderId;
      this.uploadFiles(filesHolder);
    },
    drag(folderId) {
      this.folderIDForFiles = folderId;
    },
    drop(folderId) {
      document.getElementById(folderId).classList = 'drag-box';
    },
    dragLeave(folderId) {
      this.folderIDForFiles = null;
      document.getElementById(folderId).classList = 'drag-box';
    },
    dragEnter(folderId) {
      document.getElementById(folderId).classList = 'drag-box draging';
    },
    addFolder(folderName) {
      if (this.isEdit && this.editFolder.folderName === folderName) {
        this.toggleFolderPrompt();
        this.resetEditMode();
        return;
      }

      this.$emit('addFolder', {
        isEdit: this.isEdit,
        id: this.editFolder.id,
        folderName,
      });

      this.toggleFolderPrompt();
      if (this.isEdit) this.resetEditMode();
    },
    toggleFolderPrompt() {
      this.isFolderNamePromptVisible = !this.isFolderNamePromptVisible;
    },
    toggleRenameFolderPrompt(folder) {
      this.isEdit = !this.isEdit;
      this.editFolder = { ...folder };
      this.toggleFolderPrompt();
    },
    resetEditMode() {
      this.isEdit = false;
      this.editFolder = {
        id: null,
        folderName: '',
      };
    },
    toggleFileUploadPrompt(folderId) {
      if (folderId) this.folderIDForFiles = folderId;
      else this.folderIDForFiles = null;

      this.isFileUploadPromptVisible = !this.isFileUploadPromptVisible;
    },
    uploadFiles(files) {
      if (files && files.length > 0 && this.folderIDForFiles) {
        this.$emit('uploadFiles', { folderId: this.folderIDForFiles, files });
        this.isFileUploadPromptVisible = false;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
::v-deep {
  .p-panel-icons {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    padding: 0 1rem;
  }
}
// Utilities
.w-fit {
  width: fit-content;
}

.drag-box {
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0 auto;
  line-height: 95px;
  color: #999;
  display: inline-block;
  transition: transform 0.3s;
  input[type='file'] {
    position: absolute;
    height: 100%;
    width: 100%;
    opacity: 0;
    top: 0;
    left: 0;
  }
}
.draging {
  border: 2px dashed #ccc;
}
</style>
