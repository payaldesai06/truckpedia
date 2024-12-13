<template>
  <div class="vx-row">
    <!-- Sidebar -->
    <saved-equipment-sidebar
      v-if="addNewDataSidebar"
      :isSidebarActive="addNewDataSidebar"
      @closeSidebar="toggleDataSidebar"
      @equipment-updated="commonApiCall"
      @equipment-created="commonApiCall"
      :data="sidebarData"
    />

    <div class="vx-col flex items-center justify-between w-full mb-4">
      <h2 class="text-2xl opacity-75">Saved Equipments</h2>

      <vs-button type="filled" color="primary" @click.stop="addNewData"
        >Add Equipments</vs-button
      >
    </div>
<!-- 1. fix paging. 2. Equipment Type search box is too small. 
3. Make Edit and Delete buttons smaller, they are too wide now. 
You can use the buttons we used in Accounting. -->
    <div class="vx-col w-full" id="broker-datatable">
      <DataTable
        :value="items.data"
        :lazy="true"
        :paginator="true"
        :rows="25"
        :rowHover="true"
        :totalRecords="totalRecords"
        filterDisplay="row"
        :loading="loading"
        :scrollable="true"
        :style="{ width: '75vw' }"
        @page="onPage($event)"
        :rowsPerPageOptions="[10, 25, 50]"
      >
        <template #empty> No records found </template>

        <Column
          field="equipmentType"
          header="Equipment #"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.equipmentType }}
          </template>
          <template #filter>
            <InputText
              type="text"
              v-model="filters['equipmentType']"
              @input="onInputFilter"
              class="p-column-filter"
            />
          </template>
        </Column>

        <Column
          field="description"
          header="Description"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.description }}
          </template>
          <!-- <template #filter>
            <InputText
              type="text"
              v-model="filters['description']"
              @input="onInputFilter"
              class="p-column-filter"
            />
          </template> -->
        </Column>

        <Column
          field="weight"
          header="Weight"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.weight }}
          </template>
          <!-- <template #filter>
            <InputText
              type="text"
              v-model="filters['weight']"
              @input="onInputFilter"
              class="p-column-filter"
            />
          </template> -->
        </Column>

        <Column
          field="weightUnit"
          header="Weight Unit"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.weightUnit }}
          </template>
          <!-- <template #filter>
            <InputText
              type="text"
              v-model="filters['weightUnit']"
              @input="onInputFilter"
              class="p-column-filter"
            />
          </template> -->
        </Column>

        <Column
          field="qty"
          header="Quantity"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.qty }}
          </template>
          <!-- <template #filter>
            <InputText
              type="text"
              v-model="filters['qty']"
              @input="onInputFilter"
              class="p-column-filter"
            />
          </template> -->
        </Column>

        <Column
          field="qtyUnit"
          header="Quantity Unit"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.qtyUnit }}
          </template>
          <!-- <template #filter>
            <InputText
              type="text"
              v-model="filters['qtyUnit']"
              @input="onInputFilter"
              class="p-column-filter"
            />
          </template> -->
        </Column>

        <Column
          field="length"
          header="Length"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.length }}
          </template>
          <!-- <template #filter>
            <InputText
              type="text"
              v-model="filters['length']"
              @input="onInputFilter"
              class="p-column-filter"
            />
          </template> -->
        </Column>

        <Column
          field="width"
          header="Width"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.width }}
          </template>
          <!-- <template #filter>
            <InputText
              type="text"
              v-model="filters['width']"
              @input="onInputFilter"
              class="p-column-filter"
            />
          </template> -->
        </Column>

        <Column
          field="height"
          header="Height"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.height }}
          </template>
          <!-- <template #filter>
            <InputText
              type="text"
              v-model="filters['height']"
              @input="onInputFilter"
              class="p-column-filter"
            />
          </template> -->
        </Column>

        <Column header="Action">
          <template #body="slotProps">
            <div class="flex items-center space-x-2">
              <vs-button
                type="filled"
                color="#00cfe8"
                @click="editData(slotProps.data)"
              >
                Edit
              </vs-button>
            </div>
          </template>
        </Column>

        <Column header="">
          <template #body="slotProps">
            <div class="flex items-center space-x-2">
              <vs-button
                type="filled"
                color="#FF0000"
                @click="onConfirmDelete(slotProps.data)"
              >
                Delete
              </vs-button>
            </div>
          </template>
        </Column>

        <template #footer>
          In total there are {{ totalRecords }} items.
        </template>
      </DataTable>
    </div>
  </div>
</template>

<script>
import DatatableMixin from "@/mixins/datatableMixin";
import SavedEquipmentSidebar from "./SavedEquipmentSidebar";
import { mapState } from "vuex";

export default {
  name: "SavedEquipmentsDataTable",

  mixins: [DatatableMixin],

  components: {
    SavedEquipmentSidebar,
  },

  data() {
    return {
      filters: {
        equipmentType: null,
      },

      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {},
    };
  },

  mounted() {
    this.commonApiCall();
  },

  computed: {
    ...mapState("saved-equipment", { items: "equipments" }),
  },

  methods: {
    /**
     * Active User
     */
    onConfirmDelete(equipment) {
      this.$vs.dialog({
        type: "confirm",
        color: "primary",
        title: "Confirm",
        text: "Are you sure. You want to Delete this Equipment?",
        acceptText: "Yes",
        accept: () => this.deleteEquipment(equipment),
      });
    },

    async commonApiCall(filter = {}) {
      this.loading = true;
      await this.$store
        .dispatch("saved-equipment/getSavedEquipmentsDataTable", {
          eventForServer: this.eventForServer || {
            page: 0,
            rows: 25,
          },
          filter,
        })
        .then((data) => {})
        .catch((error) => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text: error.response.data.message,
          });
        })
        .finally(() => (this.loading = false));
    },

    async deleteEquipment(data) {
      this.loading = true;
      await this.$store
        .dispatch("saved-equipment/deleteEquipment", data.id)
        .then(() => {
          this.$vs.notify({
            color: "primary",
            title: "Equipment Deleted",
            text: "Equipment deleted successfully.",
          });
          this.commonApiCall();
        })
        .catch((error) => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text: error.response.data.message,
          });
        })
        .finally(() => (this.loading = false));
    },

    // sidebar
    addNewData() {
      this.sidebarData = {};
      this.toggleDataSidebar(true);
    },

    editData(data) {
      this.sidebarData = data;
      this.toggleDataSidebar(true);
    },

    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
    },
  },
};
</script>
