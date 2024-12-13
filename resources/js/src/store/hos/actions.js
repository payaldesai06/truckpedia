import { fetchHos } from "../../services/HosService";

export default {
  async fetchHos({ commit }) {
    const result = await fetchHos();
    return result;
  }
};
