<template>
	<div id="">
		<div id="cesiumContainer">
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import timeSlider from './UI/timeSlider'
	import initSlider from '../js/sliderInstall'
	Vue.use(initSlider)
	export default {
		components: {
			timeSlider: timeSlider
		},
		mounted() {
			var viewer = new Cesium.Viewer("cesiumContainer");
			var height = $("#content").height()
			$("#cesiumContainer").height(height)
    		window.onresize = function(){
	    		var height = $("#content").height()
    			$("#cesiumContainer").height(height)
    		}
			viewer.camera.flyTo({
				destination: Cesium.Cartesian3.fromDegrees(-117.16, 32.71, 15000.0)
			});
			 var canvas = document.getElementById("theCanvas");
 			 canvas.width = $("#parent").width();
  			canvas.height = $("#parent").height();
//			this.$mySlider()
//				var newDiv = document.createElement("div");
//				var newContent = document.createTextNode("Hi there and greetings!");
//				newDiv.appendChild(newContent)
//				document.getElementsByClassName("cesium-viewer")[0].appendChild(newDiv)
			}

		}
</script>

<style>
	#cesiumContainer {
		width: 100%;
	}
	
</style>