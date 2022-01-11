<template>
	<view class="page_wrap">
		<view class="wrap jc_sb row mt20" @click="selectDeliType">
			<text class="f28-c333">配送方式</text>
			<text class="f28-c999 ">快递配送<text class="iconfont icon-jinru"></text></text>
		</view>
		<!-- 地址 -->
		<view class="wrap jc_sb row mt20 second">
			<text class="f28-c333">配送地址</text>
			<view class="user_info">
				<view class="row info">
					<text class="f32-c333 name">姓名</text>
					<text class="f28-c999 phone">12345678911</text>
					<text class="moren">默认</text>
				</view>
				<view class="address mt20 row" @click="navTo('/pagesB/Address/Address?pageType=confirmOrder')">
					<text class="txt f28-c333">江苏省 相城区 苏州市 江苏省相城区漕湖</text>
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
		</view>
		<!-- 配送时间 -->
		<view class="wrap time mt20">
			<view class="dist row jc_sb" @click="popupStatus=true">
				<text class="f28-c333">配送时间</text>
				<text class="f28-c333">2020-10-12 9-10 <text class="iconfont icon-jinru"></text> </text>
			</view>
			<view class="goods row jc_sb mt30" @click="navTo('./GoodList')">
				<view class="goods_img row">
					<image src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png" mode=""></image>
					<image src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png" mode=""></image>
				</view>
				<text class="f28-c999">共2件<text class="iconfont icon-jinru"></text> </text>
			</view>
		</view>
		<!-- 小费 -->
		<view class="wrap jc_sb row mt20">
			<view class="tip">
				<view class="f28-c333">司机小费</view>
				<view class="f24-c999 mt10">您所给的小费100%归司机所有</view>
			</view>
			<view class="money row">
				<view 
				:class="['n',selectTip==index && 'select_tip']" 
				@click="selectTipHandle(item,index)"
				v-for="(item,index) in tipMoney" :key="index">
					{{item.money}}
				</view>
				<u-input class="n" border='none' type="text" placeholder="自定" v-model="customTip" />
			</view>
		</view>
		<!-- 支付方式 -->
		<view class="wrap mt20 pay_method">
			<text class="tit f28-c333">支付方式</text>
			<view class="list">
				<view 
				v-for="(item,index) in payList"
				:key='index'
				class="item row jc_sb "
				@click="selectPayHandle(item,index)"
				>
					<view class="left row">
						<image class="l_img" :src="item.src" mode="widthFix"></image>
						<text class="f28-c333">{{item.label}}</text>
					</view>
					<image class="right" :src="item.checked?'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quanzhong%402x.png':'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quan1%402x.png'" mode=""></image>
					
				</view>
			</view>
			<view class="arrears row">
				欠款：<text class="m">-￥100.00</text>
			</view>
		</view>
		
		<!-- 费用明细 -->
		<view class="wrap expense_detail mt20">
			<view class="dist row jc_sb">
				<text class="f28-c333">商品总价</text>
				<text class="f28-c333">¥639.00</text>
			</view>
			<view class="dist row jc_sb">
				<text class="f28-c333">运费</text>
				<text class="f28-c333">¥639.00</text>
			</view>
			<view class="dist row jc_sb">
				<text class="f28-c333">司机小费</text>
				<text class="f28-c333">¥639.00</text>
			</view>
			<view class="dist row coupon jc_sb">
				<text class="f28-c333">优惠券</text>
				<text class="f28-c333 m">¥639.00 <text class="iconfont icon-jinru"></text> </text>
			</view>
		</view>
		
		<!-- 备注 -->
		<view class="wrap remark mt20">
			<view class="row jc_sb">
				<text class="f28-c333 left">备注</text>
				<u-input placeholder='请输入备注(选填)' v-model="remark" border='none'></u-input>
			</view>
		</view>
		<!-- 底部 -->
		<view class="foot wrap row ">
			<view class="left row"> <text>¥639.00</text> <text class="f24-c333">(含运费)</text></view>
			<view class=" f24-c333">优惠 <text>¥00.00</text> </view>
			<view class="btn_default">支付</view>
		</view>
		<jPicker
		ref='jPicker'
		title='配送方式'
		:options="columns" 
		valKey='value'
		showKey="label"
		@sure='confirm'
		></jPicker>
		
		<bz-date-picker
			:value="popupStatus"
			title="请选择时间"
			minuteStep="10"
			days="17"
			minHour="6"
			maxHour="22"
			minMinute="0"
			maxMinute="59"
			@close="datePickerClose"
			@confirm="handleDatePickerConfirm"
		>
		</bz-date-picker>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				showPicker:true,
				popupStatus:false,
				columns:[{label:'上门自退',value:1},{label:'快递配送',value:2}],
				listType:'',
				tipMoney:[
					{money:'￥1',value:1},
					{money:'￥2',value:2},
					{money:'￥3',value:3},
				],
				customTip:'',
				selectTip:0,
				payList:[
					{label:'微信支付',src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/wx.png',checked:false,type:'weixin'},
					{label:'支付宝支付',src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/zfb.png',checked:false,type:'apliay'},
					{label:'银行卡支付',src:'https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/yhk.png',checked:false,type:'card'},
				],
				remark:'',
			};
		},
		methods:{
			selectTipHandle(item,index){
				this.selectTip=index
			},
			selectPayHandle(item,index){
				this.payList.forEach((el,e)=>{
					if(e==index){
						item.checked=!item.checked
					}else{
						el.checked=false
					}
				})
			},
			handleDatePickerConfirm(e){
				console.log(e)
				this.popupStatus=false
			},
			selectDeliType(){
				this.$refs.jPicker.pickerVisable=true
			},
			datePickerClose(){
				this.popupStatus=false
			},
			confirm(e){
				console.log(e)
			}
		}
	}
</script>

<style scoped lang="scss">
.page_wrap{
	padding-bottom: 160upx;
	.wrap{
		padding: 30upx;
		background-color: #fff;
		.user_info{
			width: 500upx;
			.phone{
				margin:0 20upx;
			}
			.moren{
				color:$base-color;
				font-size:24upx;
				margin-right: 20upx;
				background-color: #FFF9F3;
				padding: 2upx 6upx;
			}
			.address{
				.txt{
					margin-right: 20upx;
				}
			}
		}
		.goods{
			padding-top: 30upx;
			border-top: 1px solid #EEEEEE;
			.goods_img{
				image{
					width: 100upx;
					height: 100upx;
					margin-right: 10upx;
				}
			}
		}
		.tip{
			.mt10{
				font-size: 20upx;
			}
		}
		.money{
			.n{
				background-color: #f8f8f8;
				color: #AAAAAA;
				font-size: 24upx;
				padding: 20upx;
				margin-left: 10upx;
				border-radius: 8upx;
			}
			/deep/ .u-input{
				width: 50upx;
				padding: 10upx !important;
			}
			/deep/ .input-placeholder{
				font-size: 24upx !important; 
			}
			.select_tip{
				background-color: #fff4ed;
				color: $base-color;
			}
		}
	}
	.second{
		align-items: flex-start;
	}
	.pay_method{
		.list{
			padding: 30upx 0;
			margin-top: 20upx;
			border-top: 1px solid #EEEEEE;
			border-bottom: 1px solid #EEEEEE;
			.item{
				padding: 20upx 0;
				font-size: 32upx;
				.left{
					.l_img{
						width: 48upx;
						height: 48upx;
						margin-right: 10upx;
					}
				}
				.right{
					width: 36upx;
					height: 36upx;
				}
			}
		}
		.arrears{
			padding: 30upx;
			font-size: 28upx;
			color: #333;
			justify-content: flex-end;
			.m{
				color: $base-color;
			}
		}
	}
	.expense_detail{
		.dist{
			padding: 30upx 0;
			border-bottom: 1px solid #EEEEEE;
			&:last-child{
				border:none
			}
			
		}
	}
	.remark{
		.left{
			margin-right: 80upx;
		}
		/deep/ .input-placeholder{
			font-size: 24upx !important; 
		}
	}
	.foot{
		position: fixed;
		bottom:0;
		left: 0;
		width: 100%;
		background-color: #fff;
		padding: 30upx 0;
		border-top: 1px solid #f1f1f1;
		.left{
			margin:0 30upx;
			color: $base-color;
			font-size: 40upx;
		}
		.btn_default{
			margin-top: 0;
			height: 70upx;
			line-height: 70upx;
			padding: 0 60upx;
			font-size: 32upx;
			font-weight: normal;
			position: absolute;
			right: 30upx;
		}
	}
}
</style>
