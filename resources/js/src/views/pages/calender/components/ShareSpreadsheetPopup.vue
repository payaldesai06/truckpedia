<template>
  <div style="min-height: 280px">
    <div class="flex items-center justify-center space-x-2">
      <div class="w-full">
        <multiselect v-model="selectedUser" placeholder="Select user" :options="users" label="name" :allow-empty="false"
          :show-labels="false"></multiselect>
      </div>
      <div class="w-full">
        <multiselect v-model="accessLevel" placeholder="Select access level" label="text" :options="accessLevelOption"
          :allow-empty="false" :show-labels="false">
          <template slot="option" slot-scope="props">
            <div class="option__desc">
              <span>{{ props.option.text }}</span> <br />
              <span class="option__small">{{ props.option.desc }}</span>
              </div>
          </template>
        </multiselect>
      </div>
      <div>
        <vs-button color="primary" type="filled" @click="updateAccessLevel">Confirm</vs-button>
      </div>
    </div>
    <div>
      <vs-list>
        <vs-list-header title="Users" color="primary"></vs-list-header>
        <div v-for="user in users" :key="user.id" title="">
          <div v-if="user.accessLevel" class="flex items-center">
            <vs-avatar color="primary" />
            <div>
              Shared with {{ user.name }} : <span class="capitalize">{{ user.accessLevel }}</span>
            </div>
          </div>
        </div>
      </vs-list>
    </div>
  </div>
</template>



<script>
export default {
  props: {
    spreadsheetId: { 
      required: true
    }
  },
  data() {
    return {
      selectedUser: "",
      accessLevel: "",
      users: [],
      accessLevelOption: [
        { text: "Admin", value: 'admin', desc: 'Can fully configure and edit this spreadsheet' },
        { text: "Editor", value: 'editor', desc: 'Can only edit cell values' },
        { text: "Viewer", value: 'viewer', desc: 'Read-only, cannot edit' },
        { text: "No Access", value: null, desc: 'Can not access this spreadsheet' }],
    };
  },
  methods: {
    getUsersAccessLevel() {
      this.selectedUser = "";
      this.accessLevel = "";
      this.users = [];
      const payload = {
        id: this.spreadsheetId
      }
      this.$store.dispatch('spreadsheet/getAccessDetails', payload).then(({ data }) => {
        this.users = data.payload.companyUsers;
      }).catch((error) => {
         this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message,
        });
      })
    },
    updateAccessLevel() {
      this.$vs.loading();
      const payload = {
        id: this.spreadsheetId,
        userId: this.selectedUser.userId,
        accessLevel: this.accessLevel.value
      };
      this.$store.dispatch('spreadsheet/updateAccessLevel', payload).then(({ data }) => {
        this.$vs.notify({
          color: "success",
          title: "Access Level",
          text: 'Access level successfully updated',
        });
      }).catch((error) => {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text: error.response.data.message,
        });
      }).finally(() => {
        this.$vs.loading.close();
        this.getUsersAccessLevel();
      });
    }
  }
};
</script>


<style>
.option__small{
      width: 50px;
    white-space: normal;
    font-size: 10px;
}
</style>