
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/vnd.api+json");
myHeaders.append("Authorization", "94css0vo");

var raw = JSON.stringify({
  "data": {
    "filterRadius": {
      "miles": 25,
      "postalcode": 90210
    }
  }
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};


    fetch("https://api.rescuegroups.org/v5/public/animals/search/available/haspic?fields[animals]=distance&include=breeds,locations&sort=random&limit=1", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


    




 

