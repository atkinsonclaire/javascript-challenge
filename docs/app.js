var tableData = data;

var dateTime = [];
var city = [];
var state = [];
var country = [];
var shape = [];
var comment = [];

data.forEach((data) => {

  Object.entries(data).forEach(([key, value]) => {

    if (key === "datetime") {
      dateTime.push(value);
    }
    else if (key === "city") {
      city.push(value);
    }
    else if (key === "state") {
      state.push(value);
    }
    else if (key === "country") {
      country.push(value);
    }
    else if (key === "shape") {
      shape.push(value);
    }
    else {
      comment.push(value);
    }
   });
});

console.log(dateTime);
console.log(city);
console.log(state);
console.log(country);
console.log(shape);
console.log(comment);

