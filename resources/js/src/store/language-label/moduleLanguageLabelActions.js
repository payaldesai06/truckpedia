import languageLabelService from '../../services/LanguageLabelService'

export default {
  getLanguageLabelDatatable ({commit}, {
    eventForServer,
    filter
  }) {
    return languageLabelService.getLanguageLabelDatatable(eventForServer, filter)
      .then(data => {
        commit('SET_LANGUAGE_LABELS', data)
        return data
      })
  },

  getAllLanguageLabels ({commit}) {
    return languageLabelService.getAllLanguageLabels()
      .then(({data}) => {
        // commit('SET_TRUCKS', data)
        return data
      })
  },

  createLanguageLabel ({commit}, payload) {
    return languageLabelService.createLanguageLabel(payload)
      .then(({data}) => {
        commit('CREATE_LANGUAGE_LABEL', data.payload)
        return data
      })
  },

  updateLanguageLabel ({commit}, payload) {
    return languageLabelService.updateLanguageLabel(payload)
      .then(({data}) => {
        commit('UPDATE_LANGUAGE_LABEL', data.payload)
        return data
      })
  },

  deleteLanguageLabel ({commit}, languageLabelId) {
    return languageLabelService.deleteLanguageLabel(languageLabelId)
      .then(({data}) => {
        commit('DELETE_LANGUAGE_LABEL', languageLabelId)
        return data
      })
  }
}
