export default {
  setAllIssue: (state, issueList) => {
    state.issueList = issueList
  },
  setSelectedIssue: (state, selectedIssue) => {
    state.selectedIssue = selectedIssue
  },
  setServiceTypes : (state, serviceTypes) => {
    state.serviceTypes = serviceTypes;
  }
}
