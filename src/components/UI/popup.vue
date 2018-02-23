<template>
	<el-card class="box-card">
  <div slot="header" class="clearfix">
    <span>卡片名称</span>
    <el-button :plain="true" @click="open">打开消息提示</el-button>
  </div>
  <div v-for="o in 4" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div>
</el-card>
</template>
<script type="text/javascript">
	export default {
		data(){
			return{
				
			}
		},
		methods:{
			  open() {
       this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      }
		}
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
    width: 180px;
  }
</style>