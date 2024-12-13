import { fetchT3Statuses } from "../../services/T3Service";

export default {
  async fetchT3Statuses(_, payload) {
    const result = await fetchT3Statuses(payload);
    return result;
  }
};
