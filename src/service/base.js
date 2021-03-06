import axios from 'axios'

const ERR_OK = 0
const baseURL = '/'

axios.defaults.baseURL = baseURL

export function get(url, params) {
  return axios.get(url, {
      params
  }).then(res => {
    const serberData = res.data
    if (serberData.code === ERR_OK) {
      return serberData.result
    }
  }).catch(e => {
    console.log(e)
  })
}