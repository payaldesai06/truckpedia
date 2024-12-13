import axios from "../http/axios";
// import axiosReq from "axios";

export const fetchAllTrucks = (currentPage, payload) => {
  const apiUrl = "v2/trucks/get-list";
  const params = currentPage ? `?page=${currentPage}` : ''
  return axios.post(apiUrl + params, payload);
};

export const createTruck = (data) => {
  return axios.post("v2/trucks/create", data);
};

export const updateTruck = (data) => {
  return axios.patch("v2/trucks/edit", data);
};

export const fetchTruckInfo = (id) => {
  return axios.get(`v2/trucks/get/${id}`);
};

export const createFolder = (data) => {
  return axios.post("v2/trucks/folders/create", data);
};

export const updateFolder = (data) => {
  return axios.patch("v2/trucks/folders/edit", data);
};

export const fetchFolders = () => {
  return axios.get("v2/trucks/folders");
};

export const uploadAttachment = (data) => {
  return axios.post("v2/trucks/files/get-upload-urls", data);
};

export const uploadFiles = (data) => {
  return axios.post("v2/trucks/files/create", data);
};

export const fetchFiles = (truckId) => {
  return axios.get(`v2/trucks/${truckId}/files`);
};

export const deleteFile = (data) => {
  // data: {
  //   id: // FileID
  // }
  return axios.delete(`v2/trucks/files`, { data });
};

export const getLogsList = ({ id, pageSize, filter, page }) => {
  return axios.post(`v2/trucks/get-log-list`, {
    id,
    pageSize,
    filter,
    page,
  });
};

export const getMaintenanceIssueList = ({ id, pageSize, page }) => {
  return axios.post(`v2/trucks/get-maintenance-issue-list`, {
    id,
    pageSize,
    page,
  });
};

export const truckFileChangeFolder = async (payload) => {
  return await axios.patch(`v2/trucks/files/change-folder`, payload);
};
