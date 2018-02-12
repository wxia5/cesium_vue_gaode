<template>
	<el-row class="tac">
		<el-col :span="24">
			<el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" router @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
				<el-submenu index="1">
					<template slot="title">
						<i class="el-icon-location"></i>
						<span>地图模块</span>
					</template>
					<el-menu-item-group>
						<template slot="title">二维地图</template>
						<el-menu-item :index="path._2d">
							<img class="map-icon" src="../../static/img/mapIcon/gaode.jpg"/>
							<span slot="title">高德地图</span>
						</el-menu-item>
						<el-menu-item :index="path.bdMap">
							<img class="map-icon" src="../../static/img/mapIcon/baidu.jpg"/>
							<span slot="title">百度地图</span>
						</el-menu-item>
						<el-menu-item :index="path.ol_map">
							<img class="map-icon" src="../../static/img/mapIcon/openlayers.jpg"/>
							<span slot="title">openlayers</span>
						</el-menu-item>
						<el-menu-item :index="path.leaflet">
							<img class="map-icon" src="../../static/img/mapIcon/leaflet.jpg"/>
							<span slot="title">leaflet</span>
						</el-menu-item>
					</el-menu-item-group>
					<el-menu-item-group title="三维地图">
						<el-menu-item :index="path._3d">
							<img class="map-icon" src="../../static/img/mapIcon/cesium.jpg"/>
							<span slot="title">cesium</span>
						</el-menu-item>
					</el-menu-item-group>
					<el-submenu index="1-4">
						<template slot="title">选项4</template>
						<el-menu-item index="1-4-1">选项1</el-menu-item>
					</el-submenu>
				</el-submenu>

			</el-menu>
		</el-col>
	</el-row>
</template>

<script>
	export default {
		data() {
			return {
				path: {
					_2d: "/map2d",
					_3d: "/map3d",
					ol_map: '/olMap',
					bdMap: "/bdMap",
					leaflet:"/leafletMap"
				}
			}
		},
		methods: {
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},
			//    toComponent(value){
			//    	this.$router.push({
			//    		path:value
			//    	})
			//    },
		}
	}
</script>

<style>
.map-icon{
	width: 18;
	height: 18px;
}
</style>