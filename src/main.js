window.onLoad  = function(){
  var map = new AMap.Map('container');
}
var url = 'http://webapi.amap.com/maps?v=1.4.6&key=dee907f2263f4566228dea3408e85c89&callback=onLoad';
var jsapi = doc.createElement('script');
jsapi.charset = 'utf-8';
jsapi.src = url;
document.head.appendChild(jsapi);