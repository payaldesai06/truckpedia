<template>
  <DataTable
    :value="emails"
    :lazy="true"
    :paginator="true"
    :rows="rows"
    :rowHover="true"
    responsiveLayout="scroll"
    :rowsPerPageOptions="[10, 25, 50]"
    :rowStyle="{cursor: 'pointer'}"
    @row-click="setActiveEmailId"
  >
    <Column field="to" header="To" :sortable="true"> </Column>
    <Column field="subject" header="Subject"> </Column>
    <template #empty><b>No records found</b></template>
  </DataTable>
</template>
<script>
export default {
  name: 'email-table',
  props: {
    emails: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      rows: 25,
      sortBy: {
        field: null,
        order: null,
      },
    };
  },
  methods: {
    setActiveEmailId({ data }) {
      this.$emit('setActiveEmailId', data.id);
    },
  },
};
</script>
