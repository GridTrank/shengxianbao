<template>
	<view class="">
		<view class="info" :class="pageFrom">
			<image class="img" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png" ></image>
			<view class="detail">
				<view class="name ">名称</view>
				<view class="spec ">
					<text class="s_detail">5斤/10斤/15斤</text>
				</view>
				<view class="label row">
					<text class="l1">新品上市</text>
					<text class="l1">今日特价</text>
				</view>
				<view class="price row mt20">
					<view class="p_wrap">
						<view class="p_detail row">
							<text class="p_left">¥</text>
							<text class="p_right">10.00<text class="unit">/斤</text> </text>
						</view>
						<view class="sale " >
							满100减10
						</view>
					</view>
					<!-- <image class="add" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/gwc.png" mode="widthFix"></image> -->
					<view class="select_btn"  @click="moreHandle">
						{{showMore?'收起':'选规格'}} 
					</view>
				</view>
				<view class="collect column">
					<image class="coll_img" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/shoucang2%402x.png" mode="widthFix"></image>
					<view class="t">
						收藏
					</view>
					
				</view>
			</view>
		</view>
		<view  class="more_list" v-if="showMore">
		<view class="price row ">
			<view class="p_detail">
				<view class="p_wrap ">
					<text class="circle">4斤</text>
					<text class="desc">¥10.00/斤（4斤X10）</text>
					<view class="p_detail row">
						<text class="p_left">¥</text>
						<text class="p_right">10.00<text class="unit">/斤</text> </text>
					</view>
					<view class="sale " >
						满100减10
					</view>
				</view>
				
			</view>
			<image class="add" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/gwc.png" mode="widthFix"></image>
		</view>
		
	</view>
	</view>
</template>

<script>
	export default{
		props:{
			styleType:{
				type:String,
				default:''
			},
			pageFrom:{
				type:String,
				default:''
			}
		},
		data(){
			return{
				moreIcon:'icon-xia',
				showMore:false,
			}
		},
		methods:{
			moreHandle(){
				this.showMore=!this.showMore
				this.moreIcon=this.showMore?'icon-shang':'icon-xia'
			}
		}
	}
</script>

<style scoped lang="scss">
	.info{
		display: flex;
		flex-direction: row;
		padding:10upx 30upx 10upx 50upx;
		.img{
			width: 120upx;
			height: 120upx;
			margin-right: 40upx;
			flex-shrink: 0;
		}
		.detail{
			width: 310upx;
			position: relative;
		}
		
	}
	.search_page{
		padding: 10upx 0;
		.detail{
			width: 580upx;
		}
	}
	.more_list{
		background-color: #FAFAFA;
		padding: 40upx 30upx 30upx 80upx;
	}
	.name{
		font-size: 32upx;
		color: #333;
	}
	.desc{
		font-size: 24upx;
		color: #999;
	}
	.label{
		.l1{
			background: #fff4ed;
			padding: 4upx 8upx;
			color: $base-color;
			font-size: 20upx;
			border-radius: 8upx;
			margin-right: 10upx;
		}
	}
	.spec{
		.s_tit{
			background: linear-gradient(113deg, #F87523 0%, #FF6C00 0%, #FD1D20 100%);
			padding: 4upx 10upx ;
			color: #fff;
			font-size: 20upx;
			border-radius: 2px 0px 0px 2px;
		}
		.s_detail{
			color: #999;
			font-size: 22upx;
		}
	}
	.price{
		justify-content: space-between;
		width: 100%;
		position: relative;
		.p_detail{
			color: #FE5B07;
			.circle{
				background-color: #FBCEAA;
				padding: 6upx;
				color: #8F5231;
				font-size: 20upx;
				border-radius: 4upx;
				margin-right: 20upx;
			}
			.p_left{
				font-size: 16upx;
			}
			.p_right{
				font-size: 32upx;
				.unit{
					font-size: 20upx;;
				}
			}
		}
		.select_btn{
			background: #FF6304;
			border-radius: 30upx;
			color: #fff;
			font-size: 24upx;
			padding: 8upx 20upx;
		}
		.show_more{
			color: $base-color;
			font-size: 20upx;
			position: absolute;
			right: 50upx;
			.iconfont{
				font-size: 20upx;
			}
		}
		.add{
			width: 44upx;
		}
	}
	.collect{
		position: absolute;
		font-size: 20upx;
		color: #999;
		top: 0;
		right: 0;
		.coll_img{
			width: 28upx;
		}
	}
	.sale{
		padding: 4upx 10upx ;
		color: $base-color;
		border: 1px solid #FE5B07;
		font-size: 20upx;
		border-radius: 8upx;
		display: inline-block;
	}
</style>
