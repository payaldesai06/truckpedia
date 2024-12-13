<template>
  <div class="">
    <div class="w-full flex items-center justify-between">
      <h3 v-text="'Find Carriers'" />
      <vs-icon
        class="cursor-pointer"
        icon="close"
        size="small"
        @click="$emit('onClose')"
      />
    </div>
    <vs-divider />
    <div>
      <div
        v-if="truckList && truckList.length"
        class="flex flex-col gap-2 overflow-x-auto"
        style="max-height: 470px"
      >
        <div v-for="(item, index) in truckList" :key="index" class="truck-card">
          <!-- Header -->
          <div class="flex items-center">
            <img
              v-if="item.company.logoUrl"
              :src="item.company.logoUrl"
              alt="logo"
              class="logo"
            />
            <vs-avatar
              v-else
              class="m-0 rounded-none"
              color="#1877f1"
              :text="getFirstLetter(item.company.name)"
            />
            <span
              :class="[
                'ml-2 font-semibold',
                { 'cursor-pointer': item.company.fmcsaCarrierId },
              ]"
              @click="redirectToCarrierDetails(item.company)"
              v-text="item.company.name"
            />
            <vs-button
              class="ml-auto"
              color="primary"
              size="small"
              @click.stop="
                $emit('onSelect', {
                  estimatedPrice: item.rate,
                  carrierCompanyId: item.company.id,
                })
              "
            >
              Reserve
            </vs-button>
          </div>
          <vs-divider class="my-2" />
          <!-- Content -->
          <div class="flex gap-8">
            <div class="flex flex-col">
              <span class="text-gray">Max Weight</span>
              <span>{{ formatNumber(item.maxWeight) }}</span>
            </div>
            <div class="flex flex-col">
              <span class="text-gray flex gap-1">
                Rate
                <template
                  v-if="Object.keys(item.filteredAccessorialFees).length"
                >
                  <vs-dropdown vs-custom-content>
                    <vs-icon
                      class="cursor-pointer text-base"
                      icon="info_outline"
                    />
                    <vs-dropdown-menu>
                      <div class="flex flex-col p-2">
                        <span class="font-semibold text-center">
                          Accessorial Fees
                        </span>
                        <div class="flex justify-between">
                          <span class="font-semibold w-3/4">Type</span>
                          <span class="font-semibold w-1/4">Rate</span>
                        </div>
                        <vs-divider class="my-2" />
                        <div class="flex flex-col gap-1">
                          <div
                            v-for="(value, key) in item.filteredAccessorialFees"
                            :key="key"
                            class="flex justify-between"
                          >
                            <span class="w-3/4">
                              {{ accessorialFeesLabels[key] }}
                            </span>
                            <span class="w-1/4">
                              ${{ formatNumber(value) }}
                            </span>
                          </div>
                        </div>
                      </div>
                    </vs-dropdown-menu>
                  </vs-dropdown>
                </template>
              </span>
              <span>${{ formatNumber(item.rate) }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center align-center p-10" v-else>
        <span>No trucks available</span>
      </div>
    </div>
  </div>
</template>

<script>
import { parseFloatWithTrim } from '@/helpers/helper';
import config from '@/config/constants';

export default {
  name: 'FindCarriersPanel',
  props: {
    truckList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      accessorialFeesLabels: {
        detentionRate: 'Detention (hourly after 2 hours)',
        layoverRate: 'Layover (daily)',
        tonuRate: 'TONU',
        extraStopRate: 'Extra Stop',
        chassisRentalRate: 'Chassis Rental (daily)',
        chassisSplitRate: 'Chassis Split',
        dryStorageRate: 'Dry Storage (daily)',
        hazmatRate: 'Hazmat',
        prepullRate: 'Prepull',
      },
    };
  },
  methods: {
    getFirstLetter(str) {
      return str.trim().charAt(0);
    },
    formatNumber(number) {
      if (!number) return number;
      const formattedValue = parseFloatWithTrim(number);
      return formattedValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    },
    redirectToCarrierDetails({ fmcsaCarrierId }) {
      if (fmcsaCarrierId) {
        const url = config.truckingDirectoryCarrierDetailUrl;
        window.open(`${url}${fmcsaCarrierId}`, '_blank');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.truck-card {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 10px;
}

.logo {
  width: 32px;
  height: 32px;
}

.text-gray {
  color: #b8b8b8;
}
</style>
