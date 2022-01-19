<template>
	<view class="list row model-wrap mt30">
		<view class="item column mt30" 
		@click="toClass(item)"
		v-for="(item,index) in list" :key="index">
			<image class="img" :src="item.categoryImage" ></image>
			<text class="name mt10">{{item.categoryName }}</text>
		</view>
	</view>
</template>

<script>
	export default{
        props:{
            list:{
                type:Array,
                default:()=>{
                    return []
                }
            }
        },
		data(){
			return{
				
			}
		},
		methods:{
			toClass(item){
				uni.setStorageSync('classId','12')
				this.navTo('/pages/Classify/Classify','switch')
			}
		}
	}
</script>

<style scoped lang="scss">
	.list{
		flex-wrap: wrap;
		// justify-content: space-between;
		padding: 0 30rpx 30rpx 30rpx;
		.item{
			width: 126upx;
			color: #999;
			font-size: 24upx;
			border-radius: 10upx;
			.img{
				width: 100upx;
				height: 100upx;
				border-radius: 8upx;
			}
		}
	}
</style>
