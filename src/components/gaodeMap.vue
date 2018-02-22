<template>
<div id="">
		  <div id="container" class="mymap"></div>
	  <div id="">
	  	{{getNumber1}}
	  <div id="">
	  		{{getByID(5)}}
	  </div>
	  </div>
</div>
</template>

<script>
	import AMap from 'AMap'
	import {mapGetters ,mapActions} from 'vuex'  
export default {
    mounted(){
    	this.$store.commit('increment')
//  	console.log(getNumber1)
//  	console.log(getNumber1Length)
//  	console.log(getByID(5))
//  	console.log(getByID2(1))
    const map = new AMap.Map('container', {
          zoom: 9
        });
    },
    computed:{
    	...mapGetters([
    		'getNumber1',
    		'getNumber1Length',
    		'getByID',
    		'getByID2'
    		])
    }
}
</script>

<style type="text/css">
	#container{
		width: 100%;
		height: 1000px;
	}
</style>