<template>
	  <div id="map" class="mymap"></div>
</template>

<script>
import 'ol/ol.css';
import Map from 'ol/map';
import View from 'ol/view';
import TileLayer from 'ol/layer/tile';
import VectorSource from 'ol/source/vector';
import VectorLayer from 'ol/layer/vector';
import formatGeoJSON from 'ol/format/geojson';
import loadingstrategy from 'ol/loadingstrategy';
import tilegrid from 'ol/tilegrid';
import Style from 'ol/style/style';
import Stroke from 'ol/style/stroke';
import BingMapSource from 'ol/source/bingmaps';
import XYZ from 'ol/source/xyz';


export default {
    mounted(){
//var map = new Map({
//target: 'map',
//layers: [
//  new TileLayer({
//    source: new XYZ({
//      url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
//    })
//  })
//],
//view: new View({
//  center: [0, 0],
//  zoom: 2
//})
//});
 var vectorSource = new VectorSource({
        format: new formatGeoJSON(),
        url: function(extent) {
          return 'https://ahocevar.com/geoserver/wfs?service=WFS&' +
              'version=1.1.0&request=GetFeature&typename=osm:water_areas&' +
              'outputFormat=application/json&srsname=EPSG:3857&' +
              'bbox=' + extent.join(',') + ',EPSG:3857';
        },
        strategy: loadingstrategy.tile(tilegrid.createXYZ({
          maxZoom: 19
        }))
      });


      var vector = new VectorLayer({
        source: vectorSource,
        style: new Style({
          stroke: new Stroke({
            color: 'rgba(0, 0, 255, 1.0)',
            width: 2
          })
        })
      });

      var raster = new TileLayer({
 source: new XYZ({
        url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      })
      });

      var map = new Map({
        layers: [raster,vector],
        target: document.getElementById('map'),
        view: new View({
          center: [-8908887.277395891, 5381918.072437216],
          maxZoom: 19,
          zoom: 12
        })
      });
    }
}
</script>

<style type="text/css">
	#container{
 width: 400px;
        height: 250px;
	}
</style>