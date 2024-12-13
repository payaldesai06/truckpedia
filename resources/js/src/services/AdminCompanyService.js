import axios from '../http/axios'

function generateParams(filterSortPage, filter) {
  const serverQueryObj = {};

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
    if (filter.business_name !== '') {
      serverQueryObj.business_name = filter.business_name
    }

    if (filter.usdot_number !== '') {
      serverQueryObj.usdot_number = filter.usdot_number
    }

    if (filter.address !== '') {
      serverQueryObj.address = filter.address
    }

    if (filter.phone_number !== '') {
      serverQueryObj.phone_number = filter.phone_number
    }

    if (filter.trial_valid_till !== '') {
      serverQueryObj.trial_valid_till = filter.trial_valid_till
    }

    if (filter.subscription_status !== '') {
      serverQueryObj.subscription_status = filter.subscription_status
    }

    if (filter.referral_code !== '') {
      serverQueryObj.referral_code = filter.referral_code
    }
  }

  return serverQueryObj
}

export default {
  async getAdminCompanyDatatable(filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter);
    const response = await axios.get(
        '/super-admin/admin-company-details/datatable',
        {params: serverQueryObj});
    return response.data.payload;
  },

  async getAdminCompany(id, startDate, endDate) {
    return await axios.get(
        `/super-admin/admin-company-details/${id}`,
        {params: {startDate: startDate, endDate: endDate}});
  },

  async updateProfile(payload) {
    return await axios.post('/admin/update-company-profile', payload);
  },

  async updateCompanyMonthlyFees(id, payload) {
    return await axios.patch(
        `/super-admin/admin-company-details/${id}/update-monthly-fees`,
        payload);
  },

  async updateCompanyTrialValidTill(id, payload) {
    return await axios.patch(
        `/super-admin/admin-company-details/${id}/update-trial-valid-till`,
        payload);
  },

  async updateCompanyFeatureAccess(id, payload) {
    return await axios.patch(
        `/super-admin/admin-company-details/${id}/update-feature-access`,
        payload);
  },

  async createUserAsAdmin(id, payload) {
    return await axios.post(
        `/super-admin/admin-company-details/${id}/users`,
        payload);
  },
}
