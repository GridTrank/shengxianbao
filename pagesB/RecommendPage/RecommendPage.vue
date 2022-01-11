<template>
	<view class="page_wrap">
		<image class="img" v-if="dataList.length>0" :src="dataList[0].defaultImage" mode=""></image>
		<view class="product_list row">
			<view :class="['detail', 'index'+(ai+1) ] " v-for="(arr,ai) in list" :key="ai">
				<view class="list column mt20" v-for="(item,index) in arr" :key="index">
					<product-list></product-list>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				id:'',
				list:[],
				pageType:'',
			}
		},
		onLoad(e) {
			this.id=e.id
			this.pageType=e.pageType
		},
		onShow() {
			this.getData()
		},
		methods:{
			async getData(item){
				if(this.pageType=='recommend'){
					this.queryUrl='api/myOneslft/getBMallRecommendProductList'
					this.queryData={
					    recommendId:this.id
					}
				}else if(this.pageType=='spec'){
					this.queryUrl='api/myOneslft/getSpecialProductListBySpecialId'
					this.queryData={
					    specialId:this.id
					}
				}
			    let data= await this.getList()
				let arr1=[]
				let arr2=[]
				data.forEach((el,index)=>{
					if((index+1)%2==1){
						arr1.push(el)
					}else{
						arr2.push(el)
					}
				})
				this.list=[arr1,arr2]
				
				uni.setNavigationBarTitle({
					title:data[0].recommendName
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.page_wrap{
		.img{
			width: 100%;
			min-height: 700upx;
		}
		.product_list{
			position: relative;
			padding:0 30upx;
			.detail{
				.list{
					width: 294upx;
					background-color: #fff;
					padding:20upx;
					border-radius: 10upx;
					align-items: baseline;
				}
			}
			.index1{
				margin-right: 20upx;
			}
		}
	}
</style>
