import savedEquipmentsService from "@/services/SavedEquipmentsService";

export default {
  getSavedEquipmentsDataTable({ commit }, { eventForServer, filter }) {
    return savedEquipmentsService
      .getSavedEquipmentsDataTable(eventForServer, filter)
      .then((data) => {
        commit("SET_EQUIPMENTS", data);
        return data;
      });
  },

  createEquipment({ commit }, payload) {
    return savedEquipmentsService.createEquipment(payload).then(({ data }) => {
      commit("CREATE_EQUIPMENT", {
        ...data.payload,
        ...payload,
      });
      return data;
    });
  },

  updateEquipment({ commit }, payload) {
    return savedEquipmentsService.updateEquipment(payload).then(({ data }) => {
      commit("UPDATE_EQUIPMENT", "", data.payload);
      return data;
    });
  },

  deleteEquipment({ commit }, id) {
    return savedEquipmentsService.deleteEquipment(id).then(({ data }) => {
      commit("DELETE_EQUIPMENT", id);
      return data;
    });
  },
};
