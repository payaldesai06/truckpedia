export default {
  SET_ACCESSORIAL_FEES (state, data) {
    state.accessorialFees = data
  },

  ADD_ACCESSORIAL_FEE (state, data) {
    state.accessorialFees.push(data)
  },

  SET_ACCESSORIAL_DEDUCTION_FEES (state, data) {
    state.accessorialDeductionFees = data
  },

  ADD_ACCESSORIAL_DEDUCTION_FEE (state, data) {
    state.accessorialDeductionFees.push(data)
  }
}
