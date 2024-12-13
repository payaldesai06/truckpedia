<template>
  <vs-prompt
    title="Delete Confirmation"
    accept-text="Delete"
    color="danger"
    @cancel="onClose"
    @accept="onAccept"
    @close="onClose"
    :active="isPromptActive"
  >
    <div>
      <label>{{ label }}</label>
    </div>
  </vs-prompt>
</template>

<script>
export default {
  name: 'DeletePrompt',
  props: {
    isPromptActive: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: 'Do you want to delete this record?'
    }
  },
  data () {
    return {}
  },
  methods: {
    onAccept () {
      this.$emit('onAccept')
    },
    onClose () {
      this.$emit('onClose')
    }
  }
}
</script>

<style lang="scss" scoped></style>
