<template>
	<view class="page_wrap">
		<view class="text_wrap" v-for="(item,index) in text" :key="index">
			<view class="p" v-for="(i,j) in item.p" :key="j">
				<span>{{i}}</span>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: [{
					p: [
						"1，活动期间，邀请好友获得优惠券奖励，被邀请好友可获得信任奖励",
						"2，活动期间，邀请好友获得优惠券奖励，被邀请好友可获得信任奖励"
					],
				}]
			}
		},
		onLoad(e) {

		},
		methods: {

		},


	}
</script>

<style lang="scss">
	.page_wrap {
		.text_wrap {
			background-color: #fff;
			padding: 30upx;

			.title {
				font-size: 28upx;
				font-family: PingFangSC-Medium, PingFang SC;
				color: #333333;
				margin-bottom: 20upx;

				.icon {
					margin-right: 10upx;
					width: 20upx;
				}
			}

			.p {
				display: flex;
				font-size: 24upx;
				font-family: PingFangSC-Regular, PingFang SC;
				line-height: 44upx;
				margin-bottom: 8upx;

				.circle {
					border-radius: 50%;
					width: 10upx;
					height: 10upx;
					background: #FE5B07;
					flex-shrink: 0;
					margin-right: 16upx;
					margin-top: 16upx;
				}
			}
		}
	}
</style>
