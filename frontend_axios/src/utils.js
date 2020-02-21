const axios = require('axios');
const url = 'http://localhost:3000'

const getPeopleAxios = () => {
  const promise = axios.get(`${url}/people`)
    .then(response => {
      return response
    })
}

const getPeopleFetch = () => {
  const promise = fetch(`${url}/people`)
    .then(response => console.log('api call  made by fetch', response))
}



export { getPeopleAxios, getPeopleFetch }
