<template>
  <div>
    <!-- Record Dialog -->
    <RecordDialog
      :isDialogActive="isDialogActive"
      :recordList="recordList"
      :priceFieldId="priceFieldId"
      :selectedFieldId="selectedFieldId"
      @onClose="($event) => $emit('onClose', $event)"
      @onSelect="($event) => $emit('onSelect', $event)"
      @searchLinkedRecords="searchLinkedRecords"
    />
  </div>
</template>

<script>
export default {
  name: 'index',
  components: {
    RecordDialog: () => import('./RecordDialog.vue')
  },
  props: {
    isDialogActive: {
      type: Boolean,
      default: false
    },
    recordList: {
      type: Array,
      default: () => []
    },
    priceFieldId: {
      type: Number,
      default: null
    },
    selectedFieldId: {
      type: Number,
      default: null
    }
  },
  methods: {
      searchLinkedRecords(payload){
      this.$emit("searchLinkedRecords", payload);
    },
  }
}
</script>

<style lang="scss" scoped></style>
