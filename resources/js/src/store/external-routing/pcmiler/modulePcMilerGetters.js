export default {
  pcmiler: state => state.pcmiler ?
      state.pcmiler :
      {apiKey: null, dataVersion: null, getKeyApiCalled: false},
}