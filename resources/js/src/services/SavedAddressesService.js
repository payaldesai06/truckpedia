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
    if (filter.name !== '') {
      serverQueryObj.name = filter.name
    }

    if (filter.contact !== '') {
      serverQueryObj.contact = filter.contact
    }

    if (filter.phone !== '') {
      serverQueryObj.phone = filter.phone
    }

    if (filter.address !== '') {
      serverQueryObj.address = filter.address
    }

    if (filter.city !== '') {
      serverQueryObj.city = filter.city
    }

    if (filter.state !== '') {
      serverQueryObj.state = filter.state
    }

    if (filter.zip_code !== '') {
      serverQueryObj.zip_code = filter.zip_code
    }

    if (filter.email !== '') {
      serverQueryObj.email = filter.email
    }
  }

  return serverQueryObj
}

export default {
  async getSavedAddressesDatatable(filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter)
    const response =
        await axios.get('saved-address/datatable', {params: serverQueryObj})
    return response.data.payload
  },

  async createAddress(address) {
    return await axios.post('/saved-address', address)
  },

  async updateAddress(address) {
    return await axios.patch(`saved-address/${address.id}`, address)
  },

  async deleteAddress(address) {
    return await axios.delete(`saved-address/${address}`)
  },

  async searchAddresses(name) {
    return await axios.get(`saved-address/search/${name}`)
  }

}
