<template>
  <div>
    <header>
        <div class="header_con">
            <a href="#" class="logo">快手截图</a>
            <div class="right_info">
              <a href="javascript:void(0)" class="user_info" @click="login"> 18693098002 </a>
              <a href="#" class="tag">免费用户</a>
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
        msg: 'Hello Editor'
      }
  },
  methods: {
    login: function () {
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>
<style>
  header{
      background: #5f5f5f;
      padding: 10px 15px;
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
 
</style>


