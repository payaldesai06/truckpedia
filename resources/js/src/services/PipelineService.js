import axios from '../http/axios'

function generateParams (filter) {
  const serverQueryObj = {}

  if (filter) {
    if (filter.name !== '') {
      serverQueryObj.name = filter.name
    }
  }

  return serverQueryObj
}


export default {
  /** Old Pipeline api */
  // async getPipeline(filter) {
  //   // const serverQueryObj = generateParams(filter)
  //   // let serverQueryString = qs.stringify();
  //   const response = await axios.get('/pipeline', {
  //     params: filter
  //   })
  //   return response.data.payload
  // },

  async getPipeline(filter) {
    const response = await axios.post('v2/load/pipeline/get', filter)
    return response.data.payload;
  },

  async updateLoadStatus(params) {
    const response = await axios.patch('/loads/' + params.load_id + '/update-status', {
      'status': params.status
    })
    return response.status
  }
}
