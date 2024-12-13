import axios from '../http/axios'

export default {
  async locateAll () {
    return await axios.get(`/locate/locate-all`)
  },
}
