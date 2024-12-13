<template>
  <thead ref="dropdownParentNode">
    <tr>
      <th
        v-for="item in headers"
        :key="item.id"
        :columnId="item.id"
      >
        <div class="header">
          {{ item.name }}
        </div>
      </th>
    </tr>
  </thead>
</template>
<script>
export default {
  name: 'TableHeader',
  props: {
    headers: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
// $borderColor: #e9ebf0;
thead {
  // background: #fafbfc;
  // border-bottom-color: #e9ebf0;
  tr {
    th {
      // border: 1px solid $borderColor;
      // padding: 4px 16px;
      // position: relative;
      // overflow: hidden;
      // white-space: nowrap;
      // color: #87909e;
      // font-weight: 500;
      // font-size: 10px;
      // text-transform: uppercase;
      // -moz-text-overflow: ellipsis;
      // -ms-text-overflow: ellipsis;
      // -o-text-overflow: ellipsis;
      // text-overflow: ellipsis;

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

      .header {
        font-weight: 500;
      }
    }
  }
}

.header {
  display: flex;
  align-items: center;
}
</style>
