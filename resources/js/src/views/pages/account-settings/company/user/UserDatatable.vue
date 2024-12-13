<template>
  <div class="vx-row">
    <!-- Sidebar -->
    <user-sidebar
      :isSidebarActive="addNewDataSidebar"
      :data="sidebarData"
      @closeSidebar="toggleDataSidebar"
      @onUserChange="handleUserChange"
    />

    <div class="vx-col flex items-center justify-between w-full mb-4">
      <h2 class="text-2xl opacity-75">Users</h2>

      <vs-button type="filled" color="primary" @click.stop="addNewData"
        >Add New User</vs-button
      >
    </div>

    <div class="vx-col w-full mb-8">
      <vs-button type="filled" color="primary">
        Active Users<span class="ml-2">({{ active }})</span>
      </vs-button>

      <vs-button type="filled" color="warning">
        Deactive Users<span class="ml-2">({{ inactive }})</span>
      </vs-button>
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
        <template #empty> No records found </template>
        <Column
          field="user_details"
          header="Name"
          :sortable="false"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.user_details.first_name }}
            {{ slotProps.data.user_details.last_name }}
          </template>
          <template #filter>
            <InputText
              type="text"
              v-model="filters.name"
              @input="onInputFilter"
              class="p-column-filter"
            />
          </template>
          <template #filter>
            <InputText
              type="text"
              v-model="filters.name"
              @input="onInputFilter"
              class="p-column-filter"
            />
          </template>
        </Column>
        <Column
          field="email"
          header="Email Address"
          :sortable="true"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            {{ slotProps.data.email }}
          </template>
          <template #filter>
            <InputText
              type="text"
              v-model="filters['email']"
              @input="onInputFilter"
              class="p-column-filter"
            />
          </template>
        </Column>

        <Column
          field="role"
          header="Role"
          :sortable="true"
          :showFilterMenu="false"
        >
          <template #body="slotProps">
            <span class="capitalize">{{
              slotProps.data.role.split("_").join(" ")
            }}</span>
          </template>
          <template #filter>
            <InputText
              type="text"
              v-model="filters['role']"
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
                >Edit
              </vs-button>
              <!--              <vs-button type="filled" color="danger"-->
              <!--                         @click="onConfirmDelete(slotProps.data)">Remove-->
              <!--              </vs-button>-->

              <template v-if="slotProps.data.status">
                <template v-if="slotProps.data.status == 'active'">
                  <vs-button
                    type="filled"
                    color="warning"
                    @click="onConfirmDeactivate(slotProps.data)"
                    >Deactivate
                  </vs-button>
                </template>

                <template v-else>
                  <vs-button
                    type="filled"
                    color="success"
                    @click="onConfirmActive(slotProps.data)"
                    >Activate
                  </vs-button>
                </template>
              </template>
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
import UserSidebar from "./UserSidebar";
import DatatableMixin from "@/mixins/datatableMixin";
import { mapState } from "vuex";

export default {
  name: "UserDatatable",

  mixins: [DatatableMixin],

  components: {
    UserSidebar,
  },

  data() {
    return {
      active: 0,
      inactive: 0,
      filters: {
        role: "",
        email: "",
        name: "",
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
    ...mapState("company-user", { items: "companyUsers" }),
  },

  methods: {
    async commonApiCall(filter = {}) {
      this.loading = true;

      await this.$store
        .dispatch("company-user/getCompanyUserDatatable", {
          eventForServer: this.eventForServer,
          filter,
        })
        .then((data) => {
          this.active = data.meta.active_user;
          this.inactive = data.meta.inactive_user;
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

    /**
     * Active User
     */
    onConfirmActive(user) {
      this.$vs.dialog({
        type: "confirm",
        color: "primary",
        title: "Confirm",
        text: "Are you sure. You want to Activate this User?",
        acceptText: "Yes",
        accept: () => this.activateUser(user),
      });
    },

    async activateUser(user) {
      const payload = {
        id: user.user_id,
        payload: {
          status: "active",
        },
      };

      this.$vs.loading();

      try {
        await this.$store.dispatch("company-user/changeStatus", payload);

        this.$vs.notify({
          color: "primary",
          title: "User Status",
          text: "User status change successfully.",
        });
      } catch (error) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message,
        });
      } finally {
        this.$vs.loading.close();

        await this.commonApiCall();
      }
    },

    /**
     * Inactive User
     */
    onConfirmDeactivate(user) {
      this.$vs.dialog({
        type: "confirm",
        color: "danger",
        title: "Confirm",
        text: "Are you sure. You want to Deactivate this User?",
        acceptText: "Yes",
        accept: () => this.DeactivateUser(user),
      });
    },

    async DeactivateUser(user) {
      const payload = {
        id: user.user_id,
        payload: {
          status: "inactive",
        },
      };

      this.$vs.loading();

      try {
        await this.$store.dispatch("company-user/changeStatus", payload);

        this.$vs.notify({
          color: "primary",
          title: "User Status",
          text: "User status change successfully.",
        });
      } catch (error) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message,
        });
      } finally {
        this.$vs.loading.close();

        await this.commonApiCall();
      }
    },

    // // Confirm Dialog
    // onConfirmDelete (companyUser) {
    //   this.$vs.dialog({
    //     type: 'confirm',
    //     color: 'danger',
    //     title: 'Confirm',
    //     text: 'Are you sure. You want to delete this User?',
    //     acceptText: 'Yes',
    //     accept: () => this.deleteCompanyUser(companyUser)
    //   })
    // },
    //
    // deleteCompanyUser (companyUser) {
    //   this.$vs.loading()
    //
    //   this.$store.dispatch('company-user/deleteCompanyUser', companyUser.user_id)
    //     .then(() => {
    //       this.$vs.notify({
    //         color: 'primary',
    //         title: 'User Deleted',
    //         text: 'User deleted successfully.'
    //       })
    //     })
    //     .catch(error => {
    //       this.$vs.notify({
    //         color: 'danger',
    //         title: 'Error',
    //         text: error.response.data.message
    //       })
    //     })
    //     .finally(() => (this.$vs.loading.close()))
    // },

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
    },

    handleUserChange() {
      // calling get users api on user addition or edition
      this.commonApiCall();
    },
  },
};
</script>
