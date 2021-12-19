<template>
	<view class="page_wrap">
		<view class="text_wrap" v-for="(item,index) in text" :key="index">
			<view class="title">
				<image class="icon" mode="widthFix" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/aaaa.png"></image>
				{{item.title}}
			</view>
			<view class="p" v-for="(i,j) in item.p" :key="j">
			<span class="circle"></span>
			<span>{{i}}</span>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text:[{
					title:'是否支持无理由退换货？',
					p:[
						"生鲜产品（包括蔬菜水果、鲜蛋肉禽、水产海鲜、乳品等）因时效性，不支持无理由退换货；非生鲜类产品，在未拆封，卜坏影响二次销售的情况下，支持无理由退换货。"
					]
				},{
					title:'不支持退换货的情形？',
					p:['参加限时抢购、特价促销商品、非质量问题不支持退换货；','因顾客保管不妥当活着已使用或影响二次销售的商品不支持退换货；','加工类产品、水产海鲜非质量问题不支持退换货；']
				}]
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
	.text_wrap{
		background-color: #fff;
		padding: 30upx;
		.title{
			font-size: 28upx;
			font-family: PingFangSC-Medium, PingFang SC;
			color: #333333;
			margin-bottom: 20upx;
			.icon{
				margin-right: 10upx;
				width: 20upx;
			}
		}
		.p{
			display: flex;
			font-size: 24upx;
			font-family: PingFangSC-Regular, PingFang SC;
			line-height: 44upx;
			margin-bottom: 8upx;
			.circle{
				border-radius: 50%;
				width: 10upx;
				height: 10upx;
				background: #FE5B07;
				flex-shrink: 0;
				margin-right: 16upx;
				margin-top: 16upx;
			}
		}
	}
}
</style>
