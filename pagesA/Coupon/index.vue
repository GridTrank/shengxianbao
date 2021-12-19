<template>
	<view class="page_wrap ">
		<u-tabs class="coupon_tab"  lineColor="#FE5B07" :activeStyle="{color: '#FE5B07',}" :list="list" @click="tab"></u-tabs>
		<CouponList :type="couponTab" :state="activeTab"></CouponList>
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
					type:'list'
				}, {
					name: '已使用',
					type:'used'
				}, {
					name: '已过期',
					type:'used'
				}],
				couponTab:'list',
				activeTab:'已使用'
			}
		},
		components:{
			CouponList
		},
		methods: {
			onNavigationBarButtonTap(){
				this.navTo('/pagesA/Coupon/loseEfficacy')
			},
			tab(item){
				this.activeTab = item.name
				this.couponTab=item.type
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
		}
	}
</style>
