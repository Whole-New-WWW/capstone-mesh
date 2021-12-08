var axios = require("axios").default;

//testing connection to NYC Crime Data API

export function getManhattanCrimeData() {
  var options = {
    method: 'GET',
    url: 'https://data.cityofnewyork.us/resource/5uac-w243.json',
    params: { $$app_token: 'r3yihvpeNvCu8FsyP7J2qs00l' }, //GET request always pass params
  }

  return axios
    .request(options)
    .then(function (response) {
      return response.data;
    })
    .catch(function (error) {
      console.error(error)
    })
}



