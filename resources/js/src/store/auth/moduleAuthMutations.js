/*=========================================================================================
  File Name: moduleAuthMutations.js
  Description: Auth Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from '../../http/axios/index.js'

export default {
  SET_USER (state, user) {
    state.user = user
  },

  SET_USER_DATA (state, user) {
    state.user = user
    localStorage.setItem('access_token', user.access_token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${user.access_token}`
  },

  FETCH_USER (state, user) {
    state.user = user
  },

  CLEAR_USER_DATA (state) {
    state.user = null
    localStorage.removeItem('access_token')
    axios.defaults.headers.common['Authorization'] = null

    // location.reload()
    location.href = '/login'
  },

  SET_BEARER (state, accessToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  },

  /**
   * Remove Card
   */
  REMOVE_CARD (state) {
    state.user = {
      ...state.user,
      admin_company_details: {
        ...state.user.admin_company_details,
        stripe_payment_method_id: null
      }
    }
  },

  setUserCustomization (state, payload) {
    state.user = {
      ...state.user,
      userCustomization: {
        ...state.user.userCustomization,
        ...payload
      }
    }
  },
  setUserLatLang (state, payload) {
    state.userLatLang = payload
  }
}
