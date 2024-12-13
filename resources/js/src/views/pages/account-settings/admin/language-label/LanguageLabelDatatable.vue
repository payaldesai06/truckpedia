<template>
  <div class="vx-row">
    <!-- Sidebar -->
    <language-label-sidebar
      :isSidebarActive="addNewDataSidebar"
      @closeSidebar="toggleDataSidebar"
      :data="sidebarData"
    />

    <div class="vx-col flex items-center justify-between w-full mb-4">
      <h2 class="text-2xl opacity-75">Language Labels</h2>

      <vs-button type="filled" color="primary" @click.stop="addNewData"
        >Add New Label</vs-button
      >
    </div>

    <div class="vx-col w-full">
      <DataTable
        :value="items.data"
        :lazy="true"
        :paginator="true"
        :rows="rows"
        filterDisplay="row"
        :rowHover="true"
        :totalRecords="totalRecords"
        :filters="filters"
        :loading="loading"
        :scrollable="true"
        @sort="onSort($event)"
        @page="onPage($event)"
        :rowsPerPageOptions="[5, 10, 15]"
      >
        <template #empty>
          No records found
        </template>

        <Column
          field="label_name"
          header="Label Name"
          :sortable="true"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.label_name }}
          </template>
          <template #filter>
            <InputText
              type="text"
              v-model="filters['label_name']"
              @input="onInputFilter"
              class="p-column-filter"
            />
          </template>
        </Column>

        <Column
          field="label_english"
          header="Label English"
          :sortable="true"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.label_english }}
          </template>
          <template #filter>
            <InputText
              type="text"
              v-model="filters['label_english']"
              @input="onInputFilter"
              class="p-column-filter"
            />
          </template>
        </Column>

        <Column
          field="label_chinese"
          header="Label Chinese"
          :sortable="true"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.label_chinese }}
          </template>
          <template #filter>
            <InputText
              type="text"
              v-model="filters['label_chinese']"
              @input="onInputFilter"
              class="p-column-filter"
            />
          </template>
        </Column>

        <Column header="Action">
          <template #body="slotProps">
            <div class="flex items-center space-x-2">
              <vs-button
                type="filled"
                color="#00cfe8"
                @click="editData(slotProps.data)"
                >Edit</vs-button
              >
              <vs-button
                type="filled"
                color="danger"
                @click="onConfirmDelete(slotProps.data)"
                >Remove</vs-button
              >
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
import LanguageLabelSidebar from "./LanguageLabelSidebar";
import DatatableMixin from "@/mixins/datatableMixin";
import { mapState } from "vuex";

export default {
  name: "LanguageLabelDatatable",

  mixins: [DatatableMixin],

  components: {
    LanguageLabelSidebar
  },

  data() {
    return {
      filters: {
        label_name: "",
        label_english: "",
        label_chinese: ""
      },

      // Data Sidebar
      addNewDataSidebar: false,
      sidebarData: {}
    };
  },

  mounted() {
    this.commonApiCall();
  },

  computed: {
    ...mapState("language-label", { items: "languageLabels" })
  },

  methods: {
    async commonApiCall(filter = {}) {
      this.loading = true;

      try {
        await this.$store.dispatch("language-label/getLanguageLabelDatatable", {
          eventForServer: this.eventForServer,
          filter
        });
      } catch (error) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message
        });
      } finally {
        this.loading = false;
      }
    },

    onConfirmDelete(languageLabel) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: "Confirm",
        text: "Are you sure. You want to delete this Language Label?",
        acceptText: "Yes",
        accept: () => this.deleteLanguageLabel(languageLabel)
      });
    },

    deleteLanguageLabel(languageLabel) {
      this.$vs.loading();

      this.$store
        .dispatch("language-label/deleteLanguageLabel", languageLabel.label_id)
        .then(() => {
          this.$vs.notify({
            color: "primary",
            title: "Language Label Deleted",
            text: "Language label deleted successfully."
          });
        })
        .catch(error => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text: error.response.data.message
          });
        })
        .finally(() => this.$vs.loading.close());
    },

    // sidebar
    addNewData() {
      this.sidebarData = {};
      this.toggleDataSidebar(true);
    },

    editData(data) {
      // this.sidebarData = JSON.parse(JSON.stringify(this.blankData))
      this.sidebarData = data;
      this.toggleDataSidebar(true);
    },

    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep {
  .p-datatable-tbody {
    td {
      @apply truncate;
    }
  }
}
</style>
