<template>
  <div class="w-full">
    <div class="mt-6 flex items-center justify-between px-6">
      <h4>View Load Detail</h4>

      <div class="flex items-center">
        <feather-icon
          icon="XIcon"
          @click="closeSidebar"
          class="cursor-pointer"
        ></feather-icon>
      </div>
    </div>
    <vs-divider class="mb-0"></vs-divider>

    <div class="p-6">
      <keep-alive>
        <vs-tabs alignment="fixed">
          <vs-tab label="Detail" v-if="canAccess(roleAccess.detail)">
            <div>
              <LoadDetail @closeSidebar="closeSidebar" :loadId="data.loadId" />
            </div>
          </vs-tab>

          <vs-tab label="Documents" v-if="canAccess(roleAccess.pod)">
            <div class="vx-row mt-6">
              <div class="vx-col w-full">
                <DocumentUpload
                  :loadId="data.loadId"
                  :downloadFile="downloadFile"
                  :isLoadDeleted="isLoadDeleted"
                />
              </div>
            </div>
          </vs-tab>

          <vs-tab label="Pictures" v-if="canAccess(roleAccess.pictures)">
            <div class="vx-row mt-6">
              <div class="vx-col w-full">
                <Pictures :loadId="data.loadId" />
              </div>
            </div>
          </vs-tab>
        </vs-tabs>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import config from '@/config/constants';
import Pictures from './Pictures';
import LoadDetail from './LoadDetail';
import DocumentUpload from './DocumentUpload';
import { redirectToNewTab } from '@/helpers/helper';

export default {
  name: 'ViewLoad',

  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },

  components: {
    VuePerfectScrollbar,
    LoadDetail,
    DocumentUpload,
    Pictures,
  },

  data() {
    return {
      loadStatus: config.status.load,

      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 0.6,
      },
      roleAccess: {
        detail: [config.roles.tag_operator],
        rate: [config.roles.tag_operator],
        invoice: [config.roles.tag_operator],
        pod: [config.roles.tag_operator],
        pictures: [config.roles.tag_operator, config.roles.warehouse_operator],
      },
    };
  },

  computed: {
    ...mapGetters('load', { load: 'load' }),
  },

  async created() {
    this.$vs.loading();
    try {
      await this.getLoad();
      this.$vs.loading.close();
    } catch (error) {
      this.closeSidebar();
      this.$vs.notify({
        color: 'danger',
        title: 'Error',
        text: error,
      });
    } finally {
    }
  },

  methods: {
    async closeSidebar() {
      await this.$store.dispatch('load/resetLoad');

      this.$emit('closeSidebar');
    },

    async getLoad() {
      await this.$store.dispatch('load/getLoad', this.data.loadId);
    },

    /**
     * Download
     */
    downloadFile(url) {
      redirectToNewTab(url);
    },
  },
};
</script>

<style lang="scss" scoped>
.con-vs-dropdown--menu.vs-dropdown-menu {
  z-index: 900000;
  width: 16rem;
}

.parent-dropdown.vs-con-dropdown {
  cursor: pointer;
}
</style>
