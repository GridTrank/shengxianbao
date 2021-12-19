<template>
	<view class="page_wrap ">
		<view class="coupon">
			<view class="coupon-info">
				<view class="title b">满100减10</view>
				<view class="tag_wrap">
					<view class="tag line">剩7天</view>
					<view class="tag line">满减卷</view>
					<view class="tag">线上门店通用</view>
				</view>
				<view class="date mt30 f24-c333">2020.10.02 00:00-2020.10.10 23:59</view>
			</view>
			<view class="coupon-money column">
				<view class="money"><span class="min">￥</span><span>1000</span></view>
				<view class="condition">满100可用</view>
				<view class="use">去使用<view class="circle"><span class="iconfont icon-jinru"></span></view></view>
			</view>
		</view>
	</view>
</template>

<script>
	import CouponList from '../../components/coupon-list/coupon-list'
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.page_wrap {
		padding: 30upx;

		.coupon {
			display: flex;
			justify-content: space-between;
			overflow: hidden;
			border-radius: 10px;
			height: 220upx;
		}

		.coupon-info {
			flex:2;
			background-color: #fff;
			position: relative;
			&::before{
				content: "";
				border-right: 1px dashed #fff;
				position: absolute;
				right: -1px;
				top: 0;
				height: 100%;
				z-index: 1;
			}
			padding:26upx 10upx 26upx 40upx;
			.title{
				font-size: 36upx;
			}
			.tag_wrap{
				.tag{
					margin-top: 10upx;
					display: inline-flex;
					font-size: 20upx;
					color: #fff;
					border:1px solid #FE5B07;
					background-color: #FE5B07;
					border-radius: 1px;
					padding: 2upx 20upx;
					margin-right: 8upx;
					&.line{
						color: #FE5B07;
						background-color: #fff;
						
					}
				}
			}
			
		}

		.coupon-money {
			justify-content: center;
			flex-shrink: 0;
			width: 240upx;
			height: 220upx;
			position: relative;
			background: linear-gradient(136deg, #F87523 0%, #FD1D20 100%);
			&::after{
				content: "";
				width: 20px;
				height: 20px;
				background-color: #F7F7F7;
				position: absolute;
				left: -10px;
				bottom:-10px;
				border-radius: 50%;
				z-index: 1;
			}
			&::before{
				content: "";
				width: 20px;
				height: 20px;
				background-color: #F7F7F7;
				position: absolute;
				left: -10px;
				top:-10px;
				border-radius: 50%;
				z-index: 1;
			}
			.money{
				font-size: 72upx;
				color: #fff;
				.min{
					font-size: 32upx;
				}
			}
			.condition,.use{
				font-size: 24upx;
				color: #fff;
			}
			.use{
				.circle{
					display: inline-flex;
					justify-content: center;
					align-items: center;
					width: 24upx;
					height: 24upx;
					margin:20upx 0 0 18upx;
					border-radius: 50%;
					background-color: rgba($color: #fff, $alpha: 0.49);
					color: #fff;
					.icon-jinru{
						font-size: 22upx;
					}
				}
			}
		}
	}
</style>
