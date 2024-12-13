import axios from '../../http/axios';

export default {
  async getPcmiler() {
    return await axios.get(`/pcmiler/api-key`);
  },

  async postPcmiler(apiKey) {
    return await axios.post('/pcmiler/api-key', apiKey);
  },

  async getPcmilerTMile(param) {
    const payload = {
      params: {stops: param.stops, reports: 'CalcMiles'},
      headers: {'Authorization': `${param.apiKey}`}
    };
    param.dataVersion != 'Current' ?
        payload.params.dataVersion = param.dataVersion :
        'Current';
    return await axios.get(
        `https://pcmiler.alk.com/apis/rest/v1.0/Service.svc/route/routeReports`,
        payload);
  },
}
