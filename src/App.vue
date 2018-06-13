<template>
  <div class='amap-wrapper'>
    <el-amap class="amap-box" :vid="'amap-vue'" :zoom='10' :center='[113.23, 23.16]'>
    </el-amap>
  </div>
</template>

<script>
  
  export default {
    
  }
</script>

<style lang='scss' scoped>
  .amap-wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>




