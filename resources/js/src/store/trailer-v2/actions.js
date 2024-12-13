import {
  fetchAllTrailers,
  createTrailer,
  updateTrailer,
  fetchTrailerInfo,
  createFolder,
  updateFolder,
  fetchFolders,
  uploadAttachment,
  uploadFiles,
  fetchFiles,
  deleteFile,
  getLogsList,
  getMaintenanceIssueList,
  trailerFileChangeFolder,
} from '@/services/TrailerService-v2';

export default {
  async fetchAllTrailers({ commit }, apiPayload) {
    try {
      const { currentPage, payload: data } = apiPayload || {};
      const {
        data: { payload },
      } = await fetchAllTrailers(currentPage, data);
      commit('setAllTrailers', payload);
      return payload;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  async createTrailer({ commit }, apiPayload) {
    try {
      const res = await createTrailer(apiPayload);
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  async updateTrailer({ commit }, apiPayload) {
    try {
      const res = await updateTrailer(apiPayload);
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  async fetchTrailerInfo({ commit }, trailerId) {
    try {
      const {
        data: { payload },
      } = await fetchTrailerInfo(trailerId);
      return payload;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  async createFolder({ commit }, { folderName }) {
    try {
      const res = await createFolder({ folderName });
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  async updateFolder({ commit }, { folderId, folderName }) {
    try {
      const res = await updateFolder({ folderId, folderName });
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  async fetchFolders({ commit }) {
    try {
      const res = await fetchFolders();
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  async uploadAttachment({ commit }, data) {
    try {
      const res = await uploadAttachment(data);
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  async uploadFiles({ commit }, data) {
    try {
      const res = await uploadFiles(data);
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  async fetchFiles({ commit }, truckId) {
    try {
      const res = await fetchFiles(truckId);
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  async deleteFile({ commit }, fileId) {
    try {
      const res = await deleteFile({
        id: fileId,
      });
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  async getLogsList({ commit }, { id, pageSize, filter, page }) {
    try {
      const {
        data: { payload },
      } = await getLogsList({
        id,
        pageSize: pageSize || 25,
        filter,
        page,
      });
      return payload;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  async getMaintenanceIssueList({ commit }, { id, pageSize, page }) {
    try {
      const {
        data: { payload },
      } = await getMaintenanceIssueList({
        id,
        pageSize: pageSize || 10,
        page,
      });
      return payload;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  async trailerFileChangeFolder({ commit }, filePayload) {
    try {
      const {
        data: { payload },
      } = await trailerFileChangeFolder(filePayload);
      return payload;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
};
