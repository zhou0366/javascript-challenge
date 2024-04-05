// begin initialization section

// dropdown selector
var selector = d3.select("#selDataset");
// demographic box
var demo = d3.select("#sample-metadata");
console.log("app.js opening");
var data = {};
// get json data
d3.json("./data/samples.json").then((jsonImport) => {
    // get data
    var data = jsonImport;
    console.log("samples.json imported");

    // get and show keys
    console.log("Found keys: " + Object.keys(data));
    var dataNames = data.names;

    // fill dropdown
    dataNames.forEach(element => { selector.append("option").text(element).property("value", element);});

    // page will default to the first ID 940
    console.log("Initiating with data for subject 940")
    var id940 = data.metadata.filter(item => item["id"] == 940);
    Object.entries(id940[0]).forEach(([key, value]) => {demo.append("h6").text(`${key}: ${value}`)});
});
charts(940);

// end initialization section

// option changed
function optionChanged (id){
    demographics(id);
    charts(id);
}


// generate demographics data
function demographics(id){
    // panel gets cleared
    demo.html("");

    d3.json("./data/samples.json").then((jsonImport) => {
        // get data
        var data = jsonImport;
        
        // filter for the input id
        console.log("Retrieving data for subject " + id)
        var filterID = data.metadata.filter(item => item["id"] == id);
        Object.entries(filterID[0]).forEach(([key, value]) => {demo.append("h6").text(`${key}: ${value}`)});
    });
}


// create charts
function charts(id){
    d3.json("./data/samples.json").then((jsonImport) => {
        // get data
        var data = jsonImport;
        var samples = data.samples;
        // filter down to desired id
        var results = samples.filter(sampleObj => sampleObj.id == id);
        var filterID = results[0];
        // getting values to plot
        var otu_ids = filterID.otu_ids;
        var otu_labels = filterID.otu_labels;
        var sample_values = filterID.sample_values;

        // bar chart sliced for top 10 OTUs https://plotly.com/javascript/bar-charts/
        var yticks = otu_ids.slice(0, 10).map(otuID => `OTU ${otuID}`).reverse();
        var barData = [{
            y: yticks,
            x: sample_values.slice(0, 10).reverse(),
            type: "bar",
            orientation: "h"
        }];

        var barLayout = {
            title: "Top 10 OTUs"
        };

        Plotly.newPlot("bar", barData, barLayout);

         // bubble chart https://plotly.com/javascript/bubble-charts/
         var bubbleData = [{
            x: otu_ids,
            y: sample_values,
            text: otu_labels,
            mode: 'markers',
            marker: {
                size: sample_values,
                color: otu_ids,
                // image on assignment page fit the Earth colorscale shown in https://plotly.com/javascript/colorscales/
                colorscale: 'Earth'
            }
        }];

        var bubbleLayout = {
            title: 'Bacteria Cultures/Sample',
            xaxis: { title: 'OTU ID' }
        };

        Plotly.newPlot('bubble', bubbleData, bubbleLayout);
    });
}