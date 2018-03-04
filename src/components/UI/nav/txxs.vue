<template>
	<!--<div class="easyui-ribbon">-->
		<div title="图形显示">
			<div class="ribbon-group">
				<div class="ribbon-toolbar">
					<a href="#" class="easyui-menubutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large'" v-on:click="initOpen">打开</a>
				</div>
				<div class="ribbon-toolbar">
					<a href="#" class="easyui-menubutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large'">保存</a>
				</div>
				<div class="ribbon-toolbar">
					<a href="#" class="easyui-menubutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large'">增加图层</a>
				</div>
				<!--<div class="ribbon-toolbar">
                <a href="#" class="easyui-linkbutton" data-options="name:'cut',iconCls:'icon-cut',plain:true">Cut</a><br>
                <a href="#" class="easyui-linkbutton" data-options="name:'copy',iconCls:'icon-copy',plain:true">Copy</a><br>
                <a href="#" class="easyui-linkbutton" data-options="name:'format',iconCls:'icon-format',plain:true">Format</a>
            </div>-->
				<div class="ribbon-group-title">态势图</div>
			</div>
			<div class="ribbon-group-sep"></div>
			<div class="ribbon-group">
				<!--<div class="ribbon-toolbar" style="width:200px"></div>
            <div class="ribbon-group-title">other title</div>-->
				<div class="ribbon-toolbar">
					<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">全图显示</a>
				</div>
				<div class="ribbon-toolbar">
					<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">放大</a>
				</div>
				<div class="ribbon-toolbar">
					<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">缩小</a>
				</div>
				<div class="ribbon-toolbar">
					<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">漫游</a>
				</div>
				<div class="ribbon-toolbar">
					<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">全屏显示</a>
				</div>
				<div class="ribbon-toolbar">
					<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">显示设置</a>
				</div>
				<div class="ribbon-group-title">显示控制</div>
			</div>
			<div class="ribbon-group-sep"></div>
			<div class="ribbon-group">
				<!--<div class="ribbon-toolbar" style="width:200px"></div>
            <div class="ribbon-group-title">other title</div>-->
				<div class="ribbon-toolbar">
					<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">制图模式</a>
				</div>
				<div class="ribbon-toolbar">
					<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">加速模式</a>
				</div>
				<div class="ribbon-group-title">显示模式</div>
			</div>
			<div class="ribbon-group-sep"></div>
			<div class="ribbon-group">
				<!--<div class="ribbon-toolbar" style="width:200px"></div>
            <div class="ribbon-group-title">other title</div>-->
				<div class="ribbon-toolbar">
					<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">距离</a>
				</div>
				<div class="ribbon-toolbar">
					<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">定位与查询</a>
				</div>
								<div class="ribbon-toolbar">
					<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">书签</a>
				</div>
								<div class="ribbon-toolbar">
					<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">图层控制</a>
				</div>
				
				<div class="ribbon-group-title">工具</div>
			</div>
		</div>
	<!--</div>-->
</template>

<script type="text/javascript">
	export default {
		data(){
			return {
				
			}
		},
		methods:{
			initOpen(){
				this.$store.commit("toggleIsOpen")
			}
		},
		
	}
</script>