import axios from "../http/axios";

function generateParams(filterSortPage) {
  const serverQueryObj = {};
  if (filterSortPage !== null && filterSortPage !== undefined) {
    if (filterSortPage.hasOwnProperty("page")) {
      serverQueryObj.page = filterSortPage.page + 1;
    }

    if (filterSortPage.hasOwnProperty("rows")) {
      serverQueryObj.rows = filterSortPage.rows;
    }

    if (filterSortPage.sortField !== null) {
      serverQueryObj.sortField = filterSortPage.sortField;
      serverQueryObj.sortOrder =
        filterSortPage.sortOrder === 1 ? "asc" : "desc";
    }
  }

  return serverQueryObj;
}

export default {
  async getDriverPayTemplates(filterSortPage) {
    const serverQueryObj = generateParams(filterSortPage);
    // let serverQueryString = qs.stringify();
    const response = await axios.post("v2/driver-pay-templates/get-templates", {
      params: serverQueryObj,
    });
    return response.data.payload;
  },
  async createCustomFields(payload) {
    const response = await axios.post(
      "v2/driver-pay-templates/custom-fields/create",
      payload
    );
    return response.data.payload;
  },
  async getCustomFields() {
    const response = await axios.get(
      "v2/driver-pay-templates/custom-fields/get-all-fields"
    );
    return response.data.payload;
  },
  async getTemplateDataById(id) {
    const response = await axios.get(`v2/driver-pay-templates/${id}`);
    return response.data.payload;
  },
  async editCustomField(payload) {
    const response = await axios.patch(
      `v2/driver-pay-templates/custom-fields/edit`,
      payload
    );
    return response.data.payload;
  },
  async createTemplateData(payload) {
    const response = await axios.post(
      `v2/driver-pay-templates/create`,
      payload
    );
    return response.data.payload;
  },
  async editTemplateData(payload) {
    const response = await axios.patch(`v2/driver-pay-templates/edit`, payload);
    return response.data.payload;
  },
};
