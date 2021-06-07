var tbody = d3.select("tbody");

var dateTime = [];
var city = [];
var state = [];
var country = [];
var shape = [];
var comment = [];

data.forEach(function(ufoSighting) {
  console.log(ufoSighting);
  });
  
data.forEach(function(ufoSighting) {
  console.log(ufoSighting);
  var row = tbody.append("tr");

  Object.entries(ufoSighting).forEach(function([key, value]) {
  console.log(key, value);
  var cell = row.append("td");
  cell.text(value);
  });
});
  
function searchMatch(match) {
  return match.datetime;
}

var dateEntered = data.filter(searchMatch);

console.log(dateEntered);
