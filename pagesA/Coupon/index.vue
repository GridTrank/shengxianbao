<template>
	<view class="page_wrap ">
		<u-tabs class="coupon_tab"  lineColor="#FE5B07" :activeStyle="{color: '#FE5B07',}" :list="list" @click="tab"></u-tabs>
		<CouponList :state="activeTab" :type="type" :couponList="dataList"></CouponList>
		<view class="btn" @click="navTo('/pagesA/Coupon/center')">领券中心<span class="iconfont icon-jinru"></span></view>
	</view>
</template>

<script>
	import CouponList from '../../components/coupon-list/coupon-list'
	export default {
		data() {
			return {
				list: [{
					name: '未使用',
					value:'list',
					type:'0'
				}, {
					name: '已使用',
					value:'used',
					type:'1'
				}, {
					name: '已过期',
					value:'used',
					type:'2'
				}],
				type:'list',
				queryData:{ticketStatus:0},
				activeTab:'use',
				dataList:[],
				queryUrl:'api/bmallticketuse/pageCusList'
			}
		},
		components:{
			CouponList
		},
		created(){
			this.getList()
		},
		methods: {
			onNavigationBarButtonTap(){
				this.navTo('/pagesA/Coupon/loseEfficacy')
			},
			
			tab(item){
				this.queryData.ticketStatus = item.type;
				this.activeTab = item.name;
				this.dataList = [];
				this.getList()
			}
		}
	}
</script>

<style scoped lang="scss">
	.page_wrap {
		padding-bottom: 120upx;
		.coupon_tab {
			background-color: #fff;
		}
		.btn{
			width: 100%;
			position: fixed;
			bottom: -.5px;
			left: 0;
			height: 120upx;
			display: flex;
			justify-content: center;
			align-items: center;
			background: #FFFFFF;
			z-index: 2;
			box-shadow: 0px 0px 14upx 0px rgba(187, 187, 187, 0.5);
			.icon-jinru{
				font-size: 48upx;
			}
		}
	}
</style>
