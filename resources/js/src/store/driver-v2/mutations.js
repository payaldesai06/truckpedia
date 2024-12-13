export default {
  setDriverList (state, driverList) {
    state.driverList = driverList
  },
  setSelectedDriver: (state, selectedDriver) => {
    state.selectedDriver = selectedDriver
  },
  setFolderList: (state, folderList) => {
    state.folderList = folderList
  },
  setFileList: (state, fileList) => {
    state.fileList = fileList
  },
  setAccountingInfo: (state, accountingInfo) => {
    state.accountingInfo = accountingInfo
  }
}
