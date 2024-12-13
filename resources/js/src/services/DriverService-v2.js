import axios from '../http/axios'
// import axiosReq from 'axios'

export const fetchDriverList = (page, pageSize, filter, sortBy) => {
  return axios.post(`v2/drivers/get-list?page=${page}`, {
    pageSize,
    filter,
    sortBy
  })
}

export const fetchDriver = (id) => {
  return axios.get(`v2/drivers/get/${id}`)
}

export const createDriver = (data) => {
  return axios.post('v2/drivers/create', data)
}

export const updateDriver = (id, data) => {
  return axios.patch('v2/drivers/edit', { id, ...data })
}

export const fetchFolderList = () => {
  return axios.get('v2/drivers/folders')
}

export const createFolder = (folderName) => {
  return axios.post('v2/drivers/folders/create', { folderName })
}

export const updateFolder = (folderId, folderName) => {
  return axios.patch('v2/drivers/folders/edit', { folderId, folderName })
}

export const uploadAttachment = (data) => {
  return axios.post('v2/drivers/files/get-upload-urls', data)
}

export const uploadFiles = (data) => {
  return axios.post('v2/drivers/files/create', data)
}

export const fetchFiles = (id) => {
  return axios.get(`v2/drivers/${id}/files`)
}

export const deleteFile = (data) => {
  return axios.delete('v2/drivers/files', { data })
}

export const getAllDrivers = () => {
  return axios.post('company-users-v2/get-all-drivers')
}

export const fetchAccountingInfo = (id) => {
  return axios.get(`v2/drivers/${id}/get-accounting-info`)
}

export const updateAccountingInfo = (data) => {
  return axios.patch('v2/drivers/edit-accounting-info', data)
}

export const driverFileChangeFolder = async (payload) => {
  return await axios.patch(`v2/drivers/files/change-folder`, payload)
}
