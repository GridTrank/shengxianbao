<template>
    <view class="page_wrap">
        <view class="img_wrap">
            <image src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png"></image>
        </view>
        <view class="item_wrap">
            <view class="item_info row jc_sb">
                <text class="f28-c333">溯源码</text>
                <text class="f28-c999">1231321231</text>
            </view>
            <view class="item_info row jc_sb mt30">
                <text class="f28-c333">当前查询次数</text>
                <text class="f28-c999">1</text>
            </view>
            <view class="item_info row jc_sb mt30">
                <text class="f28-c333">首次查询时间</text>
                <text class="f28-c999">2021/12/21 09:12:23</text>
            </view>
        </view>
        <view class="item_wrap">
            <view class="item_info row jc_sb">
                <text class="f28-c333">商品编码</text>
                <text class="f28-c999">1231321231</text>
            </view>
            <view class="item_info row jc_sb mt30">
                <text class="f28-c333">商品名称</text>
                <text class="f28-c999">1</text>
            </view>
            <view class="item_info row jc_sb mt30">
                <text class="f28-c333">商品分类</text>
                <text class="f28-c999">2021/12/21 09:12:23</text>
            </view>
            <view class="item_info row jc_sb mt30">
                <text class="f28-c333">商品单位</text>
                <text class="f28-c999">2021/12/21 09:12:23</text>
            </view>
            <view class="item_info row jc_sb mt30">
                <text class="f28-c333">商品数量</text>
                <text class="f28-c999">2021/12/21 09:12:23</text>
            </view>
        </view>
        <view class="item_wrap">
            <view class="item_info row jc_sb">
                <text class="f28-c333">供应商名称</text>
                <text class="f28-c999">1231321231</text>
            </view>
            <view class="item_info row jc_sb mt30">
                <text class="f28-c333">地址</text>
                <text class="f28-c999">1</text>
            </view>
            <view class="item_info row jc_sb mt30">
                <text class="f28-c333">供应商资质</text>
                <image
                class="img"
                mode="widthFix"
                v-for="(item,idnex) in 3 "
                :key="index"
                @click="prevImg"
                src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png" >
                </image>
            </view>
        </view>
        <view class="item_wrap">
            <view class="item_info row jc_sb">
                <text class="f28-c333">检测时间</text>
                <text class="f28-c999">1231321231</text>
            </view>
            <view class="item_info row jc_sb mt30">
                <text class="f28-c333">检测机构</text>
                <text class="f28-c999">1</text>
            </view>
            <view class="item_info row jc_sb mt30">
                <text class="f28-c333">检测员</text>
                <text class="f28-c999">2021/12/21 09:12:23</text>
            </view>
            <view class="item_info row jc_sb mt30">
                <text class="f28-c333">检测报告</text>
                <image
                class="img"
                mode="widthFix"
                v-for="(item,idnex) in 3 "
                :key="index"
                @click="prevImg"
                src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png" >
                </image>
            </view>
        </view>
        <view class="item_wrap">
            <view class="item_info row jc_sb">
                <text class="f28-c333">下单客户</text>
                <text class="f28-c999">1231321231</text>
            </view>
            <view class="item_info row jc_sb mt30">
                <text class="f28-c333">下单时间</text>
                <text class="f28-c999">1</text>
            </view>
            <view class="item_info row jc_sb mt30">
                <text class="f28-c333">订单单号</text>
                <text class="f28-c999">2021/12/21 09:12:23</text>
            </view>
            <view class="item_info row jc_sb mt30">
                <text class="f28-c333">配送日期</text>
                <text class="f28-c999">2021/12/21 09:12:23</text>
            </view>
        </view>
    </view>
</template>

<script>
    export default{
        data(){
            return{
                
            }
        },
        methods:{
            prevImg(){
                let urls=[
                    'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png'
                ]
                uni.previewImage({
                    urls: urls,
                    longPressActions: {
                        itemList: ['发送给朋友', '保存图片', '收藏'],
                        success: function(data) {
                           console.log('选中了第' + (data.tapIndex + 1) + '个按钮,第' + (data.index + 1) + '张图片');
                        },
                        fail: function(err) {
                           console.log(err.errMsg);
                        }
                    }
                }) 
            }
        }
    }
</script>

<style scoped lang="scss">
    .page_wrap{
        .img_wrap{
            width:690upx;
            height: 620upx;
            margin:20upx auto;
            image{
                width: 100%;
                height: 100%;
            }
        }
        .item_wrap{
            margin: 20upx 0;
            background-color: #fff;
            padding: 30upx;
            .item_info{
                .img{
                    width: 140upx;
                    margin-right: 10upx;
                }
            }
        }
    }
</style>
