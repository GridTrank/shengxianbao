<template>
	<view class="_notice">
		<swiper 
		class="_swiper" 
		:indicator-dots="false" 
		autoplay="true" 
		:interval="interval" 
		:circular="true"
		:duration="duration">
			<swiper-item 
			@click="navTo('/pagesB/NoticeInfo/NoticeInfo?id='+item.id)"
			class="swiper-item" v-for="(item,index) in list" :key="index">
				<view class=" uni-bg-red">{{item.noteTitle}}</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			//显示数据
			list: {
				type: Array,
				defual:function(){
					return [];
				}
			},
		},
		data() {
			return {
				interval:3000,
				duration:12000,
			};
		},
		methods:{
			
		}
	};
</script>

<style lang="scss" scoped>
	._notice {
		width: 500upx;
		font-size: 20upx;
		height: 44upx;
		color: #666;
		border-radius: 6upx;
		overflow: hidden;
		box-sizing: border-box;
	}
	.swiper-item{
		width:500upx !important;
		margin-right: 20upx;
	}
	._swiper {
		line-height: 44upx;
		height: 50upx;
	}
	
</style>