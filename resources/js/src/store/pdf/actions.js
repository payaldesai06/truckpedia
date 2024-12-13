import { mergeAndUpload } from '@/services/PdfService';

export default {
  async mergeAndUpload(_, payload) {
    const result = await mergeAndUpload(payload);
    return result;
  },
};
