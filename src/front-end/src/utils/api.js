import Axios from 'axios'

class Api {
  constructor () {
    this._config = {
      baseURL: `${this._URL}/api`,
      withCredentials: true
    }
  }

  get _URL () {
    return `${window.location.protocol}//${window.location.hostname}:${this._PORT}`
  }

  get _PORT () {
    return window.location.hostname === 'localhost' ? '8000' : window.location.port
  }

  pathFactory (...paths) {
    return paths.reduce((urlStr, path) => {
      const url = urlStr += `/${path}`
      return url
    }, '')
  }

  get _INSTANCE () {
    const axios = this._axios || Axios.create({
      ...this._config
    })

    axios.interceptors.response.use(response => response, error => {
      window.location.href = `${this._URL}/error`
      return Promise.reject(error)
    })
    return axios
  }

  get (params, ...paths) {
    this._config.params = params
    return this._INSTANCE.get(this.pathFactory(...paths), this._config)
  }

  delete (params, ...paths) {
    this._config.params = params
    return this._INSTANCE.delete(this.pathFactory(...paths), this._config)
  }

  post (params, ...paths) {
    return this._INSTANCE.post(this.pathFactory(...paths), params, this._config)
  }

  put (params, ...paths) {
    return this._INSTANCE.put(this.pathFactory(...paths), params, this._config)
  }
}

export default new Api()
