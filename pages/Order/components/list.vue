<template>
	<view class="list_wrap">
		<view class="item mt20" v-for="(item,index) in list" :key="index">
			<view class="status row jc_sb">
				<text class="left f28-c333">{{item.orderCode}}</text>
				<text class="right">
					{{
						item.billState==-1?'已作废':
						item.billState==1?'待发货':
						item.billState==2?'待收货':
						item.billState==3?'已收货':
						'待审核'
					}}
				</text>
			</view>
			<view class="con row jc_sb">
				<view class="label row">
					<text class="left f28-c999">送货日期：</text>
					<text class="right f28-c333">{{item.deliveryDateTime || '暂无'}}</text>
				</view>
				<view class="value row place">
					<text class="left ">订货金额：</text>
					<text class="right">¥{{item.orderAmount  || 0}}</text>
				</view>
			</view>
			
			<view class="con row jc_sb">
				<view class="label row">
					<text class="left f28-c999">支付方式：</text>
					<text class="right f28-c333">
						{{
							item.paymentId==1?'支付宝':
							item.paymentId==2?'微信':
							item.paymentId==3?'现金':
							'余额支付'
						}}
					</text>
				</view>
				<view class="value row place" v-if="item.billState!=1 ">
					<text class="left ">实发金额：</text>
					<text class="right ">¥{{item.sendoutAmount || 0}}</text>
				</view>
			</view>
			<view class="con row last jc_sb">
				<view class="label row">
					<text class="left f28-c999">配送方式：</text>
					<text class="right f28-c333">{{item.deliveryType  || '暂无'}}</text>
				</view>
				<view class="value row place" v-if="item.billState==0 || item.billState==3">
					<text class="left ">复核金额：</text>
					<text class="right ">¥{{item.affireAmount || 0}}</text>
				</view>
			</view>
			
			<view class="btn_wrap">
				<text class="btn active" v-if="item.billState==0">审核</text>
				<text class="btn active" v-else-if="item.billState==3">退货</text>
				<text class="btn" @click="navTo('./Detail?orderCode='+item.orderCode)">查看</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
        props:{
            list:{
                type:Array,
                default:()=>{
                    return []
                }
            }
        },
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped lang="scss">
	.list_wrap{
		.item{
			background-color: #fff;
			padding: 30upx;
			.status{
				padding-bottom: 20upx;
				border-bottom: 1px solid #EEEEEE;
				.right{
					color: $base-color;
					font-size: 28upx;
				}
			}
			.con{
				padding-top: 28upx ;
				.place{
					.left{
						color: #2F2F2F;
						font-size: 24upx;
					}
					.right{
						color: #333;
						font-size: 36upx;
					}
				}
			}
			.last{
				padding-bottom: 28upx;
				border-bottom: 1px solid #EEEEEE;
			}
		}
		.btn_wrap{
			display: flex;
			justify-content: flex-end;
			padding-top: 30upx ;
			.btn{
				color: #333;
				font-size: 28upx;
				border-radius: 35upx;
				width: 150upx;
				height: 60upx;
				line-height: 60upx;
				text-align: center;
				border: 1px solid #333;
				margin-left: 20upx;
			}
			.active{
				color: $base-color;
				border-color: $base-color;
			}
		}
	}
</style>
