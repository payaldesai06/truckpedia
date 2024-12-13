import axios from '../http/axios'

export const fetchMenuList = () => {
  return axios.get('v2/fc/menu/get-menus')
}

export const createMenu = (data) => {
  return axios.post('v2/fc/menu/create-menu', data)
}

export const updateMenu = (data) => {
  return axios.patch('v2/fc/menu/change-menu', data)
}

export const fetchSubMenuList = (id) => {
  return axios.get(`v2/fc/menu/${id}/get-submenus`)
}

export const createSubMenu = (data) => {
  return axios.post('v2/fc/menu/create-submenu', data)
}

export const updateSubMenu = (data) => {
  return axios.patch('v2/fc/menu/change-submenu', data)
}

export const fetchViewList = (id) => {
  return axios.get(`v2/fc/menu/${id}/get-views`)
}

export const createView = (data) => {
  return axios.post("v2/fc/view/create-view", data);
}

export const updateView = (data) => {
  return axios.patch('v2/fc/view/change-view', data)
}

export const getView = (id) => {
  return axios.post('v2/fc/view/get-view', { viewId: id })
}

export const createCustomFields = (data) => {
  return axios.post('v2/fc/data/create-custom-fields', data)
}

export const updateCustomField = (data) => {
  return axios.patch('v2/fc/data/change-custom-field', data)
}

export const fetchCustomFields = (id) => {
  return axios.post('v2/fc/data/get-custom-fields', { submenuId: id })
}

export const updateFieldValues = (data) => {
  return axios.patch('v2/fc/data/update-fields-values', data)
}

export const createNewRecord = (data) => {
  return axios.post('v2/fc/data/create-new-record', data)
}

export const deleteRecord = (data) => {
  return axios.delete('v2/fc/data/delete-record', { data })
}

export const uploadAttachment = (data) => {
  return axios.post('v2/fc/data/files/get-upload-urls', data)
}
export const uploadFiles = (data) => {
  return axios.post('v2/fc/data/files/create', data)
}
export const fetchRecord = (data) => {
  return axios.post('v2/fc/data/get-record', data)
}
export const deleteFiles = (data) => {
  return axios.delete('v2/fc/data/files', { data })
}

export const fetchMenuSharedPermissions = (id) => {
  return axios.get(`v2/fc/menu/${id}/menu-shared-permissions`)
}

export const changeMenuSharedPermissions = (data) => {
  return axios.patch('v2/fc/menu/change-menu-shared-permissions', data)
}

export const fetchSubMenuSharedPermissions = (id) => {
  return axios.get(`v2/fc/menu/${id}/submenu-shared-permissions`)
}

export const updateSubMenuPermissions = (data) => {
  return axios.patch('v2/fc/menu/change-submenu-shared-permissions', data)
}

export const deleteCustomField = (data) => {
  return axios.delete('v2/fc/data/delete-custom-field', { data })
}

export const getRollupPossibleTargets = (payload) => {
  return axios.post('v2/fc/data/fields/rollup/get-possible-targets', payload)
}

export const getTargetRecords = (data) => {
  return axios.post(
    'v2/fc/data/fields/recordLink/get-possible-target-records',
    data
  )
}

export const deleteMenu = (id) => {
  return axios.delete('v2/fc/menu/delete-menu', { data: { id } })
}
