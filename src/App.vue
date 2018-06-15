<template>
  <div class='amap-wrapper'>
    <el-amap-search-box 
    class='search-box' 
    :on-search-result='onSearchResult'>
    </el-amap-search-box>

    <el-amap 
    class='amap-box' 
    :vid="'amap-vue'" 
    :zoom=zoom 
    :center=center>

      <el-amap-marker 
      v-if='resMarker'
      vid='res-marker'
      :label='resMarker.label'
      :position='[resMarker.location.lng, resMarker.location.lat]'>
      </el-amap-marker>
      <template v-if='markers'>
        <el-amap-marker
        v-if='markers'
        v-for='(marker, index) in markers' 
        :key='index' 
        :position='[marker.location.lng, marker.location.lat]'
        :label='marker.label' 
        :vid='index'>
        </el-amap-marker>
      </template>
    </el-amap>
    <ul v-show='searchResult' class='search-result'>
      <button @click='closeSearch()' class='close'>X</button>
      <li class='search-item' v-for='(item, index) in searchResult' :key='index' @click='getPos(item)'>
        {{ item.name }}({{ item.address }})
      </li>
    </ul>
  </div>
</template>

<script>
  import data from '../data/restaurant.js'
  export default {
    data() {
      return {
        center: [113.23, 23.16],
        zoom: 10,
        markers: data,
        searchResult: '',
        resMarker: '',
      }
    },
    methods: {
      onSearchResult(pois) {
        const res = [];
        pois.forEach((item) => {
          res.push({
            name: item.name,
            address: item.address,
            location: {
              lat: item.location.lat,
              lng: item.location.lng
            }
          })
        });
        this.searchResult = res;
      },
      getPos(item) {
        const marker = {
          label: {
            content: item.name,
            offset: [-20, -20]
          },
          location: {
            lng: item.location.lng,
            lat: item.location.lat
          }
        }
        console.log(JSON.stringify(marker));
        this.resMarker = marker;
        this.center = [item.location.lng, item.location.lat];
        this.zoom = 15;
      },
      closeSearch() {
        this.searchResult = '';
        this.resMarker = '';
      }
    },
    created() {
      this.markers = data;
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
      top: 1%;
      left: 1%;
    }
    .search-result {
      position: absolute;
      width: 100%;
      bottom: 0;
      background-color: #fff;
      padding: 20px 50px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      .close {
        width: 30px;
        height: 30px;
        font-size: 20px;
        background: none;
        border: none;
        outline: none;
        align-self: flex-end;
        cursor: pointer;
      }
      .search-item {
        height: 30px;
        line-height: 30px;
        display: flex;
        cursor: pointer;
        border-bottom: 1px solid #eee
      }
    }
  }
</style>




