<template>
	<div class="easyui-ribbon">
		<txxsComponent></txxsComponent>
		<tsbhComponent></tsbhComponent>
		<tsybComponent></tsybComponent>
		<txxsComponent></txxsComponent>
		
	</div>
</template>
<script>
	import txxsComponent from './UI/nav/txxs'
	import tsbhComponent from './UI/nav/tsbh'
	import tsybComponent from './UI/nav/tsyb'
	export default {
		components: {
			txxsComponent: txxsComponent,
			tsbhComponent:tsbhComponent,
			tsybComponent:tsybComponent
		},
		data() {
			return {
				activeName2: 'first'
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		}
	};
</script>

<style type="text/css">
.tab-header{
	width: auto!important;
}
.tab-panel{
	width: auto!important;
}
</style>