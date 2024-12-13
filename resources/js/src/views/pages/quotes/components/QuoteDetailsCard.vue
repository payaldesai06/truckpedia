<template>
  <div>
    <div class="vx-row">
      <div class="vx-col w-1/3">
        <div class="flex gap-2 mt-4">
          <span class="p-component w-40">Shipper Name:</span>
          <span class="p-component">{{
            quotesDetails && checkValue(quotesDetails.shipperCompany.name)
          }}</span>
        </div>

        <div class="flex gap-2 mt-4">
          <span class="p-component w-40">Equipment Type:</span>
          <span class="p-component">{{
            formatStatus(quotesDetails.equipmentType)
          }}</span>
        </div>

        <div class="flex gap-2 mt-4">
          <span class="p-component w-40">Origin:</span>
          <span class="p-component">
            {{
              quotesDetails &&
              quotesDetails.stops &&
              quotesDetails.stops[0] &&
              formatStateCity(
                quotesDetails.stops[0].city,
                quotesDetails.stops[0].state
              )
            }}</span
          >
        </div>
        <div class="flex gap-2 mt-4">
          <span class="p-component w-40">Destination:</span>
          <span class="p-component">
            {{
              quotesDetails &&
              quotesDetails.stops &&
              quotesDetails.stops.length > 0 &&
              quotesDetails.stops[quotesDetails.stops.length - 1] &&
              formatStateCity(
                quotesDetails.stops[quotesDetails.stops.length - 1].city,
                quotesDetails.stops[quotesDetails.stops.length - 1].state
              )
            }}</span
          >
        </div>
        <div class="flex gap-2 mt-4">
          <span class="p-component w-40">Miles:</span>
          <span class="p-component">
            {{ checkValue(quotesDetails.distance) }}
          </span>
        </div>
      </div>
      <div class="vx-col w-1/3">
        <div class="flex gap-2 mt-4">
          <span class="p-component w-40">Rate Accepted:</span>
          <span class="p-component">
            {{ formatCurrencyRate(quotesDetails.mutualAgreedRate) }}
          </span>
        </div>

        <div class="flex gap-2 mt-4">
          <span class="p-component w-40">Trucks Needed:</span>
          <span class="p-component">{{
            checkValue(quotesDetails.numberOfTrucks)
          }}</span>
        </div>

        <div class="flex gap-2 mt-4">
          <span class="p-component w-40">Available Trucks:</span>
          <span class="p-component">{{
            checkValue(quotesDetails.carrierNumberOfTrucks)
          }}</span>
        </div>

        <div class="flex gap-2 mt-4">
          <span class="p-component w-40">Urgency Date:</span>
          <span class="p-component">{{
            formatDate(quotesDetails.urgencyDate)
          }}</span>
        </div>

        <div class="flex gap-2 mt-4">
          <span class="p-component w-40">Book Now Rate:</span>
          <span class="p-component">
            {{ formatCurrencyRate(quotesDetails.bookNowRate) }}
          </span>
        </div>
      </div>
      <div class="vx-col w-1/3">
        <div class="flex gap-2 mt-4">
          <span class="p-component w-40">Submitted Quote:</span>
          <span class="p-component">
            {{
              quotesDetails.carrierSubmitQuoteRate &&
              formatCurrencyRate(
                parseFloatWithTrims(quotesDetails.carrierSubmitQuoteRate)
              )
            }}
          </span>
        </div>
        <div class="flex gap-2 mt-4">
          <span class="p-component w-40">Quote Valid Until:</span>
          <span class="p-component">{{
            formatDate(quotesDetails.carrierQuoteValidUntil)
          }}</span>
        </div>

        <div class="flex gap-2 mt-4">
          <span class="p-component w-40">Quote Submitted:</span>
          <span class="p-component">{{
            quotesDetails.carrierSubmitQuoteRateSubmitUtcTime &&
            formatUtcToLocalTime(
              quotesDetails.carrierSubmitQuoteRateSubmitUtcTime
            )
          }}</span>
        </div>

        <div class="flex gap-2 mt-4">
          <span class="p-component w-40">Counter Rate:</span>
          <span class="p-component">
            {{ formatCurrencyRate(quotesDetails.shipperCounterRate) }}
          </span>
        </div>

        <div class="flex gap-2 mt-4">
          <span class="p-component w-40">Counter Received:</span>
          <span class="p-component">{{
            quotesDetails.shipperCounterRateSubmitUtcTime &&
            formatUtcToLocalTime(quotesDetails.shipperCounterRateSubmitUtcTime)
          }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import quoteCommonFunctions from '../mixins/quoteCommonFunctions';

export default {
  name: 'QuoteDetailsCard',
  mixins: [quoteCommonFunctions],
  props: {
    quotesDetails: {
      type: Object,
      default: () => {},
    },
    isRequestViaLink: {
      type: Boolean,
      default: false,
    },
  },
  methods: {},
};
</script>
<style>
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.gap-2 {
  gap: 0.5rem;
}
.w-40 {
  width: 10rem;
}
.opacity-40 {
  opacity: 0.4;
}
</style>
