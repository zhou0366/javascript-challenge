# Bellybutton Biodiversity Dashboard

Link to the web page using html and js in the docs folder: https://zhou0366.github.io/javascript-challenge/

## Data Retrieval

Data was gathered from samples.json using D3. There may have been issues with how I set up the "data" variable used to store the json data as I needed to use "d3.json" to retrieve the samples.json files for each function I wrote for the program.

## Dropdowns and Demographics Panel

The first part of the code is to create the initial page. The dropdown is populated with each ID from the json file. The first ID number in the data is 940 so the page will be populated with data from subject 940. The function "demographics" to fill the demographic panel is populated with all metadata keys and values for the selected ID.

![image](https://github.com/zhou0366/javascript-challenge/assets/22827830/ff7022a7-5930-4fe6-a764-6f91ae59fe03)

![image](https://github.com/zhou0366/javascript-challenge/assets/22827830/f26cc7ce-45df-448e-b0bb-c590be87eef5)

## Charts

The function "charts" will create the necessary charts for the assignment. The result for the selected ID will be retrieved and otu_ids, otu_labels, and sample_values are stored to variables. These are then used to create a horizontal bar chart using otu_ids and sample_values of the top 10 OTUs via slice. It will also create a bubble chart using otu_ids and sample_values. The image provided on the assignment page appears to match the 'Earth' colorscale according to the plotly reference so that will be used for the bubble chart.

![image](https://github.com/zhou0366/javascript-challenge/assets/22827830/b5ac7745-d011-49d8-b2fc-a17c9b1899b4)

![image](https://github.com/zhou0366/javascript-challenge/assets/22827830/da0f45a3-f59b-4b43-8e2e-b96952b4e070)

## Plotly references

https://plotly.com/javascript/bar-charts/

https://plotly.com/javascript/bubble-charts/

https://plotly.com/javascript/colorscales/
