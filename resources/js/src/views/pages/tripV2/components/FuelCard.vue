<template>
  <div>
    <vx-card>
      <div class="vx-row justify-end items-center">
        <div class="vx-col">
          <vs-button
            color="primary"
            type="filled"
            @click="handleItemModal(true)"
          >
            New
          </vs-button>
        </div>
      </div>
      <div class="vx-row mt-5">
        <div class="vx-col w-full">
          <TableList
            :tableData="itemsList"
            @onPage="onPage"
            :loading="loading"
            :totalRecords="totalRecords"
            :rows="rows"
            @editItem="editRecord"
            @deleteItem="openDeleteConfirmation"
          />
        </div>
      </div>
    </vx-card>
    <div>
      <AddItems
        :is-show="fuelCardSidebar.isActive"
        :data="fuelCardSidebar.selectedRecord"
        @onClose="handleItemModal(false)"
        @refresh="init"
      />
    </div>
  </div>
</template>

<script>
import { getApiErrorMsg } from '@/helpers/helper';
export default {
  name: 'FuelCard',
  components: {
    AddItems: () => import('./FuelCard/AddItems.vue'),
    TableList: () => import('./FuelCard/TableList.vue'),
  },
  data() {
    return {
      showItemModal: false,
      selectedItemId: null,
      selectedItem: null,
      rows: 10,
      loading: false,
      totalRecords: 0,
      itemsList: [],
      fuelCardSidebar: {
        isActive: false,
        selectedRecord: null,
      },
    };
  },
  created() {
    this.init();
  },
  methods: {
    async init(pageSize = 25, currentPage = 1) {
      try {
        const parameter = {
          page: currentPage,
          pageSize: pageSize,
          fields: [
            'cardNumber',
            'status',
            'expirationDate',
            'notes',
            'currentAssignee',
          ],
        };
        const {
          data: { payload },
        } = await this.$store.dispatch('accounting/getFuelCards', parameter);
        if (payload) {
          this.itemsList =
            payload && payload.fuelCards ? payload.fuelCards : [];
          this.totalRecords =
            payload && payload.meta ? payload.meta.totalItems : 0;
        }
      } catch (error) {
        this.itemsList = [];
        this.totalRecords = 0;
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
      }
    },
    handleItemModal(val) {
      this.fuelCardSidebar.selectedRecord = null;
      this.fuelCardSidebar.isActive = val;
    },
    async editRecord(id) {
      try {
        const {
          data: { payload },
        } = await this.$store.dispatch('accounting/getFuelCardById', id);
        if (payload) {
          this.fuelCardSidebar.isActive = true;
          this.fuelCardSidebar.selectedRecord = payload;
        }
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    async openDeleteConfirmation(id) {
      await this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Delete Issue',
        text: 'Are you sure you want to delete this Fuel Card?',
        accept: () => this.deleteCard(id),
      });
    },
    async deleteCard(id) {
      try {
        await this.$store.dispatch('accounting/deleteFuelCard', id);
        this.init();
        this.$vs.notify({
          time: 8000,
          title: 'Success',
          text: 'Deleted successfully',
          color: 'primary',
        });
      } catch (error) {
        await this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    onPage({ page, rows }) {
      this.init(rows, page + 1);
    },
  },
};
</script>

<style></style>
