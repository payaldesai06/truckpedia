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
    if (filter.label_name !== '') {
      serverQueryObj.label_name = filter.label_name
    }

    if (filter.label_english !== '') {
      serverQueryObj.label_english = filter.label_english
    }

    if (filter.label_chinese !== '') {
      serverQueryObj.label_chinese = filter.label_chinese
    }
  }

  return serverQueryObj
}


export default {
  async getLanguageLabelDatatable (filterSortPage, filter) {
    const serverQueryObj = generateParams(filterSortPage, filter)
    // let serverQueryString = qs.stringify();
    const response = await axios.get('/language-labels/datatable', {
      params: serverQueryObj
    })
    return response.data.payload
  },

  async getAllLanguageLabels () {
    return await axios.get('/language-labels')
  },

  async createLanguageLabel (languageLabel) {
    return await axios.post('/language-labels', languageLabel)
  },

  async updateLanguageLabel (languageLabel) {
    return await axios.patch(`/language-labels/${languageLabel.id}`, languageLabel)
  },

  async deleteLanguageLabel (languageLabelId) {
    return await axios.delete(`/language-labels/${languageLabelId}`)
  }
}
