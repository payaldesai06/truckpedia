import config from '@/config/constants';

const configLoadImagePurpose = config.loadImage.purpose;
import dayjs from 'dayjs';
export default {
  load(state) {
    return state.load;
  },

  loadRateConfirmations(state) {
    if (!state.load || !state.load.load_rate_confirmations) return [];

    return state.load.load_rate_confirmations;
  },

  loadDistancesCacheMap(state) {
    if (!state.loadDistancesCacheMap) {
      return new Map();
    }

    return state.loadDistancesCacheMap;
  },

  loadBol(state) {
    if (!state.load || !state.load.load_images) return [];

    return state.load.load_images.filter((item) => item.purpose === 'bol');
  },

  loadInvoice(state) {
    if (!state.load) return null;

    if (
      state.load.invoice_file_name == null ||
      state.load.invoice_file_name == '' ||
      state.load.invoice_file_url == null ||
      state.load.invoice_file_url == ''
    ) {
      return null;
    }

    return {
      invoice_file_name: state.load.invoice_file_name,
      invoice_file_url: state.load.invoice_file_url,
      originalFileName: state.load.originalFileName,
    };
  },

  loadProofOfDeliveries(state) {
    if (!state.load || !state.load.load_images) return [];

    const loadImagePurpose = [
      configLoadImagePurpose.load_pod,
      configLoadImagePurpose.load_pod_admin,
    ];

    return state.load.load_images.filter((loadImage) =>
      loadImagePurpose.includes(loadImage.purpose)
    );
  },

  loadThirdPartyCarrierProofOfDeliveries(state) {
    if (!state.load || !state.load.loadImagesFromThirdPartyCarrier) return [];

    const loadImagePurpose = [
      configLoadImagePurpose.load_pod,
      configLoadImagePurpose.load_pod_admin,
    ];

    return state.load.loadImagesFromThirdPartyCarrier.filter((loadImage) =>
      loadImagePurpose.includes(loadImage.purpose)
    );
  },

  loadPictures(state) {
    if (!state.load || !state.load.load_images) return [];

    const loadImagePurpose = [
      configLoadImagePurpose.load_delivered,
      configLoadImagePurpose.load_picked_up,
      configLoadImagePurpose.load_image_admin,
    ];

    return state.load.load_images.filter((loadImage) =>
      loadImagePurpose.includes(loadImage.purpose)
    );
  },
  loadThirdPartyPictures(state) {
    if (!state.load || !state.load.loadImagesFromThirdPartyCarrier) return [];

    const loadImagePurpose = [
      configLoadImagePurpose.load_delivered,
      configLoadImagePurpose.load_picked_up,
      configLoadImagePurpose.load_image_admin,
    ];

    return state.load.loadImagesFromThirdPartyCarrier.filter((loadImage) =>
      loadImagePurpose.includes(loadImage.purpose)
    );
  },
  loadThirdPartyCarrierFiles(state) {
    const { load } = state;
    if (!load || !load.thirdPartyCarrier) return {};
    return load.thirdPartyCarrier;
  },
  loadThirdPartyCarrierInvoice(state) {
    const { load } = state;
    if (!load || !load.thirdPartyCarrier) return {};

    return {
      invoiceOriginalFileName: load.thirdPartyCarrier.invoiceOriginalFileName,
      invoiceStorageFileName: load.thirdPartyCarrier.invoiceStorageFileName,
      invoiceUrl: load.thirdPartyCarrier.invoiceUrl,
    };
  },
  loadLumper(state) {
    if (!state.load || !state.load.load_images) return [];
    return state.load.load_images.filter((item) => item.purpose === 'lumper');
  },
  loadScale(state) {
    if (!state.load || !state.load.load_images) return [];
    return state.load.load_images.filter((item) => item.purpose === 'scale');
  },
  loadFuel(state) {
    if (!state.load || !state.load.load_images) return [];
    return state.load.load_images.filter((item) => item.purpose === 'fuel');
  },
  loadRepair(state) {
    if (!state.load || !state.load.load_images) return [];
    return state.load.load_images.filter((item) => item.purpose === 'repair');
  },
  loadOthers(state) {
    if (!state.load || !state.load.load_images) return [];
    return state.load.load_images.filter((item) => item.purpose === 'others');
  },

  allDriverTruckTrailerForLoadDriver(state) {
    return state.allDriverTruckTrailerForLoadDriver;
  },

  getFuelPrice: (state) => (shippingDate) => {
    const date = dayjs(shippingDate);
    let lastPrice = null;
    for (let i = state.publicWeeklyFuelPrices.prices.length - 1; i >= 0; i--) {
      const priceItem = state.publicWeeklyFuelPrices.prices[i];
      const releaseDate = dayjs(priceItem.releaseDate);
      if (releaseDate.isSame(date) || releaseDate.isBefore(date)) {
        lastPrice = priceItem.price;
        break;
      }
    }
    return lastPrice;
  },
};
