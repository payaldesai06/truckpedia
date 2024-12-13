import accessorialFeeService from '@/services/AccessorialFeeService'

export default {
  getAllAccessorialFees ({commit}) {
    return accessorialFeeService.getAllAccessorialFees()
      .then(({data}) => {
        // commit('SET_ACCESSORIAL_FEES', data)
        return data
      })
  },

  createAccessorialFee ({commit}, payload) {
    return accessorialFeeService.createAccessorialFee(payload)
      .then(({data}) => {
        // commit('ADD_ACCESSORIAL_FEE', data)
        return data
      })
  },

  getAllAccessorialDeductionFees ({commit}) {
    return accessorialFeeService.getAllAccessorialDeductionFees()
      .then(({data}) => {
        // commit('SET_ACCESSORIAL_DEDUCTION_FEES', data)
        return data
      })
  },

  createAccessorialDeductionFee ({commit}, payload) {
    return accessorialFeeService.createAccessorialDeductionFee(payload)
      .then(({data}) => {
        // commit('ADD_ACCESSORIAL_DEDUCTION_FEE', data)
        return data
      })
  }
}
