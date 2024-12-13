import axios from '../http/axios'
import axiosReq from 'axios'

export const fetchIssueList = (payload) => {
  return axios.get('maintenance-v2/get-issue-list', {params: payload})
}

export const fetchIssue = (id) => {
  return axios.get(`maintenance-v2/get-issue/${id}`)
}

export const createIssue = (data) => {
  return axios.post('maintenance-v2/create-issue', data)
}

export const updateIssue = (id, data) => {
  return axios.patch('maintenance-v2/update-issue', { id, ...data })
}

export const deleteIssue = (data) => {
  return axios.delete('maintenance-v2/delete-issue', { data })
}

export const uploadAttachment = (data) => {
  return axios.post('maintenance-v2/get-issue-attachments-upload-urls', data)
}

export const uploadFileToS3 = (url, file) => {
  const config ={
    headers: {
      "Content-Disposition": `attachment; filename=${file.name}`
    }
  }
  return axiosReq.put(url, file, config)
}

export const getServiceTypes = () => {
  const response = axios.get('maintenance-v2/serviceTypes');
  return response;
}

export const addServiceType = (payload) => {
  return axios.post('maintenance-v2/serviceTypes', payload);
}