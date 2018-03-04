<template>
<div id="" style="width: 100%;height: 100%;">
			  <div id="olmap">
			</div>
			<windowComponent v-show='getIsOpen'></windowComponent>
</div>
</template>

<script>
	import {initMap,xwq,initDraw} from '../js/olUtil'
	import treeComponent from './UI/treeComponent'
	import popup from './UI/popup'
  import {mapState,mapActions} from 'vuex'  
  import Overlay from 'ol/overlay';
	import qqq from '../js/olUtil'
	import windowComponent from './UI/windowComponent'
export default {
	components:{
		treeComponent:treeComponent,
		popup:popup,
		windowComponent:windowComponent,
	},
	data(){
		return{
			name:"xwq",
			age:27,
			visible:false,
			map:null,
		}
	},
	methods:{
	},
    mounted(){
    	
    	var map = initMap()
        	 var popup = new Overlay({
        element: document.getElementById('qqq'),
        offset:[-91,-250]
      });
       map.addOverlay(popup);
                map.on('click', function(evt) {
                	console.log(evt)
        var element = popup.getElement();
        var _coordinate = evt.coordinate;
        popup.setPosition(_coordinate);
        // the keys are quoted to prevent renaming in ADVANCED mode.
      });
    },
    updated: function () {
  this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been re-rendered
})
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
    	getIsOpen(state){
    		return state.isOpen
    	}
    })
    }
}
</script>

<style type="text/css" slot>
#www{
	height: 100%;
	width: 100%;
}
	#olmap{
		height: 100%;
 width: 100%;
	}
</style>