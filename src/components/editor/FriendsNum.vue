<template>
    <div class="editor">
        <div class="control_con">
            <div class="phone">
                <div class="friends_con">
                    <img :src="statusbarPath" class="full_width" alt="">
                    <img :src="navFriends" class="full_width" alt="">
                    <img :src="toolbar" class="full_width toolbar" alt="">
                    <img :src="numbar" class="full_width numbar" alt="">
                    <div class="btn_con">
                        <a href="javascript:void(0)" class="btn">
                            <i class="iconfont icon-yulan"></i> 预览</a>
                        <a href="javascript:void(0)" class="btn">
                            <i class="iconfont icon-xiazai"></i> 下载 </a>
                        <a href="javascript:void(0)" class="btn">
                            <i class="iconfont icon-fenxiang2"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="pancel_con">
                
                <!--<div class="title_s">设置</div>-->
            
            <div class="pancel">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="选择机型">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="iPhone" value="iPhone"></el-option>
                            <el-option label="Android" value="Android"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="网络类型">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="iPhone" value="iPhone"></el-option>
                            <el-option label="Android" value="Android"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="运营商">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="iPhone" value="iPhone"></el-option>
                            <el-option label="Android" value="Android"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="信号质量">
                        <el-select v-model="form.region" placeholder="请选择活动区域">
                            <el-option label="iPhone" value="iPhone"></el-option>
                            <el-option label="Android" value="Android"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="电池余量">
                        <el-slider v-model="battery"></el-slider>
                    </el-form-item>
                    <el-form-item label="充电中">
                        <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="闹钟">
                        <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="方向锁定">
                        <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="显示时间">
                        <el-col :span="22">
                            <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                        </el-col>
                    </el-form-item>
                    <el-form-item label="好友数量">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="消息数量">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="朋友圈更新">
                        <el-switch on-text="" off-text="" v-model="form.delivery"></el-switch>
                    </el-form-item>
                    <el-form-item label="去水印">
                        <el-button type="" @click="onSubmit">首次免费</el-button>
                    </el-form-item>
                </el-form>
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
            statusbarPath: require('../../assets/iphone5/statusbar.png'),
            navFriends: require('../../assets/iphone5/navFriends.png'),
            toolbar: require('../../assets/iphone5/toolbar.png'),
            numbar: require('../../assets/iphone5/numbar.png'),
            battery: 20,
            form: {
                name: 200,
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    computed: {
    },
    methods: {
    },
    mounted: function () {
    }
}
</script>
<style>

</style>


