<template>
	<view class="page_wrap">
		<view class="item row jc_sb">
			<view class="left row">
				<image class="img mr20" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/kf_icon1.png" ></image>
				<view class="f28-c333">手机</view>
			</view>
			<view class="right f28-c333">
				{{info.mobile}}
			</view>
		</view>
		<view class="item row jc_sb mt20">
			<view class="left row">
				<image class="img mr20" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/kf_icon2.png" ></image>
				<view class="f28-c333">邮箱</view>
			</view>
			<view class="right f28-c333">
				{{info.email}}
			</view>
		</view>
		<view class="item row jc_sb mt20">
			<view class="left row">
				<image class="img mr20" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/kf_icon3.png" ></image>
				<view class="f28-c333">微信</view>
			</view>
			<view class="right f28-dc">
				{{info.wechat}}
			</view>
		</view>
		<view class="item row jc_sb mt20">
			<view class="left row">
				<image class="img mr20" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/kf_icon4.png" ></image>
				<view class="f28-c333">QQ</view>
			</view>
			<view class="right f28-c333">
				{{info.qq}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info:{}
			}
		},
		onLoad(){
			this.getDetail()
		},
		methods: {
			getDetail(){
				this.$http('api/customer/forgetPassword',{},'post').then(res=>{
					this.info=res
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.page_wrap{
	padding:20upx 30upx;
	.item{
		background-color: #fff;
		border-radius: 12upx;
		padding: 30upx;
		.left{
			.img{
				width: 50upx;
				height: 50upx;
			}
		}
	}
}
</style>
