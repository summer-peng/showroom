const defaultOptions = {
  mode: 'cors', // no-cors, *cors, same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin', // include, *same-origin, omit
  headers: {
    'Content-Type': 'application/json',
  },
  redirect: 'follow', // manual, *follow, error
  referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
}

const get = (url = '', params = {}, options = {}) => {
  const urlObject = new URL(url)

  urlObject.search = new URLSearchParams(params).toString()

  return fetch(url, { ...defaultOptions, ...options }).then((response) =>
    response.json(),
  )
}

const post = (url = '', params = {}, options = {}) => {
  return fetch(url, {
    ...defaultOptions,
    method: 'POST',
    body: JSON.stringify(params),
    ...options,
  })
    .then((response) => {
      const { status } = response
      if (status !== 200) {
        console.log('status', status)
        return response.text().then((err) => {
          throw new Error(err)
        })
      }

      return response.json()
    })
    .catch((e) => {
      throw new Error(e)
    })
}

const API = {
  get,
  post,
}

export default API
