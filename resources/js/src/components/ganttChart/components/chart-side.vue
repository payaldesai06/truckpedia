<template>
  <div class="side" id="chartSideBlock">
    <template v-for="(item, index) in ganttData">
      <div
        :key="index"
        :class="{ sticky: firstLineStick && index === 0 }"
        :style="getSideBarHeight(index)"
      >
        <div class="left-panel">
          <div class="sideInfo">
            <slot :item="item" />
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'ChartSide',
  inject: ['baseBlock'],
  props: {
    ganttData: {
      type: Array,
      default: () => [],
    },
    sideBarHeights: {
      type: Array,
      default: () => [],
    },
    firstLineStick: {
      // first line sticky
      type: Boolean,
      default: false,
    },
  },
  computed: {
    sideHeight() {
      return { lineHeight: `${this.baseBlock}px` };
    },
  },
  mounted() {
    const items = document.querySelectorAll('.side > div');
    const xxxx = Array.from(items).map((item) => {
      const h = Math.round(Math.random() * 190) + 10;
      const s = Math.round(Math.random() * 50) + 50;
      const l = Math.round(Math.random() * 20) + 65;
      return [h, s, l];
    });
    xxxx.sort((a, b) => {
      return a[0] - b[0];
    });
    for (let i = 0; i < xxxx.length; i++) {
      if (i % 2 !== 0) {
        // the smallest
        xxxx.splice(i, 0, xxxx.pop());
      }
    }
    items.forEach((item, index) => {
      const [h, s, l] = xxxx[index];
      // item.style.color = `hsl(${h}deg ${s}% ${l - 25}%)`;
      // item.firstChild.style.backgroundColor = `hsl(${h}deg ${s}% ${l}%)`;
    });
  },
  methods: {
    getSideBarHeight(index) {
      const sideBarHeights = this.sideBarHeights[index];
      if (sideBarHeights) {
        return { height: `${sideBarHeights + 1}px` };
      }
      return { lineHeight: `${this.baseBlock}px` };
    },
  },
};
</script>

<style scoped lang="scss">
.side {
  // overflow: auto;
  overflow-x: auto;
  overflow-y: hidden;
  &::-webkit-scrollbar {
    display: none;
  }
  cursor: pointer;
  user-select: none;
}
$color_1: #7c828d;
$color_2: #e9ebf0;
.left-panel {
  height: 100%;
  background: #fafbfc;
  border-bottom: 1px solid $color_2;
  border-left: 1px solid $color_2;
  border-right: 1px solid $color_2;
  .sideInfo {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
