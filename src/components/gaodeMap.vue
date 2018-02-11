<template>
	  <div id="container" class="mymap"></div>
</template>

<script>
	import AMap from 'AMap'
export default {
    mounted(){
    const map = new AMap.Map('container', {
          zoom: 9
        });
    }
}
</script>

<style type="text/css">
	#container{
		width: 100%;
		height: 100%;
	}
</style>