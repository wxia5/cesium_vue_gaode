<template>
	  <div id="map" class="mymap"></div>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';


export default {
    mounted(){
    	var map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 13
});
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar'}).addTo(map);
    }
    }
</script>

<style type="text/css">
	#map{
 width: 100%;
 height: 100%;
	}
</style>