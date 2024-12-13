import datService from '@/services/external-load-boards/DatService.js'

export default {
  async accountDetails() {
    return datService.accountDetails().then(({data}) => {return data});
  },
  async postServiceAccount({commit}, payload) {
    return datService.postServiceAccount(payload).then(
        ({data}) => {return data});
  },
  async deleteServiceAccount() {
    return datService.deleteServiceAccount().then(({data}) => {return data});
  },
  async postUserAccount({commit}, payload) {
    return datService.postUserAccount(payload).then(({data}) => {return data});
  },
  async deleteUserAccount() {
    return datService.deleteUserAccount().then(({data}) => {return data});
  },
  async connectionStatus() {
    return datService.connectionStatus().then(({data}) => {return data});
  },
  async searchLoads({commit}, payload) {
    return datService.searchLoads(payload).then(({data}) => {return data});
  },
}