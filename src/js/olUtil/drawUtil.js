import Draw from 'ol/interaction/draw';
import {initVectorSource,initVectorLayer} from './vectorLayerUtil';
function initDraw(map){
	debugger
	let vectorSource = initVectorSource()
	let vectorLayer = initVectorLayer(vectorSource)
	map.addLayer(vectorLayer)
	map.addInteraction(createDraw(vectorSource,'LineString')) 
}
function createDraw(source,type){
	return new Draw({
        source: source,
        type: type
      })
}
//class Draw{
//	constructor(){
//		this.vectorSource = initVectorSource();
//		this.vectorLayer = initVectorLayer(this.vectorSource);
//		
//	},
//	initDraw(){
//		
//	}
//}
export default initDraw
