<template>
<div id="">
	  <div id="maptalks" class="container"></div>
</div>
</template>

<script>
	import * as maptalks from 'maptalks';
//plugin's classes should be imported directly like
console.log(maptalks)
export default {
	data(){
		return{
		}
	},
    mounted(){
	      var map = new maptalks.Map('maptalks', {
        center: [-0.113049,51.498568],
        zoom: 14,
        baseLayer: new maptalks.TileLayer('base', {
          urlTemplate: 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
          subdomains: ['a','b','c','d'],
          attribution: '&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>'
        })
      });
    }
}
</script>

<style type="text/css" slot>
 html,body{margin:0px;height:100%;width:100%}
    .container{width:100%;height:100%}
</style>