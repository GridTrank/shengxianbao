<template>
	<view class="mix-botoom-operation row">
		<view class="nav-group row">
			<view class="nav column center" @click="navTo('/pages/ShopCar/ShopCar','switch')">
				<text class="iconfont icon-gouwuche"></text>
				<text class="tit">购物车</text>
				<view v-if="cartCount > 0" class="number center">
					<text>{{ cartCount }}</text>
				</view>
			</view>
			<view class="nav column center" @click="addCusOftenBuy">
				<text class="iconfont icon-jiacy"></text>
				<text class="tit">加常用</text>
			</view>
			<view class="nav column center" :class="{active: is_fav === 1}" @click="changeFav">
				<text class="iconfont" :class="is_fav === 1 ? 'icon-shoucang' : 'icon-shoucang'"></text>
				<text class="tit">收藏</text>
			</view>
		</view>
		<view class="btn-group row">
			<view class="btn center" @click="onOprationClick('cart')">
				<text>加入购物车</text>
			</view>
		</view>
		
        <specifications :pid="infoData.productSkuId" ref='spec'></specifications>
		<mix-loading v-if="isLoading" :mask="true"></mix-loading>
	</view>
</template>

<script>
	/**
	 * 商品详情页 底部操作菜单
	 */
	export default {
		name: 'BotoomOperation',
		data() {
			return {
				is_fav: 0
			};
		},
		computed: {
			cartCount(){
				return this.$store.state.cartCount;
			}
		},
		props: {
			infoData: {
				type: Object,
				default(){
					return {}
				}
			}
		},
		watch: {
			infoData(data){
				this.is_fav = data.fav; 
			}
		},
		methods: {
			//收藏
			async changeFav(){
				if(!this.$util.isLogin()){
					return;
				}
				const res = await this.$http('api/favorite/saveFavorite', {
					favoriteType: 0,
					productSkuId:this.infoData.productSkuId
				})
				const data = res.data;
				this.$util.msg('收藏成功');
			},
			// 加常用
			async addCusOftenBuy(){
				if(!this.$util.isLogin()){
					return;
				}
				if(!this.infoData.cusOften){
					// 加常用
					const res = await this.$http('api/usedlist/addCusOftenBuy', {
						buyQuantity: 1,
						productSkuId:this.infoData.productSkuId || 7
					})
					const data = res.data;
				}else{
					// 移除常用
					const res = await this.$http('api/usedlist/removeCusOftenBuy', {
						buyQuantity: 1,
						productSkuId:this.infoData.productSkuId || 7
					})
					const data = res.data;
				}
				
			},
			onOprationClick(type){
                if(this.$util.isLogin()){
                    this.$refs.spec.show=true
                }
			},
			switchTab(url){
				uni.switchTab({
					url
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.mix-botoom-operation{
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 90;
		width: 100%;
		height: 100rpx;
		background-color: #fff;
		box-shadow: 0 -2rpx 10rpx 0 rgba(0,0,0,.1);
		box-sizing: content-box;
		padding-bottom: constant(safe-area-inset-bottom);
		padding-bottom: env(safe-area-inset-bottom); 
	}
	.nav-group{
		padding-left: 6rpx;
		
		.nav{
			width: 90rpx;
			height: 80rpx;
			color: #333;
			position: relative;
		
			&.active{
				color: $base-color;
			}
		}
		.tit{
			font-size: 20rpx;
		}
		.mix-icon{
			height: 48rpx;
			line-height: 48rpx;
			font-size: 38rpx;
			margin-bottom: 6rpx;
		}
		.number{
			position: absolute;
			right: 16rpx;
			top: 2rpx;
			min-width: 24rpx;
			height: 24rpx;
			padding: 0 8rpx;
			font-size: 16rpx;
			color: #fff;
			background-color: $base-color;
			border-radius: 100rpx;
		}
	}
	.btn-group{
		flex: 1;
		margin: 0 16rpx 0 14rpx;
		overflow: hidden;
		
		.btn{
			flex: 1;
			height: 76rpx;
			font-size: 30rpx;
			color: #fff;
			border-radius: 100rpx;
			background: linear-gradient(113deg, #F87523 0%, #FF6C00 0%, #FD1D20 100%);
			// &:last-child{
			// 	background-color: $base-color;
			// 	border-radius: 0 100rpx 100rpx 0;
			// }
		}
	}
	
</style>
