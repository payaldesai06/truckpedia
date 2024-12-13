import {
  parseFloatWithTrim,
  commaSeparatedValue,
  formatStatusToCamelCamelCase,
  formatAmount,
  formatAddressCityState,
  formatAddressCityStateZipCode,
  extractAddress,
} from '@/helpers/helper';
import config from '@/config/constants.js';

export default {
  data() {
    return {
      loadTypes: {
        drayage: 'Drayage',
        ftl: 'FTL',
        ltl: 'LTL',
      },
      equipmentTypeOptions: config.planning.equipmentTypes,
    };
  },
  computed: {
    formattedAddress() {
      const result = formatAddressCityState(
        this.value.address,
        this.value.city,
        this.value.state
      );
      return result;
    },
  },
  methods: {
    commaSeparatedValue,
    parseFloatWithTrims(value) {
      return parseFloatWithTrim(value);
    },
    formatDate(date) {
      if (!date || !this.$dayjs(date).isValid()) {
        return '';
      }

      return this.$dayjs(date).format('MM/DD/YY');
    },
    formatStatus(value) {
      return formatStatusToCamelCamelCase(value);
    },
    formatNumberWithCommas(value) {
      if (!value) return value;
      const formattedValue = parseFloatWithTrim(value);
      return commaSeparatedValue(formattedValue);
    },
    formatUtcToLocalTime(utcTime) {
      return this.$dayjs.utc(utcTime).local().format('MM/DD/YY HH:mm z');
    },
    formatCurrencyRate(value) {
      return formatAmount(value);
    },
    formatStateCity(city, state) {
      return formatAddressCityState(null, city, state);
    },
    formatAddress(address, city, state, zipCode) {
      return formatAddressCityStateZipCode(address, city, state, zipCode);
    },
    checkValue(value) {
      if (value == null) {
        return '';
      }
      return value;
    },
    setPlace(place) {
      if (!place) return;

      const { address, city, state, zip_code } = extractAddress(place);
      const latitude = place.geometry.location.lat();
      const longitude = place.geometry.location.lng();

      this.value.address = address;
      this.value.city = city;
      this.value.state = state;
      this.value.zipCode = zip_code;
      this.value.latitude = latitude;
      this.value.longitude = longitude;

      this.$forceUpdate();
      this.validateAddress();
    },
    validateAddress() {
      const keysToValidate = ['city', 'state', 'latitude', 'longitude'];

      const invalidKeys = keysToValidate.filter((key) => {
        return !this.value[key];
      });

      if (invalidKeys.length) {
        this.validationErrors.address =
          invalidKeys.length === keysToValidate.length
            ? 'Address is required'
            : 'Please enter a valid address';
      } else {
        this.validationErrors.address = null;
      }
    },
    getEquipmentType(type) {
      if (!type) {
        return '';
      }
      const equipmentType = this.equipmentTypeOptions.find(
        (item) => item.value === type
      );

      return equipmentType ? equipmentType.title : '';
    },
  },
};
