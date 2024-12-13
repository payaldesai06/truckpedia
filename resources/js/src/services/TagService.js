import axios from "../http/axios";

export default {
  async getAllTags() {
    return await axios.get("/tag");
  },

  async updateTag(tag) {
    return await axios.patch(`/tag/${tag.tag_id}`, tag);
  },

  async createTag(tag) {
    return await axios.post("/tag", tag);
  },

  async getTag(tagId) {
    return await axios.get(`/tag/${tagId}`);
  },

  async getUploadURL(payload) {
    return await axios.post("v2/tag/file/get-upload-url", payload);
  },
};
