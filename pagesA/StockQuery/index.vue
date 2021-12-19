<template>
	<view class="page_wrap">
		<!-- <uni-nav-bar 
		@clickLeft="clickLeft"
		@clickRight="clickRight"
		left-icon="back" 
		fixed=true
		right-icon="search"
		title="库存查询">
		</uni-nav-bar> -->
		<view class="container mt20">
			<view class="row jc_sb filter" v-if="pageType=='search'">
				<view class="price">
					价格
					<text class="iconfont icon-shang"></text>
					<text class="iconfont icon-zhankai"></text>
				</view>
				<view class="screen" @click="showFilter=true">
					筛选<text class="iconfont icon-shaixuan"></text>
				</view>
			</view>
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
