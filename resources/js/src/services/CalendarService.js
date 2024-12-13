import axios from '../http/axios'

export default {
  async getLocateTrucks() {
    return axios.get('/calendar/locate-trucks')
        .then((res) => {return res.data.payload})
  },

  async getLocateTrucksDrivers() {
    return axios.get('/calendar/locate-trucks-drivers')
        .then((res) => {return res.data.payload})
  },

  async getAllTrackings(filter) {
    // const serverQueryObj = generateParams(filter)
    // let serverQueryString = qs.stringify();
    const response = await axios.get('/calendar', {params: filter})
    return response.data.payload
  },

  async getAllTrackingsLoadDetail(filter) {
    // const serverQueryObj = generateParams(filter)
    // let serverQueryString = qs.stringify();
    const response = await axios.get('/calendar/load-detail', {params: filter})
    return response.data.payload
  },

  async changeAccess(filter) {
    let url = '/loads/' + filter.load_id + '/change-access';
    let param = {'is_private': filter.is_private};
    return await axios.patch(url, param);
  },

  async shareUrl(filter) {
    let url = '/loads/' + filter.load_id + '/create-public-url';
    return await axios.get(url, {params: null})
  },

  async shareLinkDetails(filter) {
    return await axios.get('/load-info', {params: filter})
  },

  async shareImage(payload) {
    return await axios.post('/calendar/share', payload)
  }
}