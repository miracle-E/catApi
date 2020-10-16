let API_KEY = '91053c7c-d474-4be6-b028-ebe44fda9105'
let base_url = 'https://api.thecatapi.com/v1'

export default function ({ $axios, store, redirect }) {
  $axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
  $axios.defaults.headers.common['Access-Control-Allow-Credentials'] = 'true'
  $axios.defaults.headers.common['Access-Control-Allow-Methods'] =
    'GET,HEAD,OPTIONS,POST,PUT'
  $axios.defaults.headers.common['Access-Control-Allow-Headers'] =
    'Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers'

  $axios.defaults.baseURL = process.env.API_URL || base_url

  // Request intercepts
  $axios.interceptors.request.use(
    function (config) {
      // Set the API_Key on every request if available.
      if (API_KEY) config.headers.common['91053c7c-d474-4be6-b028-ebe44fda9105'] = API_KEY
      return config
    },
    function (error) {
      return Promise.reject(error)
    }
  )
}




