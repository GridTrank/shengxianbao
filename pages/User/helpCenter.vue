<template>
	<view class="wrap  mt30">
		<view class="label row">
			<text class="label_l">帮助中心</text>
		</view>
		<view class="list row mt30">
			<view class="item column mt20" v-for="(item,index) in list" :key="index">
				<image :src="item.src" mode="widthFix"></image>
				<text>{{item.label}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						label:'售后规则',
						src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/shouhou.png',	
					},{
						label:'服务条款',
						src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/tiaokuan.png',	
					},{
						label:'关于我们',
						src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/guanyu.png',	
					},{
						label:'反馈建议',
						src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/fankui.png',	
					}
				]
			};
		}
	}
</script>

<style scoped lang="scss">
.wrap{
	background-color: #fff;
	padding: 30upx;
	border-radius: 8upx;
	.label{
		justify-content: space-between;
		.label_l{
			font-size: 36upx;
			color: #333;
		}
		.label_r{
			font-size: 24upx;
			color: #999;
			image{
				width: 40upx;
				margin-left: 10upx;
			}
		}
	}
	.list{
		flex-wrap: wrap;
		.item{
			width: 25%;
			margin-bottom: 20upx;
			image{
				width: 68upx;
			}
			text{
				color: #666;
				font-size: 24upx;
				margin-top: 10upx;
			}
		}
	}
}
</style>
