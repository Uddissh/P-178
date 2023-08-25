let latitude = 22.7868542, longitude = 88.3643296;

mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [longitude, latitude],
	zoom: 4
});

map.addControl(
	new MapboxGeocoder({
		accessToken: mapboxgl.accessToken,
		mapboxgl: mapboxgl
	})
);


var i1 = document.querySelector("#amber")

var marker1 = new mapboxgl.Marker({
	element: i1
})
	.setLngLat([75.85133, 26.98547])
	.addTo(map);

var i2 = document.querySelector("#gateway")

var marker2 = new mapboxgl.Marker({
	element: i2
})
	.setLngLat([72.835163, 18.920180])
	.addTo(map);

var i3 = document.querySelector("#gate")

var marker3 = new mapboxgl.Marker({
	element: i3
})
	.setLngLat([77.22931, 28.61495])
	.addTo(map);


var i4 = document.querySelector("#lotus")


var marker4 = new mapboxgl.Marker({
	element: i4
})
	.setLngLat([77.25880, 28.553501])
	.addTo(map);

var i5 = document.querySelector("#victoria")

var marker5 = new mapboxgl.Marker({
	element: i5
})
	.setLngLat([88.342785, 22.546170])
	.addTo(map);