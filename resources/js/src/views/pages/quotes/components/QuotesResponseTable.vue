<template>
  <div class="quote-response flex justify-center">
    <DataTable :value="quotesResponse" class="w-1/2 mt-5">
      <Column field="carrierCompany" header="Carrier">
        <template #body="slotProps">
          <div class="flex items-center col-gap-5">
            <img
              v-if="slotProps.data.carrierCompany.logoUrl"
              :src="slotProps.data.carrierCompany.logoUrl"
              :alt="slotProps.data.name"
              class="w-16 h-16"
            />
            <div
              v-else
              class="w-16 h-16 bg-blue flex justify-center items-center"
            >
              <p class="text-white">
                {{ getCompanyInitials(slotProps.data.carrierCompany.name) }}
              </p>
            </div>
            <p class="text-base uppercase font-semibold">
              {{ slotProps.data.carrierCompany.name }}
            </p>
          </div>
        </template>
      </Column>
      <!-- <Column field="maxWeight" header="Max Weight">
        <template #body="slotProps">
          <p class="text-blue">{{ slotProps.data.maxWeight }}</p>
        </template>
      </Column> -->
      <Column field="carrierSubmitQuoteRate" header="Rate">
        <template #body="slotProps">
          <p class="text-blue">{{ formatAmountValue(slotProps.data.carrierSubmitQuoteRate) }}</p>
        </template>
      </Column>
    </DataTable>
  </div>
</template>
<script>
import { formatAmount } from '@/helpers/helper';
export default {
  name: 'QuotesResponseTable',
  props: {
    quotesResponse: {
      default: [],
    },
  },
  methods: {
    formatAmountValue(amount) {
      return formatAmount(amount);
    },
    getCompanyInitials(name) {
      if (!name) return '';
      const [first, second] = name.split(' ');
      return first.charAt(0).toUpperCase() + (second ? second.charAt(0) : '').toUpperCase();
    },
  },
};
</script>
<style lang="scss">
.quote-response {
  .p-datatable {
    thead {
      th {
        &:first-child {
          width: 75%;
        }
      }
    }
  }
}
</style>
