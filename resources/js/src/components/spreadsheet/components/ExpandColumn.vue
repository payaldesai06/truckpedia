<template>
  <div>
    <div
      class="flex items-center my-5"
      v-for="(item, index) in header"
      :key="index"
    >
      <div class="label-container">
        <label>{{ item.name }}</label>
      </div>
      <div class="cell-container">
        <input
          class="w-full"
          :readonly="!item.editable"
          @input="
            onCellUpdate($event, columns.record.key_id, item.customColumnId)
          "
          :value="columns.record[item.id]"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExpandColumn',
  props: {
    columns: {
      required: true,
      type: Object || Array,
    },
    spreadsheetId: {
      required: true,
      type: Number,
    },
  },
  computed: {
    header() {
      return this.columns.headers;
    },
  },
  methods: {
    // on cell update
    onCellUpdate(event, keyId, customColumnId) {
      const payload = {
        id: this.spreadsheetId,
        keyId: keyId,
        value: event.target.value,
        customColumnId: customColumnId,
      };
      this.$store.dispatch('spreadsheet/updateCell', payload).catch((error) => {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      });
    },
  },
};
</script>

<style lang="scss">
.textarea {
  min-height: 40px;
  line-height: 32px;
  border-width: 0px;
  height: 40px;
}

.label-container {
  flex: 0 1 25%;
  min-width: 136px;
  line-height: 20px;
  label {
    opacity: 0.75;
    color: hsl(0, 0%, 20%);
    fill: hsl(0, 0%, 20%);
    font-size: 13px;
  }
}
.cell-container {
  min-height: 18px;
  position: relative;
  overflow: visible;
  display: block;
  input {
    min-height: 28px;
    overflow: auto;
    height: 28px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    padding: 0.4rem;
  }
}
</style>
