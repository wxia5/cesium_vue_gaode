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
  	components:{
  		headerNav:headerNav,
  		sideMenu:sideMenu
  	}
  	}
</script>

<style>
	body{
		margin: 0;
	}
	.el-header{
		padding: 0;
	}
	.el-main{
		padding: 0;
	}
	#main{
		height: 1000px;
	}
</style>