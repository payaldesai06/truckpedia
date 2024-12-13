import axios from '../http/axios'

export const getEzpapelWebsiteVersion = () => {
  return axios.get('v2/website/ezpapel/version')
}
