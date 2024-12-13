<template>
  <vs-button
    color="primary"
    type="border"
    icon-pack="feather"
    icon="icon-plus"
    size="small"
    id="new-note-button"
    class="vs-con-loading__container add-note-btn"
    @click.stop="$emit('onClick')"
    v-bind="$attrs"
  >
    {{ text }}
  </vs-button>
</template>

<script>
export default {
  name: 'add-note-button',
  props: {
    text: {
      type: String,
      default: () => '',
    },
  },
};
</script>
<style lang="scss">
.add-note-btn {
  font-size: 1rem !important;
}
</style>
