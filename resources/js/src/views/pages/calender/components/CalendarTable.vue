<template>
  <div>
    <div class="vx-card flex" style="overflow: auto" ref="calendar-container">
      <div class="table table-data">
        <div class="tr header-table">
          <div class="td">Truck</div>
          <div class="td">Trailer</div>
          <div class="td">Type</div>
          <div class="td">Driver</div>
        </div>
        <div class="tr" v-for="(item, index) in calendarTableData" :key="index">
          <div class="td">{{ item.truck_number }}</div>
          <div class="td">{{ item.trailer_number }}</div>
          <div class="td">{{ item.equipment_type }}</div>
          <div class="td">{{ item.driver_name }}</div>
        </div>
      </div>
      <div class="table table-calendar">
        <div class="tr header-table">
          <div class="calendar-icons">
            <span class="left" @click="$emit('moveDateToLeft')">
              <!-- <vs-icon
                icon="chevron_left"
                size="30px"
                color="primary"
              ></vs-icon> -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 0 24 24"
                width="30px"
                fill="#7367F0"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
              </svg>
            </span>
            <span class="right" @click="$emit('moveDateToRight')">
              <!-- <vs-icon
                icon="chevron_right"
                size="30px"
                color="primary"
              ></vs-icon> -->
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="30px"
                viewBox="0 0 24 24"
                width="30px"
                fill="#7367F0"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
              </svg>
            </span>
          </div>
          <div class="td" v-for="dates in calendarsDates" :key="dates.day">
            <div class="flex flex-col p-3">
              <span class="font-bold" style="color: #7367f0"
                >{{ dates.weekday }} {{ dates.day }}</span
              >
              <span>{{ dates.month }}</span>
            </div>
          </div>
        </div>
        <div v-if="calendarEvent.length">
          <div
            class="tr body"
            v-for="(item, index) in calendarEvent"
            :key="index"
          >
            <div class="td">
              <div
                class="bar"
                :style="[
                  item.label.load_status == 'open'
                    ? { background: '#E63292' }
                    : item.label.load_status == 'assign'
                    ? { background: '#FF9F43' }
                    : { background: '#7367F0' },
                ]"
                :title="item.label.destination.date"
                :class="item.classes"
                @click="cardDetails(item)"
              >
                {{ computeOriginDestinationString(item.label) }}
                <br />
                {{ computePuDelTimeString(item.label.origin, "P: ") }}
                {{ computePuDelTimeString(item.label.destination, "D: ") }}
                {{ showdispatcherNotesHere(item.label) }}
              </div>
            </div>
          </div>
        </div>
        <div class="card-details card-container" v-else>
          <div class="card-empty">
            <h4 class="mb-4">Welcome to Ezpapel</h4>
            <div class="img-box">
              <img src="@assets/images/custom/ic_bot.png" alt="ic_bot" />
            </div>
            <span class="mt-4 text-center"
              >Please select dates there are no events</span
            >
          </div>
        </div>
      </div>
    </div>
    <vs-popup fullscreen title="Truck details" :active.sync="barPopup">
      <calendar-details
        ref="cardDetail"
        @refreshCalendar="getAllTrackings"
        @closePopup="closePopup"
        :data="CardDetailsData"
      >
      </calendar-details>
    </vs-popup>
  </div>
</template>

<script>
import CalendarDetails from "../CalendarDetails";

export default {
  components: {
    CalendarDetails,
  },
  props: {
    calendar: Array,
    selectedDateRange: String,
    calendarsDates: Array,
    calendarEvent: Array,
    calenderBar: {
      width: 0,
      offset: 0,
    },
  },

  data() {
    return {
      CardDetailsData: {
        active: false,
        value: null,
      },
      barPopup: false,
    };
  },

  computed: {
    calendarTableData() {
      let calendarData = [];
      for (var i = 0; i < 7; i++) {
        !this.calendar[i]
          ? calendarData.push({})
          : calendarData.push(this.calendar[i]);
      }
      return this.calendar.length > 7 ? this.calendar : calendarData;
    },
  },

  methods: {
    computeOriginDestinationString(label) {
      let ret = "#" + label.load_number + " ";
      if (
        label.origin.time ||
        label.origin.startTime ||
        label.destination.time ||
        label.destination.startTime
      ) {
        ret +=
          label.origin.city +
          ", " +
          label.origin.state +
          " - " +
          label.destination.city +
          ", " +
          label.destination.state;
      } else {
        ret += this.computeOriginDestinationFullString(label);
      }
      return ret;
    },

    computeOriginDestinationFullString(label) {
      let ret =
        label.origin.city +
        ", " +
        label.origin.state +
        " - " +
        label.destination.city +
        ", " +
        label.destination.state;
      if (label.dispatcher_notes) {
        ret += " " + label.dispatcher_notes;
      }
      return ret;
    },

    computePuDelTimeString(label, prefix) {
      let ret = "";
      if (label.startTime) {
        ret += label.startTime + "-";
      }
      if (label.time) {
        ret += label.time;
      }
      if (ret) {
        ret = prefix + ret;
      }
      return ret;
    },

    showdispatcherNotesHere(label) {
      let ret = "";
      if (
        label.origin.time ||
        label.origin.startTime ||
        label.destination.time ||
        label.destination.startTime
      ) {
        ret = label.dispatcher_notes;
      }
      return ret;
    },

    closePopup() {
      this.barPopup = false;
    },

    cardDetails(val) {
      //卡片得详情点击事件  这里应该是要显示一个页面并且将信息传进去
      this.barPopup = true;
      this.CardDetailsData.active = true;
      this.CardDetailsData.loadId = val.label.load_id;
      this.$refs.cardDetail.getData();
    },

    getAllTrackings() {
      this.$emit("refreshCalendar");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@sass/vuexy/apps/simple-calendar.scss";

#simple-calendar-app .theme-default .cv-day.today .cv-day-number {
  background-color: rgba(var(--vs-primary), 1);
  border-radius: 50%;
  // padding: 0.43rem;
  margin: 0.4rem;
  text-align: center;
  height: fit-content;
}

@media (min-width: 1500px) {
  .vx-card {
    justify-content: center;
  }
}

.cv-day,
.cv-weeks {
  border-style: none;
}

#simple-calendar-app .theme-default.cv-wrapper {
  padding-left: 2px;
}

.calendar-border {
  border: 0.5px solid #e9ecef;
  margin-top: 54px;
}

.calendar-row {
  position: absolute;
  width: 100%;
}

.calendar-wrapper {
  width: 100%;
  position: relative;
}

// .p-datatable .p-datatable-thead > tr > th {
//   background: #fff;
// }

// Table css and calendar
.table {
  display: table;
  border-collapse: collapse;
}
.table .tr {
  display: table-row;
  height: 80px;
  border-left: none;
  border: 0.5px solid #ddd;
}
.table .tr:first-child {
  // border-bottom: 0.5px solid #d8d6de;
  color: #5e5873;
  height: 80px;
}

.table .tr .td {
  display: table-cell;
  padding: 8px 17px;
  height: 80px;
  vertical-align: middle;
}

/* Not necessary for table styling */
.div-table,
.table-tag {
  float: left;
  margin: 2em;
}
.div-table .title,
.table-tag .title {
  text-align: center;
  padding-bottom: 0.5em;
}

.bar {
  background: #7367f0;
  color: #fff;
  border-radius: 5px;
  font-size: 12px;
  padding: 3px 8px;
  cursor: pointer;
}

.table-calendar {
  display: table;
  border-collapse: collapse;
  width: 70%;
  // width: 830px;
  display: flex !important;
  flex-direction: column;
  @media (max-width: 991px) {
    width: 830px;
  }
  .header-table {
    position: relative;
    display: flex;
    justify-content: space-between;
    @media (max-width: 1200px) {
      justify-content: flex-start;
    }
    .calendar-icons {
      position: absolute;
      display: flex;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      align-items: center;
      .left {
        position: relative;
        right: 28px;
        cursor: pointer;
      }
      .right {
        cursor: pointer;
      }
    }
    .td {
      width: 16%;
    }
  }
  .tr.body {
    display: flex;
    border-top: none !important;
    .td {
      display: flex;
      align-items: center;
      width: 100%;
      overflow: hidden;
      .bar {
        // width: 50%;
        position: relative;
        overflow: auto;
        max-height: 70px;
      }
    }
  }
}

.table-data {
  width: 50%;
  // max-width: 550px;
}

.offset-0 {
  left: 0;
}
.offset-1 {
  left: 15%;
}
.offset-2 {
  left: 30%;
}
.offset-3 {
  left: 45%;
}
.offset-4 {
  left: 60%;
}
.offset-5 {
  left: 74%;
}
.offset-6 {
  left: 89%;
}

@media (max-width: 990px) {
  .width-0 {
    width: 97px;
    // width: 12%;
  }
  .width-1 {
    width: 194px;
    // width: 24%;
  }
  .width-2 {
    width: 308px;
    // width: 38%;
  }
  .width-3 {
    width: 445px;
    // width: 55%;
  }
  .width-4 {
    width: 550px;
    // width: 68%;
  }
  .width-5 {
    width: 688px;
    // width: 85%;
  }
}
.width-0 {
  // width: 97px;
  width: 14%;
}
.width-1 {
  // width: 194px;
  width: 28%;
}
.width-2 {
  // width: 308px;
  width: 43%;
}
.width-3 {
  // width: 445px;
  width: 57%;
}
.width-4 {
  // width: 550px;
  width: 71%;
}
.width-5 {
  // width: 688px;
  width: 86%;
}
.width-6 {
  // width: 810px;
  width: 100%;
}

.text-truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (max-width: 991px) {
  //  .table-calendar{
  //    width: 830px;
  //  }
  .table-calendar .header-table .td {
    width: 120px;
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
  height: 100%;
  border-radius: 20px;
  width: 95%;
  margin-left: auto;
  box-shadow: none;
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
  }
  .card-left {
    padding-right: 30px;
    @media (max-width: 991px) {
      padding-right: 0;
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
      margin-top: 20px;
      display: flex;
      .path-border-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 10px;
        .path-border {
          border: 1px solid rgb(105, 76, 254);
          height: 42px;
          width: 1px;
          border-style: dashed;
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
</style>
