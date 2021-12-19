<template>
	<!-- 积分明细 -->
	<view class="page_wrap">

		<view class="integral_list">
			<view class="list_wrap">
				<view class="item ">
					<view class="money jc_sb row f32-c333">
						<view class="b">差额退款</view>
						<view class="b">+500</view>
					</view>
					<view class="date jc_sb row ">
						<view class="f24-c999">2020-10-14 12:12:23</view>
					</view>
				</view>
				<view class="item ">
					<view class="money jc_sb row f32-c333">
						<view class="b">差额退款</view>
						<view class="b minus">-500</view>
					</view>
					<view class="date jc_sb row ">
						<view class="f24-c999">2020-10-14 12:12:23</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				date: Number(new Date())
			}
		},
		methods: {
			formatter(type, value) {
				if (type === 'year') {
					return `${value}年`
				}
				if (type === 'month') {
					return `${value}月`
				}
				return value
			},
			confirm(date) {
				this.show = false;
				this.date = date.value;
			}
		}
	}
</script>

<style scoped lang="scss">
	.page_wrap {

		padding: 30upx 30uxp 0;
		background: #fff;

		.integral_list {
			background: #fff;
			padding: 0 30upx;
			margin-bottom: 16upx;

			.item {
				padding: 26upx 0;
				border-bottom: .5px solid #E7E7E7;
				.minus{
					color: #FD4D00;
				}
				.date {
					margin-top: 20upx;
				}

				&:last-child {
					border: none;
				}
			}
		}
	}
</style>
