<template>
	<view >
		<image @click="navTo('/pages/ProductDetail/ProductDetail')" class="img" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png" ></image>
		<view class="name mt10">名称</view>
		<view class="desc  mt10">¥20.00/盒子（一盒约2斤）</view>
		<view class="label mt10 row">
			<text class="l1">新品上市</text>
			<text class="l1">今日特价</text>
		</view>
		<view class="spec mt10 row">
			<text class="s_tit">规格</text>
			<text class="s_detail">5斤/10斤/15斤</text>
		</view>
		<view class="price row mt20">
			<view class="p_wrap">
				<text class="p_detail">
					<text class="p_left">¥</text>
					<text class="p_right">10.00<text class="unit">/斤</text> </text>
				</text>
				<view class="sale " v-if="!showMore">
					满100减10
				</view>
			</view>
			<text class="show_more row" @click="moreHandle">
				{{showMore?'收起':'展开'}} <text class="iconfont " :class="moreIcon"></text>
			</text>
			<image @click="addGood" class="add" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/gwc.png" mode="widthFix"></image>
		</view>
		<template  v-if="showMore">
			<view class="price row mt20">
				<text class="p_detail">
					<text class="p_left">¥</text>
					<text class="p_right">10.00<text class="unit">/斤</text> </text>
				</text>
				<image class="add" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/gwc.png" mode="widthFix"></image>
			</view>
			<view class="price row mt20">
				<text class="p_detail">
					<text class="p_left">¥</text>
					<text class="p_right">10.00<text class="unit">/斤</text> </text>
				</text>
				<image class="add" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/gwc.png" mode="widthFix"></image>
			</view>
			<view class="price row mt20">
				<text class="p_detail">
					<text class="p_left">¥</text>
					<text class="p_right">10.00<text class="unit">/斤</text> </text>
				</text>
				<image class="add" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/gwc.png" mode="widthFix"></image>
			</view>
		</template>
		
		<specifications ref='spec'></specifications>
	</view>
</template>

<script>
	export default{
		props:{
			styleType:{
				type:String,
				default:''
			},
			goodInfo:{}
		},
		data(){
			return{
				moreIcon:'icon-zhankai',
				showMore:false,
			}
		},
		methods:{
			moreHandle(){
				this.showMore=!this.showMore
				this.moreIcon=this.showMore?'icon-shang':'icon-zhankai'
			},
			addGood(){
                if(this.$util.isLogin()){
                    this.$refs.spec.show=true
                }
			}
		}
	}
</script>

<style scoped lang="scss">
	.img{
		width: 250upx;
		height: 180upx;
		margin: auto;
		display: block;
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
			background: #fff4ed;
			padding: 4upx 10upx ;
			color: $base-color;
			font-size: 20upx;
		}
	}
	.price{
		justify-content: space-between;
		width: 100%;
		position: relative;
		.p_wrap{
			display: flex;
			flex-direction: column;
		}
		.p_detail{
			color: #FE5B07;
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
	.sale{
		padding: 4upx 10upx ;
		color: $base-color;
		border: 1px solid #FE5B07;
		font-size: 20upx;
		border-radius: 8upx;
		display: inline-block;
	}
</style>
