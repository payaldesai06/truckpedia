import {
  getRatePredictions
} from '@/services/GreenScreensService';

export default {
  async getRatePredictions(_, payload = []) {
    const response = await getRatePredictions(payload);
    return response.data;
  }
}