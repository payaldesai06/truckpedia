<template>
  <div class="spreadsheet-list-component flex items-center">
    <!-- render When user have access of spreadsheet  -->
    <div
      class="view-bar-container pr-2"
      ref="parent"
      :class="!hideHomeTab ? 'bottom-box-shadow' : ''"
    >
      <div class="flex">
        <div class="view-bar-item" v-if="!hideHomeTab">
          <div
            class="flex items-center justify-center"
            :class="[selectedTab == 'Home' ? 'active-spreadsheet' : '']"
            @click.stop="handleTabActive('Home')"
          >
            <span>Home</span>
          </div>
        </div>
        <!-- spreadsheet list   -->
        <template v-if="!hideSpreadsheet">
          <div
            class="view-bar-item"
            v-for="(item, index) in spreadsheetList"
            :key="index"
          >
            <div
              class="flex items-center justify-center"
              :class="[selectedTab == item.id ? 'active-spreadsheet' : '']"
              @click.stop="handleTabActive(item.id, item.name)"
            >
              <div v-if="modifySheetId == item.id" class="flex items-center">
                <input
                  class="spreadsheet-rename-input"
                  :value="item.name"
                  @keyup.enter="
                    modifySpreadsheetName($event.target.value, item.id)
                  "
                />
                <div
                  class="cursor-pointer"
                  style="position: relative; right: 20px; display: flex"
                  @click="modifySheetId = ''"
                >
                  <vs-icon icon="close"></vs-icon>
                </div>
              </div>

              <span v-else>
                <div
                  class="flex items-center"
                  @dblclick="handleRename(item.id)"
                >
                  <span class="mr-2">{{ item.name }}</span>
                  <div
                    class="show-hover"
                    v-if="
                      item.accessLevel == 'owner' || item.accessLevel == 'admin'
                    "
                  >
                    <vs-dropdown
                      vs-custom-content
                      vs-trigger-click
                      @click.stop.native
                    >
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="#000000"
                        >
                          <path d="M0 0h24v24H0z" fill="none" />
                          <path d="M7 10l5 5 5-5z" />
                        </svg>
                      </div>
                      <vs-dropdown-menu class="spreadsheet-list-dropdown-items">
                        <vs-dropdown-item>
                          <p @click.stop="handleRename(item.id)">
                            Rename Spreadsheet
                          </p>
                        </vs-dropdown-item>
                        <vs-dropdown-item>
                          <p
                            class="text-danger"
                            @click="openDeleteWarningDialog(item.id)"
                          >
                            Delete Spreadsheet
                          </p>
                        </vs-dropdown-item>
                      </vs-dropdown-menu>
                    </vs-dropdown>
                  </div>
                </div>
              </span>
            </div>
          </div>
          <portal-target name="add-spreadsheet-btn-in-spreadsheet-list">
          </portal-target>
          <portal
            :to="
              hideHomeTab
                ? 'add-spreadsheet-btn-in-dispatch'
                : 'add-spreadsheet-btn-in-spreadsheet-list'
            "
          >
            <div class="view-bar-item mr-2 mb-2">
              <vx-tooltip
                text="Add Spreadsheet"
                style="cursor: pointer"
                position="bottom"
              >
                <div
                  class="flex items-center justify-center"
                  @click="createSpreadsheet"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    class="plus-svg"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"
                    />
                  </svg>
                  <span>Add</span>
                </div>
              </vx-tooltip>
            </div>
          </portal>
        </template>
      </div>
    </div>
    <portal-target name="add-spreadsheet-btn-in-dispatch" class="ml-3">
    </portal-target>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import $ from "jquery";
export default {
  name: "SpreadsheetList",
  async created() {
    if (!this.hideSpreadsheet) {
      await this.getSpreadsheetList();
      await this.setDefaultSelectedTab();
    }
  },
  props: {
    accessLevel: {
      default() {
        return null;
      },
    },
    hideHomeTab: {
      type: Boolean,
      default: false,
    },
    activeTab: {
      type: Number,
      default: 0,
    },
    hideSpreadsheet: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      createSpreadsheetPopup: false,
      newSpreadsheetName: "New Spreadsheet",
      modifySheetId: "",
      spreadsheetList: [],
      selectedTab: "Home",
      spreadsheetId: null,
    };
  },
  watch: {
    spreadsheetList: {
      handler(val) {
        this.$emit("updateSpreadSheetList", val);
      },
      deep: true,
      immediate: true,
    },
    activeTab: {
      handler(val) {
        if (val == 0) this.selectedTab = "Home";
      },
    },
  },
  computed: {
    ...mapGetters("auth", ["userRole", "user"]),
  },
  mounted() {
    $("body").click((event) => {
      if (!$(event.target).closest(".spreadsheet-rename-input").length) {
        this.modifySheetId = "";
      }
    });
  },
  methods: {
    openDeleteWarningDialog(id) {
      this.spreadsheetId = id;
      this.$vs.dialog({
        type: "confirm",
        color: "warning",
        title: "Delete Spreadsheet",
        text: "Would you like to delete this spreadsheet?",
        accept: this.deleteSpreadsheet,
      });
    },

    deleteSpreadsheet() {
      this.$vs.loading();
      const payload = {
        id: this.spreadsheetId,
      };
      this.$store
        .dispatch("spreadsheet/deleteSpreadsheet", payload)
        .then(({ data }) => {
          this.$vs.notify({
            color: "success",
            title: "Spreadsheet Deleted",
            text: "Spreadsheet deleted successfully",
          });
          this.spreadsheetList = this.spreadsheetList.filter(
            (item) => item.id != this.spreadsheetId
          );
          const getLastItem =
            this.spreadsheetList[this.spreadsheetList.length - 1];
          if (this.spreadsheetList.length) {
            this.handleTabActive(getLastItem.id, getLastItem.name);
          } else {
            this.setDefaultSelectedTab();
          }
        })
        .catch((error) => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text: error.response.data.message,
          });
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    },

    handleRename(itemId) {
      if (this.accessLevel <= 2) {
        this.modifySheetId = itemId;
      }
    },

    // handle active tab id method
    handleTabActive(id, name) {
      this.selectedTab = id;
      if (this.$parent && this.$parent.spreadsheetHeaderProperties) {
        this.$parent.spreadsheetHeaderProperties({
          selectedTab: id,
          selectedSpreadsheetName: name,
        });
      } else {
        this.$emit("spreadsheetHeaderProperties", {
          selectedTab: id,
          selectedSpreadsheetName: name,
        });
      }
    },

    // Create new spreadsheet api method
    createSpreadsheet() {
      this.$vs.loading();
      const payload = {
        keyEntity: null,
        name: this.newSpreadsheetName,
      };
      this.$store
        .dispatch("spreadsheet/createSpreadsheet", payload)
        .then(({ data }) => {
          this.handleTabActive(data.payload.id);
          this.$vs.notify({
            color: "success",
            title: "New Spreadsheet",
            text: "Spreadsheet created successfully",
          });
        })
        .catch((error) => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text:
              (((error || {}).response || {}).data || {}).message ||
              "Something went wrong",
          });
        })
        .finally(() => {
          this.getSpreadsheetList();
          this.$vs.loading.close();
          this.createSpreadsheetPopup = false;
        });
    },
    // Modify new spreadsheet name method
    modifySpreadsheetName(sheetName, sheetId) {
      const payload = {
        id: sheetId,
        name: sheetName,
      };
      this.$store
        .dispatch("spreadsheet/modifySpreadsheetName", payload)
        .then(() => {
          this.$vs.notify({
            color: "success",
            title: "Spreadsheet Rename",
            text: "Spreadsheet name updated successfully",
          });
        })
        .catch((error) => {
          this.$vs.notify({
            color: "danger",
            title: "Error",
            text:
              (((error || {}).response || {}).data || {}).message ||
              "Something went wrong",
          });
        })
        .finally(() => {
          this.getSpreadsheetList();
          this.$vs.loading.close();
          this.modifySheetId = "";
        });
    },

    // get all spreadsheet list method
    async getSpreadsheetList() {
      this.$vs.loading();
      try {
        const { data } = await this.$store.dispatch(
          "spreadsheet/getSpreadsheetList"
        );
        this.spreadsheetList = data.payload;
        return data.payload;
      } catch (error) {
        this.$vs.notify({
          color: "danger",
          title: "Error",
          text:
            (((error || {}).response || {}).data || {}).message ||
            "Something went wrong",
        });
      } finally {
        this.$vs.loading.close();
      }
    },

    setDefaultSelectedTab() {
      if (this.hideHomeTab) {
        let speedId = 0,
          sheetName = "";
        this.handleTabActive(speedId, sheetName);
      } else {
        this.handleTabActive("Home", "Home");
      }
    },
  },
};
</script>

<style lang="scss">
.show-hover {
  display: none;
  position: absolute;
  top: 3px;
  right: -5px;
}

.view-bar-container {
  background: white;
  font-weight: 400;
  display: flex;
  align-items: center;
  overflow: auto;
  overflow-y: hidden;
  .view-bar-item {
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    padding-right: 0.7rem;
    border-radius: 3px;
    span {
      font-weight: 500;
      white-space: nowrap;
      margin-left: 5px;
      cursor: pointer;
    }
  }
  svg {
    color: rgb(98, 98, 98);
    fill: rgb(98, 98, 98);
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
  /* scroll bar */
  &::-webkit-scrollbar-thumb:horizontal {
    /*The style of the horizontal scrollbar*/
    width: 4px;
    background-color: #cccccc;
    -webkit-border-radius: 6px;
  }
  &::-webkit-scrollbar-track-piece {
    background-color: #fff; /*The background color of the scrollbar*/
    -webkit-border-radius: 0; /*Fillet width of the scrollbar*/
  }
  &::-webkit-scrollbar {
    width: 10px; /*the width of the scrollbar*/
    height: 8px; /*the height of the scroll bar*/
  }
  &::-webkit-scrollbar-thumb:vertical {
    /*The style of the vertical scrollbar*/
    height: 50px;
    background-color: #999;
    -webkit-border-radius: 4px;
    outline: 2px solid #fff;
    outline-offset: -2px;
    border: 2px solid #fff;
  }
  &::-webkit-scrollbar-thumb:hover {
    /*The hover style of the scroll bar*/
    height: 50px;
    background-color: #9f9f9f;
    -webkit-border-radius: 4px;
  }
}

.bottom-box-shadow {
  box-shadow: rgb(200 200 200) 0 1px 0 0;
}

.view-bar-item:hover .show-hover {
  display: block;
}

.view-bar-item {
  position: relative;
}

.plus-svg {
  width: 13px !important;
  height: 13px !important;
}

.spreadsheet-list-dropdown-items {
  p {
    font-weight: 500;
  }
}

.spreadsheet-rename-input {
  border: 1px solid #ccc;
  padding: 5px;
  border-radius: 3px;
}
</style>
