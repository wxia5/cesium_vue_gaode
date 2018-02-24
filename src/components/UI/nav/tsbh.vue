<template>
	<!--<div class="easyui-ribbon">-->
	<div title="态势标绘">
		<div class="ribbon-group">
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large'">新建</a>
			</div>
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large'">打开</a>
			</div>
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large'">追加</a>
			</div>
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large'">保存</a>
			</div>
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large'">增加图层</a>
			</div>
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large'">关闭</a>
			</div>
			<!--<div class="ribbon-toolbar">
                <a href="#" class="easyui-linkbutton" data-options="name:'cut',iconCls:'icon-cut',plain:true">Cut</a><br>
                <a href="#" class="easyui-linkbutton" data-options="name:'copy',iconCls:'icon-copy',plain:true">Copy</a><br>
                <a href="#" class="easyui-linkbutton" data-options="name:'format',iconCls:'icon-format',plain:true">Format</a>
            </div>-->
			<div class="ribbon-group-title">态势</div>
		</div>
		<div class="ribbon-group-sep"></div>
		<div class="ribbon-group">
			<!--<div class="ribbon-toolbar" style="width:200px"></div>
            <div class="ribbon-group-title">other title</div>-->
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">自动</a>
			</div>
			<div class="ribbon-group-title">缩放基准</div>
		</div>
		<div class="ribbon-group-sep"></div>
		<div class="ribbon-group">
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">自动</a>
			</div>
			<div class="ribbon-group-title">常用符号</div>
		</div>
		<div class="ribbon-group-sep"></div>
		<div class="ribbon-group">
			<!--<div class="ribbon-toolbar" style="width:200px"></div>
            <div class="ribbon-group-title">other title</div>-->
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">粘贴</a>
			</div>
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'cut',iconCls:'icon-cut',plain:true">剪切</a><br>
				<a href="#" class="easyui-linkbutton" data-options="name:'copy',iconCls:'icon-copy',plain:true">复制</a><br>
				<a href="#" class="easyui-linkbutton" data-options="name:'format',iconCls:'icon-format',plain:true">格式刷</a>
			</div>

			<div class="ribbon-group-title">剪贴板</div>
		</div>
		<div class="ribbon-group-sep"></div>
		<div class="ribbon-group">
			<!--<div class="ribbon-toolbar" style="width:200px"></div>
            <div class="ribbon-group-title">other title</div>-->
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">撤销</a>
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">重做</a>
			</div>
			<!--<div class="ribbon-group-sep"></div>-->
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">重做</a>
			</div>
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'cut',iconCls:'icon-cut',plain:true">控制点</a><br>
				<a href="#" class="easyui-linkbutton" data-options="name:'copy',iconCls:'icon-copy',plain:true">避让</a><br>
				<a href="#" class="easyui-linkbutton" data-options="name:'format',iconCls:'icon-format',plain:true">高级</a>
			</div>
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">闪烁</a>
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">取消闪烁</a>
			</div>
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">重置默认属性</a>
			</div>
			<div class="ribbon-toolbar">
				<div id="">
				<span id="">点标宽</span>					
 				<el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字" size='mini'></el-input-number>
				</div>
								<div id="">
				<span id="">点标高</span>					
 				<el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字" size='mini'></el-input-number>
				</div>
								<div id="">
				<span id="">边线宽</span>					
 				<el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字" size='mini'></el-input-number>
				</div>
			</div>
			
			<div class="ribbon-group-title">工具</div>
		</div>
		<div class="ribbon-group-sep"></div>
		<div class="ribbon-group">
			<!--<div class="ribbon-toolbar" style="width:200px"></div>
            <div class="ribbon-group-title">other title</div>-->
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">信息查询</a>
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">同步</a>
			</div>
			<div class="ribbon-group-title">其他</div>
			
		</div>
				<div class="ribbon-group-sep"></div>
		<div class="ribbon-group">
			<!--<div class="ribbon-toolbar" style="width:200px"></div>
            <div class="ribbon-group-title">other title</div>-->
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">标注图层控制器</a>
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">标注面板</a>
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">标注属性框</a>
				
			</div>
			<div class="ribbon-group-title">视图窗口</div>
			
		</div>
						<div class="ribbon-group-sep"></div>
		<!--<div class="ribbon-group">
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">编辑</a>
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">移动</a>
				
			</div>
			<div class="ribbon-group-title">更多</div>
			
		</div>
								<div class="ribbon-group-sep"></div>
		<div class="ribbon-group">
			<div class="ribbon-toolbar">
				<a href="#" class="easyui-linkbutton" data-options="name:'paste',iconCls:'icon-paste-large',iconAlign:'top',size:'large',plain:'true'">集结地域</a>
				
			</div>
			<div class="ribbon-group-title">测试</div>
		</div>-->
		
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