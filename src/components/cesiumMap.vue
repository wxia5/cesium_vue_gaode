<template>
	<div id="">
		<div id="cesiumContainer">
			<!--<timeSlider></timeSlider>-->
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

			viewer.camera.flyTo({
				destination: Cesium.Cartesian3.fromDegrees(-117.16, 32.71, 15000.0)
			});
			console.log(this)
			this.$mySlider()
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
		height: 100%;
	}
	
	#slider {
		position: relative;
		bottom: 0px;
	}
</style>