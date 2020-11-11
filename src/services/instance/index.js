import axios from 'axios'

export function baseService() {
  const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/pokemon',
  })

  function get(url, params, headers) {
    return instance.get(url, params, headers)
  }

  return {
    get,
  }
}
