export default {
  SET_TRAILERS (state, trailers) {
    state.trailers = trailers
  },

  setAllTrailers (state, trailers) {
    state.allTrailers = trailers
  },

  CREATE_TRAILER (state, trailer) {
    state.trailers.data.unshift(trailer)
  },

  UPDATE_TRAILER (state, trailer) {
    state.trailers.data =  state.trailers.data.map((t) => {
      return (t.trailer_id == trailer.trailer_id) ? (t = trailer) : t
    })
  },

  DELETE_TRAILER (state, trailerId) {
    state.trailers.data = state.trailers.data.filter(t => t.trailer_id != trailerId)
  }
}
