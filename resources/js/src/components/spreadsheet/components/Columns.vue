<template>
  <div />
</template>

<script>
export default {
  props: {
    hidden: { type: Boolean, default: null },
    field: { type: Number || String, default: null },
    readonly: { type: Boolean, default: null },
    predefinedColumn: { type: String, default: null },
    customColumnId: { type: Number, default: null },
    order: { type: Number, default: null },
    amount: { type: Boolean, default: null },
    customType: { type: String, default: null },
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      const self = this;
      this.$parent.registerColumn({
        columnId: self.field,
        readonly: self.readonly,
        hidden: self.hidden,
        predefinedColumn: self.predefinedColumn,
        customColumnId: self.customColumnId,
        order: self.order,
        amount: self.amount,
        customType: self.customType,
      });
    },
  },
};
</script>
