// Leaflet map setup
var map = L.map('map', {
  center: [39.9190976,116.3888362],
  zoom: 11
});

var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

// To add your Carto visualization, change cartoUserName and cartoVizId to your username and
// project ID. These values can be found in the URL of your map on Carto:
// - https://[cartoUserName].carto.com/[cartoVizId]

// Unfortunately, only some visualizations styles are available in this method:
//
// - None
// - Animated
// - Pixel
//
// This is a bummer. But don't worry, we'll learn about how to do more powerful visualizations
// with Carto next week when we learn about SQL

// To add visualizations created with the Analysis feature, you will need to export the data to a
// GeoJSON. From there, you can either import the GeoJSON to Carto or use Leaflet's L.geoJson.


var cartoUserName = 'yynlelenora';
var cartoVizId = 'aff733a6-2745-472a-88be-387c069bcf66';

var layerUrl = 'https://'+cartoUserName+'.carto.com/api/v2/viz/'+cartoVizId+'/viz.json';
console.log(layerUrl);

cartodb.createLayer(map, layerUrl)
  .on('done', function(layer) {
    layer.addTo(map);
  }).on('error', function(err) {
    console.log(err);
  });

// My map: cluster & outliers analysis for Beijing housing price
var myStyle = function(feature){
  switch(feature.properties.quads){
      case "HH": return {
       radius: 6,
       color: 'orange',
       weight: 2,
       fillOpacity: 1,
       opacity: 0.3
     };
     case "LL": return {
       radius: 6,
       color: 'lightblue',
       weight: 2,
       fillOpacity: 1,
       opacity: 0.3
     };
     case "LH": return {
       radius: 6,
       color: 'purple',
       weight: 2,
       fillOpacity: 1,
       opacity: 0.3
     };
   }
};

var updatedData = "https://raw.githubusercontent.com/norayin/datasets/4de926a9e2e7cbdee40db0090f51b3e51514ba96/geojson/housingprice_beijing_updated.geojson";
$.ajax(updatedData).done(function(data){
    var myData = JSON.parse(data);
    var myLayer = L.geoJson(myData, {
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, myStyle(feature));
      }
    });
    myLayer.addTo(map);
  });
