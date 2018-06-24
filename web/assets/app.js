var mymap = L.map('mapid').setView([51.045, -114.073], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYnJlZXZlczk5NyIsImEiOiJjaml0MDh2bHMxdGliM3FxczFhdzg2b3NnIn0.Y2ovGAo7aGZEwzWHr5j55w'
}).addTo(mymap);

var facilities = getFacilities();
for(var i =0; i < facilities.length; i++) {
	var f = facilities[i];
	var lat = f.latitude;
	var long = f.longitude;
	var marker = L.marker([lat, long]).addTo(mymap);
	marker.bindPopup(`<b>${f['COMPLEX_NAME']}</b><br>I am a popup.`).openPopup();

}