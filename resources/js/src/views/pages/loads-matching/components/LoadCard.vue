<template>
  <div>
    <div v-if="!showReload">
      <span
        v-if="multiTabSearchResults.length == 0"
        class="lg:hidden top-close"
        @click="$emit('hide')"
      >
        <vs-icon icon="close" class="text-4xl" color="primary"></vs-icon>
      </span>
      <div
        class="card-details card-container"
        v-if="multiTabSearchResults.length == 0"
      >
        <div class="card-empty">
          <h4 class="mb-4">Welcome to Truckpedia</h4>
          <div class="img-box">
            <img src="@assets/images/custom/ic_bot.png" alt="ic_bot" />
          </div>
          <!-- <span class="mt-4 text-center"
            >Please click here if you'd like to sync your loads to Ezpapel to
            find qualified carriers.</span
          > -->
        </div>
      </div>

      <div v-if="multiTabSearchResults.length > 0">
        <div class="card-details p-5">
          <div>
            <div>
              <div
                class="flex cursor-pointer items-baseline tab-list"
                ref="tabList"
              >
                <div
                  class="flex mr-5 p-3"
                  v-for="(tab, index) in multiTabSearchResults"
                  ref="multiTabSearchResults"
                  :key="index"
                  @click="currentTab = index"
                  :class="{ activeTab: currentTab === index }"
                >
                  <div>
                    <div class="text-xs" style="min-width: 100px">
                      {{ tab.tabOrigin }}
                    </div>
                    <div class="flex justify-center items-center">
                      <vs-icon icon="subdirectory_arrow_right"></vs-icon>
                      <div class="text-xs" style="min-width: 100px">
                        {{ tab.tabDestination }}
                      </div>
                    </div>
                  </div>
                  <div>
                    <vs-icon
                      icon="cancel"
                      @click.stop="closeTab(index, tab.searchId)"
                      color="primary"
                      style="margin-top: -12px"
                    ></vs-icon>
                  </div>
                </div>
                <div @click="$emit('openSearchPopup')">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 0 24 24"
                    width="24px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                  </svg>
                </div>
              </div>
              <div
                class="reload-card"
                v-for="(tab, index) in multiTabSearchResults"
                :key="index"
                v-show="currentTab === index"
              >
                <div
                  v-for="(item, index) in tab.searchResult"
                  :key="index"
                  class="card-load-details"
                >
                  <div class="card-left lg:flex">
                    <div
                      class="lg:flex lg:pl-2 lg:w-1/3 lg:mt-0 mt-5 m-padding"
                    >
                      <div class="timer-with-logo">
                        <img
                          v-if="item.loadBoard == 'DAT'"
                          src="@assets/images/external-load-boards/DAT-logo.svg"
                          class="lg:mt-5 load-board-logo"
                        />
                        <img
                          v-else-if="item.loadBoard == 'Truckstop'"
                          src="@assets/images/external-load-boards/truckstop-logo.svg"
                          class="lg:mt-5 load-board-logo truckstop-logo"
                        />
                        <img
                          v-else-if="item.loadBoard == 'C.H. Robinson'"
                          src="@assets/images/external-load-boards/chrobinson-logo.svg"
                          class="lg:mt-5 load-board-logo"
                          style="width: 80px"
                        />
                        <img
                          v-else-if="item.loadBoard == 'J.B. Hunt'"
                          src="@assets/images/external-load-boards/jbhunt-logo.svg"
                          class="lg:mt-5 load-board-logo jbhunt-logo"
                          style="width: 80px"
                        />
                        <div class="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20px"
                            viewBox="0 0 24 24"
                            width="20px"
                            fill="#6666f0"
                          >
                            <path d="M0 0h24v24H0z" fill="none" />
                            <path
                              d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                            />
                            <path
                              d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
                            />
                          </svg>

                          <span class="ml-1" v-if="item.createdWhen">{{
                            getTimeDiff(item)
                          }}</span>
                          <span class="ml-1" v-else-if="item.age">{{
                            item.age
                          }}</span>
                        </div>
                      </div>

                      <div class="address">
                        <div class="path-border-container">
                          <img
                            src="@assets/images/custom/sender_icon.svg"
                            alt="sender icon"
                          />
                          <div class="path-border"></div>
                          <img
                            src="@assets/images/custom/receiver_icon.svg"
                            alt="receiver icon"
                          />
                        </div>
                        <div class="flex flex-col justify-between">
                          <div>
                            <h4>
                              {{ item.origin.city }}, {{ item.origin.state }}
                              <span v-if="item.origin.deadhead">
                                {{ showDeadhead(item.origin.deadhead) }}
                              </span>
                            </h4>
                            <span>{{ item.pickupDate }}</span>
                            <span v-if="item.pickupTime">{{
                              item.pickupTime
                            }}</span>
                          </div>

                          <div>
                            <h4>
                              {{ item.destination.city }},
                              {{ item.destination.state }}
                              <span v-if="item.destination.deadhead">{{
                                showDeadhead(item.destination.deadhead)
                              }}</span>
                            </h4>
                            <!-- <span>Feb 21, 2022 | 10:00am</span> -->
                            <span v-if="item.deliveryDate">{{
                              item.deliveryDate
                            }}</span>
                            <span v-if="item.deliveryTime">{{
                              item.deliveryTime
                            }}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="lg:w-1/3 flex border m-padding">
                      <div class="w-1/2 flex flex-col justify-between">
                        <div v-show="item.weightInPounds">
                          <span>Weight</span>
                          <h3>{{ item.weightInPounds }} lbs</h3>
                        </div>

                        <div class="mt-4" v-show="item.distance">
                          <span>Distance</span>
                          <h3>{{ item.distance }} mi</h3>
                        </div>
                      </div>

                      <div
                        class="flex flex-col justify-between"
                        style="width: 200px"
                      >
                        <div>
                          <span>Equipment Type</span>
                          <h3>
                            {{ item.equipmentType }}
                            {{
                              item.capacity ? " - (" + item.capacity + ")" : ""
                            }}
                            {{
                              item.lengthInFeet ? item.lengthInFeet + " ft" : ""
                            }}
                          </h3>
                        </div>
                        <div class="mt-4">
                          <a
                            v-if="item.bookUrl != ''"
                            target="_blank"
                            rel="noopener noreferrer"
                            :href="item.bookUrl"
                            class="text-xs"
                            >Book Now</a
                          >
                          <span v-if="item.bookUrl == '' && item.rate"
                            >Rate</span
                          >
                          <h3 v-if="item.rate">${{ item.rate }}</h3>
                        </div>
                      </div>
                    </div>

                    <vs-divider color="#C5BFFF" class="lg:hidden block" />

                    <div
                      class="lg:py-4 lg:w-1/3 lg:ml-5 lg:mt-0 m-padding lg:mb-0 mb-5"
                    >
                      <div class="flex justify-between">
                        <div class="flex items-center">
                          <!-- <h4>{{ item.loadBoard }}</h4> -->
                          <div class="text-xs">
                            {{ item.poster.company }}
                          </div>
                        </div>
                        <h6
                          class="whitespace-no-wrap"
                          v-show="item.creditScore"
                        >
                          Credit: {{ item.creditScore }}
                        </h6>
                      </div>
                      <div class="mt-3">
                        <p
                          class="text-xs"
                          v-show="item.daysToPay || item.factoring"
                        >
                          Days to pay: {{ item.daysToPay }} {{ item.factoring }}
                        </p>
                        <p class="text-xs my-2" v-if="item.poster.phone != ''">
                          Contact:
                          {{ formatPhoneNumber(item.poster.phone) }}
                          {{
                            item.poster.extension &&
                            "ext. " + item.poster.extension
                          }}
                        </p>
                        <p class="text-xs mt-2" v-else>
                          Contact: {{ item.poster.email }}
                        </p>
                        <p class="text-xs" v-if="item.comments.length">
                          Note:
                          <span
                            v-for="(comment, index) in item.comments"
                            :key="index"
                            >{{ comment + " " }}</span
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReloadInfo from "./ReloadInfo.vue";


export default {
  props: ["multiTabSearchResults"],

  components: {
    ReloadInfo,
  },

  data() {
    return {
      empty: true,
      quickBid: "",
      showReload: false,
      forceUpdateTimer: setInterval(() => {
        this.$forceUpdate();
      }, 60000),
      currentTab: 0,
      searchData: [],
      tabSet: new Set(this.multiTabSearchResults.map((tab) => tab.searchId)),
    };
  },

  watch: {
    multiTabSearchResults: {
      handler(newVal, oldVal) {
        // here having access to the new and old value
        // do stuff
        this.updatetabSet();
      },
      deep: true,
    },
  },

  created() {},

  methods: {
    updatetabSet() {
      this.multiTabSearchResults.forEach((tab, index) => {
        if (!this.tabSet.has(tab.searchId)) {
          this.tabSet.add(tab.searchId);
          this.currentTab = index;
        }
      });

      // To handle close tab case.
      const maxIndex = Math.max(0, this.multiTabSearchResults.length - 1);

      // To handle Tab scroll to left
      if (maxIndex > 0) {
        const width = this.$refs.tabList.clientWidth;
        this.$refs.tabList.scroll({
          left: width,
          behavior: "smooth",
        });
      }

      if (this.currentTab > maxIndex) {
        this.currentTab = maxIndex;
      }
    },

    closeTab(index, searchId) {
      this.$emit("closeOneTab", searchId);
      this.tabSet.delete(searchId);
    },

    formatPhoneNumber(phoneNumberString) {
      const cleaned = ("" + phoneNumberString).replace(/\D/g, "");
      const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        return match[1] + "-" + match[2] + "-" + match[3];
      }
      return phoneNumberString;
    },

    getTimeDiff(item) {
      if (item.hideCreatedWhen) {
        return "";
      }

      const diff = Math.abs(new Date() - new Date(item.createdWhen));
      const diffInMinute = Math.floor(diff / 1000 / 60);
      if (diffInMinute <= 60) {
        return diffInMinute + "m";
      }
      const diffInHours = Math.floor(diffInMinute / 60);
      if (diffInHours <= 24) {
        return diffInHours + "h";
      } else {
        return Math.floor(diffInHours / 24) + "d";
      }
    },

    showDeadhead(label) {
      if (label) {
        return `(${label} mi)`;
      }
      return "";
    },
  },

  beforeDestroy() {
    clearInterval(this.forceUpdateTimer);
  },
};
</script>

<style lang="scss">
.reload-card {
  overflow: auto;
  height: 70vh;
  @media (max-width: 991px) {
    height: 100vh;
  }
}
.card-container {
  align-items: center;
  display: flex;
  justify-content: center;
}
@media (max-width: 991px) {
  .m-padding {
    padding: 0.6rem 1.25rem;
  }
}
.card-details {
  background: #fff;
  height: 80vh;
  border-radius: 20px;
  width: 97%;
  margin-left: auto;
  box-shadow: 0px 4px 24px #22292f1a;
  @media (max-width: 991px) {
    width: 100%;
    margin-left: 0;
    box-shadow: none;
  }
  .heading {
    @media (max-width: 991px) {
      font-size: 1.2rem;
    }
  }
  .card-empty {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .img-box {
      width: 150px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .card-load-details {
    border: 1px solid #c5bfff;
    border-radius: 20px;
    margin-top: 16px;
    position: relative;
  }
  .card-left {
    padding-right: 30px;
    @media (max-width: 991px) {
      padding-right: 0;
    }
    @media (min-width: 992px) {
      min-height: 150px;
      align-items: center;
    }
    h3 {
      font-size: 12px;
      font-weight: 600;
      @media (max-width: 991px) {
        font-size: 14px;
      }
    }
    h4 {
      color: #000;
      font-size: 13px;
      @media (max-width: 991px) {
        font-size: 14px;
      }
    }
    span {
      color: #6e6b7b;
      font-size: 11px;
      @media (max-width: 991px) {
        font-size: 12px;
      }
    }
    .address {
      margin-top: 0px;
      display: flex;
      .path-border-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 10px;
        .path-border {
          border: none !important;
          border-left: 1px dashed rgb(105, 76, 254) !important;
          height: 42px;
          width: 1px;
          // border-style: dashed;
        }
        img {
          width: 18px;
        }
      }
    }
    .label {
      font-size: 11px;
      font-weight: 300;
      color: rgb(94, 88, 115);
      @media (max-width: 991px) {
        font-size: 14px;
      }
    }
    .border {
      border-right: 1px solid #f1f4ff;
      @media (max-width: 991px) {
        border: none;
      }
    }
  }
}

.vs-checkbox-primary input:checked + .vs-checkbox {
  width: 25px !important;
}
.top-close {
  position: absolute;
  right: 15px;
  top: 20px;
}

.load-board-logo {
  width: 60px;
  @media (min-width: 991px) {
    position: absolute;
    left: 18px;
    top: -4px;
    width: 40px;
  }
}

.timer-with-logo {
  display: flex;
  align-items: center;
  @media (max-width: 991px) {
    justify-content: space-between;
    padding-top: 1.25rem !important;
    padding-bottom: 1.25rem !important;
  }
}

.truckstop-logo {
  top: -28px;
  width: 61px;
}

.jbhunt-logo {
  top: -28px;
  left: 12px;
}

// .p-component {
//   border: none !important;
// }

.p-listbox-item:hover {
  background: #fff !important;
}

.activeTab {
  border-bottom: 2px solid #694cfe;
}

// Hide scrollbar for IE, Edge and Firefox
.tab-list {
  overflow-x: scroll;
  overflow-y: hidden;
  block-size: 74px;
  &::-webkit-scrollbar {
    background-color: transparent;
    width: 0px;
  }
}

.tab-list:hover {
  &::-webkit-scrollbar {
    width: 8px;
    height: 4px;
    position: absoulte;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    background-clip: padding-box;
  }
}
</style>
