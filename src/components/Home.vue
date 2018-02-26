<template>
	<!--<el-container >
		<el-header id="header">
			<headerNav></headerNav>
		</el-header>
		<el-container id="main" style='position: absolute;top: 100px;'>
			<el-aside width="199px">
				<sideMenu></sideMenu>
			</el-aside>
			<el-container>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>

		</el-container>
	</el-container>-->
	<!--<el-container>
		<el-header>
			<headerNav></headerNav>
		</el-header>
		<el-container v-bind:style="{styleObject}">
    <el-aside width="200px">
    	<sideMenu></sideMenu>
    </el-aside>
    <el-main>
    	<router-view></router-view>
    </el-main>
  </el-container>
</el-container>-->
<div id="app">
	<div id="header" style="position: relative;">
		<headerNav></headerNav>
	</div>
	<div id="sidebar" >
		<sideMenu></sideMenu>
	</div>
	<div id="content">
		<router-view></router-view>
	</div>
</div>
</template>

<script>
	import headerNav from "./header";
	import sideMenu from "./sideMenu";
	require('../../node_modules/cesium/Source/Widgets/widgets.css');
	let Cesium = require('../../node_modules/cesium/Source/Cesium.js');

	export default {
		data() {
			return {
				styleObject: {
					height: "600px "
				}
			}
		},
		components: {
			headerNav: headerNav,
			sideMenu: sideMenu
		},
		mounted() {
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
	#content{
    position: absolute;
    left: 200px;
    right: 0;
    top: 133px;
    bottom:0;
    /*width: auto;*/
    /*box-sizing: border-box;*/
    /*overflow-y: scroll;*/
}
	    #sidebar{
        position: absolute;
        width: 250px;
        /*left: 0;*/
        top: 133px;
        bottom:0;
        background: #2E363F;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    /*#sidebar > ul {
        height:100%;
    }*/
</style>