<template>
  <div>
    <div v-html="content"></div>
  </div>
</template>
<script>
export default {
  name: 'EmailPreview',
  props: {
    content: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="scss" scoped></style>
