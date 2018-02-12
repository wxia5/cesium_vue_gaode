<template>
	<div id="">
		<div id="cesiumContainer">
	</div>
	</div>
</template>

<script>
export default {
  mounted(){
  	var viewer = new Cesium.Viewer("cesiumContainer");
  	    viewer.camera.flyTo({
    destination : Cesium.Cartesian3.fromDegrees(-117.16, 32.71, 15000.0)
});
  }
}
</script>

<style>
#cesiumContainer{
	height: 700px;
}
</style>