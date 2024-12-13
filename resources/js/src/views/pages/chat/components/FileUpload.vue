<template>
  <div class="p-1 file-icon-box">
    <input ref="file" type="file" multiple hidden @change="onFileSelect" />
    <feather-icon
      icon="PaperclipIcon"
      style="color: #7c72e9"
      @click="chooseFiles"
    />
  </div>
</template>
<script>
export default {
  name: 'FileUpload',
  data() {
    return {};
  },
  methods: {
    chooseFiles() {
      let fileInputElement = this.$refs.file;
      fileInputElement.click();
    },
    onFileSelect(selectedFiles) {
      if (!selectedFiles.target.files.length) {
        return;
      }
      let validFiles = [];
      for (let file of selectedFiles.target.files) {
        validFiles.push(file);
      }
      this.$emit('addFiles', validFiles);
    },
  },
};
</script>

<style scoped lang="scss">
.file-icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e4e3fa;
  border-radius: 5px;
  cursor: pointer;
}
</style>
