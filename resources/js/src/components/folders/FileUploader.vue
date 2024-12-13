<template>
  <input
    ref="inputRef"
    type="file"
    multiple
    @change="dragNdrop"
    @dragover.prevent="drag"
    @dragleave="dragLeave"
    @dragenter="dragEnter"
    @drop="drop"
  />
</template>

<script>
export default {
  props: {
    folder: {
      type: Object,
      defautl: () => {},
    },
  },
  data() {
    return {
      inputRef: null,
    };
  },
  computed: {
    folderId() {
      return this.folder.id;
    },
  },
  methods: {
    dragNdrop(event) {
      const files = event.target.files;
      const filesHolder = [];
      for (let i = 0; i < files.length; i++) {
        filesHolder.push(files[i]);
      }
      this.$emit('setFolderIdForFiles', this.folderId);
      this.$emit('dragNdrop', filesHolder);

      if (files.length == 1) {
        this.$refs.inputRef.value = '';
      }
    },
    drag() {
      this.$emit('setFolderIdForFiles', this.folderId);
    },
    dragLeave() {
      this.$emit('setFolderIdForFiles', null);
      this.$emit('dragLeave');
      document.getElementById(this.folderId).classList = 'drag-box';
    },
    dragEnter() {
      document.getElementById(this.folderId).classList = 'drag-box draging';
    },
    drop() {
      document.getElementById(this.folderId).classList = 'drag-box';
      this.$emit('drop');
    },
  },
};
</script>
