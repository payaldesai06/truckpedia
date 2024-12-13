<template>
  <vs-prompt
    title="Select Files to Upload"
    accept-text="Upload"
    @cancel="onClose"
    @accept="onAccept"
    @close="onClose"
    :active="isPromptActive"
  >
    <div class="vx-col w-full" id="file-input">
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
      <Files
        class="height-170 overflow-x-auto"
        :isDownloadAllowed="false"
        :fileList="filesHolder"
        @deleteFile="removeFile"
      />
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
export default {
  name: "FileUploadPrompt",
  components: {
    Files: () => import("@/components/files/Files"),
  },
  props: {
    isPromptActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      filesHolder: [],
    };
  },
  methods: {
    onAccept() {
      this.$emit("onAccept", this.filesHolder);
      this.filesHolder = [];
    },
    onClose() {
      this.$emit("onClose");
      this.filesHolder = [];
    },
    fileSelected(event) {
      const files = event.target.files;

      for (let i = 0; i < files.length; i++) {
        this.filesHolder.push(files[i]);
      }
      this.$refs.fileUpload.value = "";
    },
    removeFile({ index }) {
      this.filesHolder.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@sass/custom/form.scss";

// Utilities
.height-170 {
  height: 170px;
}
</style>
