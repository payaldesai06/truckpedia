import axios from "../http/axios";
// import axiosReq from "axios";

export const fetchAllTrailers = (currentPage, payload) => {
  const apiUrl = "v2/trailers/get-list";
  const params = currentPage ? `?page=${currentPage}` : "";
  return axios.post(apiUrl + params, payload);
};

export const createTrailer = (data) => {
  return axios.post("v2/trailers/create", data);
};

export const updateTrailer = (data) => {
  return axios.patch("v2/trailers/edit", data);
};

export const fetchTrailerInfo = (id) => {
  return axios.get(`v2/trailers/get/${id}`);
};

export const createFolder = (data) => {
  return axios.post("v2/trailers/folders/create", data);
};

export const updateFolder = (data) => {
  return axios.patch("v2/trailers/folders/edit", data);
};

export const fetchFolders = () => {
  return axios.get("v2/trailers/folders");
};

export const uploadAttachment = (data) => {
  return axios.post("v2/trailers/files/get-upload-urls", data);
};

export const uploadFiles = (data) => {
  return axios.post("v2/trailers/files/create", data);
};

export const fetchFiles = (trailerId) => {
  return axios.get(`v2/trailers/${trailerId}/files`);
};

export const deleteFile = (data) => {
  // data: {
  //   id: // FileID
  // }
  return axios.delete(`v2/trailers/files`, { data });
};

export const getLogsList = ({ id, pageSize, filter, page }) => {
  return axios.post(`v2/trailers/get-log-list`, {
    id,
    pageSize,
    filter,
    page,
  });
};
export const getMaintenanceIssueList = ({ id, pageSize, page }) => {
  return axios.post(`v2/trailers/get-maintenance-issue-list`, {
    id,
    pageSize,
    page,
  });
};

export const trailerFileChangeFolder = async (payload) => {
  return await axios.patch(`v2/trailers/files/change-folder`, payload);
};
