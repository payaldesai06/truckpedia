import locateService from '@/services/LocateService'

export default {
  locateAll ({commit}) {
    return locateService.locateAll()
      .then((ret) => {
        return ret.data
      })
  },
}
