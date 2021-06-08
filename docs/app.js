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
var button = d3.select("#filter-btn");
var filter_form = d3.select("#filters");

button.on("click", runEnter);
filter_form.on("submit", runEnter);

function runEnter() {

  d3.event.preventDefault();

  var inputElement = d3.select("#datetime");

  var inputValue = inputElement.property("value");
  var filteredData = ufo.filter(view => view.datetime === inputValue);
};
  console.log(filteredData);
