<template>
  <vs-card class="lane-rates">
    <div class="header flex justify-between items-center">
      <div class="btn-group">
        <vs-button
          @click="isListView = true"
          :class="isListView ? 'active' : ''"
        >
          List View
        </vs-button>
      </div>
      <h1>RATES</h1>
      <div class="flex gap-3">
        <vs-button class="header-btn" @click="laneModalVisible = true">
          <div class="flex items-center col-gap-3">
            <div class="btn-icon bg-white">
              <i class="pi pi-plus text-primary"></i>
            </div>
            <p>Add new</p>
          </div>
        </vs-button>
      </div>
    </div>
    <RatesListView
      v-if="isListView"
      ref="ratesListViewRef"
      @updateLane="getLaneData"
    ></RatesListView>
    <LaneDialog
      class="edit-schedule-dialog"
      :isDialogActive="laneModalVisible"
      :lane="laneData"
      :truckOptions="truckOptions"
      @getCarrierMarketplaceLanes="getCarrierMarketplaceLanes"
      @close="
        () => {
          laneModalVisible = false;
          laneData = {};
        }
      "
    />
  </vs-card>
</template>
<script>
export default {
  name: 'LaneRates',
  data() {
    return {
      isListView: true,
      laneModalVisible: false,
      truckOptions: [],
      editScheduleModalVisible: false,
      laneData: {},
    };
  },
  created() {
    this.getAllTrucks();
    this.fetchAccessorialFee();
  },
  components: {
    RatesListView: () => import('./components/RatesListView.vue'),
    LaneDialog: () => import('./components/LaneDialog'),
  },
  methods: {
    async getAllTrucks() {
      try {
        const {
          payload: { data },
        } = await this.$store.dispatch('truck/getAllTrucks');
        this.truckOptions = data || [];
      } catch (error) {}
    },
    getLaneData(data) {
      try {
        this.laneData = structuredClone(data);
        this.laneModalVisible = true;
      } catch (e) {
        console.log(e);
      }
    },
    getCarrierMarketplaceLanes() {
      this.editScheduleModalVisible = false;
      this.laneData = {};
      this.$refs.ratesListViewRef.getAllMarketplaceLanes();
    },
    async fetchAccessorialFee() {
      try {
        await this.$store.dispatch('planningV2/getAccessorialFee');
      } catch (error) {}
    },
  },
};
</script>
<style lang="scss">
.edit-schedule-dialog {
  .includeIcon {
    display: none !important;
  }
  .routes-selector {
    margin-top: 0 !important;
  }
}
.lane-rates {
  .header {
    margin-top: 20px;
    .btn-group {
      border: 1px solid #b3bacb;
      padding: 2px;
      border-radius: 50px;
      button {
        padding: 8px 16px !important;
        background: transparent !important;
        color: rgb(var(--vs-primary)) !important;
        border: 0 !important;
        border-radius: 50px;
        box-shadow: none !important;
        &.active {
          background: rgb(var(--vs-primary)) !important;
          .vs-button--text {
            color: #fff !important;
          }
        }
      }
    }
    .header-btn {
      padding: 8px 16px !important;
      border-radius: 4px !important;
      .btn-icon {
        width: 16px;
        height: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        i {
          color: #fff;
          font-size: 10px;
          font-weight: bold;
        }
      }
    }
  }
  .p-datatable {
    .p-datatable-wrapper {
      margin-top: 20px;
      thead {
        th {
          padding: 6px 16px;
          border: 0;
        }
      }
      th {
        background: #e7f1fe !important;
        font-size: 15px;
        color: #71717a;
      }
      tr {
        &.p-datatable-row-expansion {
          td {
            border: 0;
          }
        }
        &:not(.p-datatable-row-expansion) {
          td {
            .frequency-chip {
              .vs-chip--text {
                text-transform: capitalize;
              }
            }
            p {
              font-size: 16px;
              font-weight: 700;
              color: rgb(var(--vs-primary));
            }
          }
        }
      }
      .p-row-toggler {
        border-radius: 50%;
        border: 1px solid #71717a !important;
        width: 25px;
        height: 25px;
        outline: none !important;
        box-shadow: none !important;
      }
    }
  }
  .accordian-cols-header {
    background: #e7f1fe;
    margin-top: 16px;
    padding: 6px 16px;
    p {
      color: #71717a;
      font-size: 14px;
    }
  }
}

.schedule-form-dialog {
  .p-dialog {
    width: 80vw !important;

    background: #fff;
    @media only screen and (max-width: 1100px) {
      width: 92vw !important;
    }
    /* 1500px and up */
    @media only screen and (min-width: 1500px) {
      width: 70vw !important;
    }
  }

  .vs-input--icon {
    top: 12px;
    border-right: none !important;
    z-index: 10 !important;
  }

  .vs-dropdown--menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
