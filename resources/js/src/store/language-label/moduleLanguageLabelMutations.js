export default {
  SET_LANGUAGE_LABELS (state, languageLabels) {
    state.languageLabels = languageLabels
  },

  CREATE_LANGUAGE_LABEL (state, languageLabel) {
    state.languageLabels.data.unshift(languageLabel)
  },

  UPDATE_LANGUAGE_LABEL (state, languageLabel) {
    state.languageLabels.data =  state.languageLabels.data.map((l) => {
      return (l.label_id == languageLabel.label_id) ? (l = languageLabel) : l
    })
  },

  DELETE_LANGUAGE_LABEL (state, languageLabelId) {
    state.languageLabels.data = state.languageLabels.data.filter(l => l.label_id != languageLabelId)
  }
}
