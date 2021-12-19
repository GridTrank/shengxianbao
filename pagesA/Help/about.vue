<template>
	<view class="page_wrap">
		<view class="versions_info column">
			<view class="logo" >
				<image src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png" mode="widthFix"></image>
			</view>
			<view class="f28-c333">当前版本：v1.0</view>
		</view>
		<view class="tool">
			<u-cell title="营业执照" size="large" isLink url="/pagesA/Help/businessLicense"></u-cell>
			<u-cell title="用户协议" size="large" isLink url="/pagesA/Help/userAgreement" :border="false"></u-cell>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad(e) {
			
		},
		methods:{
			
		},
		
	}
</script>

<style lang="scss">
.page_wrap{
	.versions_info {
		background-color: #fff;
		justify-content: center;
		height: 600upx;
		.logo{
			margin-bottom: 80upx;
			width: 160upx;
			height: 160upx;
			overflow: hidden;
			image{
				width: 100%;
			}
		}
	}
	.tool {
		background-color: #fff;
		margin-top: 18upx;
	}
}
</style>
