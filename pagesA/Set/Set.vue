<template>
	<view class="page_wrap">
		<view class="list mt20">
			<view class="item row" @click="navTo('/pages/Address/Address')">
				<view class="left ">
					地址管理
				</view>
				<view class="right row">
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			<view class="item row" @click="navTo('./AccountSafe/index')">
				<view class="left ">
					账户与安全
				</view>
				<view class="right row">
					<text class="label">可修改密码</text>
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			<view class="item row" >
				<view class="left ">
					第三方账号管理
				</view>
				<view class="right row">
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			<view class="item row" >
				<view class="left ">
					清理缓存信息提升空间
				</view>
				<view class="right row">
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			<view class="item row" >
				<view class="left ">
					关于
				</view>
				<view class="right row">
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			
		</view>
		<!-- 按钮 -->
		<view class="login_out" @click="logout">
			退出账号
		</view>
		
	</view>
</template>

<script>
	import {date} from "@/common/js/util"
	export default {
		data() {
			return {
				
			};
		},
		onLoad(e) {
			
		},
		methods:{
			logout(){
                uni.showModal({
                    title:'提示',
                    content:'确认提出当前账号吗？',
                    success: (res) => {
                        if(res.confirm){
                            uni.showToast({
                                title:'退出成功',
                                icon:'none'
                            })
                            uni.clearStorage()
                            setTimeout(()=>{
                                this.navTo('/pages/Home/Home','switch')
                            },1500)
                        }
                    }
                })
            }
		},
		
	}
</script>

<style lang="scss">
.page_wrap{
	.list{
		background-color: #fff;
		padding:0 30upx;
		.item{
			padding: 40upx 0;
			border-bottom: 1px solid #E1E1E1;
			justify-content: space-between;
			.left{
				font-size: 30upx;
				color: #333;
			}
			.right{
				.label{
					color: #666;
					font-size: 28upx;
					margin-right: 12upx;
				}
			}
			.input{
				width: 400upx;
			}
			&:last-child{
				border:none
			}
		}
	}
	.login_out{
		
		margin-top: 100upx;
		text-align: center;
		height: 100upx;
		line-height: 100upx;
		background-color: #fff;
		color: $base-color;
		font-size: 28upx;
	}
}
</style>
