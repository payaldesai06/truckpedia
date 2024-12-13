<template>
  <div>
    <div v-if="Object.keys(ratePredictions).length" class="target-rate-card">
      <div>
        <div class="flex justify-between w-full">
          <p class="title">Network Rate</p>
          <a href="https://www.greenscreens.ai/" target="_blank">
            <img
              src="../../../../../../../assets/images/logo/greenscreensaiLogo.png"
              class="object-contain w-32"
            />
          </a>
        </div>
        <h3 class="price">
          {{ formatAmount(ratePredictions.targetBuyRate * calculatedDistance) }}
        </h3>
      </div>
      <div class="confidence-wrapper">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <p>Confidence Level</p>
            <div class="chart-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
              >
                <path
                  d="M1.12676 3.43836H1.25616C1.75436 3.43836 2.16198 3.84598 2.16198 4.34417V8.87324C2.16198 9.37144 1.75436 9.77906 1.25616 9.77906H1.12676C0.628564 9.77906 0.220947 9.37144 0.220947 8.87324V4.34417C0.220947 3.84598 0.628564 3.43836 1.12676 3.43836ZM4.75002 0.720917C5.24821 0.720917 5.65583 1.12853 5.65583 1.62673V8.87324C5.65583 9.37144 5.24821 9.77906 4.75002 9.77906C4.25182 9.77906 3.8442 9.37144 3.8442 8.87324V1.62673C3.8442 1.12853 4.25182 0.720917 4.75002 0.720917ZM8.37327 5.897C8.87147 5.897 9.27909 6.30461 9.27909 6.80281V8.87324C9.27909 9.37144 8.87147 9.77906 8.37327 9.77906C7.87508 9.77906 7.46746 9.37144 7.46746 8.87324V6.80281C7.46746 6.30461 7.87508 5.897 8.37327 5.897Z"
                  fill="#208D28"
                />
              </svg>
            </div>
          </div>
          <h3>{{ confidenceLevel }}</h3>
        </div>
        <vs-progress
          class="target-rate-confidence-progress"
          :percent="confidenceLevel"
          color="#167625"
        >
          success
        </vs-progress>
        <div class="footer">
          <p>
            Lower Bound
            <span>{{
              formatAmount(ratePredictions.lowBuyRate * calculatedDistance)
            }}</span>
          </p>
          <p>
            Upper Bound
            <span>{{
              formatAmount(ratePredictions.highBuyRate * calculatedDistance)
            }}</span>
          </p>
          <p>
            Fuel
            <span>{{
              formatAmount(ratePredictions.fuelRate * calculatedDistance)
            }}</span>
          </p>
          <!-- <p>
            Mileage
            <span class="pr-2">{{ calculatedDistance }}</span> miles
          </p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatAmount } from '@/helpers/helper';
export default {
  props: {
    ratePredictions: {
      type: Object,
      default: () => {},
    },
    distance: {
      type: Number,
      default: () => null,
    },
  },
  computed: {
    confidenceLevel() {
      return this.ratePredictions.confidenceLevel < 80
        ? 80
        : this.ratePredictions.confidenceLevel;
    },
    calculatedDistance() {
      return this.distance || this.ratePredictions.distance;
    },
  },
  methods: {
    formatAmount(amount) {
      return formatAmount(amount);
    },
  },
};
</script>

<style lang="scss" scoped>
.target-rate-card {
  border-radius: 8px;
  border: 1.25px solid var(--d-9-d-9-d-9, #1877f2);
  background: linear-gradient(
    180deg,
    rgba(24, 119, 242, 0.06) 0%,
    rgba(39, 179, 237, 0.06) 65%,
    rgba(47, 211, 235, 0.06) 100%
  );
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.04),
    0px 4px 10px 0px rgba(0, 0, 0, 0.08);
  min-height: 200px;
  padding: 12px 16px;
  .title {
    color: var(--Black-Black-300, #71717a);
    font-size: 1rem;
    font-weight: 400;
    line-height: 22px;
  }
  .price {
    color: var(--Black-Black-Base, #18181a);
    font-size: 24px;
    font-weight: 700;
    line-height: 22px;
    margin-top: 10px;
  }
  .confidence-wrapper {
    margin-top: 1rem;
    p {
      color: var(--Black-Black-600, #141415);
      text-align: center;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      padding-right: 5px;
    }
    h2 {
      color: var(--Black-Black-Base, #18181a);
      text-align: center;
      font-family: Poppins;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 22px;
    }
    .chart-btn {
      border-radius: 3.337px;
      background: var(--Green-Green-50, #e3fad6);
      display: flex;
      padding: 5.721px;
      justify-content: center;
      align-items: center;
      gap: 4.767px;
    }
    .footer {
      padding-top: 8px;
      p {
        display: flex;
        align-items: center;
        color: var(--Black-Black-300, #71717a);
        text-align: center;
        font-size: 12px;
        font-weight: 400;
        line-height: 22px;
        padding-top: 8px;
        span {
          color: var(--Black-Black-Base, #18181a);
          font-weight: 600;
          padding-left: 10px;
        }
      }
    }
  }
}
</style>
