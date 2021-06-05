var tableData = data;

console.log("UFO Data:");
console.log(tableData);

var dateTime = [];
var city = [];
var state = [];
var country = [];
var shape = [];
var comment = [];

for (var i = 0; i < tableData.length; i++) {

  var arrays = tableData[i].split("")

  dateTime.push(array[1]);
  city.push(array[3]);
  state.push(array[5]);
  country.push(array[7]);
  shape.push(array[9]);
  comment.push(array[11]);

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
