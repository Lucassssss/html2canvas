<template>
  <div>
    <div class="top_bar">
      <div class="main_container flex">
        <span class="slogen">快手截图，微商神器</span>
        <div class="right_info">
          <span v-if="userName">
            <a href="javascript:void(0)" class="user_info"> {{userName}} </a> &nbsp;&nbsp; | &nbsp;&nbsp;
            <a href="javascript:void(0)" class=" warning">免费用户</a> &nbsp;&nbsp; | &nbsp;&nbsp;
            <a href="javascript:void(0)" class="" @click="loginout">退出</a>
          </span>
          <span v-else>
            <a @click="login" href="javascript:void(0)" class="">登录</a>
            &nbsp;&nbsp; | &nbsp;&nbsp;
            <a @click="login" href="javascript:void(0)" class="">注册</a>
          </span>
        </div>
      </div>
    </div>
    <header>
      <div class="header_con">
        <div class="main_container">
          <div class="main_header">
            <img class="logo" src="../../assets/30.png" alt="">
            <span class="header_link_con">
              <a href="/" class="header_link">首页</a>
            </span>
          </div>
        </div>
      </div>
    </header>
    <div>
      <div class="main_container editor_con">
        <div class="sidebar">
          <ul>
            <li class="group_title">微信工具</li>
            <li>
              <a class="friends_num active" href="javascript:void(0)">
                <i class="iconfont icon-tongxunlu_tongxunlu"></i>微信好友数量生成</a>
            </li>
            <li>
              <a class="friends_num" href="javascript:void(0)">
                <i class="iconfont icon-hongbao"></i>微信红包生成</a>
            </li>
            <li>
              <a class="friends_num" href="javascript:void(0)">
                <i class="iconfont icon-duihua"></i>微信对话生成</a>
            </li>
            <li class="group_title">支付宝工具</li>
            <li>
              <a class="friends_num" href="javascript:void(0)">
                <i class="iconfont icon-zhifubao"></i>支付宝转账生成</a>
            </li>
            <li>
              <a class="friends_num" href="javascript:void(0)">
                <i class="iconfont icon-zhifubao"></i>支付宝余额生成</a>
            </li>
            <li class="group_title">QQ 工具</li>
            <li>
              <a class="friends_num" href="javascript:void(0)">
                <i class="iconfont icon-hongbao"></i>QQ 红包生成</a>
            </li>
            <li>
              <a class="friends_num" href="javascript:void(0)">
                <i class="iconfont icon-tubiao215"></i>QQ 对话生成</a>
            </li>
          </ul>
        </div>
        <friendsNum></friendsNum>
        
      </div>
    </div>
  </div>
</template>
<script>
import Friends from './FriendsNum'
export default {
  data() {
    return {
      msg: 'Hello Editor',
    }
  },
  computed: {
    userName: function () {
      let current = AV.User.current()
      if (current) {
        // console.log(current)
        return current.attributes.email
      }
    }
  },
  methods: {
    login: function () {
      this.$router.push({
        name: 'login'
      })
    },
    loginout: function () {
      AV.User.logOut();
      this.$router.push({
        name: 'login'
      })
    }
  },
  mounted: function () {
    let current = AV.User.current()
    console.log(current)
  },
  components: {
    'friendsNum': Friends
  }
}
</script>
<style>
header {
  background: #fff;
  height: 54px;
  line-height: 54px;
  box-sizing: border-box;
}
.main_header img{
  vertical-align: middle;
}
.header_link_con{
  margin-left: 60px;
}
.header_link_con a{
  color: #333;
  font-size: 16px;
  display: inline-block;
  padding: 0 20px;
}
.header_link_con a:hover{
  background: #f3f3f3;
}
body{
  background: #f3f3f3;
}
header a {
  color: #b4b4b4
}

.header_con {
  display: flex;
  justify-content: space-between;
}

.header_con .right_info {
  font-size: 14px;
}

.header_con .right_info a {
  margin-left: 10px;
}

.tag {
  background: #676767;
  border-radius: 3px;
  padding: 3px 10px;
  border: 1px solid #6b6b6b;
}

.tag.warning {
  background: #ff5332;
  color: #fff;
  border: 1px solid #ff694c;
}

.sidebar {
  /*width: 200px;*/
  background: #fff;
  /*border-right: 1px solid #e7e7e7;*/
  /*min-height: 100vh;*/
  /*margin-top: 20px;*/
  padding: 10px;
  position: absolute;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.1), 0 0 2px 0 rgba(0,0,0,.1);
  border-radius: 3px;
}

.sidebar a {
  display: block;
  height: 36px;
  line-height: 36px;
  font-size: 14px;
  /*border-bottom: 1px solid #e7e7e7;*/
  padding: 3px 10px;
  margin-top: 10px;
  border-radius: 3px;
}
.sidebar li:first-child a{
  margin-top: 0;
}

.group_title{
    color: #999;
    padding: 5px 3px;
}

.sidebar a i.iconfont {
  display: inline-block;
  width: 30px;
  font-size: 24px;
  vertical-align: middle;
  color: #666;
}

.sidebar a:hover {
  background: #eaeaea;
}

.sidebar a.active {
  /*background: #2ecc71;*/
  color: #333;
  box-shadow: 0 2px 2px 0 rgba(0,0,0,.1), 0 0 2px 0 rgba(0,0,0,.1);
  background: #fc6a6a;
  color: #fff;
}
.sidebar a.active i.iconfont{
  color: #fff;
}

.editor_con{
  position: relative;
}
.sidebar a.active i {
  /*color: #fff;*/
}

.friends_num {}

.main_container {
  width: 1200px;
  margin: 0 auto;
  /*background: #f5f5f5;*/
}

/*i.icon-tongxunlu_tongxunlu {
  color: #2ecc71;
}

.icon-hongbao {
  color: #ed2600;
}

.icon-duihua {
  color: #2ecc71;
}*/

.right_info a {
  color: #9b9b9b;
}
</style>


