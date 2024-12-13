import axios from "../http/axios";

export const searchByLoad = ({ page, pageSize, loadId }) => {
  const url = `truckpedia/available-trucks/searchByLoad ${
    page ? `?page=${page}` : ""
  }`;
  const payload = {
    loadId,
  };
  if (pageSize) {
    payload.pageSize = pageSize;
  }

  return axios.post(url, payload);
};

export const reserveByLoad = ({ loadId, estimatedPrice, carrierCompanyId }) => {
  return axios.post("truckpedia/reserveByLoad", {
    loadId,
    estimatedPrice,
    carrierCompanyId,
  });
};

export const trackCarrierTrucks = (payload) => {
  return axios.post("truckpedia/trackCarrierTrucks", payload);
};
