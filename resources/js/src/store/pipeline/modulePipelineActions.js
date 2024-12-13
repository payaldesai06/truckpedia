import pipelineService from '@/services/PipelineService'

export default {
  getPipeline({commit}, filter) {
    return pipelineService.getPipeline(filter)
      .then((res) => {
        const loads = res.loads
        commit('SET_PIPELINE', loads)
        return loads
      })
  },

  /* update the load status */
  updateStatus({commit}, params) {
    return pipelineService.updateLoadStatus(params).then((data) => {
      return data;
    });
  }
}
