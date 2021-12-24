<template>
    <view class="page_wrap">
        <view class="item input">
            <u-input 
            placeholder="请输入溯源码" 
            @confirm="confirm"
            border
            v-model="code"> 
            </u-input>
        </view>
        <view class="item sancode " >
            点击扫码
        </view>
        <view class="item record" @click="navTo('./List')">
            溯源记录
        </view>
        <image class="img" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/sy-icon1.png" ></image>
    </view>
</template>

<script>
    export default{
        data(){
            return{
                code:''
            }
        },
        methods:{
            confirm(){
                console.log(this.code)
            }
        }
        
    }
</script>

<style scoped lang="scss">
    .page_wrap{
        background-image: url('https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/sy-bg1.png');
        background-size: cover;
        height: 100vh;
        padding: 30upx;
        /deep/ .u-input__content{
            background: #fff;
            height: 100upx;
            border: 2upx solid #F87523;
            border-radius: 16upx;
            padding-left: 20upx;
            margin-top: 400upx;
        }
        .sancode{
            background: linear-gradient(136deg, #F87523 0%, #FD1D20 100%);
            border-radius: 50upx;
            color: #fff;
            font-size: 36upx;
            text-align: center;
            height: 100upx;
            line-height: 100upx;
            margin-top: 50upx;
        }
        .record{
            color: $base-color;
            font-size: 36upx;
            text-align: center;
            height: 100upx;
            line-height: 100upx;
            margin-top: 50upx;
            border-radius: 50upx;
            border: 2upx solid $base-color;
            background: #fff;
        }
        .img{
            width: 274upx;
            height: 176upx;
            display: block;
            margin: 60upx auto;
        }
    }
</style>
