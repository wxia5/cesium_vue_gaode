<template>
	<el-card class="box-card" style='position: absolute;right: 20px;top: 20px;'>
		<div slot="header" class="clearfix" style="padding: 10px;">
			<span>军标绘制</span>
			<i id="icon-close" class="el-icon-close" v-on:click="closeWindow" style="float: right; padding: 3px 0;cursor: pointer;"></i>
			<i id="icon-mini" class="el-icon-bottom" v-bind:class="{ 'el-icon-caret-top':isTop,'el-icon-caret-bottom':isDown}" v-on:click="togglePanel" style="float: right; padding: 3px 0;cursor: pointer;"></i>
		</div>
		<el-collapse-transition>
			<div v-show="show">
				<el-tabs type="border-card">
					<el-tab-pane label="用户管理">
						<el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input21">
						</el-input>
						<div id="" style="padding-top:10px ;">
							<el-button type="primary" plain>主要按钮</el-button>
							<el-button type="success" plain>成功按钮</el-button>
						</div>

					</el-tab-pane>
					<el-tab-pane label="定时任务补偿">
						<el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input21">
						</el-input>
						<div id="" style="padding-top:10px ;">
							<el-button type="primary" plain>主要按钮</el-button>
							<el-button type="success" plain>成功按钮</el-button>
						</div>
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
				show: true,
				isTop: true,
				isDown: false,
				input21: ""
			}
		},
		methods: {
			togglePanel() {
				this.show = !this.show;
				this.isTop = !this.isTop;
				this.isDown = !this.isDown;

			},
			closeWindow() {
				this.$store.commit("toggleJBHZ")
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
		width: 50%;
	}
	
	#tab-1 {
		width: 50%;
		border-right-width: 0px
	}
	
	#icon-mini:hover {
		background: rgba(101, 101, 101, 0.1);
		;
	}
</style>