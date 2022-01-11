<template>
	<view class="app">
		<pageHeader ref="pageHeader"></pageHeader>
		<!-- 轮播图 -->
		<mix-swiper :list="data.images"></mix-swiper>
		
		<view class="introduce">
			<view class="price row">
				<view class="mr10">
					¥<text class="p">{{selectPrice.unitPrice}}</text><text class="u">/{{selectPrice.productUnit}}</text>
				</view>
				<view class="tag">
					{{data.productTag || '标签'}}
				</view>
			</view>
			<text class="title">{{ data.productName }}</text>
			
			<view class="spec row mt30">
				<view 
				class="item column" 
				@click="selectSpec(spec,sIndex)"
				:class="specActive==sIndex?'spec_active':'' "
				v-for="(spec,sIndex) in data.productSkuList" 
				:key="sIndex">
					<view class="s1">
						{{spec.productModel}}
					</view>
					<view class="s2">
						¥{{spec.unitPrice}}/{{spec.productUnit}}
					</view>
				</view>
			</view>
		</view>
		
		<view class="c-list">
			<view v-if="data.skuData" class="row b-b" @click="showPopup('skuPopup')">
				<text class="tit">购买类型</text>
				<view class="con">
					<text class="attr">{{ currentSku.name || '' }}</text>
				</view>
				<text class="mix-icon icon-you"></text>
			</view>
			<view class="row b-b" @click="navTo('/pages/coupon/receiveCoupon', {login: true})">
				<text class="tit">优惠券</text>
				<text class="con red">领取优惠券</text>
				<text class="mix-icon icon-you"></text>
			</view>
			
			<view class="row b-b">
				<text class="tit">服务</text>
				<view class="con">
					<text class="service">7天无理由退换货 ·</text>
					<text class="service">假一赔十 ·</text>
				</view>
			</view>
		</view>
		<!-- 评价 -->
		<view id="rating" class="rating-wrap column" :class="{'no-data': !ratingData.data}">
			<view class="e-header" @click="navTo('/pages/rating/rating?id='+data._id)">
				<text class="tit">商品评价</text>
				<text>({{ ratingData.count || 0 }})</text>
				<text class="tip">好评率 {{ data.rating_ratio || 100 }}%</text>
				<text class="mix-icon icon-you"></text>
			</view> 
		</view>
		<view class="detail-desc">
			<view class="d-header center">
				<text>图文详情</text>
			</view>
			
			<!-- <rich-text :nodes="data.content"></rich-text> -->
		</view>
		<!-- 底部操作菜单 -->
		<bottom-operation :infoData="data" :selectPrice="selectPrice" @onOprationClick="onOprationClick"></bottom-operation>
		<!-- 规格面板 -->
	
	</view>
</template>

<script>
	import pageHeader from './components/detail-page-header'//页面头
	import mixSwiper from './components/mix-swiper'//轮播图
	import bottomOperation from './components/bottom-operation'//底部栏
	let _anchorList = [];
	export default{
		components: {
			pageHeader,
			mixSwiper,
			bottomOperation,
		},
		data() {
			return {
				currentSku: {},
				data: {
					images: [],
				},
				specActive:0,
				selectPrice:{},
				ratingData: {}, //评价
			};
		},
		onLoad(options){
			this.id = options.id;
			// this.loadRating(); //加载评价
		},
		onShow() {
			this.loadData();
		},
		onPageScroll(e) {
			this.$refs.pageHeader && this.$refs.pageHeader.pageScroll(e);
		},
		// #ifdef MP-WEIXIN
		onShareAppMessage(res) {
			return {
				title: this.data.title,
				path: '/pages/product/detail?id='+this.data._id,
				imageUrl: this.data.thumb
			}
		},
		// #endif
		methods:{
			async loadData(){
				const data = await this.$http('api/pms/productcategory/getProductSkuIdInfo', {
					productId: this.id || 7
				})
				data.productImageVoList.forEach(item=>{
					item.src=item.imageUrl
				})
				data.images=data.productImageVoList
				this.selectPrice=data.productSkuList[0]
				this.data = data;
				this.$nextTick(()=>{
					this.calcAnchor();//计算锚点参数
				})
				
				//添加浏览历史
				this.addProductHistory();
			},
			//加载评价
			async loadRating(){
				const res = await this.$request('rating', 'getDetailRating', {
					product_id: this.id,
				})
				this.ratingData = res;
				this.$nextTick(()=>{
					this.calcAnchor();//计算锚点参数
				})
			},
			// 选择规格
			selectSpec(item,index){
				this.specActive=index
				this.selectPrice=item
			},
			//加入购物车
			addToCart(){
				consoel.log(1212)
				this.$util.throttle(async ()=>{
					const data = this.getConfirmData();
					if(!data){
						return;
					}
					const res = await this.$request('cart', 'add', data, {
						showLoading: true,
						login: true
					})
					if(!res){
						return;
					}
					this.log(res)
					this.$util.msg(res.msg);
					if(res.status === 1){
						this.hidePopup('skuPopup');
						this.$store.dispatch('getCartCount');//更新购物车数量
						uni.$emit('refreshCart');//更新购物车
					}
				})
			},
			//立即购买
			buyNow(){
				const data = this.getConfirmData();
				if(!data){
					return;
				}
				this.hidePopup('skuPopup');
				this.navTo('/pages/order/createOrder?data='+JSON.stringify(data), {
					login: true
				})
			},
			//设置当前选择sku
			setCurrentSku(data){
				this.currentSku = data;
			},
			//获取当前sku 如果没有sku返回默认规格
			getConfirmData(){
				const sku = this.currentSku._id ? this.currentSku: this.data.sku[0];
				if(sku.stock <= 0 || this.data.stock <= 0){
					this.$util.msg('库存不足');
					return false;
				}
				const data = {
					product_id: this.data._id,
					number: this.$refs.skuPopup.buyNumber || 1,
					sku: this.currentSku._id ? this.currentSku: this.data.sku[0]
				}
				return data;
			},
			//计算锚点参数
			async calcAnchor(){
				const size = await new Promise(res => {
					uni.createSelectorQuery().select('#rating').boundingClientRect(data => {
						res(data);
					}).exec();
				});
				const headerHeight = this.systemInfo.statusBarHeight + this.systemInfo.navigationBarHeight;
				const a1 = (size ? size.top : 0) - headerHeight;
				const a2 = (size ? size.bottom : 0) + uni.upx2px(12) - headerHeight;
				this.$refs.pageHeader.anchorList[1].top = a1;
				this.$refs.pageHeader.anchorList[2].top = a2;
				_anchorList = [0, a1, a2];
			},
			//添加浏览历史
			addProductHistory(){
				const data = this.data;
				let list = uni.getStorageSync('productHistory');
				if(!list){
					list = [];
				}
				const index = list.findIndex(item=> item.id === data._id);
				if(index !== -1){
					list.splice(index, 1);
				}
				list.unshift({
					id: data._id,
					thumb: data.thumb
				})
				uni.setStorageSync('productHistory', list);
			},
			//删除当前浏览历史
			delHistory(){
				let list = uni.getStorageSync('productHistory');
				if(!list){
					return;
				}
				const index = list.findIndex(item=> item._id === data._id);
				if(index === -1){
					return;
				}
				list.splice(index, 1);
				uni.setStorageSync('productHistory', list);
			},
			showPopup(key, type){
				this.$refs[key].open(type);
			},
			onOprationClick(type){
				this.showPopup('skuPopup', type);
			},
			doAppShare(){
				this.$util.throttle(async ()=>{
					const data = {
					    provider: "weixin",
					    scene: 'WXSceneSession',
					    type: 5,
						imageUrl: this.data.thumb,
						title: this.data.title,
						miniProgram: {
							id: 'gh_3dada2e0f833',
							path: '/pages/product/detail?id='+this.data._id,
							type: 0,
							webUrl: 'http://guoyunnet.com'
						},
					    success: res=> {
					        console.log("success:" + JSON.stringify(res));
					    },
					    fail: err=> {
					        console.log("fail:" + JSON.stringify(err));
					    }
					}
					uni.share(data);
				})
			},
		},
	}
</script>

<style>
	page{
		background-color: #f5f5f5;
	}
</style>
<style scoped lang='scss'>
	.app{
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom); 
		
		&:after{
			content: '';
			display: block;
			width: 100%;
			height: 100rpx;
		}
	}
	
	/* 标题简介 */
	.introduce{
		background: #fff;
		padding: 20rpx 30rpx;
		.price{
			color: $base-color;
			font-size: 24upx;
			background-color: #fff;
			align-items: baseline;
			.p{
				font-size: 40upx;
			}
			.tag{
				border: 2upx solid $base-color;
				color: $base-color;
				font-size: 20upx;
				padding: 2upx;
				margin-left: 20upx;
			}
		}
		.title{
			min-height: 44rpx;
			font-size: 32rpx;
			color: #333;
			line-height: 44rpx;
			font-weight: 700;
		}
		.spec{
			padding-top: 20upx;
			border-top: 2upx solid #f1f1f1;
			.item{
				border: 2upx solid #EBEBEB;
				padding: 20upx;
				color: #999999;
				.s1{
					font-size: 28upx;
				}
				.s2{
					font-size: 22upx;
				}
			}
			.spec_active{
				border-color: #FF6304;
				background-color: #FFF1E9;
				color: #FF6304;
			}
		}
	}
	.c-list{
		font-size: 26rpx;
		color: #888;
		background: #fff;
		
		.row{
			min-height: 82rpx;
			padding: 16rpx 30rpx;
			position:relative;
			
			&:after{
				border-color: #eaeaea;
			}
			&:last-child:after{
				border: 0;
			}
		}
		.tit{
			width: 140rpx;
		}
		.con{
			flex: 1;
			color: #333;
			
			.attr{
				margin-right: 10rpx;
			}
			.service{
				margin-right: 30rpx;
				
				&:last-child{
					margin: 0;
				}
			}
		}
		.con-list{
			color: #333;
			
			text{
				line-height: 40rpx;
			}
		}
		.red{
			color: $base-color;
		}
		.icon-you{
			font-size: 24rpx;
			color: #999;
		}
	}
	/* 评价 */
	.rating-wrap{
		padding: 20rpx 30rpx 0rpx;
		background: #fff;
		margin-top: 12rpx;
		
		&.no-data{
			padding: 10rpx 30rpx 10rpx;
		}
		.e-header{
			display: flex;
			align-items: center;
			height: 70rpx;
			font-size: 28rpx;
			color: #333;
		}
		.tit{
			font-size: 32rpx;
			color: #333;
			font-weight: 700;
			margin-right: 4rpx;
		}
		.tip{
			flex: 1;
			font-size: 26rpx;
			color: #999;
			text-align: right;
		}
		.icon-you{
			margin-left: 8rpx;
			font-size: 24rpx;
			color: #999;
		}
		.mix-rating-item::after{
			border: 0;
		}
	}
	/*  详情 */
	.detail-desc{
		margin-top: 12rpx;
		background: #fff;
		
		.d-header{
			height: 80rpx;
			font-size: 30rpx;
			color: #333;
				
			text{
				margin: 0 20rpx;
			}
			&:before, &:after{
				content: '';
				width: 60rpx;
				border-bottom: 1px solid #ccc; 
			}
		}
	}
</style>
