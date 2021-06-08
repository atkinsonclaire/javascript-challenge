var tbody = d3.select("tbody");

data.forEach(function(ufoSighting) {
  console.log(ufoSighting);
  var row = tbody.append("tr");

  Object.entries(ufoSighting).forEach(function([key, value]) {
  console.log(key, value);
  var cell = row.append("td");
  cell.text(value);
  });
});
  
var ufo = data;
var button = d3.select("#button");

var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
  
  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(ufo);
  var filteredData = ufo.filter(view => view.datetime === inputValue);
  console.log(filteredData);
}
