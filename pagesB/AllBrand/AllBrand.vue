<template>
	<view class="page_wrap">
		<view class="list row">
			<image 
			class="item mt30"
			@click="navTo('/pagesB/RecommendPage/RecommendPage?id='+item.id+'&pageType=spec')"
			v-for="(item,index) in dataList"
			:key="index"
			:src="item.specialImage"
			>
			</image>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		onLoad() {
			this.queryUrl='api/myOneslft/getSpecialListPage'
			this.getList()
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
	.page_wrap{
		padding:0 30upx 30upx 30upx;
		.list{
			flex-wrap: wrap;
			.item{
				flex-shrink: 0;
				margin-right: 20upx;
				&:nth-child(3n){
					margin-right: 0;
				}
				width: 208upx;
				height: 208upx;
				border-radius: 8upx;
			}
		}
	}
</style>
