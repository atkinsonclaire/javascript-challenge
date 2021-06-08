var tbody = d3.select("tbody");

var dateTime = [];
var city = [];
var state = [];
var country = [];
var shape = [];
var comment = [];

//data.forEach((data) => {

  //Object.entries(data).forEach(([key, value]) => {

    //if (key === "datetime") {
      //dateTime.push(value);
    //}
    //else if (key === "city") {
      //city.push(value);
    //}
    //else if (key === "state") {
      //state.push(value);
    //}
    //else if (key === "country") {
      //country.push(value);
    //}
    //else if (key === "shape") {
      //shape.push(value);
    //}
    //else {
      //comment.push(value);
    //}
   //});
//});

data.forEach(function(ufoSighting) {
  console.log(ufoSighting);
  var row = tbody.append("tr");

  Object.entries(ufoSighting).forEach(function([key, value]) {
  console.log(key, value);
  var cell = row.append("td");
  cell.text(value);
  });
});
  
