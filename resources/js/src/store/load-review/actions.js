import {
  getReviewStatusById,
  saveReview,
} from '../../services/LoadReviewService';

export default {
  async getReviewStatusById(_, id) {
    const response = await getReviewStatusById(id);
    return response.data;
  },
  async saveReview(_, data) {
    const response = await saveReview(data);
    return response.data;
  },
};
