<template>
  <div id="cardDetails">
    <vs-row vs-w="12">
      <vs-divider />
      <div class="flex items-center justify-between w-full">
        <div>
          <div class="space-x-2 ml-4" v-if="isPrivate">
            This task is not visible to outside.
          </div>
          <div class="space-x-2" style="float: left; margin-left: 1rem" v-else>
            This task is visible to everyone with the link.
          </div>
        </div>
        <div class="space-x-2 flex items-center ml-4">
          <div>
            <vs-button
              v-if="isPrivate"
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
            <!-- <div class="email-collaborator mx-2">
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
            </div> -->

            <div @click.stop="shareClick" class="mr-5">
              <img
                src="@assets/images/custom/share_icon.svg"
                class="icon-size mt-3"
              />
            </div>
          </div>
        </div>
      </div>
      <vs-divider v-if="make_private_show" />
    </vs-row>

    <LoadInfo
      ref="loadInfo"
      :data="data"
      :loadStopList="shipperReceiverLegList"
      @setPayloadData="setPayloadData"
    />
    <ActivitiesLogs :logs="data.logs" />
  </div>
</template>

<script>
import ActivitiesLogs from './ActivitiesLogs.vue';
import LoadInfo from './LoadInfo.vue';

export default {
  name: 'CardDetails',
  props: {
    data: {
      type: Object,
      default: {},
    },
    shipperReceiverLegList: {
      type: Array,
      default: () => [],
      required: true,
    },
    logs: {
      type: Array,
      default: () => [],
    }
  },
  components: {
    LoadInfo,
    ActivitiesLogs,
  },
  data() {
    return {
      active: true,
      make_private_show: true,
      url: null,
      toggleDropdown: false,
      chips: [],
      currentInput: '',
      waypnt: [],
      payload: [{}],
      drivers: [],
      isPrivate: false,
    };
  },
  methods: {
    setPayloadData(data) {
      this.payload = data;
    },

    // saveChip() {
    //   const { chips, currentInput, set } = this;
    //   ((set && chips.indexOf(currentInput) === -1) || !set) &&
    //     chips.push({ email: currentInput });
    //   this.addCollaborator(this.currentInput);
    //   this.currentInput = "";
    // },

    // deleteChip(index, id) {
    //   this.removeCollaborator(id);
    //   this.chips.splice(index, 1);
    //   const emails = this.chips.map((chip) => chip.email);
    //   this.$store.commit("load/updateCollaboratorEmails", emails);
    // },

    // getCollaboratorData() {
    //   this.toggleDropdown = !this.toggleDropdown;
    //   if (this.toggleDropdown) {
    //     this.getCollaborator();
    //   }
    // },

    // getCollaborator() {
    //   this.chips = [];
    //   var data = { load_id: this.payload[0].load_id };
    //   this.$store
    //     .dispatch("load-collaborator/getLoadCollaborators", data)
    //     .then((value) => {
    //       let emails = [];
    //       value.payload.map((val) => {
    //         this.chips.push(val);
    //         emails.push(val.email);
    //       });

    //       this.$store.commit("load/updateCollaboratorEmails", emails);
    //     });
    // },

    // removeCollaborator(id) {
    //   this.$vs.loading();
    //   var data = { id: id };
    //   this.$store
    //     .dispatch("load-collaborator/deleteCollaborator", data)
    //     .then((value) => {
    //       this.$vs.notify({
    //         color: "primary",
    //         title: "Collaborator Deleted",
    //         text: "Load collaborator deleted successfully.",
    //       });
    //     })
    //     .catch((error) => {
    //       this.$vs.notify({
    //         title: "Error",
    //         text: error.response.data.message,
    //         color: "danger",
    //       });
    //     })
    //     .finally(() => {
    //       this.$vs.loading.close();
    //     });
    // },

    // addCollaborator(email) {
    //   this.$vs.loading();
    //   var data = {
    //     load_id: this.payload[0].load_id,
    //     email: email,
    //   };
    //   this.$store
    //     .dispatch("load-collaborator/createCollaborator", data)
    //     .then((value) => {
    //       this.$vs.notify({
    //         color: "primary",
    //         title: "Collaborator Added",
    //         text: "Load collaborator added successfully.",
    //       });
    //       this.getCollaborator();
    //     })
    //     .catch((error) => {
    //       this.chips.pop();
    //       this.$vs.notify({
    //         title: "Error",
    //         text: error.response.data.message,
    //         color: "danger",
    //       });
    //     })
    //     .finally(() => {
    //       this.$vs.loading.close();
    //     });
    // },

    async changeAccess() {
      this.isPrivate = !this.isPrivate;
      const filter = {
        load_id: this.data.loadId,
        is_private: this.isPrivate,
      };
      try {
        this.$vs.loading();
        await this.$store.dispatch('calendar/getChangeAccess', filter);
      } catch (error) {
      } finally {
        this.$vs.loading.close();
      }
    },

    close() {
      this.data.active = false;
      // this.fullScreenButton("close");
    },

    async shareClick() {
      const filter = {
        load_id: this.data.loadId,
      };
      try {
        let data = await this.$store.dispatch('calendar/getShareUrl', filter);
        // let url = `https:\/\/dashboard.ezpapel.com/share/load-tracking/`+data.data.payload.url.split('=')[1];
        let url =
          document.location.origin +
          `/share/load-tracking/` +
          data.data.payload.url.split('=')[1];
        let that = this;
        this.$copyText(url).then(
          function (e) {
            that.$vs.notify({
              title: 'Success',
              text: 'Copied',
              color: 'success',
            });
          },
          function (e) {
            that.$vs.notify({
              title: 'Danger',
              text: 'Can not copy',
              color: 'danger',
            });
          }
        );
      } catch (error) {
        this.$vs.notify({
          title: 'Danger',
          text: 'Can not copy',
          color: 'danger',
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
