export default {
  SET_TRUCKS (state, trucks) {
    state.trucks = trucks
  },

  setAllTrucks (state, trucks) {
    state.allTrucks = trucks
  },

  CREATE_TRUCK (state, truck) {
    state.trucks.data.unshift(truck)
  },

  UPDATE_TRUCK (state, truck) {
    state.trucks.data =  state.trucks.data.map((t) => {
      return (t.truck_id == truck.truck_id) ? (t = truck) : t
    })
  },

  DELETE_TRUCK (state, truckId) {
    state.trucks.data = state.trucks.data.filter(t => t.truck_id != truckId)
  }
}
