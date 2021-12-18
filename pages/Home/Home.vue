<template>
	<view class="page_wrap">
		<view class="container">
			<view class="search_wrap" @click="navTo('/pages/Search/Search')">
				<text class="iconfont icon-sousuo"></text>搜索
			</view>
			<banner></banner>
			<view class="">
				<view class="notice row mt30">
					<image class="msg_img" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/message.png" mode="widthFix"></image>
					<text class="notice_txt ">今日23:00前下单，次日 <text class="time">7:00～10:00</text>送达</text>
				</view>
			</view>
			<module1></module1>
			<module2></module2>
			<module3></module3>
			<view class="guess mt30">
				<view class="guess_top row">
					<text class="top_line left"></text>
					<text class="top_txt">猜您喜欢</text>
					<text class="top_line right"></text>
				</view>
				<view class="product_list ">
					<view class="detail left_list">
						<view class="list column mt20" v-for="(item,index) in 3" :key="index">
							<product-list></product-list>
						</view>
					</view>
					<view class="detail right_list">
						<view class="list column mt20" v-for="(item,index) in 3" :key="index">
							<product-list></product-list>
						</view>
					</view>
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import homeMixin from './mixin/home'
	import banner from './banner.vue'
	import module1 from './module1.vue'
	import module2 from './module2.vue'
	import module3 from './module3.vue'
	export default{
		components:{banner,module1,module2,module3},
		mixins: [homeMixin],
		data(){
			return {
			}
		}
	}
</script>

<style scoped lang="scss">
	.page_wrap{
		background: #F5F5F5 ;
		.container{
			// background-image: url('https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/bg2.png');
			background-repeat: no-repeat;
			background-size: 100% 300upx;
			padding:10upx 30upx;
			.search_wrap{
				width: 90%;
				background-color: #fff;
				text-align: center;
				border-radius: 36upx;
				height: 64upx;
				line-height: 64upx;
				margin:20upx auto;
				color: #bbb;
				font-size: 24upx;
				text{
					margin-right: 20upx;
				}
			}
			.notice{
				padding:4upx 12upx;
				background-color: #FFF9F3;
				border: 1px solid #FDD3AD;
				border-radius: 29upx;
				margin-top: 30upx;
				.msg_img{
					width: 46upx;
					margin-right: 30upx;
				}
				.notice_txt{
					font-size: 24upx;
					color: #A2A2A2;
					.time{
						color: #FE5108;
					}
				}
			}
			.guess{
				.guess_top{
					justify-content: center;
					.top_txt{
						color: $base-color;
						font-size: 32upx;
						margin: 0 30upx;
					}
					.top_line{
						width: 54upx;
						height: 4upx;
					}
					.left{
						background: linear-gradient(270deg, #FF6801 0%, #FFFFFF 100%);
					}
					.right{
						background: linear-gradient(270deg, #FFFFFF 0%, #FF6801 100%);
					}
				}
				
			}
			
		}
		
	}
	.product_list{
		position: relative;
		display: flex;
		flex-direction: row;
		.right_list{
			margin-left: 20upx;
		}
		.detail{
			.list{
				width: 294upx;
				background-color: #fff;
				padding:20upx;
				border-radius: 10upx;
				align-items: baseline;
			}
		}
	}
</style>
