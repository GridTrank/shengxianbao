<template>
	<view class="page_wrap">
		<!-- <uni-nav-bar
		@clickLeft="clickLeft"
		@clickRight="clickRight"
		left-icon="back" 
		fixed=true
		right-text="余额明细"
		title="余额">
		</uni-nav-bar> -->
		<view class="top_bg">
			<view class="txt">当前可用余额（元）</view>
			<view class="money">100.00</view>
			<view class="mx" @click="navTo('./detail')">余额明细</view>
		</view>
		<view class="list_wrap ">
			<view class="title">请选择充值金额</view>
			<view class="list">
				<view class="item" v-for="(item,index) in rechargeList" :key="index">
					<text class="left">¥</text>
					<text class="right">{{item.label}}</text>
				</view>
				<view class="item row" >
					<text class="left">¥</text>
					<u-input  placeholder="自定义" v-model="customMoney"></u-input>
				</view>
			</view>
		</view>
		
		<view class="btn_wrap">
			<view class="btn">
				支付
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				rechargeList:[
					{value:100.00,label:'100.00'},
					{value:200.00,label:'200.00'},
					{value:300.00,label:'300.00'},
					{value:400.00,label:'400.00'},
					{value:500.00,label:'500.00'},
				],
				customMoney:'',
			}
		},
		methods:{
			clickLeft(){
				uni.navigateBack()
			},
			clickRight(){
				this.navTo('./detail')
			},
		}
	}
</script>

<style scoped lang="scss">
	.page_wrap{
		.top_bg{
			background-image: url('https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/yuebg.png');
			width: 100%;
			height: 320upx;
			background-size: 100% 100%;
			color: #fff;
			overflow: hidden;
			.txt{
				font-size: 24upx;
				margin: 40upx 20upx 20upx 60upx;
			}
			.money{
				font-size: 72upx;
				margin-left:60upx;
			}
			.mx{
				font-size: 24upx;
				margin-left:60upx;
			}
		}
		.list_wrap{
			margin-top:-60upx;
			background-color: #fff;
			padding:60upx  40upx  30upx 40upx;
			border-radius: 46upx 46upx 0upx 0upx;
			.title{
				font-size: 36upx;
				color: #333;
				margin-bottom: 40upx;
			}
			.list{
				display: flex;
				flex-wrap: wrap;
				.item{
					width: 200upx;
					height: 200upx;
					text-align: center;
					line-height: 200upx;
					border: 1px solid #ccc;
					color: #333;
					margin-right: 28upx;
					margin-top: 30upx;
					&:nth-child(3n){
						margin-right: 0;
					}
					.left{
						font-size: 24upx;
					}
					.right{
						font-size: 42upx;
					}
				}
				
			}
		}
		.btn_wrap{
			position: fixed;
			bottom: 0;
			padding: 30upx 0;
			left: 0;
			width: 100%;
			background-color: #fff;
			.btn{
				background: linear-gradient(113deg, #F87523 0%, #FF6C00 0%, #FD1D20 100%);
				width: 90%;
				height: 100upx;
				line-height: 100upx;
				text-align: center;
				color: #fff;
				font-size: 32upx;
				margin: auto;
				border-radius: 48upx;
			}
		}
	}
</style>
