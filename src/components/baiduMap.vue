<template>
	  <div id="map" class="mymap"></div>
</template>

<script>
	import BMap from 'BMap'
export default {
    mounted(){
	var map = new BMap.Map("map");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
	//添加地图类型控件
	map.addControl(new BMap.MapTypeControl({
		mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));	  
	map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
    }
}
</script>

<style type="text/css">
	#map{
		width: 100%;
		height: 100%;
	}
</style>