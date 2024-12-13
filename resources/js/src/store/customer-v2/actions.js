import {
  fetchFolderList,
  createFolder,
  updateFolder,
  getUploadUrls,
  uploadFiles,
  fetchFiles,
  deleteFile,
} from '../../services/CustomerService-v2';

export default {
  async fetchFolderList({ commit }) {
    const result = await fetchFolderList();
    commit('setFolderList', result.data.payload);
    return result;
  },
  async createFolder(_, { folderName }) {
    const result = await createFolder(folderName);
    return result;
  },
  async updateFolder(_, { folderId, folderName }) {
    const result = await updateFolder(folderId, folderName);
    return result;
  },
  async getUploadUrls(_, payload) {
    const result = await getUploadUrls(payload);
    return result;
  },
  async uploadFiles(_, payload) {
    const result = await uploadFiles(payload);
    return result;
  },
  async fetchFiles(_, id) {
    const result = await fetchFiles(id);
    return result;
  },
  async deleteFile(_, id) {
    const result = await deleteFile({ id });
    return result;
  },
};
