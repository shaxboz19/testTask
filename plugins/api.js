export default function ({
  $axios
}, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*'
      }
    }
  })

  // Set baseURL to something different
  api.setBaseURL('https://namaztimes.kz/ru/api')

  // Inject to context as $api
  inject('api', api)
}
