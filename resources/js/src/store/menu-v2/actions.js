/* eslint-disable multiline-ternary */
import {
  fetchMenuList,
  createMenu,
  updateMenu,
  fetchSubMenuList,
  createSubMenu,
  updateSubMenu,
  fetchViewList,
  createView,
  updateView,
  getView,
  createCustomFields,
  updateCustomField,
  fetchCustomFields,
  updateFieldValues,
  createNewRecord,
  deleteRecord,
  fetchRecord,
  uploadAttachment,
  uploadFiles,
  deleteFiles,
  fetchMenuSharedPermissions,
  changeMenuSharedPermissions,
  fetchSubMenuSharedPermissions,
  updateSubMenuPermissions,
  deleteCustomField,
  getRollupPossibleTargets,
  getTargetRecords,
  deleteMenu
} from '../../services/MenuService-v2'

export default {
  async fetchMenuList ({ commit }) {
    const response = await fetchMenuList()
    const menuList = response.data.payload.menus
      ? response.data.payload.menus.map((menu) => {
        return {
          ...menu,
          isOpen: false
        }
      })
      : []
    commit('setAllMenu', menuList)
    return response
  },
  async createMenu (_, payload) {
    const response = await createMenu(payload)
    return response
  },
  async updateMenu (_, payload) {
    const response = await updateMenu(payload)
    return response
  },
  async fetchSubMenuList ({ commit }, id) {
    const response = await fetchSubMenuList(id)
    commit('setAllSubMenu', response.data.payload.submenus || [])
    return response
  },
  async createSubMenu (_, payload) {
    const response = await createSubMenu(payload)
    return response
  },
  async updateSubMenu (_, payload) {
    const response = await updateSubMenu(payload)
    return response
  },
  async fetchViewList({ commit }, {
    id,
    skipStateUpdate
  }) {
    const response = await fetchViewList(id)
    const views = (((response || {}).data || {}).payload || {}).views || []
    if(!skipStateUpdate) commit('setAllView', views)
    return views
  },
  async createView (_, payload) {
    const response = await createView(payload)
    return response
  },
  async updateView (_, payload) {
    const response = await updateView(payload)
    return response
  },
  async getView (_, id) {
    const response = await getView(id)
    return response
  },
  async createCustomFields (_, payload) {
    const response = await createCustomFields(payload)
    return response
  },
  async updateCustomField (_, payload) {
    const response = await updateCustomField(payload)
    return response
  },
  async fetchCustomFields (_, id) {
    const response = await fetchCustomFields(id)
    return response
  },
  async updateFieldValues (_, payload) {
    const response = await updateFieldValues(payload)
    return response
  },
  async createNewRecord (_, payload) {
    const response = await createNewRecord(payload)
    return response
  },
  async deleteRecord (_, payload) {
    const response = await deleteRecord(payload)
    return response
  },
  async fetchRecord (_, payload) {
    const response = await fetchRecord(payload)
    return response
  },
  async uploadAttachment (_, payload) {
    const result = await uploadAttachment(payload)
    return result
  },
  async uploadFiles (_, payload) {
    const result = await uploadFiles(payload)
    return result
  },
  async deleteFiles (_, payload) {
    const result = await deleteFiles(payload)
    return result
  },
  async fetchMenuSharedPermissions (_, id) {
    const result = await fetchMenuSharedPermissions(id)
    return result
  },
  async changeMenuSharedPermissions (_, payload) {
    const result = await changeMenuSharedPermissions(payload)
    return result
  },
  async fetchSubMenuSharedPermissions (_, id) {
    const result = await fetchSubMenuSharedPermissions(id)
    return result
  },
  async updateSubMenuPermissions (_, payload) {
    const result = await updateSubMenuPermissions(payload)
    return result
  },
  async deleteCustomField (_, payload) {
    const result = await deleteCustomField(payload)
    return result
  },
  async getRollupPossibleTargets (_, payload) {
    const result = await getRollupPossibleTargets(payload)
    return result
  },
  async getTargetRecords (_, payload) {
    const result = await getTargetRecords(payload)
    return result
  },
  async deleteMenu (_, id) {
    const result = await deleteMenu(id)
    return result
  }
}
