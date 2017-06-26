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
    <div> {{ msg }} </div>
  </div>
</template>
<script>
export default {
  data () {
      return {
        msg: 'Hello Editor',
      }
  },
  computed: {
    userName: function () {
      let current = AV.User.current()
      if(current) {
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
  header{
      /*background: #5f5f5f;*/
      padding: 10px 15px;
      border-bottom:1px solid #ccc;
  }
  header a{
    color: #b4b4b4
  }
  .header_con{
      display: flex;
      justify-content: space-between;
  }
  .header_con .right_info{
    font-size: 14px;
  }
  .header_con .right_info a{
    margin-left: 10px;
  }
  .tag{
    background: #676767;
    border-radius: 3px;
    padding: 3px 10px;
    border: 1px solid #6b6b6b;
  }
  .tag.warning{
    background: #ff5332;
    color: #fff;
    border: 1px solid #ff694c;
  }
 
</style>


