<template>
    <div class="login_box_com">
        <div class="logo">
            <img src="../assets/44.png" alt="">
            <h1 style="display:none">{{appName}}</h1>
        </div>
        <div v-if="showLog">
            <div class="form_com">
                <div class="input_con">
                    <input v-model="username" type="text" placeholder="邮箱">
                </div>
                <div class="input_con">
                    <input v-model="password" type="password" placeholder="密码">
                </div>
            </div>
            <div class="other_info">
                <div class="error_info">
        
                </div>
                <div>
                    <button @click="loginAction" class="btn">登 录</button>
                </div>
                <div class="other_info_t">
                    <a href="#">忘记密码？</a>
                    <span>没有账号？
                        <a @click="showReg" href="javascript:void(0)" class="link">免费注册</a>
                    </span>
                </div>
            </div>
        </div>
        <div v-if="!showLog">
            <div class="form_com">
                <div class="input_con">
                    <input v-model="username" type="text" placeholder="用户名">
                </div>
                <div class="input_con">
                    <input v-model="email" type="text" placeholder="邮箱">
                </div>
                <div class="input_con">
                    <input v-model="password" type="password" placeholder="密码">
                </div>
                <div class="input_con">
                    <input v-model="repassword" type="password" placeholder="确认密码">
                </div>
            </div>
            <div class="other_info">
                <div class="error_info">
        
                </div>
                <div>
                    <button @click="registerAction" class="btn">注 册</button>
                </div>
                <div class="other_info_t">
                    <a href="#">忘记密码？</a>
                    <span>有帐号？
                        <a @click="showReg" href="javascript:void(0)" class="link">去登录</a>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            username: '',
            showLog: true,
            email: '',
            password: '',
            repassword: '',
        }
    },
    computed: {
        msg: function () {
            return this.$store.state.msg
        },
        appName: function () {
            return this.$store.state.appName
        }
    },
    mounted: function () {
        // console.log(this.$store.state)
        let _this = this
        // console.log(AV)
    },
    methods: {
        showReg: function () {
            this.showLog = !this.showLog
        },
        loginAction: function () {
            const _this = this
            AV.User.logIn(_this.username, _this.password).then(function (loginedUser) {
                console.log(loginedUser)
            }, function (error) {
                console.log(error)
            });
        },
        registerAction: function () {
            const _this = this
            var user = new AV.User();
            user.setUsername(_this.username);
            user.setPassword(_this.password);
            user.setEmail(_this.email);
            user.signUp().then(function (loginedUser) {
                // 注册成功，跳转到商品 list 页面
                console.log(loginedUser)
            }, (function (error) {
                console.log(error)
            }));
        }

    }
}
</script>
<style>
body {
    background: #f9f8f5;
}

.login_box_com {
    width: 300px;
    margin: 10% auto;
}

.login_box_com .logo h1 {
    font-size: 24px;
    font-weight: 400;
}

.login_box_com .form_com {
    margin-top: 15px;
    margin-bottom: 15px;
}

.login_box_com .form_com input {
    min-width: 100%;
    height: 44px;
    line-height: 44px;
    -webkit-appearance: none;
    text-indent: 10px;
    border: 1px solid #e6e6dc;
    box-sizing: border-box;
    font-size: 14px;
}

.login_box_com .form_com input {
    border-bottom: none;
}

.login_box_com .form_com .input_con:first-child input {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.login_box_com .form_com .input_con:last-child input{
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    border-bottom: 1px solid #e6e6dc;
    box-sizing: border-box;
}
.other_info{
    font-size: 14px;
}
.other_info_t{
    margin-top: 10px;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
}
</style>


