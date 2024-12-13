import HomeTabService from '@/services/HomeTabService'

export default {
  getOverview(_, payload) {
    return HomeTabService.getOverview(payload).then(({ data }) => {
      return data;
    });
  },
  async getCustomerOverview(_, payload) {
    const { data } = await HomeTabService.getCustomerOverview(payload);
    return data;
  },
  async getDriverOverview(_, payload) {
    const { data } = await HomeTabService.getDriverOverview(payload);
    return data;
  },
  async getTruckOverview(_, payload) {
    const { data } = await HomeTabService.getTruckOverview(payload);
    return data;
  },
  async getMarketOverview(_, payload) {
    const { data } = await HomeTabService.getMarketOverview(payload);
    return data;
  },
  async getDispatcherOverview(_, payload) {
    const { data } = await HomeTabService.getDispatcherOverview(payload);
    return data;
  }
}