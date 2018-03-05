<template>
	<el-card class="box-card" style='position: absolute;left: 50px;top: 20px;height: 80%;overflow-y: scroll;overflow-x: hidden;'>
		<div slot="header" class="clearfix" style="padding: 10px;">
			<span>标注属性</span>
			<i id="icon-close" class="el-icon-close" v-on:click="closeWindow" style="float: right; padding: 3px 0;cursor: pointer;"></i>
			<i id="icon-mini" class="el-icon-bottom" v-bind:class="{ 'el-icon-caret-top':isTop,'el-icon-caret-bottom':isDown}" v-on:click="togglePanel" style="float: right; padding: 3px 0;cursor: pointer;"></i>
		</div>
		<el-collapse-transition>
			<div v-show="show">

				<el-tabs type="border-card">

					<el-tab-pane label="常用">
						<el-tag class="util_tag">边线</el-tag>
						<el-card class="box-card" style="width: 100%;">
							<el-form :label-position="labelPosition" label-width="80px">
								<el-form-item label="宽度" style='width: 45%;display: inline-block;'>
									<el-input-number size="mini" v-model="num"></el-input-number>
								</el-form-item>
								<el-form-item label="线类型" style='width: 45%;display: inline-block;'>
									<el-select v-model="value" placeholder="请选择">
										<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
										</el-option>
									</el-select>
								</el-form-item>
								<el-form-item label="线色" style='width: 40%;display: inline-block;'>
									<el-color-picker v-model="color1" size="mini"></el-color-picker>
								</el-form-item>
							</el-form>
						</el-card>
						<el-tag class="util_tag" type="success">衬线</el-tag>
						<el-card class="box-card" style="width: 100%;">
							<el-form :label-position="labelPosition" label-width="80px">
								<el-form-item label="开启" style="display: inline-block;">
									<el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
								</el-form-item>
								<el-form-item label="颜色" style="display: inline-block;">
									<el-color-picker v-model="color1" size="mini"></el-color-picker>
								</el-form-item>
								<el-form-item label="宽度" style="display: inline-block;">
									<el-input-number size="mini" v-model="num"></el-input-number>
								</el-form-item>
							</el-form>

						</el-card>
						<el-tag class="util_tag" type="warning">宽高</el-tag>
						<el-card class="box-card" style="width: 100%;">
							<el-form :label-position="labelPosition" label-width="80px">
								<el-form-item label="宽度" style="display: inline-block;">
									<el-input-number size="mini" v-model="num"></el-input-number>
								</el-form-item>
								<el-form-item label="高度" style="display: inline-block;">
									<el-input-number size="mini" v-model="num"></el-input-number>
								</el-form-item>
								<el-form-item label="宽度" style="display: inline-block;">
									<el-checkbox v-model="checked1">锁定原始宽高比</el-checkbox>
									<el-checkbox v-model="checked2">随地图缩放</el-checkbox>
								</el-form-item>
							</el-form>

						</el-card>
						<el-tag class="util_tag" type="info">旋转-镜像</el-tag>
						<el-card class="box-card" style="width: 100%;">
							<el-form :label-position="labelPosition" label-width="80px">
								<el-form-item label="角度" style="display: inline-block;">
									<el-input-number size="mini" v-model="num"></el-input-number>
								</el-form-item>
								<el-form-item label="" style="display: inline-block;">
									<el-checkbox v-model="checked1">水平镜像</el-checkbox>
									<el-checkbox v-model="checked2">垂直镜像</el-checkbox>
								</el-form-item>
							</el-form>

						</el-card>
						<el-tag class="util_tag" type="danger">填充</el-tag>
						<el-card class="box-card" style="width: 100%;">
							<el-form :label-position="labelPosition" label-width="80px">
								<el-form-item label="模式" style="display: inline-block;">
										<el-color-picker v-model="color1" size="mini"></el-color-picker>
								</el-form-item>
							</el-form>

						</el-card>

					</el-tab-pane>
					<el-tab-pane label="高级">
						<el-card class="box-card">123</el-card>
					</el-tab-pane>
					<el-tab-pane label="多媒体">
						<el-card class="box-card">123</el-card>
					</el-tab-pane>
				</el-tabs>
			</div>
		</el-collapse-transition>
	</el-card>
</template>

<script>
	export default {
		data() {
			return {
				options: [{
					value: '选项1',
					label: '实线'
				}, {
					value: '选项2',
					label: '虚线'
				}, {
					value: '选项3',
					label: '双虚线'
				}, {
					value: '选项4',
					label: '双实线'
				}, {
					value: '选项5',
					label: '点线'
				}],
				value: '',
				value2: true,
				show: true,
				isTop: true,
				isDown: false,
				input21: "",
				color1: '#409EFF',
				labelPosition: "right",
				num: 10,
				checked1:false,
				checked2:false
			}
		},
		methods: {
			togglePanel() {
				this.show = !this.show;
				this.isTop = !this.isTop;
				this.isDown = !this.isDown;

			},
			closeWindow() {
				this.$store.commit("toggleBZSX")
			}
		},

	}
</script>

<style>
	.text {
		font-size: 14px;
	}
	
	.item {
		margin-bottom: 18px;
	}
	
	.clearfix:before,
	.clearfix:after {
		display: table;
		content: "";
	}
	
	.clearfix:after {
		clear: both
	}
	
	.box-card {
		width: 480px;
	}
	
	#icon-close:hover {
		background: rgba(101, 101, 101, 0.1);
		;
	}
	
	.el-card__body {
		padding: 5px;
	}
	
	.el-card__header {
		padding: 5px;
	}
	
	.el-tabs__nav {
		width: 100%;
	}
	
	#tab-0 {
		width: 33%;
	}
	
	#tab-1 {
		width: 33%;
		border-right-width: 0px
	}
	
	#tab-2 {
		width: 33%;
		border-right-width: 0px
	}
	
	.util_tag {
		margin-bottom: 10px;
		margin-top: 10px;
	}
	
	#icon-mini:hover {
		background: rgba(101, 101, 101, 0.1);
		;
	}
</style>