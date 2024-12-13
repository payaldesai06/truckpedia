import axios from '../http/axios'

/*
* ACCESSORIAL FEES
* ACCESSORIAL DEDUCTION FEES
*/
export default {
  async getAllAccessorialFees () {
    return await axios.get('/accessorial-fees')
  },

  async createAccessorialFee (payload) {
    return await axios.post('/accessorial-fees', payload)
  },

  async getAllAccessorialDeductionFees () {
    return await axios.get('/accessorial-deductions')
  },

  async createAccessorialDeductionFee (payload) {
    return await axios.post('/accessorial-deductions', payload)
  }
}
