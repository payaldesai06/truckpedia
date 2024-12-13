<template>
  <div>
    <vx-card>
      <div class="vx-row justify-between items-center">
        <div class="vx-col">
        </div>
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
            @editItem="editRecord"
            @onPage="onPage"
            :loading="loading"
            :totalRecords="totalRecords"
            :rows="rows"
          />
        </div>
      </div>
    </vx-card>
    <AddItem
      :is-show="showItemModal"
      :selectedItemId="selectedItemId"
      :data="selectedItem"
      @onClose="handleItemModal(false)"
      @refresh="init"
    />
  </div>
</template>

<script>
import { getApiErrorMsg } from '@/helpers/helper';
import TableList from './ExpensesTab/TableList.vue';
import AddItem from './ExpensesTab/AddItem.vue';
export default {
  name: 'ExpensesTab',
  data() {
    return {
      itemsList: [],
      showItemModal: false,
      selectedItemId: null,
      selectedItem: null,
      rows: 10,
      loading: false,
      totalRecords: 0,
    };
  },
  components: { TableList, AddItem },
  created() {
    this.init();
  },
  methods: {
    async init() {
      try {
        this.$vs.loading();
        await this.getExpenses();
      } catch (error) {
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      } finally {
        this.$vs.loading.close();
      }
    },
    async getExpenses(pageSize = 25, currentPage = 1) {
      try {
        const res = await this.$store.dispatch('accounting/getExpenses', {
          params: {
            page: currentPage,
            pageSize,
            fields: [
              'number',
              'date',
              'amount',
              'notes',
              'account',
              'payToCustomer',
              'linkedUser',
              'linkedTruck',
              'linkedTrailer',
            ],
          },
        });
        this.itemsList = res.data.payload.expenses;
        const meta = res.data.payload.meta;
        this.totalRecords = (meta || {}).totalItems || 0;
        this.rows = (meta || {}).perPage ? Number((meta || {}).perPage) : 10;
      } catch (error) {
        console.log(error);
        this.$vs.notify({
          time: 8000,
          color: 'danger',
          title: 'Error',
          text: getApiErrorMsg(error),
        });
      }
    },
    onPage({ page, rows }) {
      this.rows = rows;
      this.getExpenses(rows, page + 1);
    },
    handleItemModal(val) {
      this.$nextTick(() => {
        this.selectedItemId = null;
        this.showItemModal = val;
        this.selectedItem = null;
        if (val) {
          this.selectedItemId = 0;
        }
      });
    },
    editRecord(id) {
      this.selectedItemId = id;
      this.selectedItem = this.itemsList.find((item) => item.id === id);
      this.showItemModal = true;
    },
  },
};
</script>

<style scoped></style>
