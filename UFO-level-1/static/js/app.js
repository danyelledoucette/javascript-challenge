// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var city = d3.select("#city");
var columns = ["date/time", "city", "state", "country", "shape","comment"]

tableData.forEach(function(ufoSighting) {
    console.log(ufoSighting);

    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);

      var cell = row.append("td");
      cell.text(value);
    });
  });

button.on("click", function() {
    tbody.html("");
    var date = d3.select("#datetime");
    var input = date.property("value");
    console.log(input)
    var filteredData = tableData.filter(sighting => sighting.datetime === input);
    console.log(filteredData);

    filteredData.forEach(function(selections) {
      console.log(selections);

      var row = tbody.append("tr");
      Object.entries(selections).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
      });
    });
});
