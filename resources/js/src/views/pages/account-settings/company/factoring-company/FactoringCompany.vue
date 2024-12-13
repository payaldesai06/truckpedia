<template>
  <div class="vx-row">
    <add-factoring-company-sidebar
      :isSidebarActive="addNewDataSidebar"
      @closeSidebar="toggleDataSidebar"
      :data="sidebarData"
      @factoringCompany:added="getFactoringCompanies"
      v-if="Object.entries(this.sidebarData).length === 0"
    />

    <edit-factoring-company-sidebar
      :isSidebarActive="addNewDataSidebar"
      @closeSidebar="toggleDataSidebar"
      :data="sidebarData"
      @factoringCompany:updated="getFactoringCompanies"
      v-else
    />

    <div class="vx-col flex items-center justify-between w-full mb-4">
      <h2 class="text-2xl opacity-75">Factoring Companies</h2>
      <vs-button
        type="filled"
        color="primary"
        v-if="!factoringCompanies.length"
        @click.stop="addNewData"
        >Create A Factoring Company</vs-button
      >
    </div>

    <div class="vx-col w-full">
      <vs-tabs>
        <vs-tab label="Factoring Companies">
          <div v-for="(item, index) in factoringCompanies" :key="index">
            <Card class="m-4">
              <template #title>
                <p>
                  {{ item.name }}
                  <span
                    class="float-right mr-5"
                    style="font-size: small !important"
                  >
                    <span class="blue--text mr-1" style="color: blue"></span>
                    <span>
                      <a style="color: #00cfe8" class="cursor-pointer" @click.stop="editData(item)"
                        >Edit</a
                      >
                      <a style="color: red" class="cursor-pointer" @click.stop="openDeleteConfirmation(item)"
                        >Delete</a
                      >
                    </span>
                  </span>
                </p>
              </template>
              <template #footer> </template>
            </Card>
          </div>
        </vs-tab>
      </vs-tabs>
    </div>
  </div>
</template>

<script>
import AddFactoringCompany from "./AddFactoringCompany.vue";
import EditFactoringCompany from "./EditFactoringCompany.vue";
// import { mapGetters } from "vuex";
export default {
  name: "Factor-Companies",
  // mixins: [DatatableMixin],
  components: {
    "add-factoring-company-sidebar": AddFactoringCompany,
    "edit-factoring-company-sidebar": EditFactoringCompany
  },
  data() {
    return {
      // isFactoringCompanyExist: true,
      factoringCompanies: [],
      addNewDataSidebar: false,
      sidebarData: {}
    };
  },
  computed: {
    // ...mapGetters("factoring-company", ["allFactoringCompanies"])
  },
  mounted() {
    this.getFactoringCompanies();
    // this.factoringCompanies = this.allFactoringCompanies;
  },
  /*watch: {
    allFactoringCompanies: {
      handler(val){
        this.factoringCompanies = val;
      }
    }
  },*/
  methods: {
    async getFactoringCompanies() {
      this.loading = true;
      await this.$store
        .dispatch("factoring-company/getAllFactoringCompanies")
        .then(data => {
          this.factoringCompanies = data.payload;
          if (this.factoringCompanies.length) {
            // this.isFactoringCompanyExist = false;
          }
        })
        .catch(error => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text: error.response.data.message
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

    openDeleteConfirmation(data) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: 'Delete Factoring Company',
        text: 'Are you sure you want to remove this factoring company?',
        accept: () => this.deleteData(data),
      });
    },

    async deleteData(data) {
      this.loading = true;
      await this.$store
        .dispatch("factoring-company/deleteFactoringCompany", data.id)
        .then(() => {
          this.getFactoringCompanies();
        })
        .catch(error => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text: error.response.data.message
          });
        })
        .finally(() => (this.loading = false));
    },

    toggleDataSidebar(val = false) {
      this.addNewDataSidebar = val;
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep {
  img {
    @apply object-cover;
  }
}
</style>
