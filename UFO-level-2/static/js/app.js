// from data.js
var tableData = data;

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var city = d3.select("#city");
var state = d3.select("#state");
var country = d3.select("#country");
var shape = d3.select("#shape");

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
    var filteredDate = tableData.filter(sighting => sighting.datetime === input);
    var filteredCity = tableData.filter(sighting => sighting.city === input);
    var filteredState = tableData.filter(sighting => sighting.state === input);
    var filteredCountry = tableData.filter(sighting => sighting.country === input);
    var filteredShape = tableData.filter(sighting => sighting.shape === input);

    filteredData = tableData;
    console.log(filteredData);

    filteredData = tableData;

    if (filteredDate) {
        filteredData = filteredData.filter(record => record.datetime === filteredDate);
    }
    if (filteredCity) {
      filteredData = filteredData.filter(record => record.city === filteredCity);
    }
    if (filteredState) {
        filteredData = filteredData.filter(record => record.state === filteredState);
    }
    if (filteredCountry) {
      filteredData = filteredData.filter(record => record.country === filteredCountry);
    }
    if (filteredShape) {
        filteredData = filteredData.filter(record => record.shape === filteredShape);
    }

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
