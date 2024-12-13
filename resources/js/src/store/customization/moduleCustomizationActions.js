import customization from '@/services/CustomizationService'

export default {
  async getCustomizations({commit}) {
    return await customization.getCustomizations().then((result) => {
      commit('SET_CUSTOMIZATION', result.data.payload)
      return result.data.payload;
    })
  },

  async updateCustomizations({commit}, payload) {
    return await customization.updateCustomizations(payload).then((result) => {
      commit('SET_CUSTOMIZATION', result.data.payload)
      return result.data.payload;
    });
  },
}