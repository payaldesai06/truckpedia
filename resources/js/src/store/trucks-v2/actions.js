import {
  fetchAllTrucks,
  createTruck,
  updateTruck,
  fetchTruckInfo,
  createFolder,
  updateFolder,
  fetchFolders,
  uploadAttachment,
  uploadFiles,
  fetchFiles,
  deleteFile,
  getLogsList,
  getMaintenanceIssueList,
  truckFileChangeFolder,
} from '@/services/TrucksService-v2';

export default {
  async fetchAllTrucks({ commit }, apiPayload) {
    const { currentPage, payload: data } = apiPayload || {};
    try {
      const {
        data: { payload },
      } = await fetchAllTrucks(currentPage, data);

      commit('setAllTrucks', payload);
      return payload;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  async createTruck({ commit }, apiPayload) {
    try {
      const res = await createTruck(apiPayload);
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  async updateTruck({ commit }, apiPayload) {
    try {
      const res = await updateTruck(apiPayload);
      return res;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  async fetchTruckInfo({ commit }, truckId) {
    try {
      const {
        data: { payload },
      } = await fetchTruckInfo(truckId);
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
      const res = await updateFolder({
        folderId,
        folderName,
      });
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
        pageSize: pageSize || 25,
        page,
      });
      return payload;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },

  async truckFileChangeFolder({ commit }, filePayload) {
    try {
      const {
        data: { payload },
      } = await truckFileChangeFolder(filePayload);
      return payload;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
};
