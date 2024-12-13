<template>
  <div class="mt-4 gap-4 draggable-row">
    <div
      class="vx-col draggable-col"
      v-for="column in visibleColumns"
      :key="column.id"
      :style="getColumnWidth"
    >
      <div class="px-2">
        <div class="flex items-center justify-between">
          <h3 class="text-base opacity-75">{{ column.label }}</h3>
          <vs-dropdown
            class="cursor-pointer ml-2"
            vs-custom-content
            vs-trigger-click
          >
            <vs-icon icon="more_horiz" />
            <vs-dropdown-menu>
              <vs-dropdown-item>
                <div
                  class="m-2 cursor-pointer hover:text-primary"
                  @click.stop="hideColumn(column.key)"
                >
                  <label
                    class="cursor-pointer ml-2"
                    v-text="'Hide Column (for me)'"
                  />
                </div>
              </vs-dropdown-item>
            </vs-dropdown-menu>
          </vs-dropdown>
        </div>
      </div>

      <vs-divider />

      <div class="draggable-list">
        <draggable
          :list="$data[column.data]"
          group="items"
          :disabled="!canAccess(roleModify)"
          class="p-2 space-y-4 overflow-y-auto draggable-item"
          @change="changeStatus(column.value, $event)"
          :data-status="column.value"
        >
          <draggable-card
            v-for="item in $data[column.data]"
            :key="item.uuid"
            :data="item"
            :showLabels="showLabels"
            @editLoadSidebar="editedLoadSidebar"
            @viewLoadSidebar="viewLoadSidebar"
          />
        </draggable>
      </div>
    </div>

    <vs-prompt
      accept-text="Yes"
      @cancel="resetInvoicePrompt"
      @accept="() => generateInvoice(invoicePrompt.selectedLoad)"
      @close="resetInvoicePrompt"
      title="Generate Invoice"
      :active.sync="invoicePrompt.isActive"
      class="invoice-generated-popup"
    >
      <div class="flex column items-center">
        <p class="mb-0 mr-3">Are you sure you want to generate invoice?</p>
      </div>
      <div
        class="w-full mt-3"
        v-if="
          !invoicePrompt.noFactoring &&
          this.allFactoringCompanies &&
          this.allFactoringCompanies.length > 0
        "
      >
        <div class="flex flex-row items-center justify-between">
          <div class="w-full relative">
            <vs-checkbox
              v-model="invoicePrompt.skipFactoring"
              class="factoring-checkbox"
            >
              Skip Factoring
            </vs-checkbox>
          </div>
        </div>
      </div>
    </vs-prompt>

    <!--    <div class="vx-col draggable-col">-->
    <!--      <div class="">-->
    <!--        <h3 class="text-base opacity-75">Invoice</h3>-->
    <!--        <vs-divider/>-->
    <!--      </div>-->

    <!--      <div class="draggable-list">-->
    <!--        <draggable :list="invoiceItems" group="items" class="p-2 space-y-4 overflow-y-auto draggable-item">-->
    <!--          <draggable-card v-for="(item, index) in invoiceItems" :key="index" :data="item"/>-->
    <!--        </draggable>-->
    <!--      </div>-->
    <!--    </div>-->
  </div>
</template>
<!-- eslint-disable multiline-ternary -->
<script>
import { v4 as uuidv4 } from 'uuid';

import DraggableCard from './components/DraggableCard';

import config from '@/config/constants';
import { mapState, mapGetters } from 'vuex';
import { getApiErrorMsg } from '../../../helpers/helper';

export default {
  name: 'Pipeline',

  props: {
    selectedDateRange: {
      type: String,
      required: true,
    },
    pipelineFilter: {
      type: Object,
      default: null,
      required: false,
    },
    userCustomization: {
      type: Object,
      default: () => ({}),
    },
  },

  components: {
    DraggableCard,
  },

  data() {
    return {
      loadStatus: config.status.load,
      filters: {
        startDate: '',
        endDate: '',
      },
      roleModify: [config.roles.admin, config.roles.dispatcher],
      openLoadItems: [],
      dispatchedItems: [],
      transitItems: [],
      deliveredItems: [],
      paymentStatusItems: [],
      columns: [
        {
          id: 1,
          label: 'Open',
          value: 'open',
          data: 'openLoadItems',
          key: 'open',
        },
        {
          id: 2,
          label: 'Dispatched',
          value: 'assign',
          data: 'dispatchedItems',
          key: 'dispatched',
        },
        {
          id: 3,
          label: 'In Transit',
          value: 'in_transit',
          data: 'transitItems',
          key: 'inTransit',
        },
        {
          id: 4,
          label: 'Delivered',
          value: 'delivered',
          data: 'deliveredItems',
          key: 'delivered',
        },
        {
          id: 5,
          label: 'Payment Status',
          value: 'invoice_created',
          data: 'paymentStatusItems',
          key: 'paymentStatus',
        },
      ],
      dataFilters: {
        tagIds: [],
        dispatcherIds: [],
        driverIds: [],
      },
      invoicePrompt: {
        isActive: false,
        selectedLoad: null,
        skipFactoring: false,
      },
      loads: [],
    };
  },

  watch: {
    selectedDateRange: {
      immediate: true,
      handler(newSelectedDateRange) {
        const dates = newSelectedDateRange.split(' to ');

        if (dates.length <= 1) return;

        this.filters.startDate = dates[0];
        this.filters.endDate = dates[1];

        // Get Pipeline
        this.getPipeline();
      },
    },

    async isLoading(newIsLoading) {
      // console.log(`PIPELINE: Watching: ${newIsLoading}`)
      if (newIsLoading) {
        await this.getPipeline();
      }
    },

    pipelineFilter: {
      handler(val) {
        if (val) {
          // Get Pipeline
          this.getPipeline();
        }
      },
      deep: true,
      // immediate: true,
    },
  },

  computed: {
    ...mapState('load', { isLoading: 'loading' }),
    ...mapGetters('factoring-company', ['allFactoringCompanies']),

    visibleColumns() {
      if (this.userCustomization && this.userCustomization.hideColumns) {
        return this.columns.filter((column) => {
          return this.userCustomization.hideColumns[column.key] !== false;
        });
      } else {
        return this.columns;
      }
    },
    showLabels() {
      if (this.userCustomization && this.userCustomization.showLabels) {
        return this.userCustomization.showLabels;
      } else {
        return {};
      }
    },
    getColumnWidth() {
      const columnWidth = 100 / this.visibleColumns.length;
      return `width: calc(${columnWidth}% - 1rem)`;
    },
  },

  methods: {
    async getPipeline() {
      this.$vs.loading();

      let filterPayload = {
        ...this.filters,
      };
      if (this.pipelineFilter && Object.keys(this.pipelineFilter).length) {
        filterPayload.filters = this.pipelineFilter;
      }

      try {
        const {
          data: {
            payload: { loads },
          },
        } = await this.$store.dispatch('pipelineV2/getPipeline', filterPayload);
        this.loads = structuredClone(loads);
        this.updatePipelineColumns(loads);
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          text: error.response.data.message,
        });
      } finally {
        // Stop Loading For Pipeline
        await this.$store.dispatch('load/stopLoading');

        this.$vs.loading.close();
      }
    },

    updatePipelineColumns(loads) {
      this.openLoadItems = (loads || [])
        .filter((load) => load.status == this.loadStatus.open)
        .map((load) => {
          return { ...load, uuid: uuidv4() };
        });

      this.dispatchedItems = (loads || [])
        .filter((load) => load.status == this.loadStatus.assign)
        .map((load) => {
          return { ...load, uuid: uuidv4() };
        });

      this.transitItems = (loads || [])
        .filter((load) => load.status == this.loadStatus.in_transit)
        .map((load) => {
          return { ...load, uuid: uuidv4() };
        });

      this.deliveredItems = (loads || [])
        .filter((load) => load.status == this.loadStatus.delivered)
        .map((load) => {
          return { ...load, uuid: uuidv4() };
        });

      this.paymentStatusItems = (loads || [])
        .filter((load) => {
          return [
            this.loadStatus.invoice_created,
            this.loadStatus.invoice_sent,
            this.loadStatus.invoice_paid,
          ].includes(load.status);
        })
        .map((load) => {
          return { ...load, uuid: uuidv4() };
        });
    },

    /**
     * Open Sidebar: Load Edit
     */
    editedLoadSidebar(data) {
      this.$emit('editLoadSidebar', data);
    },

    viewLoadSidebar(data) {
      this.$emit('viewLoadSidebar', data);
    },

    /* change status of loads*/
    async changeStatus(status, event) {
      if (event.added) {
        // TODO: The code is not complete. If users cancel generate invoice, we need to
        // move card to its original column.
        //if (status === 'invoice_created') {
        //  this.showInvoicePrompt(event.added.element);
        //} else {
        let loadId = event.added.element.load_id;
        let param = { load_id: loadId, status: status };
        // console.log(param);
        //}
        try {
          await this.updateLoadStatus(param);
          this.$vs.notify({
            time: 3000,
            color: 'success',
            title: 'Status Updated',
            text: 'Load Status Updated successfully.',
          });
          this.loads = this.loads.map((load) => {
            if (load.load_id === param.load_id) {
              return event.added.element;
            } else {
              return load;
            }
          });

          let newColumnForThisLoad = null;
          switch (param.status) {
            case this.loadStatus.open:
              newColumnForThisLoad = this.openLoadItems;
              break;
            case this.loadStatus.assign:
              newColumnForThisLoad = this.dispatchedItems;
              break;
            case this.loadStatus.in_transit:
              newColumnForThisLoad = this.transitItems;
              break;
            case this.loadStatus.delivered:
              newColumnForThisLoad = this.deliveredItems;
              break;
            case this.loadStatus.invoice_created:
            case this.loadStatus.invoice_sent:
            case this.loadStatus.invoice_paid:
              newColumnForThisLoad = this.paymentStatusItems;
              break;
          }
          if (newColumnForThisLoad) {
            let load = newColumnForThisLoad.find(
              (load) => load.load_id == param.load_id
            );
            if (load) {
              load.status = param.status;
            }
          }
        } catch (error) {
          this.$vs.notify({
            color: 'danger',
            title: 'Error',
            text: getApiErrorMsg(error),
          });
          this.updatePipelineColumns(this.loads);
          return;
        }
      }
    },

    async generateInvoice(load) {
      this.$vs.loading();

      const payload = {
        id: load.load_id,
      };

      if (this.invoicePrompt.skipFactoring) {
        payload.skipFactoring = this.invoicePrompt.skipFactoring;
      } else {
        payload.skipFactoring = false;
      }

      try {
        await this.$store.dispatch('load/generateInvoice', payload);

        this.$vs.notify({
          color: 'primary',
          title: 'Invoice Generated',
          text: 'Invoice Generated successfully.',
        });
      } catch (error) {
        this.$vs.notify({
          color: 'danger',
          title: 'Error',
          time: 10000,
          text: error.response.data.message,
        });
      } finally {
        this.$vs.loading.close();
      }
    },

    /* update load status */
    async updateLoadStatus(param) {
      await this.$store.dispatch('pipeline/updateStatus', param);
    },

    showInvoicePrompt(load) {
      this.invoicePrompt = {
        isActive: true,
        selectedLoad: load,
        noFactoring: load && load.customer && load.noFactoring,
      };
    },
    resetInvoicePrompt() {
      this.invoicePrompt = {
        isActive: false,
        selectedLoad: null,
        noFactoring: null,
        skipFactoring: false,
      };
    },

    hideColumn(columnValue) {
      if (!columnValue) return;
      this.$emit('update:hideColumns', { [columnValue]: false });
    },
  },
};
</script>

<style lang="scss" scoped>
/*#data-list-list-view > .vx-card {*/
/*  height: 75vh;*/
/*  overflow: hidden;*/
/*}*/

.invoice-generated-popup .vs-dialog {
  transition: all 0.2s;
  z-index: 100;
  width: calc(100% - 20px);
  margin: 10px;
  max-width: 400px;
  border-radius: 6px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.1);
  background: #fff;
  animation: rebound 0.3s;
}

.draggable-row {
  display: flex;
  width: 100%;
  @media (max-width: 1199px) {
    overflow-y: hidden;
    overflow-x: visible;
  }
}
.draggable-col {
  background: var(--surface-b);
  border-radius: 1rem;
  padding-top: 1rem;
  flex: 1;
  height: 89vh;
  @media (max-width: 768px) {
    min-width: 280px;
  }
}

/* .draggable-list {
  height: 100%;
} */

.draggable-item {
  /*height: 58vh;*/
  height: calc(100vh - 165px);
}

/* width */
.draggable-list > ::-webkit-scrollbar {
  width: 10px;
}

/* Track */
.draggable-list > ::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px #b3b3b3;
  border-radius: 10px;
  background: #f1f1f1;
}

/* Handle */
.draggable-list > ::-webkit-scrollbar-thumb {
  background: #b7b7b7;
  border-radius: 10px;
}

/* Handle on hover */
.draggable-list > ::-webkit-scrollbar-thumb:hover {
  background: #7a7a7a;
}
</style>
