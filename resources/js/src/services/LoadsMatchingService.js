import config from '@/config/constants'
import pdfParserAxios from 'axios'
import qs from 'querystring'

import axios from '../http/axios'



export default {
  async getAllLocateTruck() {
    return await axios.get('/loads-matching/locate-trucks')
  },
  async getAllTruckSchedules(filter) {
    return await axios.get('/loads-matching/truck-schedules', {params: filter})
  },
  async updateTruckReloadDestination(payload) {
    return await axios.patch(
        '/loads-matching/truck-reload-destination', payload)
  },
  async updateTruckDeadheadOrigin(payload) {
    return await axios.patch('/loads-matching/truck-deadhead-origin', payload)
  },
  async updateTruckDeadheadDestination(payload) {
    return await axios.patch(
        '/loads-matching/truck-deadhead-destination', payload)
  },
  async updateTruckTargetPrice(payload) {
    return await axios.patch('/loads-matching/truck-target-price', payload)
  },
  async updateTruckMaxWeight(payload) {
    return await axios.patch(`/loads-matching/truck-max-weight`, payload);
  },
  async updateTruckReloadDate(payload) {
    return await axios.patch('/loads-matching/truck-reload-date', payload)
  },
  async getShareLink() {
    return await axios.get(`/loads-matching/create-public-url`);
  },
  async getShareAllLocateTruck(params) {
    return await axios.get(
        `loads-matching/public-locate-trucks`, {params: params});
  },
  async getShareAllSchedule(params) {
    return await axios.get(
        `loads-matching/public-truck-schedules`, {params: params});
  },
}