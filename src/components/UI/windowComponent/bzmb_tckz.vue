<template>
	<el-card   class="box-card" style='height: 80%;overflow-y: scroll;overflow-x: hidden;width: 300px;'>
		<div slot="header"class="clearfix" style="padding: 10px;" >
			<span>标注面板与图层控制</span>
			<i id="icon-close" class="el-icon-close" v-on:click="closeWindow" style="float: right; padding: 3px 0;cursor: pointer;"></i>
			<i id="icon-mini" class="el-icon-bottom" v-bind:class="{ 'el-icon-caret-top':isTop,'el-icon-caret-bottom':isDown}" v-on:click="togglePanel" style="float: right; padding: 3px 0;cursor: pointer;"></i>
		</div>
		<el-collapse-transition>
			<div v-show="show">
				<el-tabs type="border-card">
					<el-tab-pane label="军标树">
						<el-card class="box-card" style="width: 100%;">
							<el-tree :data="data2" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]" :props="defaultProps">
							</el-tree>
						</el-card>
					</el-tab-pane>
					<el-tab-pane label="图层数">
						<el-card class="box-card" style="width: 100%;">
							<el-tree :data="data2" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]" :props="defaultProps">
							</el-tree>
						</el-card>
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
        data2: [{
          id: 1,
          label: '图层',
          children: [{
            id: 2,
            label: '二级 菜单',
            children: [
            {
              id: 3,
              label: '第二炮兵'
            }, 
            {
              id: 4,
              label: '侦察兵'
            },
                        {
              id: 5,
              label: '装甲兵'
            },
                        {
              id: 6,
              label: '空军'
            },
            ]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        show: true
      };
    },
		methods: {
			togglePanel() {
				this.show = !this.show;
				this.isTop = !this.isTop;
				this.isDown = !this.isDown;

			},
			closeWindow() {
				this.$store.commit("toggleBZMB_TCKZ")
			}
		},
	}
</script>

<style>

</style>