<template>
	<el-container>
		<el-header>
			<headerNav></headerNav>
		</el-header>
		<el-container id="main">
			<el-aside width="199px">
				<sideMenu></sideMenu>
			</el-aside>
			<el-main>
				<router-view></router-view>
				</div>
			</el-main>
		</el-container>
	</el-container>
</template>

<script>
	import headerNav from "./header";
	import sideMenu from "./sideMenu";
	require('../../node_modules/cesium/Source/Widgets/widgets.css');
	let Cesium = require('../../node_modules/cesium/Source/Cesium.js');

	export default {
		components: {
			headerNav: headerNav,
			sideMenu: sideMenu
		}
	}
</script>

<style>
	
	.el-header {
		padding: 0;
		height: 30%!important;
	}
	
	.el-main {
		padding: 0!important;
	}
	
	#main {
		height: 70%;
	}
</style>