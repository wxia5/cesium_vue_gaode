import VectorSource from 'ol/source/vector';
import VectorLayer from 'ol/layer/vector';
import formatGeoJSON from 'ol/format/geojson';
import loadingstrategy from 'ol/loadingstrategy';
import Style from 'ol/style/style';
import Stroke from 'ol/style/stroke';
import tilegrid from 'ol/tilegrid';
function initVectorSource(){
	return new VectorSource();
}
function initVectorLayer(source){
	var vector = new VectorLayer({
	source: source
//	style: new Style({
//		stroke: new Stroke({
//			color: 'rgba(0, 0, 255, 1.0)',
//			width: 2
//		})
//	})
});
return vector
}
export  {
	initVectorLayer,
	initVectorSource,
}
