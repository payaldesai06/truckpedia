import spreadsheetService from '../../services/SpreadsheetService'


export default {
  async getSpreadsheetList({commit}) {
    const data = await spreadsheetService.getSpreadsheetList();
    return data;
  },

  async getSpreadsheet({commit}, payload) {
    const data = await spreadsheetService.getSpreadsheet(payload);
    return data;
  },

  async createSpreadsheet({commit}, payload) {
    const data = await spreadsheetService.createSpreadsheet(payload);
    return data;
  },

  async addColumn({commit}, payload) {
    const data = await spreadsheetService.addColumn(payload);
    return data;
  },

  async updateCell({commit}, payload) {
    const data = await spreadsheetService.updateCell(payload);
    return data;
  },

  async modifySpreadsheetName({commit}, payload) {
    const data = await spreadsheetService.modifySpreadsheetName(payload);
    return data;
  },

  async getPodUrl({commit}, payload) {
    const data = await spreadsheetService.getPodUrl(payload);
    return data;
  },
  async addSheet({commit}, payload) {
    const data = await spreadsheetService.addSheet(payload);
    return data;
  },
  async modifySheetName({commit}, payload) {
    const data = await spreadsheetService.modifySheetName(payload);
    return data;
  },
  async modifySheetFilter({commit}, payload) {
    const data = await spreadsheetService.modifySheetFilter(payload);
    return data;
  },
  async getCreatedCustomColumns({commit}, payload) {
    const data = await spreadsheetService.getCreatedCustomColumns(payload);
    return data;
  },
  async getAccessDetails({commit}, payload) {
    const data = await spreadsheetService.getAccessDetails(payload);
    return data;
  },
  async updateAccessLevel({commit}, payload) {
    const data = await spreadsheetService.updateAccessLevel(payload);
    return data;
  },
  async deleteSpreadsheet({commit}, payload) {
    const data = await spreadsheetService.deleteSpreadsheet(payload);
    return data;
  },
  async deleteSubsheet({commit}, payload) {
    const data = await spreadsheetService.deleteSubsheet(payload);
    return data;
  },
  async addMultipleColumns({commit}, payload) {
    const data = await spreadsheetService.addMultipleColumns(payload);
    return data;
  },
  async deleteColumn({commit}, payload) {
    const data = await spreadsheetService.deleteColumn(payload);
    return data;
  },
  async changeColumnOrder({commit}, payload) {
    const data = await spreadsheetService.changeColumnOrder(payload);
    return data;
  },
  async changeColumnWidth({commit}, payload) {
    const data = await spreadsheetService.changeColumnWidth(payload);
    return data;
  },
  async updateRowHeight({commit}, payload) {
    const data = await spreadsheetService.updateRowHeight(payload);
    return data;
  },
  async updateSheetMultipleRowFormat({commit}, payload) {
    const data = await spreadsheetService.updateSheetMultipleRowFormat(payload);
    return data;
  },
  async updateSortSchema({commit}, payload) {
    const data = await spreadsheetService.updateSortSchema(payload);
    return data;
  }
};
