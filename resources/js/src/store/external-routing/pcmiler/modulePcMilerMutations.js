export default {
  SET_PCMILERAPIKEY(state, pcmiler) {
    state.pcmiler = pcmiler;
    state.pcmiler.getKeyApiCalled = true;
  }
}