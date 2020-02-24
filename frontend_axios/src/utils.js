const axios = require('axios');
const url = 'http://localhost:3000/people'

// remove all the requests that are using fetch and use axios instead
const getPeopleFetch = () => {
  return fetch(`${url}`)
    .then(promise => promise.json())
    .then((res) =>  res)
}

const getPeopleAxios = () => {
  // make it async, no need for .then
  // also... wrap everything in a try and catch
  const promise = axios.get(`${url}`)
  .then(response => {
    return response
  })
}

const createPersonFetch = (data) => {
  fetch(`${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
  })
}

const deletePersonFetch = (id) => {
  fetch(`${url}/${id}`, {
  method: 'DELETE',
  })
  .then(res => res.json())
  .then(res => console.log('worked', res))
}




// here is some data for you to test
let data1 = {
  id: 12,
  name: 'Tatyana Fazlalizadeh',
  bio: 'is an American artist, activist, and freelance illustrator. She is best known as the creator of the campaign and art exhibition Stop Telling Women to Smile',
  image_url: 'https://images.squarespace-cdn.com/content/v1/566ca3e51115e0874922e571/1527697769922-9IYXS5CLRRRSNFQI2LPD/ke17ZwdGBToddI8pDm48kBXfl9523PPCMjiJNCtOhKtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx099H1iDMs77VbX2wfrKeigECPMbG3kEu0b-ipHJs1wyNrL1545Wed7woU4xgzO5Q/static1.squarespace.jpg',
  dob: 'October 12, 1985'
}

let data2 = {
  id: 13,
  name: 'Katherine Johnson',
  bio: 'was an American mathematician whose calculations of orbital mechanics as a NASA employee were critical to the success of the first and subsequent U.S. crewed spaceflights.During her 35-year career at NASA and its predecessor, she earned a reputation for mastering complex manual calculations and helped pioneer the use of computers to perform the tasks. The space agency noted her "/historical role as one of the first African-American women to work as a NASA scientist/"',
  image_url: 'https://static01.nyt.com/images/2020/02/24/obituaries/24Johnson1/merlin_157899726_f670c425-adb2-46f6-9c15-bc356754fb87-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
  dob: 'August 26, 1918'
}

export { getPeopleFetch, getPeopleAxios, deletePersonFetch,  }
