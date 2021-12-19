<template>
	<view class="page_wrap ">
		<u-tabs class="coupon_tab"  lineColor="#FE5B07" :activeStyle="{color: '#FE5B07',}" :list="list" @click="tab"></u-tabs>
		<CouponList type="used" :state="activeTab"></CouponList>

	</view>
</template>

<script>
	import CouponList from '../../components/coupon-list/coupon-list'
	export default {
		data() {
			return {
				list: [{
					name: '已使用',
				}, {
					name: '已过期',
				}],
				activeTab:'已使用'
			}
		},
		components: {
			CouponList
		},
		methods: {
			tab(item){
				this.activeTab = item.name
			}
		}
	}
</script>

<style scoped lang="scss">
	.page_wrap {
		.coupon_tab {
			background-color: #fff;
		}
	}
</style>
