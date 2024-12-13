export default {
  SET_EQUIPMENTS(state, equipments) {
    state.equipments = equipments;
    state.equipments.data = equipments.savedEquipmentTypes;
  },

  CREATE_EQUIPMENT(state, equipment) {
    const hasEquipmentsObject = ((state || {}).equipments || {}).data
    if (hasEquipmentsObject) {
      state.equipments.data.push(equipment);
    } else {
      state.equipments.data = [equipment];
    }
  },

  UPDATE_EQUIPMENT(state, equipment) {
    state.equipments.data = state.equipments.data.map((s) => {
      return s.id == equipment.id ? (s = equipment) : s;
    });
  },

  DELETE_EQUIPMENT(state, id) {
    state.equipments.data = state.equipments.data.filter((t) => t.id !== id);
  },
};
