<template>
  <div>
    <div style="background-color: #fff; padding: 15px">
      <div class="p-5">
        <h1 class="header">Quote Request</h1>
        <!-- Route -->
        <div class="flex gap-2 items-center">
          <div class="text-lg font-medium">
            {{
              quoteEmailContent &&
              quoteEmailContent.stops &&
              quoteEmailContent.stops[0] &&
              formatStateCity(
                quoteEmailContent.stops[0].city,
                quoteEmailContent.stops[0].state
              )
            }}
          </div>
          <div class="flex items-center">
            <div class="ellipse"></div>
            <div class="dashed-line"></div>
            <div class="pin"></div>
          </div>
          <div class="text-lg font-medium">
            {{
              quoteEmailContent &&
              quoteEmailContent.stops &&
              quoteEmailContent.stops.length > 0 &&
              quoteEmailContent.stops[quoteEmailContent.stops.length - 1] &&
              formatStateCity(
                quoteEmailContent.stops[quoteEmailContent.stops.length - 1]
                  .city,
                quoteEmailContent.stops[quoteEmailContent.stops.length - 1]
                  .state
              )
            }}
          </div>
        </div>
        <!-- Quote Details -->
        <div class="flex flex-col mt-4">
          <span class="text-xl font-medium">QUOTE DETAILS</span>
          <div class="flex gap-2 mt-4">
            <span class="text-lg font-medium w-40">Mode:</span>
            <span class="text-lg font-medium">
              {{ loadTypes[quoteEmailContent.loadType] || '' }}
            </span>
          </div>
          <div class="divider"></div>
          <div class="flex gap-2">
            <span class="text-lg font-medium w-40">Equipment:</span>
            <span class="text-lg font-medium w-40">
              {{ getEquipmentType(quoteEmailContent.equipmentType) }}
            </span>
          </div>
          <div class="divider"></div>
          <div class="flex gap-2">
            <span class="text-lg font-medium w-40">Locations</span>
            <div>
              <div class="flex gap-6">
                <div
                  class="flex flex-col"
                  v-for="(item, index) in (
                    quoteEmailContent.stops || []
                  ).filter((item) => item.type === 'shipper')"
                  :key="index"
                >
                  <div class="flex gap-2">
                    <span class="text-sm font-medium mr-3 mt-2px opacity-40">
                      PICKUP {{ index + 1 }}
                    </span>
                    <div class="flex flex-col">
                      <span class="text-base font-medium">
                        {{ formatStateCity(item.city, item.state) }}
                      </span>
                      <span class="text-base font-medium">{{ item.date }}</span>
                      <span class="text-base font-medium">{{ item.time }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex gap-6">
                <div
                  class="flex flex-col"
                  v-for="(item, index) in (
                    quoteEmailContent.stops || []
                  ).filter((item) => item.type === 'receiver')"
                  :key="index"
                >
                  <div class="flex gap-2 mt-4">
                    <span class="text-sm font-medium opacity-40 mt-2px">
                      DELIVERY {{ index + 1 }}
                    </span>
                    <div class="flex flex-col">
                      <span class="text-base font-medium">
                        {{ formatStateCity(item.city, item.state) }}
                      </span>
                      <span class="text-base font-medium">
                        {{ item.date }}
                      </span>
                      <span class="text-base font-medium">
                        {{ item.time }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="divider"></div>
          <div class="flex gap-2">
            <span class="text-lg font-medium w-40">Driver Preference:</span>
            <span class="text-lg font-medium">
              {{
                driverPreferences[quoteEmailContent.driverPreference] || 'N/A'
              }}
            </span>
          </div>
          <div class="divider"></div>
          <div class="flex gap-2">
            <span class="text-lg font-medium w-40">Total Weight:</span>
            <span class="text-lg font-medium">{{ totalWeight }}</span>
          </div>
        </div>
        <!-- Button -->
        <div class="book-now-btn mt-10">
          <span class="text-base font-mediu" style="color: #1877f2">
            Book Now: ${{ quoteEmailContent.bookNowRate }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import quoteCommonFunctions from '../mixins/quoteCommonFunctions';

export default {
  name: 'QuoteEmailContentPreview',
  mixins: [quoteCommonFunctions],
  computed: {
    ...mapGetters('auth', ['user']),
  },
  props: {
    quoteEmailContent: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    totalWeight() {
      let weight = 0;

      if (this.quoteEmailContent && this.quoteEmailContent.stops) {
        this.quoteEmailContent.stops.forEach((stop) => {
          weight += stop.weight ? Number(stop.weight) : 0;
        });
      }

      if (weight == 0) {
        return '';
      }

      return this.parseFloatWithTrims(weight);
    },
  },
  data() {
    return {
      driverPreferences: {
        solo: 'Solo',
        team: 'Team',
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.header {
  font-weight: 700;
  font-size: 20px;
  line-height: 1.6;
  margin-top: 0;
}
.ellipse {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #3975eb;
}
.dashed-line {
  border-top: 1px dashed #3975eb;
  min-width: 128px;
  height: 0;
}
.pin {
  width: 16px;
  height: 16px;
  width: 15px;
  height: 15px;
  border-radius: 50% 50% 50% 0;
  background: #3975eb;
  /* position: absolute; */
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  /* margin: -20px 0 0 -20px; */
}
.pin:after {
  content: '';
  width: 6px;
  height: 6px;
  margin: 3px 0 0 2px;
  background: #fff;
  position: absolute;
  border-radius: 50%;
  background-color: #3975eb;
  border: 2px solid #fff;
  box-shadow: 0 0 0 2px #3975eb;
}
.divider {
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  max-width: 934px;
  height: 0;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.book-now-btn {
  width: 100%;
  max-width: 215px;
  border-radius: 4px;
  border: 1px solid #1877f2;
  padding: 16px 28px;
  cursor: pointer;
}
.p-5 {
  padding: 1.25rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}
.font-medium {
  font-weight: 500;
}
.flex {
  display: flex;
}
.flex-col {
  flex-direction: column;
}
.gap-2 {
  gap: 0.5rem;
}
.items-center {
  align-items: center;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.mt-4 {
  margin-top: 1rem;
}
.w-20 {
  width: 5rem;
}
.w-40 {
  width: 10rem;
}
.opacity-40 {
  opacity: 0.4;
}
.quotesCard {
  margin-top: 25px;
  table {
    background-color: #ffffff;
    border: 1px solid #ccc;
    max-width: 100%;
    height: 250px;
    padding: 15px;
    tbody {
      tr {
        td {
          a {
            background-color: #3975eb;
            text-decoration: none;
            cursor: pointer;
            color: white;
            padding: 10px 20px;
          }
        }
      }
    }
  }
}
.mt-25 {
  margin-top: 25px;
}
.mt-15 {
  margin-top: 15px;
}
.mt-2px {
  margin-top: 2px;
}
</style>
