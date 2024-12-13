<template>
  <vs-prompt
    :title="title"
    :accept-text="acceptText"
    @cancel="onClose"
    @accept="onAccept"
    @close="onClose"
    :active="isPromptActive"
    :is-valid="isFormValid"
  >
    <div v-if="!isEdit" class="vx-col w-full" id="file-input">
      <vx-input-group class="mb-base">
        <div
          class="vs-component vs-con-input-label vs-input w-full vs-input-primary"
        >
          <div class="vs-con-input">
            <input
              type="file"
              class="vs-inputx vs-input--input normal hasValue"
              ref="fileUpload"
              multiple
              @change="fileSelected"
            />
          </div>
        </div>
      </vx-input-group>
    </div>
    <template v-if="filesHolder.length > 0">
      <div
        v-for="(file, index) in filesHolder"
        :key="`${index}-${file.name || file.originalFilename}`"
        class="vx-row flex justify-evenly items-center"
      >
        <div class="vx-col w-1/4">
          <label class="text-xs">Access</label>
          <Dropdown
            v-model="isPrivate[index]"
            :options="accessOptions"
            optionLabel="label"
            optionValue="value"
            class="mb-4 md:mb-0"
            style="background: #fff; width: 100%"
            appendTo="body"
          />
        </div>
        <div class="vx-col w-1/4">
          <label class="text-xs"
            >File Label
            <vs-button
              color="warning"
              type="flat"
              size="small"
              style="padding: 0; margin-left: 1rem"
              @click="clearLabel(index)"
            >
              Clear
            </vs-button></label
          >
          <Dropdown
            v-model="fileLabel[index]"
            :options="fileLabelOptions"
            optionLabel="label"
            optionValue="value"
            class="mb-4 md:mb-0"
            style="background: #fff; width: 100%"
            appendTo="body"
          />
        </div>
        <div class="vx-col w-1/4 flex items-center">
          <ImagePreview
            v-if="getFileType(file) === 'image'"
            :src="getImageURL(file)"
            alt="img"
            imageStyle="object-fit: contain; width: 50px; min-height: 50px"
            preview
          />
          <vs-icon class="text-2xl" :icon="getFileIcon(file)" v-else />
          <label class="ml-2">
            {{
              (file.file ? file.file.name : file.name) || file.originalFilename
            }}
          </label>
        </div>
        <div v-if="!isEdit" class="vx-col w-1/4 flex items-center justify-end">
          <vs-button
            class="ml-2"
            color="primary"
            type="border"
            icon="delete"
            @click="removeFile(index)"
          />
        </div>
      </div>
    </template>
    <template v-else>
      <div class="vx-row">
        <div class="vx-col">
          <span class="text-gray-500">No Files Found</span>
        </div>
      </div>
    </template>
  </vs-prompt>
</template>

<script>
import config from '@/config/constants';
import { redirectToNewTab, getSelectedFileExtension } from '@/helpers/helper';

export default {
  name: 'IncidentFileUploadPopup',
  components: {
    Files: () => import('@/components/files/Files'),
    ImagePreview: () => import('primevue/imagepreview'),
  },
  props: {
    isPromptActive: {
      type: Boolean,
      default: false,
    },
    fileData: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    onAccept() {
      if (this.isEdit) {
        this.$emit('onAccept:Update', {
          ...this.fileData,
          isPrivate: this.isPrivate[0],
          fileLabel: this.fileLabel[0],
        });
        return;
      }

      this.$emit('onAccept', {
        files: this.filesHolder,
        isPrivate: this.isPrivate,
        fileLabel: this.fileLabel,
      });
    },
    onClose() {
      this.$emit('onClose');
    },
    fileSelected(event) {
      const files = event.target.files;

      for (let i = 0; i < files.length; i++) {
        this.filesHolder.push(files[i]);
        this.isPrivate.push('');
        this.fileLabel.push('');
      }
      this.$refs.fileUpload.value = '';
    },
    removeFile({ index }) {
      this.filesHolder.splice(index, 1);
      this.isPrivate.splice(index, 1);
      this.fileLabel.splice(index, 1);
    },
    getFileType(file) {
      const fileExtension = getSelectedFileExtension(file, [
        'storageFilename',
        'originalFilename',
        'name',
      ]);
      return config.fileTypes[fileExtension.toLowerCase()] || 'other';
    },
    getFileIcon(file) {
      const fileType = this.getFileType(file);

      return config.materialIconForFileType[fileType];
    },
    getImageURL(file) {
      const fileValue = file.file ? file.file : file;
      if (file.url) return file.url;
      return fileValue.storageFileUrl || URL.createObjectURL(fileValue);
    },
    downloadFile(file) {
      const fileValue = file.file ? file.file : file;
      const link = document.createElement('a');
      link.href = file.url ? file.url : URL.createObjectURL(fileValue);
      link.download = file.url ? file.originalFilename : fileValue.name;
      redirectToNewTab(link);
    },
    clearLabel(index) {
      this.$set(this.fileLabel, index, '');
    },
  },
  computed: {
    isEdit() {
      return this.fileData && Object.keys(this.fileData).length;
    },
    title() {
      return this.isEdit ? 'Edit File' : 'Upload File';
    },
    acceptText() {
      return this.isEdit ? 'Update' : 'Upload';
    },
    isFormValid() {
      return !this.isEdit ? this.filesHolder.length > 0 : true;
    },
  },
  data() {
    return {
      filesHolder: [],
      isPrivate: [],
      accessOptions: [
        { id: 1, label: 'Private', value: 'private' },
        { id: 2, label: 'Public', value: '' },
      ],
      fileLabel: [],
      fileLabelOptions: config.safetyModule.fileLabelOptions.sort((a, b) =>
        a.label < b.label ? -1 : 1
      ),
      showFileUpload: true,
    };
  },
  watch: {
    isPromptActive(val) {
      if (!val) {
        this.filesHolder = [];
        this.isPrivate = [];
        this.fileLabel = [];
      }

      if (this.isEdit) {
        this.filesHolder[0] = this.fileData;
        this.isPrivate[0] =
          this.fileData.isPrivate === 'public' ? '' : this.fileData.isPrivate;
        this.fileLabel[0] = this.fileData.fileLabel;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@sass/custom/form.scss';

::v-deep {
  .vs-dialog {
    max-width: 50% !important;

    .vs-dialog-text {
      max-height: 50vh;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
}
</style>
<style lang="scss">
.p-dropdown-panel {
  z-index: 52005 !important;
}
</style>
