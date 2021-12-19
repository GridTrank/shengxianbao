<template>
	<view class="page_wrap">
		<view class="column mt40">
			<image src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png" mode="widthFix"></image>
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
