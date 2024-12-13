import loadboardCrawlerService from '@/services/external-load-boards/LoadboardCrawlerService.js'

export default {
  searchLoads({commit}, payload) {
    return loadboardCrawlerService.searchLoads(payload).then(
        ({data}) => {return data})
  }
}
