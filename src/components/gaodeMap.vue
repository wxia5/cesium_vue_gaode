<template>
<div id="">
		  <div id="gaode" class="mymap"></div>
	  </div>
</div>
</template>

<script>
	import AMap from 'AMap'
	import {mapGetters ,mapActions} from 'vuex'  
export default {
    mounted(){
    	this.$store.commit('increment')
    	    	var height = $("#content").height()
    		$("#gaode").height(height)
    		window.onresize = function(){
	    		var height = $("#content").height()
    			$("#gaode").height(height)
    		}
//  	console.log(getNumber1)
//  	console.log(getNumber1Length)
//  	console.log(getByID(5))
//  	console.log(getByID2(1))
    const map = new AMap.Map('gaode', {
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
  body,html,#gaode{
        height: 100%;
        margin: 0px;
      }
</style>