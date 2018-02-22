<template>
  <div class="block">
    <el-slider 
    	v-model="value1" 
    	:max="maxValue"
    	></el-slider>
  </div>
</template>

<script>
	 export default {
    data() {
      return {
        value1: 0,
        maxValue:1000
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      }
    }
  }
</script>

<style>
</style>