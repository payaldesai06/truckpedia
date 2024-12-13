import driverPayTemplatesService from "@/services/DriverPayTemplatesService";

export default {
  createCustomFields({ commit }, payload) {
    return driverPayTemplatesService
      .createCustomFields(payload)
      .then((data) => {
        return data;
      });
  },
  getCustomFields() {
    return driverPayTemplatesService.getCustomFields().then((data) => {
      return data;
    });
  },
  getDriverPayTemplates() {
    return driverPayTemplatesService.getDriverPayTemplates().then((data) => {
      return data;
    });
  },
  getTemplateDataById({commit}, id) {
    return driverPayTemplatesService.getTemplateDataById(id).then((data) => {
      return data;
    });
  },
  editCustomField({commit}, payload) {
    return driverPayTemplatesService.editCustomField(payload).then((data) => {
      return data;
    });
  },
  editTemplateData({commit}, payload) {
    return driverPayTemplatesService.editTemplateData(payload).then((data) => {
      return data;
    });
  },
  createTemplateData({commit}, payload) {
    return driverPayTemplatesService.createTemplateData(payload).then((data) => {
      return data;
    });
  },
};
