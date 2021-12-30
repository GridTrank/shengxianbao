<template>
	<view class="page_wrap">
		<view class="container mt20">
			<search-comprehensive
            :showScreen="true"
            >
            </search-comprehensive>
			<list></list>
		</view>
		
		<u-popup :show="showFilter" mode="right" @close="showFilter=false">
			<filter-page></filter-page>
		</u-popup>
	</view>
</template>

<script>
	import list from './list.vue'
	export default {
		components:{list},
		data() {
			return {
				pageType:'search',
				showFilter:false
			};
		},
		onLoad(e) {
			// this.pageType=e.pageType
		},
		methods:{
			clickLeft(){
				uni.navigateBack()
			},
			clickRight(){
				this.navTo('./search')
			},
		}
	}
</script>

<style scoped lang="scss">
.page_wrap{
	.container{
		.filter{
			padding: 30upx;
			background-color: #fff;
			font-size: 32upx;
			color: #333;
		}
	}
}
</style>
