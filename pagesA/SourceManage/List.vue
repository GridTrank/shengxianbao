<template>
    <view class="page_wrap">
        <view class="list">
            <view 
            class="item mt20 column" 
            v-for="(item,index) in 6" 
            :key="index"
            @click="navTo('./Detail')"
            >
                <view class="row jc_sb i1">
                    <text class="f28-c333">ss123456</text>
                    <text class="f24-dc">名称</text>
                </view>
                <view class="type i2 bg_style1 mt10" >
                    升鲜宝供应商
                </view>
                <view class="row f28-c333 i3 mt20">
                    <text class="t1 ">升鲜宝检测机构</text>
                    <text class="t2">余东升</text>
                </view>
                <view class="time f28-c333 mt20">
                    2020-10-25 08:12:12
                </view>
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
        .list{
            .item{
                background-color: #fff;
                padding: 30upx;
                align-items: baseline;
                .i1{
                    padding-bottom:20upx ;
                    border-bottom: 2upx solid #f1f1f1;
                    width: 100%;
                }
                .i2{
                    padding: 4upx 12upx ;
                    border-radius: 8upx;
                }
                .i3{
                   .t1{
                       margin-right: 20upx;
                   } 
                }
            }
        }
    }
</style>
