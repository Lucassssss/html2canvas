<template>
  <div>
    <header>
      <div class="header_con">
        <img src="../../assets/24.png" alt="">
        <!--<a href="#" class="logo">快手截图</a>-->
        <div class="right_info">
          <span v-if="userName">
            <a href="javascript:void(0)" class="user_info"> {{userName}} </a>
            <a href="javascript:void(0)" class="tag warning">免费用户</a>
            <a href="javascript:void(0)" class="tag" @click="loginout">退出</a>
          </span>
          <span v-else>
            <a @click="login" href="javascript:void(0)" class="tag">登录</a>
            <a @click="login" href="javascript:void(0)" class="tag">注册</a>
          </span>
        </div>
      </div>
    </header>
    <div>
      <div class="main_container">
        <div class="sidebar">
          <ul>
            <li><a class="friends_num active" href="javascript:void(0)"><i class="iconfont icon-tongxunlu_tongxunlu"></i>微信好友数量生成</a></li>
            <li><a class="friends_num" href="javascript:void(0)"><i class="iconfont icon-hongbao"></i>微信红包生成</a></li>
            <li><a class="friends_num" href="javascript:void(0)"><i class="iconfont icon-duihua"></i>微信对话生成</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
  }
}
</script>
<style>
header {
  /*background: #5f5f5f;*/
  padding: 10px 15px;
  border-bottom: 1px solid #ccc;
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
.sidebar{
  width: 200px;
  background: #fff;
  border-right: 1px solid #e7e7e7;
  min-height: 100vh;
}
.sidebar a{
  display: block;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #e7e7e7;
}
.sidebar a i.iconfont{
  display: inline-block;
  margin-left: 20px;
  width: 30px;
  font-size: 24px;
  vertical-align: middle;
}
.sidebar a:hover{
  background: #eaeaea;
}
.sidebar a.active{
  background: #2ecc71;
  color: #fff;
}
.sidebar a.active i{
  color: #fff;
}
.friends_num{

}
.main_container{
  background: #f5f5f5;
}
i.icon-tongxunlu_tongxunlu{
  color: #2ecc71;
}
.icon-hongbao{
  color: #ed2600;
}
.icon-duihua{
  color: #2ecc71;
}
</style>


