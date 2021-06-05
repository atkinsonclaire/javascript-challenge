// from data.js
var tableData = data;

// YOUR CODE HERE!
// Display the array in console
console.log("UFO Data:");
console.log(tableData);

// Arrays to hold movie scores
var dateTime = [];
var city = [];
var state = [];
var country = [];
var shape = [];
var comment = [];

// Use a for loop to iterate through the movie scores
for (var i = 0; i < tableData.length; i++) {

  // Add each score to the ratings count
  dateTime.push(tableData[i].slice(0));
  city.push(tableData[i].slice(1));
  state.push(tableData[i].slice(2));
  country.push(tableData[i].slice(3));
  shape.push(tableData[i].slice(4));
  comment.push(tableData[i].slice(5));

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

