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
  /*font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", SimSun, sans-serif;*/
  font-family: PingFang SC,Microsoft YaHei,\\5FAE\8F6F\96C5\9ED1,PingHei,Helvetica Neue,SimHei,Helvetica,Arial,sans-serif!important;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  overflow: auto;
  color: #333;
  font-size: 1em;
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
  border-radius: 3px;
  width: 100%;
  font-size: 16px;
  font-weight: 500;
}
.btn:hover{
  background: #f36565;
}
ul, li{
  list-style: none;
}
.top_bar{
  background: #333;
  color: #fff;
  height: 35px;
  line-height: 35px;
  color: #9b9b9b;
  font-size: 14px;
}
.flex{
  display: flex;
  justify-content: space-between;
}
</style>
