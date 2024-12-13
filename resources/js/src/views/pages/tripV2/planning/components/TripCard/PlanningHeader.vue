<template>
  <thead>
    <tr>
      <th
        v-for="(item, index) in columns"
        :key="item.field"
        style="min-width: 110px"
      >
        <div class="planning-header" v-if="index > 0">
          {{ item.header }}
        </div>
        <div class="planning-header" v-else>
          <div class="driver-name">
            {{ name || item.header }}
          </div>
          <span v-if="count"> {{ count }} Loads </span>
        </div>
      </th>
      <th></th>
    </tr>
  </thead>
</template>

<script>
export default {
  props: {
    columns: {
      default: [],
    },
    count: {
      default: 0,
    },
    name: {
      default: '',
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
th {
  height: 20px;
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #000;
  background: #f7f8f9;
  border: 0;
  color: #000;
  outline: none;
  .planning-header {
    font-weight: 500;
  }
}

.planning-header {
  display: flex;
  align-items: center;
  .driver-name {
    background: #f5da49;
    min-width: 100px;
    max-width: 200px;
    padding: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    margin-right: 8px;
    word-break: break-all;
  }
}
</style>
