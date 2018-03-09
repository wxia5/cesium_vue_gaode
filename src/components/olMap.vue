<template>
<div id="" style="width: 100%;height: 100%;">
			  <div id="olmap">
			</div>
			<windowComponent  v-show="JBHZIsOpen"></windowComponent>
			<openFileComponent ></openFileComponent>
			<bzsxComponent v-show="BZSXIsOpen"></bzsxComponent>
			<!--<bzmbtckzComponent v-show="BZMB_TCKZIsOpen"></bzmbtckzComponent>-->
<vue-draggable-resizable style="height: 500px;" :resizable="false" :parent="true">
				<bzmbtckzComponent v-show="BZMB_TCKZIsOpen"></bzmbtckzComponent>
</vue-draggable-resizable>
			
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
	import openFileComponent from './UI/modal/openFile'
	import bzsxComponent from './UI/windowComponent/bzsxComponent'
	import bzmbtckzComponent from './UI/windowComponent/bzmb_tckz'
	import VueDraggableResizable from 'vue-draggable-resizable'

	
export default {
	components:{
		treeComponent:treeComponent,
		popup:popup,
		windowComponent:windowComponent,
		openFileComponent:openFileComponent,
		bzsxComponent:bzsxComponent,
		bzmbtckzComponent:bzmbtckzComponent,
		'vue-draggable-resizable':VueDraggableResizable
	},
	data(){
		return{
		}
	},
	methods:{
	},
    mounted(){
    	debugger
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
    	newFileIsOpen(state){
			debugger
    		return state.newFileIsOpen
    	},
    	JBHZIsOpen(state){
    		return state.JBHZIsOpen
    	},
    	BZSXIsOpen(state){
    		return state.BZSXIsOpen
    	},
    	    	BZMB_TCKZIsOpen(state){
    		return state.BZMB_TCKZIsOpen
    	},
    })
    }
}
</script>

<style type="text/css" slot>
	#olmap{
		height: 100%;
 width: 100%;
	}
</style>