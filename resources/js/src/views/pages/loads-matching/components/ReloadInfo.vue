<template>
  <div class="reload-info">
    <div class="pb-0">
      <div class="flex items-center">
        <button type="button" class="icon-btn" @click="$emit('hideReloadInfo')">
          <chevron-left-icon size="2x" class="mr-2"></chevron-left-icon>
        </button>
        <h5 class="ml-2 heading">Truck 100 Reload info</h5>
      </div>
    </div>
    <div class="fixed-height">
      <div class="bottom-border">
        <div class="pt-3 pb-2">
          <span class="fs-12">Live</span>
        </div>
        <div>
          <ul class="ul-list">
            <li class="list-circle">Van - 53 Feet</li>
            <li class="list-circle">10250 LB</li>
          </ul>
        </div>
      </div>
      <div class="bottom-border">
        <div class="pt-3 pb-2">
          <span class="fs-12">Service Type</span>
        </div>
        <div>
          <ul class="ul-list">
            <li class="list-circle">Truckload Contract</li>
          </ul>
        </div>
      </div>
      <div class="bottom-border">
        <div class="pt-3 pb-2">
          <span class="fs-12">Notes</span>
        </div>
        <div>
          <ul class="ul-list">
            <span class="font-12">Documentation</span>
            <li class="list-circle">BOL required</li>
            <li class="list-circle pb-2">
              Receipts required for any accessorial reimbursement
            </li>
            <span>Loading/Unloading</span>
            <li class="list-circle">Delivery appointment required</li>
          </ul>
        </div>
      </div>
      <div class="bottom-border">
        <div class="pt-3 pb-2">
          <span class="fs-12">Truckpedia Representative</span>
        </div>
        <div>
          <ul class="ul-list">
            <li class="list-circle">Ryder Liu</li>
            <li class="list-circle">720-231-4123</li>
            <li class="list-circle">ryder.liu@ezpapelcom</li>
          </ul>
        </div>
      </div>
      <div class="bottom-border">
        <div class="pt-3 pb-2">
          <span class="fs-12">Commodity</span>
        </div>
        <div>
          <ul class="ul-list">
            <span>Consumer Goods</span>
            <li class="list-circle">Weight: 10230 lb</li>
            <li class="list-circle">Quantity: 1000 units</li>
          </ul>
        </div>
      </div>

      <div class="address">
        <div class="flex">
          <div class="flex">
            <img
              src="@assets/images/custom/sender_icon.svg"
              class="before-img"
              alt="Sender icon"
            />
            <div class="pl-4">
              <h4 class="fs-14">Memphis, TN</h4>
              <span class="fs-12">Feb 21, 2022 | 8:00am</span>
            </div>
          </div>

          <div class="flex">
            <div class="path-border-container before-img">
              <div class="path-border"></div>
              <img
                src="@assets/images/custom/receiver_icon.svg"
                alt="Receiver icon"
              />
            </div>
            <div class="pl-3">
              <h4 class="fs-14">Nashville, TN</h4>
              <span class="fs-12">Feb 21, 2022 | 10:00am</span>
            </div>
          </div>
        </div>
      </div>

      <div class="bottom-border">
        <GmapMap
          :center="{ lat: 10, lng: 10 }"
          :zoom="7"
          class="mt-6 mx-auto gmap"
          map-type-id="terrain"
        />
      </div>

      <div>
        <div class="flex justify-between mt-3 items-center">
          <div>
            <span class="fs-12">Load Price</span>
            <div class="flex items-baseline">
              <h5 class="font-medium">$5,315</h5>
              <span style="font-size: 10px"> / RPM $2.60</span>
            </div>
          </div>
          <div class="limited-deal">
            <span>Limited Deal</span>
          </div>
        </div>
      </div>

      <div class="mt-5 confim-requirements">
        <p class="mb-1 font-medium">Confim Requirements*</p>
        <vs-checkbox v-model="loadTrackingPolicy1">
          <span>
            <b>I agree</b> to Truckpedia's load tracking requirements and I confirm
            that I understand and will meet the carrier requirements for this
            load.
          </span>
        </vs-checkbox>
      </div>
      <div class="mt-3 call-appointment">
        <p class="mb-1 font-medium">Call for Appointment Time*</p>
        <vs-checkbox v-model="loadTrackingPolicy2">
          <span>
            <b>I agree</b> to call Truckpedia for the appointment time after
            booking.
          </span>
        </vs-checkbox>
      </div>

      <div class="text-center my-4">
        <vs-button color="primary" type="filled">BOOK NOW</vs-button>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronLeftIcon } from "vue-feather-icons";
export default {
  components: {
    ChevronLeftIcon
  },
  data() {
    return {
      loadTrackingPolicy1: true,
      loadTrackingPolicy2: true
    };
  }
};
</script>

<style lang="scss">
.address {
  margin-top: 20px;
  display: flex;
  .path-border-container {
    display: flex;
    // flex-direction: column;
    align-items: center;
    margin-right: 10px;
    .path-border {
      border: 1px solid rgb(105, 76, 254);
      height: 1px;
      width: 30px;
      border-style: dashed;
    }
    img {
      width: 18px;
    }
  }
}

.fixed-height {
  overflow: auto;
  height: 70vh;
  @media (max-width: 991px) {
    height: 100vh;
  }
}

.heading {
  color: #000;
}
.ul-list span {
  font-size: 12px;
}
.bottom-border {
  border-bottom: 1px solid #f1f4ff;
  padding-bottom: 0.75rem;
}

.card h3 {
  font-size: 18px;
  font-weight: 6 00;
}
.ul-list {
  list-style: none;
  padding: 0px;
}

.list-circle {
  font-size: 13px;
  font-weight: 600;
  color: #000;
  display: flex;
  align-items: center;
}

.ul-list .list-circle::before {
  content: "\2022";
  color: #7367f0;
  font-weight: bold;
  display: inline-block;
  line-height: 18px;
  margin-bottom: 5px;
  font-size: 30px;
  margin-right: 8px;
}
.icon-btn {
  background: transparent;
  border: none;
}
.fs-12 {
  font-size: 12px;
}
.fs-14 {
  font-size: 14px;
}

.before-img {
  position: relative;
  bottom: 10px;
}

.limited-deal {
  background: #f1f4ff;
  border-radius: 20px;
  span {
    color: rgb(115, 103, 240);
    font-size: 10px;
    padding: 5px 12px;
    font-weight: 600;
  }
}

.call-appointment span,
.confim-requirements span {
  line-height: 10px;
  font-size: 10px;
  @media (max-width: 991px) {
    line-height: 15px;
    font-size: 12px;
  }
}

.gmap {
  width: 50%;
  height: 150px;
  @media (max-width: 991px) {
    width: 100%;
    height: 90px;
  }
}

.checkbox_x .vs-checkbox {
  width: 43px !important;
}
</style>
