import {
  fetchDriverList,
  fetchDriver,
  createDriver,
  updateDriver,
  fetchFolderList,
  createFolder,
  updateFolder,
  uploadAttachment,
  uploadFiles,
  fetchFiles,
  deleteFile,
  getAllDrivers,
  fetchAccountingInfo,
  updateAccountingInfo,
  driverFileChangeFolder,
} from '../../services/DriverService-v2'

export default {
  async fetchDriverList (
    { commit },
    { page, pageSize, filter = {}, sortBy = {} }
  ) {
    const result = await fetchDriverList(page, pageSize, filter, sortBy)
    commit('setDriverList', result.data.payload)
    return result
  },
  async fetchDriver ({ commit }, id) {
    const result = await fetchDriver(id)
    commit('setSelectedDriver', result.data.payload)
    return result
  },
  async createDriver (_, payload) {
    const result = await createDriver(payload)
    return result
  },
  async updateDriver (_, { id, payload }) {
    const result = await updateDriver(id, payload)
    return result
  },
  async fetchFolderList ({ commit }) {
    const result = await fetchFolderList()
    commit('setFolderList', result.data.payload)
    return result
  },
  async createFolder (_, { folderName }) {
    const result = await createFolder(folderName)
    return result
  },
  async updateFolder (_, { folderId, folderName }) {
    const result = await updateFolder(folderId, folderName)
    return result
  },
  async uploadAttachment (_, payload) {
    const result = await uploadAttachment(payload)
    return result
  },
  async uploadFiles (_, payload) {
    const result = await uploadFiles(payload)
    return result
  },
  async fetchFiles ({ commit }, id) {
    commit('setFileList', []) // reset file list

    const result = await fetchFiles(id)
    commit('setFileList', result.data.payload)
    return result
  },
  async deleteFile (_, id) {
    const result = await deleteFile({ id })
    return result
  },
  async getAllDrivers () {
    const { data } = await getAllDrivers();
    return (data || {}).payload || []
  },
  async fetchAccountingInfo ({ commit }, id) {
    const result = await fetchAccountingInfo(id)
    commit('setAccountingInfo', result.data.payload)
    return result
  },
  async updateAccountingInfo (_, payload) {
    const result = await updateAccountingInfo(payload)
    return result
  },
  async driverFileChangeFolder({ commit }, filePayload) {
    try {
      const {
        data: { payload },
      } = await driverFileChangeFolder(filePayload);
      return payload;
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
};
