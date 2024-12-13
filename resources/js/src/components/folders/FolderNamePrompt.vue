<template>
  <vs-prompt
    :title="title"
    :accept-text="acceptText"
    @cancel="onClose"
    @accept="onAccept"
    @close="onClose"
    :is-valid="folderName !== ''"
    :active="isPromptActive"
  >
    <div>
      Enter a name for the folder
      <vs-input placeholder="Folder Name" v-model="folderName" />
    </div>
  </vs-prompt>
</template>
<script>
export default {
  name: "FolderNamePrompt",
  props: {
    isPromptActive: {
      type: Boolean,
      default: false,
    },
    isEditMode: {
      type: Boolean,
      default: false,
    },
    currentFolderName: {
      type: String,
      default: "",
    },
  },
  computed: {
    title() {
      return this.isEditMode ? "Rename Folder" : "Add New Folder";
    },
    acceptText() {
      return this.isEditMode ? "Rename" : "Add";
    },
  },
  data() {
    return {
      folderName: "",
    };
  },
  methods: {
    clearFolderName() {
      this.folderName = "";
    },
    onAccept() {
      this.$emit("onAccept", this.folderName);
      this.clearFolderName();
    },
    onClose() {
      if (this.isEditMode) this.$emit("resetEditMode");
      this.$emit("onClose");
      this.clearFolderName();
    },
  },
  watch: {
    isEditMode(val) {
      if (val) {
        this.folderName = this.currentFolderName;
      }
    },
  },
};
</script>
