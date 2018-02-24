<template>
	<!--<div class="easyui-ribbon">-->
	<div title="态势标绘">
		<div class="ribbon-group">
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large'">显示</a>
			</div>
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large'">选择</a>
			</div>
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large'">预览</a>
			</div>
			<div id="" style="width: 200px;height: 68px;overflow: scroll;overflow-x: hidden;">
				<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large'">保存</a>
			</div>
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large'">保存</a>
			</div>
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large'">保存</a>
			</div>
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large'">保存</a>
			</div>
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large'">图层</a>
			</div>
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large'">关闭</a>
			</div>
			</div>
			
			<div class="ribbon-group-title">推演制作</div>
		</div>
		<div class="ribbon-group-sep"></div>
		<div class="ribbon-group">
			<!--<div class="ribbon-toolbar" style="width:200px"></div>
            <div class="ribbon-group-title">other title</div>-->
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">播放</a>
				<div id="">
				<span id="">播放速率</span>					
 				<el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字" size='mini'></el-input-number>
				</div>
			</div>
			

			<div class="ribbon-group-title">播放控制</div>
		</div>
		<div class="ribbon-group-sep"></div>
		<div class="ribbon-group">
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">推演制作窗口</a>
			</div>
			<div class="ribbon-group-title">视图</div>
		</div>
		<div class="ribbon-group-sep"></div>
		
	</div>
	<!--</div>-->
</template>

<script type="text/javascript">
	export default {
    data() {
      return {
        num1: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>