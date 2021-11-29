var axios = require("axios").default;

//testing connection to NYC Crime Data API
var options = {
  method: 'GET',
  url: 'https://data.cityofnewyork.us/resource/qb7u-rbmr.json',
  params: {"$$app_token" : "r3yihvpeNvCu8FsyP7J2qs00l"} //GET request always pass params
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

