import axios from '../http/axios'

export const fetchVehicles = () => {
  return axios.get('vehicle-v2/all-vehicles')
}

export const fetchAllVehicles = (payload) => {
  return axios.post('vehicle-v2/get-all-vehicles', payload)
}