<template>
	<view class="module-wrap mt30">
		<view class="row title">
			<text class="txt">品牌专场</text>
			<view class="more_r row">
				更多
				<image class="more" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/jiantou.png" mode="widthFix"></image>
			</view>
		</view>
		<swiper
			class="swiper" 
			circular 
			interval="5000"
			@change="onSwiperChange"
		>
			<swiper-item 
			class="swiper_item" 
			v-for="(item, index) in list" 
			:key="index" >
				<view class="list row">
					<view class="item mt20"
					@click="navTo('/pagesB/RecommendPage/RecommendPage?id='+data.id+'&pageType=spec')"
					 v-for="(data,i) in item" :key="i">
						<image class="img" :src="data.specialImage" ></image>
					</view>
				</view>
			</swiper-item>
		</swiper>
		<view class="dots row ">
			<view class="dot" :class="{current: current === index}" v-for="(item, index) in list" :key="index"></view>
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
				current: 0,
			}
		},
		methods: {
			onSwiperChange(e){
				this.current = e.detail.current;
			}
		}
	}
</script>

<style scoped lang="scss">
	.module-wrap{
		height: 540upx;
		background: url('https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/bg1.png')  no-repeat ;
		background-size: 100% 100%;
		padding: 30upx;
		position: relative;
		.title{
			justify-content: space-between;
			.txt{
				color: #FF6423;
			}
			.more_r{
				color: #7E7E7E;
				font-size: 20upx;
				margin-right: 10upx;
			}
			.more{
				width: 12upx;
				margin-left: 10upx;
			}
		}
		.swiper{
			height: 100%;
			.swiper_item{
				.list{
					flex-wrap: wrap;
					// justify-content: space-around;
					.item{
						margin-right: 15upx;
						&:nth-child(3n){
							margin-right: 0;
						}
					}
					.img{
						width: 200upx;
						height: 200upx;
						border-radius: 8upx;
					}
				}
			}
		}
	}
	.dots{
		position: absolute;
		left: 0;
		bottom: 12rpx;
		width: 100%;
		justify-content: center;
		
	}
	.dot{
		width: 12rpx;
		height: 12rpx;
		margin: 0 6rpx;
		background-color: #fff;
		border-radius: 50%;
		
		&.current{
			background-color: $base-color;
		}
	}
</style>
