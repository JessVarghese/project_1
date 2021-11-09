

var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/vnd.api+json");
myHeaders.append("Authorization", "94css0vo");

var raw = JSON.stringify({
  "data": {
    "filterRadius": {
      "miles": 100,
      "coordinates": "34.1031,-118.416"
    }
  }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow',
  limit:5
};

fetch("https://api.rescuegroups.org/v5/public/animals/search/available/dogs/haspic?fields[animals]=distance&include=breeds,colors,orgs,patterns,pictures,species&sort=random&limit=1", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));


//console.log(response.data[0]);







