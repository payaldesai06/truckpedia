<template>
  <div class="vx-row space-y-6">
    <div class="vx-col w-full">
      <vx-card title="Locate Drivers and Trucks" class="w-full">
        <template slot="no-body">
          <div id="map-loading" class="pt-8 vx-col w-full rounded-b-lg vs-con-loading__container">
            <GmapMap :center="center" :zoom="4" class="h-full w-full">
              <gmap-info-window :options="infoOptions"
                                :position="infoWindowPos"
                                :opened="infoWinOpen"
                                @closeclick="infoWinOpen=false">
              </gmap-info-window>

              <gmap-marker v-for="driver in drivers"
                           :key="driver.driver_id"
                           :position="driver.position"
                           :clickable="true"
                           :label="driver.label"
                           @click="toggleInfoWindow(driver,'driver_id', driver.driver_id)"></gmap-marker>
              
              <gmap-marker v-for="truck in trucks"
                           :key="truck.truck_id"
                           :position="truck.position"
                           :clickable="true"
                           :label="truck.label"
                           @click="toggleInfoWindow(truck,'truck_id', truck.truck_id)"></gmap-marker>
            </GmapMap>
          </div>
        </template>
      </vx-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LocateDriver',

  data () {
    return {
      drivers: [],
      trucks: [],
      center: {
        lat: 42.3232698,
        lng: -101.3711042
      },

      // Info window
      selected_driver: null,
      infoWindowPos: null,
      infoWinOpen: false,
      infoOptions: {
        content: '',
        pixelOffset: {
          width: 0,
          height: -35
        }
      }
    }
  },

  async mounted () {
    this.$vs.loading({
      container: '#map-loading',
      scale: 0.6
    })

    try {
      await this.getAllDrivers()
    } catch (error) {
      this.$vs.notify({
        color: 'danger',
        title: 'Error',
        text: error.response.data.message
      })
    } finally {
      this.$vs.loading.close('#map-loading > .con-vs-loading')
    }
  },

  methods: {
    async getAllDrivers () {
      const {payload} = await this.$store.dispatch('locate/locateAll')
      this.drivers = payload.drivers.map(driver => {
        return {
          ...driver,
          position: {
            lat: Number(driver.latitude),
            lng: Number(driver.longitude)
          },
          label: driver.name,
          infoContent: `<div>
               <h3 class="text-primary">${driver.name}</h3>
               <div class="mt-2 space-y-1">
                  <a href="tel:${driver.phone_number}"
                  class="block font-medium text-dark opacity-90">${driver.phone_number}</a>
                  <a href="mailto:${driver.email}"
                  class="block font-medium text-dark opacity-75">${driver.email}</a>
                </div>
            </div>`
        }
      })
      this.trucks = payload.trucks.map(truck => {
        return {
          ...truck,
          position: {
            lat: Number(truck.latitude),
            lng: Number(truck.longitude)
          },
          label: truck.truck_number,
          infoContent: `<div>
               <h3 class="text-primary">${truck.truck_number}</h3>
               <div class="mt-2 space-y-1">
                  <span class="block font-medium text-dark opacity-75">${truck.formatted_location}</span>
                </div>
            </div>`
        }
      })
    },

    toggleInfoWindow (driver, id_type, driver_id) {
      this.infoWindowPos = driver.position
      this.infoOptions.content = driver.infoContent
      //check if its the same marker that was selected if yes toggle
      if (this.selected_driver && this.selected_driver[id_type] == driver_id) {
        this.infoWinOpen = !this.infoWinOpen
      } else { // if different marker set infowindow to open and reset current marker index
        this.infoWinOpen = true
        this.selected_driver = driver
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#map-loading {
  height: calc(100vh - 235px)
}
</style>
