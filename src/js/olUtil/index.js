import 'ol/ol.css';
import initVectorLayer from './vectorLayerUtil'
import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import BingMapSource from 'ol/source/bingmaps';
import XYZ from 'ol/source/xyz';
import initDraw from './drawUtil'
var raster = new TileLayer({
	source: new XYZ({
		url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
	})
});



function initMap() {
	      var map = new Map({
        layers: [raster],
        target: 'map',
        view: new View({
          projection: 'EPSG:4326',
          center: [0, 0],
          zoom: 2
        })
      });
      return map
}
function xwq(){
	console.log("xwq")
}


export  {
	initMap,
	xwq,
	initDraw
}
export default xwq
