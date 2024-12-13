import axios from '../http/axios'
import qs from 'querystring'

function generateParams (filterSortPage, filter) {
  const serverQueryObj = {}
  if (filterSortPage !== null) {
    if (filterSortPage.hasOwnProperty('page')) {
      serverQueryObj.page = filterSortPage.page + 1
    }

    if (filterSortPage.hasOwnProperty('rows')) {
      serverQueryObj.rows = filterSortPage.rows
    }

    if (filterSortPage.sortField !== null) {
      serverQueryObj.sortField = filterSortPage.sortField
      serverQueryObj.sortOrder = filterSortPage.sortOrder === 1 ? 'asc' : 'desc'
    }
  }

  if (filter) {
    if (filter.email !== '') {
      serverQueryObj.email = filter.email
    }

    if (filter.role !== '') {
      serverQueryObj.role = filter.role
    }

    if (filter.name !== '') {
      serverQueryObj.name = filter.name
    }
  }

  return serverQueryObj
}


export default {
  async getCompanyUserDatatable (filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter)
    const response = await axios.get('/company-users/datatable', {
      params: serverQueryObj
    })
    return response.data.payload
  },

  async getAllDispatchers (filters) {
    return await axios.get('/dispacher', {
      params: filters
    })
  },

  async createCompanyUser (companyUser) {
    return await axios.post('/company-users', companyUser)
  },

  async updateCompanyUser (companyUser) {
    return await axios.patch(`/company-users/${companyUser.id}`, companyUser)
  },

  async deleteCompanyUser (companyUserId) {
    return await axios.delete(`/company-users/${companyUserId}`)
  },

  async changeStatus ({id, payload}) {
    return await axios.patch(`company-users/${id}/change-status`, payload)
  },

  async getCurrentUserTagIds() {
    return await axios.get('company-users/get-current-user-tag-ids');
  },

  async getCompanyLogoPreSignedS3Url ({companyId, extension, type}) {
    return axios.post('v2/company/file/get-upload-url', {companyId, extension, type});
  },
  
  async getUserProfileImagePreSignedS3Url ({userId, extension, type}) {
    return axios.post('v2/user/file/get-upload-url', {userId, extension, type});
  }
}
