<template>
    <view class="page_wrap">
        <view class="list">
            <view class="item mt10" >
                <view class="row jc_sb">
                    <text class="f28-c333">合同编号</text>
                    <text class="f28-c999">{{detail.contractNo}}</text>
                </view>
                <view class="row jc_sb mt20">
                    <text class="f28-c333">合同标题</text>
                    <text class="f28-c999">{{detail.contractTitle}}</text>
                </view>
                <view class="row jc_sb mt20">
                    <text class="f28-c333">创建人</text>
                    <text class="f28-c999">{{createName}}</text>
                </view>
                <view class="row jc_sb mt20">
                    <text class="f28-c333">创建时间</text>
                    <text class="f28-c999">{{createDate}}</text>
                </view>
				<view class="row jc_sb mt20">
				    <text class="f28-c333">甲方公司名称</text>
				    <text class="f28-c999">{{detail.contractACompanyName}}</text>
				</view>
				<view class="row jc_sb mt20">
				    <text class="f28-c333">甲方电话号码</text>
				    <text class="f28-c999">{{detail.contractAPhone}}</text>
				</view>
				<view class="row jc_sb mt20">
				    <text class="f28-c333">合同开始时间-结束时间</text>
				    <text class="f28-c999">{{detail.contractStartDate}}-{{detail.contractEndDate}}</text>
				</view>
            </view>
        </view>
        <view class="info mt20">
            <view class="title f28-c333">合同附件</view>
            <view class="img_wrap row mt20">
                <image 
				v-for="(img,i) in detail.fileList"
                class="img"
                @click="prevImg"
                :src="img" mode=""></image>
            </view>
        </view>
    </view>
</template>

<script>
    export default{
        data(){
            return{
                detail:{},
				createName:'',
				createDate:'',
            }
        },
		onLoad(e) {
			this.getDetail(e.id)
			this.createName=e.createName
			this.createDate=e.createDate
		},
        methods:{
			getDetail(id){
				this.$http('api/contract/findByTentList',{id}).then(res=>{
					this.detail=res
				})
			},
            prevImg(){
                uni.previewImage({
                    urls: this.detail.fileList,
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
        .list{
            .item{
                background-color: #fff;
                padding: 30upx;
            }
        }
        .info{
            background-color: #fff;
            padding: 30upx;
            .img_wrap{
                .img{
                    width: 200upx;
                    height: 300upx;
                    margin-right: 20upx;
					&:last-child{
						margin-right: 0;
					}
                }
            }
        }
    }
</style>
