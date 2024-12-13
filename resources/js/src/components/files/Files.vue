<template>
  <div>
    <div
      :class="['flex justify-between items-center', { 'mt-2': index > 0 }]"
      v-for="(file, index) in fileList"
      :key="`${index}-${file.name || file.originalFileName}`"
      :draggable="true"
      @dragstart="dragStart(file)"
      @dragover.prevent 
      @drop="dropEnd(file, $event)"
      class="file-drag-drop"
    >
      <div class="flex items-center">
        <ImagePreview
          v-if="getFileType(file) === 'image' && imagePreview"
          :src="getImageURL(file)"
          alt="img"
          imageStyle="object-fit: contain; width: 50px; min-height: 50px"
          preview
        />
        <vs-icon class="font-40" :icon="getFileIcon(file)" v-else />
        <label class="text-sm ml-2">
          {{
            (file.file ? file.file.name : file.name) || file.originalFileName
          }}
        </label>
      </div>
      <div class="flex">
        <vs-button
          v-if="isDownloadAllowed"
          class="ml-2"
          color="primary"
          type="border"
          icon="file_download"
          @click="downloadFile(file)"
        />
        <vs-button
          class="ml-2"
          color="primary"
          type="border"
          icon="delete"
          @click="$emit('deleteFile', { file, index })"
        />
      </div>
    </div>
  </div>
</template>

<!-- eslint-disable multiline-ternary -->
<script>
// Constants
import config from '@/config/constants'
import { redirectToNewTab } from '@/helpers/helper';

export default {
  name: 'Files',
  components: {
    ImagePreview: () => import('primevue/imagepreview')
  },
  props: {
    fileList: {
      type: Array,
      default: () => []
    },
    isDownloadAllowed: {
      type: Boolean,
      default: true
    },
    imagePreview: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    dragStart(file) {
      this.$emit('fileDragStart', file);
    },
    dropEnd(file, event) {
      event.preventDefault();
      this.$emit('fileDropEnd', file);
    },
    getFileType (file) {
      const fileValue = file.file ? file.file : file
      const fileExtension = fileValue.name
        ? fileValue.name.split('.').pop()
        : file.fileName
          ? file.fileName.split('.').pop()
          : file.originalFileName.split('.').pop()

      return config.fileTypes[fileExtension.toLowerCase()] || 'other'
    },
    getFileIcon (file) {
      const fileType = this.getFileType(file)

      return config.materialIconForFileType[fileType]
    },
    getImageURL (file) {
      const fileValue = file.file ? file.file : file
      if (file.url) return file.url
      return URL.createObjectURL(fileValue)
    },
    downloadFile (file) {
      const fileValue = file.file ? file.file : file
      const link = document.createElement('a')
      link.href = file.url ? file.url : URL.createObjectURL(fileValue)
      link.download = file.url ? file.originalFileName : fileValue.name
      redirectToNewTab(link);
      //link.click()
      //link.remove()
    }
  }
}
</script>

<style lang="scss" scoped>
// Utilities
.font-40 {
  font-size: 40px;
}

.file-drag-drop{
  z-index: 999;
  position: relative;
}
</style>
