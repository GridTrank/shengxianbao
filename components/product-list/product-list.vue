<template>
	<view class="list_wrap">
		<image 
		@click="navTo('/pagesB/ProductDetail/ProductDetail?id='+goodInfo.productId)" 
		class="img" 
		:src="goodInfo.defaultImage" >
		</image>
		<view class="name mt10">{{goodInfo.productName}}</view>
		<!-- <view class="desc  mt10">¥20.00/盒子（一盒约2斤）</view> -->
		<view class="label mt10 row" v-if="goodInfo.productTag">
			<text class="l1">{{goodInfo.productTag}}</text>
		</view>
		<view class="spec mt10 row" v-if="goodInfo.productModelList.length>1">
			<text class="s_tit">规格</text>
			<text class="s_detail">{{goodInfo.productModelList.join('/')}}</text>
		</view>
		<view class="price row mt20">
			<view class="p_wrap">
				<text class="p_detail">
					<text class="p_left">¥</text>
					<text class="p_right">{{goodInfo.productSkuList[0].unitPrice}}<text class="unit">/{{goodInfo.productSkuList[0].productUnit}}</text> </text>
				</text>
				<view class="sale " v-if="!showMore">
					满100减10
				</view>
			</view>
			<text class="show_more row" @click="moreHandle" v-if="goodInfo.productSkuList.length>1">
				{{showMore?'收起':'展开'}} <text class="iconfont " :class="moreIcon"></text>
			</text>
			<image @click="addGood('')" class="add" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/gwc.png" ></image>
		</view>
		<template  v-if="showMore">
			<view class="price row mt20" v-for="(d,i) in goodInfo.productSkuList" :key="i">
				<template v-if="i>0">
					<text class="p_detail">
						<text class="p_left">¥</text>
						<text class="p_right">{{d.unitPrice}}<text class="unit">/{{d.productUnit}}</text> </text>
					</text>
					<image @click="addGood(d)" class="add" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/gwc.png" ></image>
				</template>
			</view>
			
		</template>
		
		<specifications :selectData="selectData" ref='spec'></specifications>
	</view>
</template>

<script>
	export default{
		props:{
			styleType:{
				type:String,
				default:''
			},
			goodInfo:{
				type:Object,
				default:()=>{
					return {}
				}
			}
		},
		data(){
			return{
				moreIcon:'icon-zhankai',
				showMore:false,
				selectData:{},
			}
		},
		methods:{
			moreHandle(){
				this.showMore=!this.showMore
				this.moreIcon=this.showMore?'icon-shang':'icon-zhankai'
			},
			addGood(val){
                if(this.$util.isLogin()){
					if(val){
						this.selectData={
							...val,
							productName:this.goodInfo.productName,
							imageUrl:this.goodInfo.defaultImage
						}
					}else{
						this.selectData={
							...this.goodInfo.productSkuList[0],
							productName:this.goodInfo.productName,
							imageUrl:this.goodInfo.defaultImage
						}
					}
                    this.$refs.spec.show=true
                }
			}
		}
	}
</script>

<style scoped lang="scss">
	.list_wrap{
		width: 294upx;
	}
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
			height: 44upx;
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
