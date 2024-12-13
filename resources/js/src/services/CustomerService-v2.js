import axios from '../http/axios';

export const fetchFolderList = () => {
  return axios.get('v2/customers/folders');
};

export const createFolder = (folderName) => {
  return axios.post('v2/customers/folders/create', { folderName });
};

export const updateFolder = (folderId, folderName) => {
  return axios.patch('v2/customers/folders/edit', { folderId, folderName });
};

export const getUploadUrls = (data) => {
  return axios.post('v2/customers/files/get-upload-urls', data);
};

export const uploadFiles = (data) => {
  return axios.post('v2/customers/files/create', data);
};

export const fetchFiles = (id) => {
  return axios.get(`v2/customers/${id}/files`);
};

export const deleteFile = (data) => {
  return axios.delete('v2/customers/files', { data });
};
