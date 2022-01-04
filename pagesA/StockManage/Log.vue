<template>
    <view class="page_wrap">
        <view class="list">
            <view class="item row jc_sa">
                <text class="f24-c333">操作内容</text>
                <text class="f24-c333">操作人</text>
                <text class="f24-c333">创建时间</text>
            </view>
            <view class="item row jc_sa mt20" v-for="(item,index) in 6" :key="index">
                <text class="f24-c999">创建订单</text>
                <text class="f24-c999">姓名</text>
                <text class="f24-c999">2020-09-12 12:00-10:00</text>
            </view>
        </view>
    </view>
</template>

<script>
    export default{
        data(){
            return{
                
            }
        }
    }
</script>

<style scoped lang="scss">
    .page_wrap{
        padding:30upx;
        .list{
            background:#fff;
            padding: 30upx 0;
            .item{
                text{
                    width: 20%;
                    white-space: normal;
                    display: block;
                }
            }
        }
    }
</style>
