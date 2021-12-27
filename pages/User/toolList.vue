<template>
	<view class="wrap  mt30">
		<view class="label row">
			<text class="label_l">常用工具</text>
		</view>
		<view class="list row mt30">
			<view class="item column mt20" @click="navTo(item.link)" v-for="(item,index) in list" :key="index">
				<image :src="item.src" ></image>
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
						label:'子账号',
						src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/ziha.png',	
						link:'/pagesA/SubAccount/SubAccount'
					},{
						label:'我的报表',
						src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/baobiao.png',	
						link:''
					},{
						label:'周转筐',
						src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/zhouzhuan.png',	
						link:'/pagesA/StockManage/Index?pageType=turnover'
					},{
						label:'套餐订单',
						src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/taocan.png',	
						link:''
					},{
						label:'新品需求',
						src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/xinpin.png',	
						link:'/pagesA/AddGood/AddGood'
					},{
						label:'溯源',
						src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/suyuan.png',	
						link:'/pagesA/SourceManage/Index'
					},{
						label:'库存查询',
						src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/kucun.png',	
						link:'/pagesA/StockQuery/index'
					},{
						label:'盘点单',
						src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/pandian.png',
						link:'/pagesA/StockManage/Index?pageType=inventory'
					},{
						label:'报损单',
						src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/baousn.png',	
						link:'/pagesA/StockManage/Index?pageType=frmLoss'
					},{
						label:'报溢单',
						src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/baoy.png',
						link:'/pagesA/StockManage/Index?pageType=overflow'
					},{
						label:'退货单',
						src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/tuihuo.png',	
						link:'/pagesA/StockManage/Index?pageType=return'
					},{
						label:'我的收藏',
						src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/shoucang.png',	
						link:''
					},{
						label:'清空购物车',
						src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/qingkong.png',	
					},{
						label:'领券中心',
						src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/lingquan.png',
						link:''
					},{
						label:'出库单',
						src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/tuihuo.png',
						link:'/pagesA/StockManage/Index?pageType=out'
					},{
						label:'入库单',
						src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/tuihuo.png',
						link:'/pagesA/StockManage/Index?pageType=in'
					},{
						label:'报价单',
						src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/tuihuo.png',
						link:'/pagesA/StockManage/Index?pageType=offer'
					},{
						label:'统计表',
						src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/tuihuo.png',
						link:'/pagesA/Statistics/Index'
					},{
						label:'合同',
						src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/tuihuo.png',
						link:'/pagesA/Contract/Index'
					},
					
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
				width: 52upx;
				height: 52upx;
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
