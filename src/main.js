import Vue from 'vue';
import VueAMap from 'vue-amap';
import App from './App.vue';
import '../assets/app.scss';

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: 'dee907f2263f4566228dea3408e85c89',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  v: '1.4.6'
});


new Vue({
  el: '#app',
  render: h => h(App)
})