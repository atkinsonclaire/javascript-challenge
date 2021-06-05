var tableData = data;

var dateTime = [];
var city = [];
var state = [];
var country = [];
var shape = [];
var comment = [];

for (var i = 0; i < tableData.length; i++) {

  var obs = tableData[i]
  var array = Object.values(obs)

  dateTime.push(array[0]);
  city.push(array[1]);
  state.push(array[2]);
  country.push(array[3]);
  shape.push(array[4]);
  comment.push(array[5]);

}

console.log("Date:");
console.log(dateTime);
console.log("City:");
console.log(city);
console.log("State:");
console.log(state);
console.log("Country:");
console.log(country);
console.log("Shape:");
console.log(shape);
console.log("Comment:");
console.log(comment);

