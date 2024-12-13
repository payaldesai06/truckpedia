import tagsService from "@/services/TagService";

export default {
  updateTag({ commit }, payload) {
    return tagsService.updateTag(payload).then(({ data }) => {
      return data;
    });
  },

  getAllTags({ commit }, payload) {
    return tagsService.getAllTags(payload).then(({ data }) => {
      commit("SET_ALL_TAGS", data.payload.data);
      return data;
    });
  },

  getTag({ commit }, payload) {
    return tagsService.getTag(payload).then(({ data }) => {
      return data.payload || null;
    });
  },

  createTag({ commit }, payload) {
    return tagsService.createTag(payload).then(({ data }) => {
      return data;
    });
  },

  getUploadURL(_, payload) {
    return tagsService.getUploadURL(payload);
  },
};
