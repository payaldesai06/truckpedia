<template>
  <vs-sidebar
    position-right
    parent="body"
    default-index="1"
    color="primary"
    class="add-new-data-sidebar items-no-padding"
    spacer
    v-model="isSidebarActiveLocal"
  >
    <component
      ref="scrollbarComponent"
      :is="scrollbarTag"
      class="scroll-area--data-list-add-new"
      :settings="settings"
      :key="$vs.rtl"
      v-click-outside="outsideClickHandler"
    >
      <!-- <component
      ref="scrollbarComponent"
      :is="scrollbarTag"
      class="scroll-area--data-list-add-new"
      :settings="settings"
      :key="$vs.rtl"
    > -->
      <template>
        <LoadEdit
          ref="loadEdit"
          v-if="isSidebarActiveLocal"
          :recordId="recordId"
          @isCustomFieldPopupOpenOrNot="isCustomFieldPopupOpenOrNot"
          @closeSidebar="closeSidebar"
        />
      </template>
    </component>
  </vs-sidebar>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import CloseSidebarMixin from '@/mixins/closeSidebarMixin';

import LoadEdit from './LoadEdit.vue';

export default {
  name: 'LoadSidebar',
  mixins: [CloseSidebarMixin],
  components: {
    VuePerfectScrollbar,
    LoadEdit,
  },
  provide() {
    return {
      scrollData: this.scrollData,
    };
  },
  props: {
    isSidebarActive: {
      type: Boolean,
      required: true,
    },
    recordId: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      settings: {
        // perfect scrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },

      // Scroll to top
      scrollData: {
        scrollToTop: false,
      },
      customFieldPopup: false,
    };
  },
  watch: {
    scrollData: {
      deep: true,
      handler(newScrollData) {
        if (!newScrollData.scrollToTop) return;

        this.scrollData.scrollToTop = false;
        this.$refs['scrollbarComponent'].$el.scrollTop = 0;
      },
    },
  },
  computed: {
    isSidebarActiveLocal: {
      get() {
        return this.isSidebarActive;
      },
      set(val) {
        if (!val) {
        }
      },
    },
    scrollbarTag() {
      return this.$store.getters.scrollbarTag;
    },
  },

  methods: {
    isCustomFieldPopupOpenOrNot(val) {
      this.customFieldPopup = val;
    },
    closeSidebar(value) {
      if (value !== undefined && value !== null) {
        this.$emit('closeSidebar', value);
      }
      this.$emit('closeSidebar');
    },
    outsideClickHandler() {
      if (this.$refs.loadEdit && !this.$refs.loadEdit.isAnyPromptsActive) {
        this.closeSidebar();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
/* @import "@sass/custom/sidebar.scss"; */

// hide footer blank space
/* .scroll-area--data-list-add-new {
  height: calc(var(--vh, 1vh) * 100 - 0rem);
} */

.add-new-data-sidebar {
  ::v-deep .vs-sidebar {
    z-index: 52010;
    width: 75vw;
    max-width: 90vw;
  }
}

::v-deep .vs-sidebar--items {
  overflow: auto !important;
}
</style>
