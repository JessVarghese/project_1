var results = document.getElementById('search-results');
var zipCodeEl = document.getElementById('zipcode').value;
// fetching the cats information
  function fetchCats(){
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

   fetch("https://api.rescuegroups.org/v5/public/animals/search/available/cats/haspic?include=locations&sort=random&limit=1", requestOptions)
  .then(response => response.json())
  .then(function(data){
    
    var zipCode = document.createElement("p");
    zipCode.textContent = JSON.stringify(data.included[0].attributes.postalcode);
     console.log(zipCode);
     results.appendChild(zipCode);

   } )
  .catch(error => console.log('error', error));
  }
// fecthing the dogs information 
  function fetchDogs(){
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
    
       fetch("https://api.rescuegroups.org/v5/public/animals/search/available/dogs/haspic?include=locations&sort=random&limit=1", requestOptions)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log('error', error));
      }
    
// add event listener to the seach submit button
var submitBtn = document.getElementById('submitbtn');
submitBtn.onclick = function(event){
  // calling the search function
  searchPet();
  event.preventDefault();
}
// search function depending on pet type
function searchPet(){
  const pet = document.querySelectorAll('input[name="answer"]');
  let selectedValue;
  for (const type of pet){
    if (type.checked){
      selectedValue = type.value;
      break;
    }
  }
  console.log(selectedValue);
  if (selectedValue === "dogs"){
    fetchDogs();
  }
  else if (selectedValue === "cats"){
    fetchCats();
    //debugger;
  }
//console.log(zipCodeEl);
}
 
function compareZipCode(user,animal){
var zipCodeApiUrl = "https://www.zipcodeapi.com/rest/js-6GiTBqULNpzj4BQHdbOBeh9G393M1DDzIPxST23693elmzyiOBCSKnetAbnTDfl9/distance.json/" + user +"/"+ animal +"/mile"
fetch (zipCodeApiUrl)
.then(function (response) {
  return response.json();
})
.then(function (data) {
console.log(data);
})
}

compareZipCode("06902","06905");
