<template>
  <div class='amap-wrapper'>
    <el-amap-search-box 
    class="search-box" 
    :on-search-result="onSearchResult">
    </el-amap-search-box>

    <el-amap 
    class="amap-box" 
    :vid="'amap-vue'" 
    :zoom=zoom 
    :center=center>

      <el-amap-marker class='marker'
      v-for="(marker, index) in markers" 
      :key='index' 
      :position="marker.position" 
      :events="marker.events" 
      :label='marker.label' 
      :vid="index">
      </el-amap-marker>

    </el-amap>
  </div>
</template>

<script>
  
  export default {
    data() {
      return {
        center: [113.23, 23.16],
        zoom: 10,
        markers: [
          {
            title: '生记肠粉店',
            label: {
              content: '生记肠粉店',
              offset: [-20, -20]
            },
            position: [113.238446, 23.116521],
            events: {
              click: () => {
                alert('click marker');
              },
            },
            // template: "<div class='text-label'>生记肠粉店</div>"
          }
        ]
      }
    },
    methods: {
      onSearchResult(pois) {
        console.log(pois)
        const lat = pois[0].location.lat;
        const lng = pois[0].location.lng;
      }
    }
  }
</script>

<style lang='scss' scoped>
  .amap-wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    .search-box {
      position: absolute;
    }
    .text-label {
      width: 20px;
      height: 20px;
      background-color: #000;
    }
  }
</style>




