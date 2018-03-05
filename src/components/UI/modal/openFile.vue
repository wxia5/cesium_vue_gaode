<template>
	<el-dialog title="打开地图文档" :visible.sync="openFileVisible" width="40%" :before-close="handleClose" center>
		<el-table 
			ref="multipleTable"
			 :data="tableData3"
			  tooltip-effect="dark"
			   style="width: 100%"
			    @selection-change="handleSelectionChange"
			     border
			     
			    >
			<el-table-column type="selection" width="55">
			</el-table-column>
			<el-table-column label="日期" width="120">
				<template slot-scope="scope">{{ scope.row.date }}</template>
			</el-table-column>
			<el-table-column prop="name" label="姓名" width="120">
			</el-table-column>
			<el-table-column prop="address" label="地址" show-overflow-tooltip>
			</el-table-column>
		</el-table>
		<span slot="footer" class="dialog-footer">
    <el-button @click="reset"><i class="el-icon-check"></i>打开</el-button>
    <el-button type="primary" @click="reset"><i class="el-icon-close"></i>取消</el-button>
  </span>
	</el-dialog>
</template>

<script>
	export default {

		data() {
			return {
				tableData3: [{
					date: '2016-05-03',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-02',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-04',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-01',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-08',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-06',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}, {
					date: '2016-05-07',
					name: '王小虎',
					address: '上海市普陀区金沙江路 1518 弄'
				}],
				multipleSelection: [],
				dialogVisible: true
			};
		},
		methods: {
			toggleSelection(rows) {
				if(rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			handleClose(done) {
			this.$confirm('确认关闭？')
				.then(_ => {
					done();
				})
				.catch(_ => {
					console.log(_)
				});
			},
		reset() {
			this.$store.commit("toggleOpenNewFile")
		}
		},

	computed: {
		openFileVisible: {
			get() {
				return this.$store.state.newFileIsOpen
			},
			set() {
				this.$store.commit("toggleOpenNewFile")
			}

		}
	}
	};
</script>