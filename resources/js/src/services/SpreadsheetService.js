import axios from '../http/axios'


export default {
  async getSpreadsheetList() {
    return await axios.get('/spreadsheet/get-spreadsheet-list');
  },
  async getSpreadsheet(payload) {
    return await axios.post('/spreadsheet/get-spreadsheet', payload);
  },
  async createSpreadsheet(payload) {
    return await axios.post('/spreadsheet/create-spreadsheet', payload);
  },
  async addColumn(payload) {
    return await axios.patch('/spreadsheet/add-column', payload);
  },
  async updateCell(payload) {
    return await axios.patch('/spreadsheet/update-cell-value', payload);
  },
  async modifySpreadsheetName(payload) {
    return await axios.patch('/spreadsheet/modify-spreadsheet-name', payload);
  },
  async getPodUrl(payload) {
    return await axios.get('/loads/get-pod-url', {params: payload});
  },
  async addSheet(payload) {
    return await axios.patch('/spreadsheet/add-sheet', payload);
  },
  async modifySheetName(payload) {
    return await axios.patch('/spreadsheet/modify-sheet-name', payload);
  },
  async modifySheetFilter(payload) {
    return await axios.patch('/spreadsheet/modify-sheet-filter', payload);
  },
  async getCreatedCustomColumns(payload) {
    return await axios.get(
        '/spreadsheet/get-created-custom-columns', {params: payload});
  },
  async getAccessDetails(payload) {
    return await axios.get('/spreadsheet/access-details', {params: payload});
  },
  async updateAccessLevel(payload) {
    return await axios.patch('/spreadsheet/update-access-level', payload);
  },
  async deleteSpreadsheet(payload) {
    return await axios.post('/spreadsheet/delete-spreadsheet', payload);
  },
  async deleteSubsheet(payload) {
    return await axios.post('/spreadsheet/delete-sheet', payload);
  },
  async addMultipleColumns(payload) {
    return await axios.patch('/spreadsheet/add-multiple-columns', payload);
  },
  async deleteColumn(payload) {
    return await axios.post('/spreadsheet/delete-column', payload);
  },
  async changeColumnOrder(payload) {
    return await axios.patch('/spreadsheet/change-column-order', payload);
  },
  async changeColumnWidth(payload) {
    return await axios.patch('/spreadsheet/update-column-width', payload);
  },
  async updateRowHeight(payload) {
    return await axios.patch('/spreadsheet/update-row-height', payload);
  },
  async updateSheetMultipleRowFormat(payload) {
    return await axios.patch(
        '/spreadsheet/update-sheet-multiple-rows-format', payload);
  },
  async updateSortSchema(payload) {
    return await axios.patch('/spreadsheet/update-sort-schema', payload);
  },
};