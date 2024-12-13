<template>
  <div class="pipeline-sidebar mt-4 shadow-md h-85vh overflow-auto">
    <template>
      <div class="py-3 flex items-center justify-center bg-primary">
        <h3 class="text-base text-white">Pipeline Columns</h3>
      </div>
      <vs-divider class="mt-2" />

      <!-- Options -->
      <div class="px-2 mb-2">
        <div class="px-2 flex flex-col gap-2">
          <span class="flex items-center justify-between">
            <label>Open</label>
            <vs-switch
              v-model="hideColumns.open"
              @input="onHideColumnChange('open', $event)"
            />
          </span>
          <span class="flex items-center justify-between">
            <label>Dispatched</label>
            <vs-switch
              v-model="hideColumns.dispatched"
              @input="onHideColumnChange('dispatched', $event)"
            />
          </span>
          <span class="flex items-center justify-between">
            <label>In Transit</label>
            <vs-switch
              v-model="hideColumns.inTransit"
              @input="onHideColumnChange('inTransit', $event)"
            />
          </span>
          <span class="flex items-center justify-between">
            <label>Delivered</label>
            <vs-switch
              v-model="hideColumns.delivered"
              @input="onHideColumnChange('delivered', $event)"
            />
          </span>
          <span class="flex items-center justify-between">
            <label>Payment Status</label>
            <vs-switch
              v-model="hideColumns.paymentStatus"
              @input="onHideColumnChange('paymentStatus', $event)"
            />
          </span>
        </div>
      </div>
    </template>

    <template>
      <div class="py-3 flex items-center justify-center bg-primary mt-5">
        <h3 class="text-base text-white">Pipeline Labels</h3>
      </div>
      <vs-divider class="mt-2" />

      <!-- Options -->
      <div class="px-2 mb-2">
        <!-- Customer Details -->
        <div>
          <label class="text-base font-semibold">Customer Details</label>
          <vs-divider class="mt-2" />
          <div class="px-2 flex flex-col gap-2">
            <span class="flex items-center justify-between">
              <label>Company Name</label>
              <vs-switch
                v-model="showLabels.customerName"
                @input="onShowLabelChange('customerName', $event)"
              />
            </span>
            <span class="flex items-center justify-between">
              <label>Load Number</label>
              <vs-switch
                v-model="showLabels.loadNumber"
                @input="onShowLabelChange('loadNumber', $event)"
              />
            </span>
            <span class="flex items-center justify-between">
              <label>Reference ID</label>
              <vs-switch
                v-model="showLabels.loadReference"
                @input="onShowLabelChange('loadReference', $event)"
              />
            </span>
            <span class="flex items-center justify-between">
              <label>
                {{ showBillToCodeAsJobCode ? 'Job Code' : 'Bill To Code' }}
              </label>
              <vs-switch
                v-model="showLabels.billToCode"
                @input="onShowLabelChange('billToCode', $event)"
              />
            </span>
          </div>
        </div>
        <!-- Shipper -->
        <div class="mt-5">
          <label class="text-base font-semibold">Shipper</label>
          <vs-divider class="mt-2" />
          <div class="px-2 flex flex-col gap-2">
            <span class="flex items-center justify-between">
              <label>Shipper Name</label>
              <vs-switch
                v-model="showLabels.shipperName"
                @input="onShowLabelChange('shipperName', $event)"
              />
            </span>
            <span class="flex items-center justify-between">
              <label>Freight Equipment #</label>
              <vs-switch
                v-model="showLabels.shipperFreightEquipmentNumber"
                @input="
                  onShowLabelChange('shipperFreightEquipmentNumber', $event)
                "
              />
            </span>
            <span class="flex items-center justify-between">
              <label>Freight Description</label>
              <vs-switch
                v-model="showLabels.shipperFreightDescription"
                @input="onShowLabelChange('shipperFreightDescription', $event)"
              />
            </span>
            <span class="flex items-center justify-between">
              <label>City, State</label>
              <vs-switch
                v-model="showLabels.shipperCityState"
                @input="onShowLabelChange('shipperCityState', $event)"
              />
            </span>
            <span class="flex items-center justify-between">
              <label>Date & Time</label>
              <vs-switch
                v-model="showLabels.shipperDateTime"
                @input="onShowLabelChange('shipperDateTime', $event)"
              />
            </span>
          </div>
        </div>
        <!-- Receiver -->
        <div class="mt-5">
          <label class="text-base font-semibold">Receiver</label>
          <vs-divider class="mt-2" />
          <div class="px-2 flex flex-col gap-2">
            <span class="flex items-center justify-between">
              <label>Receiver Name</label>
              <vs-switch
                v-model="showLabels.receiverName"
                @input="onShowLabelChange('receiverName', $event)"
              />
            </span>
            <span class="flex items-center justify-between">
              <label>City, State</label>
              <vs-switch
                v-model="showLabels.receiverCityState"
                @input="onShowLabelChange('receiverCityState', $event)"
              />
            </span>
            <span class="flex items-center justify-between">
              <label>Date & Time</label>
              <vs-switch
                v-model="showLabels.receiverDateTime"
                @input="onShowLabelChange('receiverDateTime', $event)"
              />
            </span>
          </div>
        </div>
        <!-- Load Information -->
        <div class="mt-5">
          <label class="text-base font-semibold">Load Information</label>
          <vs-divider class="mt-2" />
          <div class="px-2 flex flex-col gap-2">
            <span class="flex items-center justify-between">
              <label>Miles</label>
              <vs-switch
                v-model="showLabels.miles"
                @input="onShowLabelChange('miles', $event)"
              />
            </span>
            <span class="flex items-center justify-between">
              <label>Total Amount</label>
              <vs-switch
                v-model="showLabels.totalAmount"
                @input="onShowLabelChange('totalAmount', $event)"
              />
            </span>
          </div>
        </div>
        <!-- Assign Driver & Equipment -->
        <div class="mt-5">
          <label class="text-base font-semibold"
            >Assign Driver & Equipment</label
          >
          <vs-divider class="mt-2" />
          <div class="px-2 flex flex-col gap-2">
            <span class="flex items-center justify-between">
              <label>Equipment Type</label>
              <vs-switch
                v-model="showLabels.equipmentType"
                @input="onShowLabelChange('equipmentType', $event)"
              />
            </span>
            <span class="flex items-center justify-between">
              <label>Driver</label>
              <vs-switch
                v-model="showLabels.driver"
                @input="onShowLabelChange('driver', $event)"
              />
            </span>
            <span class="flex items-center justify-between">
              <label>Truck</label>
              <vs-switch
                v-model="showLabels.truck"
                @input="onShowLabelChange('truck', $event)"
              />
            </span>
            <span class="flex items-center justify-between">
              <label>Trailer</label>
              <vs-switch
                v-model="showLabels.trailer"
                @input="onShowLabelChange('trailer', $event)"
              />
            </span>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<!-- eslint-disable multiline-ternary -->
<script>
import { mapGetters } from "vuex";

export default {
  name: "PipelineSidebar",
  props: {
    userCustomization: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    ...mapGetters("customization", ["customization"])
  },
  data () {
    return {
      hideColumns: {
        open: true,
        dispatched: true,
        inTransit: true,
        delivered: true,
        paymentStatus: true
      },
      showLabels: {
        customerName: true,
        loadNumber: true,
        loadReference: false,
        billToCode: false,
        miles: false,
        totalAmount: false,
        shipperName: true,
        shipperFreightEquipmentNumber: false,
        shipperFreightDescription: false,
        shipperCityState: true,
        shipperDateTime: true,
        receiverName: true,
        receiverCityState: true,
        receiverDateTime: true,
        equipmentType: false,
        driver: false,
        truck: false,
        trailer: false
      }
    };
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      const { hideColumns, showLabels } = this.userCustomization
      const labels = {
        ...showLabels,
        driver:
          showLabels && showLabels.driver !== undefined
            ? showLabels.driver
            : this.customization.show_driver_truck_on_pipeline,
        truck:
          showLabels && showLabels.truck !== undefined
            ? showLabels.truck
            : this.customization.show_driver_truck_on_pipeline
      }

      this.hideColumns = hideColumns
        ? { ...this.hideColumns, ...hideColumns }
        : this.hideColumns
      this.showLabels = { ...this.showLabels, ...labels }
    },
    onHideColumnChange (key, val) {
      this.$emit("update:hideColumns", { [key]: val })
    },
    onShowLabelChange (key, val) {
      this.$emit("update:showLabels", { [key]: val })
    }
  }
};
</script>
<style lang="scss" scoped>
.pipeline-sidebar {
  &::-webkit-scrollbar {
    width: 8px;
    overflow: visible;
  }

  &::-webkit-scrollbar-thumb {
    border-style: solid;
    border-color: transparent;
    border-width: 4px;
    background-color: #dadce0;
    border-radius: 8px;
    box-shadow: none;
  }

  // Mozilla Firefox scrollbar
  scrollbar-width: thin;
  scrollbar-color: #dadce0 #dadce0;
}

// Utility classes
.h-85vh {
  height: 85vh;
}

.bg-primary {
  background-color: rgb(115, 103, 240);
}
</style>
