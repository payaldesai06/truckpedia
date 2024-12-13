/*=========================================================================================
  File Name: moduleAuthActions.js
  Description: Auth Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from '../../http/axios'
import adminService from '@/services/AdminService'
import adminCompanyService from '@/services/AdminCompanyService'
import qs from 'querystring'


import router from '@/router'


export default {
  updateUsername ({commit}, payload) {
    payload.user.updateProfile({
      displayName: payload.displayName
    }).then(() => {

      // If username update is success
      // update in localstorage
      const newUserData = Object.assign({}, payload.user.providerData[0])
      newUserData.displayName = payload.displayName
      commit('UPDATE_USER_INFO', newUserData, {root: true})

      // If reload is required to get fresh data after update
      // Reload current page
      if (payload.isReloadRequired) {
        router.push(router.currentRoute.query.to || '/')
      }
    }).catch((err) => {
      payload.notify({
        time: 8800,
        title: 'Error',
        text: err.message,
        iconPack: 'feather',
        icon: 'icon-alert-circle',
        color: 'danger'
      })
    })
  },


  // JWT
  async loginJWT ({commit}, payload) {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }

      const loginData = {
        'email': payload.email,
        'password': payload.password,
        'remember_me': payload.remember_me
      }

      const response = await axios.post('auth/login', loginData)
      commit('SET_USER_DATA', response.data.payload)

    } catch (e) {
      console.log(e.response)
      throw new Error(e.response.data.message)
    }
  },

  async registerUserJWT ({commit}, payload) {

    try {
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }

      const registerData = {
        'first_name': payload.first_name,
        'last_name': payload.last_name,
        'email': payload.email,
        'password': payload.password
      }

      const response = await axios.post('auth/register', qs.stringify(registerData), config)

      commit('SET_USER_DATA', response.data.payload)
    } catch (e) {
      console.log(e.response)
      throw new Error(e.response.data.message)
    }
  },
  async singleStepRegistration({commit}, payload) {
      const response = await adminService.singleStepRegistration(payload);
      commit('SET_USER_DATA', response.data.payload);
      return response.data;
  },
  /**
   *
   * @param commit
   * @param payload
   * @returns {Promise<void>}
   */
  async updateAdminProfile ({commit}, payload) {
    return adminService.updateProfile(payload)
      .then(({data}) => {
        commit('SET_USER', data.payload)
        return data
      })
  },

  /**
   *
   * @param commit
   * @param payload
   * @returns {Promise<void>}
   */
  async updateAdminCompanyProfile ({commit}, payload) {
    return adminCompanyService.updateProfile(payload)
      .then(({data}) => {
        commit('SET_USER', data.payload)
        return data
      })
  },

  async adminSetupProfile ({commit}, payload) {
    return adminService.setupProfile(payload)
      .then(({data}) => {
        commit('SET_USER', data.payload)
        return data
      })
  },

  async getLoggedInUserProfile ({commit}) {
    const response = await axios.get('auth/user')
    commit('FETCH_USER', response.data.payload)
  },

  async logoutLocally ({commit}) {
    commit('CLEAR_USER_DATA')
  },

  async logout ({commit}) {
    await axios.post('auth/logout')
    commit('CLEAR_USER_DATA')
  },

  /**
   * Forgot Password
   */
  async forgotPassword (_, payload) {
    return await axios.post('/auth/forget-password', payload)
  },

  /**
   * Set User
   */
  async setUser ({commit}, user) {
    commit('SET_USER', user)
  },

  /**
   * Remove Card
   */
  async removeCard ({commit}) {
    commit('REMOVE_CARD')
  },

  /*
  * TIMEZONE
  */
  async getTimezoneList ({commit}) {
    return await axios.get('/timezones')
  }
}
