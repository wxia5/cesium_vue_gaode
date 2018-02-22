<template>
<div id="">
	  <div id="map" class="mymap">
	  <treeComponent v-if="visible"></treeComponent>
	  <button @click="toggleTable">click</button>
	  </div>
	  
</div>
</template>

<script>
	import {initMap,xwq,initDraw} from '../js/olUtil'
	import treeComponent from './UI/treeComponent'
  import {mapState,mapActions} from 'vuex'  
	import qqq from '../js/olUtil'
export default {
	components:{
		treeComponent:treeComponent
	},
	data(){
		return{
			name:"xwq",
			age:27,
			visible:false
		}
	},
	methods:{
		toggleTable(){
			console.log(111)
			this.visible  =!this.visible
		}
	},
    mounted(){
    	var map = initMap()
    	console.log(initDraw)
    	initDraw(map)
    },
    computed:{
    	wtfisthis:function(){
    		return this.name
    	},
    	...mapState({
    	xwq:"count",
    	xwq2:function(state){
    		return state.count
    	},
    	getCount(state){
    		return state.count
    	}
    })
    }
}
</script>

<style type="text/css" slot>
	#map{
 width: 100%;
        height: 100%;
	}
</style>