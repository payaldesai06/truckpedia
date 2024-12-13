<template>
  <div id="cardDetails">
    <vs-row vs-w="12">
      <vs-divider />
      <div class="flex items-center justify-between w-full">
        <div>
          <div class="space-x-2 ml-4" v-if="payload[0].is_private">
            This task is not visible to outside.
          </div>
          <div class="space-x-2" style="float: left; margin-left: 1rem" v-else>
            This task is visible to everyone with the link.
          </div>
        </div>
        <div class="space-x-2 flex items-center ml-4">
          <div>
            <vs-button
              v-if="payload[0].is_private"
              color="primary"
              type="border"
              @click="changeAccess"
              >Make public</vs-button
            >
            <vs-button v-else color="danger" type="border" @click="changeAccess"
              >Make private</vs-button
            >
          </div>

          <div class="flex items-center">
            <vs-dropdown
              vs-custom-content
              vs-trigger-click
              class="progress-btn float-right mx-2"
            >
              <div v-for="items in openLoadStatusList" :key="items.id">
                <vs-button
                  class="flex items-center"
                  v-if="payload[0].load_status == items.id"
                  :color="items.color"
                >
                  {{ items.name }}
                  <vs-icon icon="chevron_right" size="20px"></vs-icon>
                </vs-button>
              </div>
              <vs-button
                class="flex items-center"
                v-if="
                  payload[0].load_status == 'invoice_created' ||
                  payload[0].load_status == 'payment_requested' ||
                  payload[0].load_status == 'invoice_paid'
                "
                color="#28C76F"
              >
                Completed
                <vs-icon icon="chevron_right" size="20px"></vs-icon>
              </vs-button>
              <vs-dropdown-menu>
                <div class="py-2 px-5">
                  <div
                    class="flex items-center cursor-pointer py-1"
                    :class="{ 'font-bold': payload[0].load_status == items.id }"
                    v-for="items in openLoadStatusList"
                    :key="items.id"
                    @click="updateLoadStatus(items.id)"
                  >
                    <vs-icon icon="stop" size="22px" :color="items.color" />
                    <span class="text-sm">{{ items.name }}</span>
                  </div>
                </div>
              </vs-dropdown-menu>
            </vs-dropdown>

            <vs-button
              color="primary"
              class="mx-2"
              type="border"
              @click="goToLoad"
              >Edit Load</vs-button
            >
            <div class="email-collaborator mx-2">
              <div @click="getCollaboratorData">
                <img
                  src="@assets/images/custom/load_collabrator_icon.svg"
                  class="icon-size"
                />
              </div>
              <div v-show="toggleDropdown" class="user-list-dropdown">
                <div class="chip-container">
                  <div
                    class="chip"
                    v-for="(chip, i) of chips"
                    :key="chip.label"
                  >
                    {{ chip.email }}
                    <i class="material-icons" @click="deleteChip(i, chip.id)"
                      >clear</i
                    >
                  </div>
                  <input
                    v-model="currentInput"
                    placeholder="Add a collaborator email..."
                    @keypress.enter="saveChip"
                  />
                </div>
                <div class="vs-dropdown--menu--after top-0"></div>
              </div>
            </div>

            <div @click.stop="shareClick" class="mr-5">
              <img
                src="@assets/images/custom/share_icon.svg"
                class="icon-size mt-3"
              />
            </div>

            <vs-dropdown vs-custom-content vs-trigger-click>
              <img
                src="@assets/images/custom/vert.svg"
                class="icon-size cursor-pointer"
              />
              <vs-dropdown-menu>
                <vs-dropdown-item @click="fullScreenButton">
                  <div class="flex items-center">
                    <vs-icon
                      class="mr-3"
                      title="Fullscreen"
                      icon="fullscreen"
                    ></vs-icon>
                    <span>Fullscreen</span>
                  </div>
                </vs-dropdown-item>
              </vs-dropdown-menu>
            </vs-dropdown>
          </div>
        </div>
      </div>
      <vs-divider v-if="make_private_show" />
    </vs-row>

    <LoadInfo ref="loadInfo" :data="data" @setPayloadData="setPayloadData" />

    <load-sidebar
      :isSidebarActive="addNewDataSidebar"
      @closeSidebar="toggleDataSidebar"
      :data="sidebarData"
    />
  </div>
</template>

<script>
import LoadSidebar from "../dispatch/load/LoadSidebar.vue";
import LoadInfo from "./components/LoadInfo.vue";

export default {
  name: "CardDetails",
  props: {
    data: {
      type: Object,
      default: {},
    },
  },
  components: {
    LoadInfo,
    LoadSidebar,
  },
  data() {
    return {
      loadId: null,
      active: true,
      make_private_show: true,
      fullscreen: false,
      url: null,
      toggleDropdown: false,
      chips: [],
      currentInput: "",
      origin: null,
      destination: null,
      waypnt: [],
      searchLoad: "",
      sidebarData: {},
      addNewDataSidebar: false,
      loadStatusList: [
        { id: "open", name: "Open", color: "#E63292" },
        { id: "assign", name: "Dispatched", color: "#FF9F43" },
        { id: "in_transit", name: "In Transit", color: "#7367F0" },
        { id: "delivered", name: "Delivered", color: "#28C76F" },
      ],
      payload: [
        {
          load_id: 1,
          load_unique_id: "", //"n/a",
          load_reference: "", //"n/a",
          load_status: "", //"invoice_paid",
          shippers: [
            {
              shipper_id: 1,
              shipper_name: "", //"Schoen Group",
              shipping_date: "", //"2021-05-03",
              shipping_time: "",
              latitude: "", //33.9628906,
              longitude: "", //-118.0825548, //"10:00:00"
            },
          ],
          receivers: [
            {
              receiver_id: 1,
              receiver_name: "", //"Schoen Group",
              delivery_date: "", //"2021-05-14",
              delivery_time: "", //"15:30:00",
              latitude: "", //33.9628906,
              longitude: "", //-118.0825548,
            },
          ],
          drivers: [
            {
              driver_id: 1,
              name: "", //"Parth",
              phone_number: "", //"8414915994"
            },
          ],
          vehicles: [
            {
              truck_id: 1,
              truck_number: "", //"Truck 601",
              trailer_id: 1,
              trailer_number: "", //"Trailer 101",
              location: {
                latitude: "", //33.9628906,
                longitude: "", //-118.0825548,
                heading_degrees: 0,
                formatted_location: "", //"11035 Enterprise Avenue, Santa Fe Springs, CA, 90670"
              },
            },
          ],
        },
      ],
      drivers: [],
      center: {
        lat: 34.052235,
        lng: -118.243683,
      },
      selected_driver: null,
      infoWindowPos: null,
      infoWinOpen: false,
      infoOptions: {
        content: "",
        maxWidth: 200,
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
    };
  },
  computed: {
    openLoadStatusList() {
      if (
        this.payload[0].load_status == "invoice_created" ||
        this.payload[0].load_status == "payment_requested" ||
        this.payload[0].load_status == "invoice_paid"
      ) {
        return [];
      } else {
        return this.loadStatusList;
      }
    },
  },
  methods: {
    async updateLoadStatus(status) {
      let param = { load_id: this.data.loadId, status: status };
      await this.$store
        .dispatch("pipeline/updateStatus", param)
        .then((httpStatus) => {
          if (httpStatus === 200) {
            this.$emit("refreshCalendar");
            this.$emit("updateStatus", this.data.loadId);
            this.payload[0].load_status = status;
            this.$vs.notify({
              time: 8000,
              color: "success",
              title: "Status Updated",
              text: "Load Status Updated successfully.",
            });
          } else {
            this.$vs.notify({
              color: "danger",
              title: "Error",
              text: "Something went wrong!",
            });
          }
        });
    },

    goToLoad() {
      // this.sidebarData = data;
      this.$emit("closePopup");
      this.sidebarData = { loadId: this.data.loadId };
      this.addNewDataSidebar = true;
    },

    toggleDataSidebar() {
      this.addNewDataSidebar = false;
      this.$emit("refreshCalendar");
    },

    setPayloadData(data) {
      this.payload = data;
    },

    getData() {
      // this.getDataTracking();
      this.$refs.loadInfo.getData();
      this.toggleDropdown = false;
    },

    saveChip() {
      const { chips, currentInput, set } = this;
      ((set && chips.indexOf(currentInput) === -1) || !set) &&
        chips.push({ email: currentInput });
      this.addCollaborator(this.currentInput);
      this.currentInput = "";
    },

    deleteChip(index, id) {
      this.removeCollaborator(id);
      this.chips.splice(index, 1);
    },

    getCollaboratorData() {
      this.toggleDropdown = !this.toggleDropdown;
      if (this.toggleDropdown) {
        this.getCollaborator();
      }
    },

    getCollaborator() {
      this.chips = [];
      var data = { load_id: this.payload[0].load_id };
      this.$store
        .dispatch("load-collaborator/getLoadCollaborators", data)
        .then((value) => {
          value.payload.map((val) => {
            this.chips.push(val);
          });
        });
    },

    removeCollaborator(id) {
      this.$vs.loading();
      var data = { id: id };
      this.$store
        .dispatch("load-collaborator/deleteCollaborator", data)
        .then((value) => {
          this.$vs.notify({
            color: "primary",
            title: "Collaborator Deleted",
            text: "Load collaborator deleted successfully.",
          });
        })
        .catch((error) => {
          this.$vs.notify({
            title: "Error",
            text: error.response.data.message,
            color: "danger",
          });
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    },

    addCollaborator(email) {
      this.$vs.loading();
      var data = {
        load_id: this.payload[0].load_id,
        email: email,
      };
      this.$store
        .dispatch("load-collaborator/createCollaborator", data)
        .then((value) => {
          this.$vs.notify({
            color: "primary",
            title: "Collaborator Added",
            text: "Load collaborator added successfully.",
          });
          this.getCollaborator();
        })
        .catch((error) => {
          this.chips.pop();
          this.$vs.notify({
            title: "Error",
            text: error.response.data.message,
            color: "danger",
          });
        })
        .finally(() => {
          this.$vs.loading.close();
        });
    },

    loadboardButton() {},

    fullScreenButton(type) {
      if (type == "close" && this.fullscreen == false) return;
      let ele = document.getElementById("cardDetails");
      try {
        if (this.fullscreen) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          } else if (document.mozCancelFullscreen) {
            document.mozCancelFullscreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        } else {
          if (ele.requestFullscreen) {
            ele.requestFullscreen();
          } else if (ele.webkitRequestFullScreen) {
            ele.webkitCancelFullScreen();
          } else if (ele.mozRequestFullScreen) {
            ele.mozRequestFullScreen();
          } else if (ele.msRequestFullscreen) {
            ele.msRequestFullscreen();
          }
        }
      } catch (error) {}
      this.winResize();
    },

    winResize() {
      let data = this;
      window.onresize = function () {
        var isFull = !!(
          document.webkitIsFullScreen ||
          document.mozFullscreen ||
          document.msFullScreenElement ||
          document.fullscreenElement
        );
        let childEle = document.getElementsByClassName("vs-sidebar")[0];
        if (isFull == false) {
          childEle.style.maxWidth = "650px";
          data.fullscreen = false;
        } else {
          childEle.style.maxWidth = "100%";
          data.fullscreen = true;
        }
      };
    },

    async changeAccess() {
      this.payload[0].is_private = !this.payload[0].is_private;
      const filter = {
        load_id: this.payload[0].load_id,
        is_private: this.payload[0].is_private,
      };
      try {
        this.$vs.loading();
        await this.$store.dispatch("calendar/getChangeAccess", filter);
      } catch (error) {
      } finally {
        this.$vs.loading.close();
      }
    },

    close() {
      this.data.active = false;
      this.fullScreenButton("close");
    },

    async shareClick() {
      const filter = {
        load_id: this.payload[0].load_id,
      };
      try {
        let data = await this.$store.dispatch("calendar/getShareUrl", filter);
        // let url = `https:\/\/dashboard.ezpapel.com/share/load-tracking/`+data.data.payload.url.split('=')[1];
        let url =
          document.location.origin +
          `/share/load-tracking/` +
          data.data.payload.url.split("=")[1];
        let that = this;
        this.$copyText(url).then(
          function (e) {
            that.$vs.notify({
              title: "Success",
              text: "Copied",
              color: "success",
            });
          },
          function (e) {
            that.$vs.notify({
              title: "Danger",
              text: "Can not copy",
              color: "danger",
            });
          }
        );
      } catch (error) {
        this.$vs.notify({
          title: "Danger",
          text: "Can not copy",
          color: "danger",
        });
      } finally {
        this.$vs.loading.close();
      }
    },
  },
};
</script>

<style lang="stylus">
#cardDetails
  background: #fff;
.sidebarx
  overflow auto!important
.vs-sidebar .vs-sidebar--items
  overflow auto!important
#map
  // height 32rem
  width 100%

.list
  font-size 1rem
  margin-left 1rem
  table-layout fixed
  word-wrap break-all
  word-break normal
  overflow hidden
.otherList
  font-size 1rem
  margin-left .5rem
.vs-icon
  vertical-align middle
  margin-right 0.5rem
.vs-dropdown-item-col
  line-height 2rem
.vs-sidebar-all
  max-width 100%
  z-index 52010
.vs-sidebar
  max-width 1100px
  z-index 52010
.con-vs-dropdown--menu
  z-index 52010
.vs-sidebar--background
  z-index 52010
.header-sidebar
  display flex
  align-items center
  justify-content center
  flex-direction column
  width 100%
  h4
    display flex
    align-items center
    justify-content center
    width 100%
    > button
      margin-left 10px
.footer-sidebar
  display flex
  align-items center
  justify-content space-between
  width 100%
  > button
      border 0px solid rgba(0,0,0,0) !important
      border-left 1px solid rgba(0,0,0,.07) !important
      border-radius 0px !important


.chip-container {
  min-height: 34px;
  display:flex;
  padding: 7px;
  flex-wrap: wrap;
  align-content: space-between;
  max-height: 300px;
  overflow: auto;
  .chip {
    margin:2px;
    background: #f0f0f0;
    padding: 1px 15px;
    border: 1px solid #ccc;
    border-radius: 15px;
    display:flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    i {
      cursor: pointer;
      opacity: .56;
      margin-left:8px;
    }
  }
  input {
    flex: 1 1 auto;
    width:30px;
    border: none;
    outline: none;
    padding:8px;
  }
  .material-icons{
    font-size: 16px;
  }
}
.collaborator-icon{
    width: 43px;
    height: 38px;
    cursor: pointer;
}
.email-collaborator{
    position: relative;
    top: 3px;
    right: 3px;
}
.user-list-dropdown .con-chips
    justify-content start!important;
.user-list-dropdown .vs-icon
    margin-right 0
.user-list-dropdown .con-chips .con-vs-chip
   margin 0
.user-list-dropdown
    position absolute
    background #fff
    right 2px
    border-radius 6px
    box-shadow 0 1px 10px 0 #0005
    max-height 400px
    min-width 235px
    z-index 1000
    background-color #fff
.icon-size
    width: 20px;
    height: 20px;
.con-vs-dropdown--menu
  z-index: 100000 !important;
</style>
