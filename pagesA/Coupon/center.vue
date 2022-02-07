<template>
	<view class="page_wrap ">
		<CouponList type="get" :couponList="dataList"></CouponList>
		<view class="btn" @click="navTo('/pages/Home/Home','switch')">返回商城订货<span class="iconfont icon-jinru"></span></view>
	</view>
</template>

<script>
	import CouponList from '../../components/coupon-list/coupon-list'
	export default {
		data() {
			return {
				queryUrl:'api/bmallticketuse/pageTicket',
				dataList:[],
			}
		},
		components:{
			CouponList
		},
		created(){
			this.getList()
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.page_wrap {
		padding-bottom: 120upx;
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
