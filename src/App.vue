<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted: function () {
    
  },
  created: function () {
    var APP_ID = 'RSbP3AwLHWlq4m9Vik2hU25R-gzGzoHsz';
    var APP_KEY = 'W9iJQBgprEVAvRTWKGbioPhk';

    AV.init({
      appId: APP_ID,
      appKey: APP_KEY
    });
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

body {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  overflow: auto;
  color: #333;
}

a {
  text-decoration: none;
  color: #333;
}

*:focus {
  outline: none;
}

.link {
  color: #f36565;
}

.btn{
  display: inline-block;
  border: none;
  background: #fc6a6a;
  color: #fff;
  height: 36px;
  line-height: 36px;
  text-align: center;
  border-radius: 5px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
}
.btn:hover{
  background: #f36565;
}
</style>
