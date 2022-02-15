<template>
	<view class="page_wrap">
		<view class="container mt20">
			<search-comprehensive
            :showScreen="true"
			@searchInput="searchInput"
			@selectFilter="selectFilter"
			:showStock="true"
            >
            </search-comprehensive>
			<list :list='dataList'></list>
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
				showFilter:false,
				queryUrl:'api/inventory/page',
				queryData:{},
				dataList:[],
				isContinue:true,
			};
		},
		onLoad(e) {
			this.getList()
		},
		methods:{
			searchInput(val){
				this.dataList=[]
				this.queryData={
					productName:val
				}
				this.getList()
			},
			selectFilter(val){
				this.dataList=[]
				this.queryData={
					workhouseId:val.workhouseId
				}
				this.getList()
			},
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
