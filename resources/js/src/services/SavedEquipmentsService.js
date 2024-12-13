import axios from "../http/axios";

function generateParams(filterSortPage, filter) {
  const serverQueryObj = {};
  if (filterSortPage !== null) {
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

  if (filter) {
    if (filter.equipmentType !== "") {
      serverQueryObj.filters = {
        equipmentType: filter.equipmentType,
      };
    }
  }

  return serverQueryObj;
}

export default {
  async getSavedEquipmentsDataTable(filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter);
    const { filters, page, rows } = serverQueryObj || {};
    let baseURL = "v2/savedEquipmentTypes/getList";
    if (page && rows) { 
      baseURL += `?page=${page}&perPage=${rows}`;
    } 
    const response = await axios.post(baseURL, {
      ...serverQueryObj,
      perPage: rows || 25,
    });
    return response.data.payload;
  },

  async createEquipment(equipment) {
    return await axios.post("v2/savedEquipmentTypes/create", equipment);
  },

  async updateEquipment(equipment) {
    return await axios.patch(`v2/savedEquipmentTypes/update`, equipment);
  },

  async deleteEquipment(equipmentId) {
    return await axios.delete(`v2/savedEquipmentTypes/delete/${equipmentId}`);
  },
};
