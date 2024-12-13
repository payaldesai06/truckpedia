/*=========================================================================================
  File Name: moduleCalendarActions.js
  Description: Calendar Module Actions
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from '@/axios.js'

import calendarService from '../../services/CalendarService'

export default {
  addEvent({commit}, event) {
    return new Promise((resolve, reject) => {
      axios.post('/api/apps/calendar/events/', {event})
        .then((response) => {
          commit('ADD_EVENT', Object.assign(event, {id: response.data.id}))
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchEvents({commit}) {
    return new Promise((resolve, reject) => {
      axios.get('/api/apps/calendar/events')
        .then((response) => {
          commit('SET_EVENTS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  fetchEventLabels({commit}) {
    return new Promise((resolve, reject) => {
      axios.get('/api/apps/calendar/labels')
        .then((response) => {
          commit('SET_LABELS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  editEvent({commit}, event) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/apps/calendar/event/${event.id}`, {event})
        .then((response) => {

          // Convert Date String to Date Object
          const event = response.data
    event.startDate = new Date(event.startDate)
    event.endDate = new Date(event.endDate)

    commit('UPDATE_EVENT', event)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  removeEvent({commit}, eventId) {
    return new Promise((resolve, reject) => {
      axios.delete(`/api/apps/calendar/event/${eventId}`)
        .then((response) => {
          commit('REMOVE_EVENT', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  eventDragged({commit}, payload) {
    return new Promise((resolve, reject) => {
      axios.post(`/api/apps/calendar/event/dragged/${payload.event.id}`, {payload})
        .then((response) => {

          // Convert Date String to Date Object
          const event = response.data
    event.startDate = new Date(event.startDate)
    event.endDate = new Date(event.endDate)

    commit('UPDATE_EVENT', event)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  },
  // New Calendar API
  async getLocateTrucks() {
    const data = await calendarService.getLocateTrucks()
    return data
  },

  async getLocateTrucksDrivers() {
    return await calendarService.getLocateTrucksDrivers();
  },

  async getAllTrackings({commit}, filter) {
    return calendarService.getAllTrackings(filter).then(data => {return data})
  },
  async getAllTrackingsLoadDetail({commit}, filter) {
    return calendarService.getAllTrackingsLoadDetail(filter).then(
        data => {return data})
  },
  async getChangeAccess({commit}, filter) {
    return calendarService.changeAccess(filter).then(data => {return data})
  },
  async getShareUrl({commit}, filter) {
    return calendarService.shareUrl(filter).then(data => {return data})
  },
  async getshareLinkDetails({commit}, filter) {
    return calendarService.shareLinkDetails(filter).then(data => {return data})
  },
  async shareImage({commit}, filter) {
    return calendarService.shareImage(filter).then(data => {return data})
  }
}
