import axios from '../http/axios'

export const setUserCustomization = (payload) => {
  return axios.post('v2/load/pipeline/setCustomization', payload)
}

export const getPipeline = (payload) => {
  return axios.post('v2/load/pipeline/get', payload)
}
