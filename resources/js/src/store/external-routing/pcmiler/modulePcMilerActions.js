import pcmService from '@/services/external-routing/PCMilerService.js';

export default {
  getPcmiler({commit}) {
    return pcmService.getPcmiler().then(({data}) => {
      commit('SET_PCMILERAPIKEY', data.payload);
      return data;
    });
  },

  postPcmiler({commit}, apiKey) {
    return pcmService.postPcmiler(apiKey).then(({data}) => {
      commit('SET_PCMILERAPIKEY', apiKey);
      return data;
    });
  },

  getPcmilerTMile({commit}, params) {
    return pcmService.getPcmilerTMile(params).then(({data}) => {
      return data;
    });
  },
}
