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
    var filteredData = tableData.filter(sighting => sighting.datetime === input);
    var filteredData = tableData.filter(sighting => sighting.city === input);
    var filteredData = tableData.filter(sighting => sighting.state === input);
    var filteredData = tableData.filter(sighting => sighting.country === input);
    var filteredData = tableData.filter(sighting => sighting.shape === input);

                                                    // sighting.city === input ||
                                                    // sighting.state === input ||
                                                    // sighting.country === input ||
                                                    // sighting.shape === input);
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
