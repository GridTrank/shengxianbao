<template>
	<!-- 积分明细 -->
	<view class="page_wrap">
		<view class="integral_info">
			{{userInfo.customerPoint}}
		</view>
		<view class="integral_list">
			
			<view class="list_wrap" >
				<view class="item "v-for="(item,index) in dataList" :key="index">
					<view class="money jc_sb row f32-c333">
						<!-- <view class="b">差额退款</view> -->
						<view class="b">{{item.recordType == '0' ? '-':'+'}}{{item.amount}}</view>
					</view>
					<view class="date jc_sb row ">
						<view class="f24-c999">{{item.createDate}}</view>
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
				date: Number(new Date()),
				page: 1,
				limit: 20,
				queryData: {},
				userInfo:{},
				dataList: [],
				queryUrl: 'api/myOneslft/getCustomerPointInfoPage'
			}
		},
		created() {
			this.getData();
			this.getUserInfo();
		},
		methods: {
			getUserInfo(){
				this.$http('api/myOneslft/getMyInfo','','post').then(res=>{
					this.userInfo=res
					// this.getHelpList()
				}) 
			},
			getData() {
				this.getList().then(res => {
					console.log(res)
					this.dataList = res;

				})
			},
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
		
		.integral_info{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 400upx;
			margin-bottom: 10upx;
			color: #FE5B07;
			font-size: 64upx;
			background: #fff;
		}
		.integral_list {
			background: #fff;
			padding: 0 30upx;
			margin-bottom: 16upx;

			.item {
				padding: 26upx 0;
				.minus {
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
