
import axios from '../../http/axios'

export default {
  async searchLoads(payload) {
    return await axios.post(`/loadboard-crawler/search-loads`, payload);
  },
}
