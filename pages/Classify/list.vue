<template>
	<view class="">
		<view class="info" :class="pageFrom">
			<image 
            @click="navTo('/pagesB/ProductDetail/ProductDetail?id='+info.productId)"
            class="img" 
            :src="info.defaultImage" >
            </image>
			<view class="detail">
				<view class="name ">{{info.productName}}</view>
				<view class="spec ">
					<text class="s_detail">{{info.productModelList.join('/')}}</text>
				</view>
				<view class="label row" v-if="info.productTag">
					<text class="l1">新品上市</text>
					<text class="l1">今日特价</text>
				</view>
				<view class="price row mt20">
					<view class="p_wrap">
						<view class="p_detail row">
							<text class="p_left">¥</text>
							<text class="p_right">{{info.productSkuList[0].unitPrice}}<text class="unit">/{{info.productSkuList[0].productUnit}}</text> </text>
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
				<!-- <view class="collect column">
					<image class="coll_img" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/shoucang2%402x.png" mode="widthFix"></image>
					<view class="t">
						收藏
					</view>
				</view> -->
			</view>
		</view>
		<view  class="more_list" v-if="showMore">
			<view class="price row mt10" v-for="(d,i) in info.productSkuList" :key="i"> 
				<view class="p_detail">
					<view class="p_wrap ">
						<text class="circle">{{d.productModel}}</text>
						<text class="desc">{{d.productNameAlias}}</text>
						<view class="p_detail row">
							<text class="p_left">¥</text>
							<text class="p_right">{{d.unitPrice}}<text class="unit">/{{d.productUnit}}</text> </text>
						</view>
						<view class="sale " >
							满100减10
						</view>
					</view>
				</view>
				<image class="add" @click="addGood(d)" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/gwc.png"></image>
			</view>
		</view>
		
		<specifications
		:selectData="selectData" 
		ref='spec'>
		</specifications>
	</view>
</template>

<script>
	export default{
		props:{
            info:{
                type:Object
            },
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
				selectData:{}
			}
		},
		methods:{
			moreHandle(){
				this.showMore=!this.showMore
				this.moreIcon=this.showMore?'icon-shang':'icon-xia'
			},
			addGood(val){
			    if(this.$util.isLogin()){
					this.selectData={
						...val,
						productName:this.info.productName,
						imageUrl:this.info.defaultImage
					}
			        this.$refs.spec.show=true
			    }
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
			height: 44upx;
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
