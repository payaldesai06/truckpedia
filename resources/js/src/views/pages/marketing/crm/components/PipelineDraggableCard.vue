<template>
  <vx-card class="draggable-card cursor-pointer" @click="onDealClick">
    <template>
      <div class="flex justify-between items-center">
        <h6 class="break-all">{{ deal.name }}</h6>
      </div>
      <div class="flex flex-col mt-2">
        <!-- <span class="flex items-center gap-2">
          <vs-icon icon="open_in_new" />
          <span class="text-xs">Campaign</span>
        </span> -->
        <span v-if="deal.customer" class="font-bold text-xs">{{
          deal.customer.name
        }}</span>
        <span class="mt-3 text-xs">{{ dealOwners }}</span>
      </div>
    </template>
  </vx-card>
</template>
<script>
export default {
  name: 'PipelineDraggableCard',
  props: ['deal'],
  computed: {
    dealOwners() {
      return this.deal.assignees.map((item) => item.name).join(', ');
    },
  },
  methods: {
    onDealClick() {
      this.$router.push(`/marketing/crm/deal-information/${this.deal.id}`);
    },
  },
};
</script>
<style lang="scss" scoped></style>
<style lang="scss">
.draggable-card .vx-card__header {
  flex-wrap: nowrap;
  align-items: start;
}
.draggable-card .vx-card__collapsible-content .vx-card__body {
  padding: 0.8rem;
}
</style>
