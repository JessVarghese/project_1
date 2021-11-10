var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/vnd.api+json");
myHeaders.append("Authorization", "94css0vo");

var raw = "";

var requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow",
};

fetch(
  "https://api.rescuegroups.org/v5/public/animals/search/available/haspic?fields[animals]=distance&include=locations&sort=random&limit=1",
  requestOptions
)
  .then((response) => response.json())
  .then((data) => console.log(data.included[0].attributes.postalcode))
  .catch((error) => console.log("error", error));
