var mymap = L.map('mapid').setView([51.045, -114.073], 13);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiYnJlZXZlczk5NyIsImEiOiJjaml0MDh2bHMxdGliM3FxczFhdzg2b3NnIn0.Y2ovGAo7aGZEwzWHr5j55w'
}).addTo(mymap);

var poolIcon = L.icon({
    iconUrl: 'assets/img/swimming-pool.png',
    iconSize:     [32, 32], // size of the icon
    iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

var manIcon = L.icon({
    iconUrl: 'assets/img/running-man.png',
    iconSize:     [32, 32], // size of the icon
    iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

var soccerIcon = L.icon({
    iconUrl: 'assets/img/soccer.png',
    iconSize:     [32, 32], // size of the icon
    iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

var baseballIcon = L.icon({
    iconUrl: 'assets/img/baseball.png',
    iconSize:     [32, 32], // size of the icon
    iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

var skaterIcon = L.icon({
    iconUrl: 'assets/img/skater.png',
    iconSize:     [32, 32], // size of the icon
    iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

var swimIcon = L.icon({
    iconUrl: 'assets/img/swimming-figure.png',
    iconSize:     [32, 32], // size of the icon
    iconAnchor:   [16, 16], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

var facilities = getFacilities();
for(var i =0; i < facilities.length; i++) {
	var f = facilities[i];
	var lat = f.latitude;
	var long = f.longitude;
	var address = f.ADDRESS
	switch(f['FACILITY_TYPE']) {
		case 'Golf Course - Municipal':
			if(i % 2 == 0) {
				var marker = L.marker([lat, long], {icon: soccerIcon}).addTo(mymap);
				marker.bindPopup(`<b>${f['COMPLEX_NAME']}</b><br>Pickup Soccer><br>Address: ${address}<br><a href=${f['WEBSITE']}>info</a>`).openPopup();
			}
			else {
				var marker = L.marker([lat, long], {icon: baseballIcon}).addTo(mymap);
				marker.bindPopup(`<b>${f['COMPLEX_NAME']}</b><br>Softball Tourney><br>Address: ${address}<br><a href=${f['WEBSITE']}>info</a>`).openPopup();
			}
			break;
		case 'Skate Park':
			var marker = L.marker([lat, long], {icon: skaterIcon}).addTo(mymap);
			marker.bindPopup(`<b>${f['COMPLEX_NAME']}</b><br>U16 Skate Contest><br>Address: ${address}<br><a href=${f['WEBSITE']}>info</a>`).openPopup();
			break;
		case 'Spray Park':
			var marker = L.marker([lat, long], {icon: poolIcon}).addTo(mymap);
			marker.bindPopup(`<b>${f['COMPLEX_NAME']}</b><br>Open<br><br>Address: ${address}<br><a href=${f['WEBSITE']}>info</a>`).openPopup();
			break;
		case 'Athletic Park':
			var marker = L.marker([lat, long], {icon: manIcon}).addTo(mymap);
			marker.bindPopup(`<b>${f['COMPLEX_NAME']}</b><br>Current Activity: Drop In Squash<br><br>Address: ${address}<br><a href=${f['WEBSITE']}>info</a>`).openPopup();
			break;
		case 'Leisure Centre:':
			var marker = L.marker([lat, long], {icon: swimIcon}).addTo(mymap);
			marker.bindPopup(`<b>${f['COMPLEX_NAME']}</b><br>Address: ${address}<br><br><a href=${f['WEBSITE']}>info</a>`).openPopup();
			break;
		default:
			if(f['FACILITY_TYPE'].indexOf('Aquatic') != -1) {
				var marker = L.marker([lat, long], {icon: poolIcon}).addTo(mymap);
				marker.bindPopup(`<b>${f['COMPLEX_NAME']}</b><br>Address: ${address}<br><br>Current Activity: Adult Swim<br><a href=${f['WEBSITE']}>info</a>`).openPopup();
			}
			else {
				//marker.bindPopup(`<b>${f['COMPLEX_NAME']}</b><br>`).openPopup();
				var marker = L.marker([lat, long]).addTo(mymap);
				marker.bindPopup(`<b>${f['COMPLEX_NAME']}</b><br>Address: ${address}<br>`).openPopup();
			}
	}


}