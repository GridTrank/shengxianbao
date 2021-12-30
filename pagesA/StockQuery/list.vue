<template>
	<view class="list_wrap">
		<view class="list " >
			<view class="item row " 
            @click="navTo('./Detail')"
            v-for="(item,index) in 2" :key="index">
				<image src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/taocan.png" mode="widthFix"></image>
				<view class="info">
					<view class="row jc_sb">
						<text class="f28-c333">名称</text>
						<text class="f24-c999">商品编码:123</text>
					</view>
					<view class="row jc_sb f24-c999 mt20">
						一包约1斤
					</view>
					<view class="row bottom jc_sb mt20">
						<view class="left">
							<text style="margin-right: 50px;"> 包</text>
							<text>¥15.00/包</text>
						</view>
						<text>库存：12</text>
					</view>
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
.list_wrap{
	.list{
		.item{
			background-color: #fff;
			padding: 30upx;
			margin-bottom: 20upx;
			image{
				width: 120upx;
				height: 120upx;
				margin-right: 50upx;
			}
			.info{
				width: 480upx;
				.bottom{
					color: $base-color;
					font-size: 24upx;
				}
			}
		}
	}
}
</style>
