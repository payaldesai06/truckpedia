import FactoringCompanyService from "@/services/FactoringCompanyService";

export default {
  getAllFactoringCompanies({ commit }, payload) {
    return FactoringCompanyService.getAllFactoringCompanies(payload).then(
      ({ data }) => {
        commit("SET_FACTORING_COMPANIES", data.payload);
        return data;
      }
    );
  },
  createFactoringCompany({ commit }, payload) {
    return FactoringCompanyService.createFactoringCompany(payload).then(
      ({ data }) => {
        return data;
      }
    );
  },

  updateFactoringCompany({ commit }, payload) {
    return FactoringCompanyService.updateFactoringCompany(payload).then(
      ({ data }) => {
        return data;
      }
    );
  },

  deleteFactoringCompany({ commit }, factoringCompanyId) {
    return FactoringCompanyService.deleteFactoringCompany(
      factoringCompanyId
    ).then(({ data }) => {
      return data;
    });
  },
};
