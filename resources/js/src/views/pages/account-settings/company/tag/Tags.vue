<template>
  <div class="vx-row">
    <add-tag-sidebar
      :isSidebarActive="addTagSidebarIsActive"
      @closeSidebar="toggleDataSidebar"
      :data="{}"
      @tag:added="getTags"
    />

    <edit-tag-sidebar
      :isSidebarActive="updateTagSidebarIsActive"
      @closeSidebar="toggleDataSidebar"
      :data="sidebarData"
      @tag:updated="getTags"
    />

    <div class="vx-col flex items-center justify-between w-full mb-4">
      <h2 class="text-2xl opacity-75">Tags</h2>
      <vs-button type="filled" color="primary" @click.stop="addNewData"
        >Create A Tag</vs-button
      >
    </div>

    <div class="vx-col w-full">
      <vs-tabs>
        <vs-tab label="Tags">
          <div v-for="(item, index) in tags" :key="index">
            <Card class="m-4">
              <template #title>
                <p>
                  {{ item.business_name }}
                  <span
                    class="float-right mr-5"
                    style="font-size: small !important"
                  >
                    <span class="blue--text mr-1" style="color: blue"></span>
                    <span>
                      <a style="color: #00cfe8" @click.stop="editData(item)"
                        >Edit</a
                      ></span
                    >
                  </span>
                </p>
              </template>

              <!-- <template #content class="mt-5 mb-5">
                <p>
                  No users have access to this tag specifically
                  <span class="float-right">
                    <Button
                      icon="pi pi-plus"
                      label="Add user to Tag"
                      class="p-button-plain text-right"
                      style="margin-left: .5em;"
                    />
                  </span>
                </p>
              </template> -->

              <template #footer>
                <!--                <Button icon="pi pi-check" label="Save"/>-->
              </template>
            </Card>
          </div>
        </vs-tab>
      </vs-tabs>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import AddTag from "./AddTag";
import EditTag from "./EditTag";

export default {
  name: "Tags",
  // mixins: [DatatableMixin],

  components: {
    "add-tag-sidebar": AddTag,
    "edit-tag-sidebar": EditTag,
  },

  data() {
    return {
      tags: [],
      // searchQuery: null,
      /*filters: {
        business_name: "",
        email: "",
        phone_number: "",
        address: "",
        city: "",
        state: "",
        zipcode: "",
        usdot_number: "",
        load_unique_id_started_from: ""
      },*/
      // Data Sidebar
      addTagSidebarIsActive: false,
      updateTagSidebarIsActive: false,
      sidebarData: {},
    };
  },

  computed: {
    // ...mapState("tags", { items: "tags" }),
    /*resultQuery(){
      if(this.searchQuery){
      return this.items.data.filter((item)=>{
        return this.searchQuery.toLowerCase().split(' ').every(v => item.business_name.toLowerCase().includes(v) || item.email.toLowerCase().includes(v))
      })
      }else{
        return this.items.data
      }
    }*/
  },

  mounted() {
    this.getTags();
  },

  methods: {
    async getTags() {
      this.loading = true;
      await this.$store
        .dispatch("tag/getAllTags")
        .then((data) => {
          this.tags = data.payload.data;
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
      this.addTagSidebarIsActive = true;
    },

    editData(data) {
      this.sidebarData = data;
      this.updateTagSidebarIsActive = true;
    },

    toggleDataSidebar() {
      this.addTagSidebarIsActive = false;
      this.updateTagSidebarIsActive = false;
      this.sidebarData = {};
    },
  },
};
</script>

<style lang="scss" scoped>
::v-deep {
  img {
    @apply object-cover;
  }
}
</style>
