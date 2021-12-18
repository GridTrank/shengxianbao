<template>
	<view class="page_wrap">
		<view class="tab_list row">
			<view 
			:class="['tab_item',tabIndex==index && 'active_tab']" 
			v-for="(item,index) in tabList" 
			@click="tabHandle(item,index)"
			:key="index">
				{{item.label}}
			</view>
		</view>
		<!-- 数据列表 -->
		<view class="list ">
			<view 
			class="item mt20" 
			v-for="(item,index) in 2" 
			@click="navTo('./Detail?pageType='+pageType)"
			:key='index'> 
				<view class="item_top row jc_sb">
					<view class="left row">
						<image src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quan1%402x.png" mode="widthFix"></image>
						<text >123456</text>
					</view>
					<text class="right">已审核</text>
				</view>
				<view class="item_info mt20">
					<view class="labels row">
						<text>冷冻仓库</text>
						<text>盘盈</text>
						<text>盘亏</text>
					</view>
					<view class="time_price row jc_sb mt40">
						<text class="time">2021-12-9</text>
						<text class="price">+ ¥39.00</text>
					</view> 
				</view>
			</view>
		</view>
		<!-- 底部按钮 -->
		<view class="foot_wrap">
			<view class="foot row jc_sb">
				<view class="left row">
					<image src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quan1%402x.png" mode="widthFix"></image>
					<text >全选</text>
				</view>
				<view class="right row">
					<text class="btn">作废</text>
					<text class="btn">审核</text>
				</view>
			</view>
		</view>
		<!-- 新增按钮 -->
		<view class="add_btn" @click="navTo('./Add?pageType='+pageType)">
			+
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageType:'',
				tabList:[
					{
						label:'全部',
						value:1
					},
					{
						label:'待审核',
						value:1
					},
					{
						label:'已处理',
						value:1
					},
				],
				tabIndex:0,
				pageTxt:''
			};
		},
		onLoad(e) {
			let barTitle
			if(e.pageType=='inventory'){
				barTitle='盘点单'
				this.pageTxt='盘点'
			}else if(e.pageType=='frmLoss'){
				barTitle='报损单'
				this.pageTxt='报损'
			}else if(e.pageType=='overflow'){
				barTitle='报溢单'
				this.pageTxt='报溢'
			}else if(e.pageType=='return'){
				barTitle='退货单'
				this.pageTxt='退货'
			}
			this.pageType=e.pageType
			uni.setNavigationBarTitle({
				title:barTitle
			})
		},
		methods:{
			tabHandle(item,index){
				this.tabIndex=index
			}
		},
		onBackPress(options) {
			if(options.from=='backbutton'){
				uni.navigateTo({
					url:'./Index?pageType='+this.pageType
				})
				return true
			}
		}
	}
</script>

<style lang="scss">
.page_wrap{
	padding-top: 80upx;
	padding-bottom: 200upx;
	.tab_list{
		position: fixed;
		/* #ifdef H5*/ 
		top: 88upx;
		/* #endif */ 
		/* #ifdef MP*/
		top: 0;
		/* #endif */
		background-color: #fff;
		width: 100%;
		justify-content: space-around;
		padding: 20upx 0;
		border-bottom: 1px solid #f1f1f1;
		.tab_item{
			color: #333;
			font-size: 28upx;
		}
		.active_tab{
			color: $base-color;
			position: relative;
			&::after{
				content: '';
				display: block;
				position: absolute;
				bottom: -20upx;
				width: 100%;
				height: 4upx;
				background-color: $base-color;
			}
		}
	}
	.list{
		.item{
			background-color: #fff;
			padding: 30upx;
			.item_top{
				padding-bottom: 20upx;
				border-bottom: 1px solid #EEEEEE;
				.left{
					
					image{
						width: 40upx;
						margin-right: 16upx;
					}
					text{
						color: #2F2F2F;
						font-size: 28upx;
						
					}
				}
				.right{
					color:$base-color;
					font-size: 28upx;
				}
			}
			.item_info{
				.labels{
					text{
						margin-right: 10upx;
						color: #fff;
						font-size: 24upx;
						padding: 4upx 6upx;
						background-color: #FE0707;
						border-radius: 4upx;
					}
				}
				.time_price{
					.time{
						color: #2F2F2F;
						font-size: 28upx;
					}
					.price{
						color: #333333;
						font-size: 36upx;
						font-weight: bold;
					}
				}
			}
		}
	}
	.foot_wrap{
		background-color: #fff;
		position: fixed;
		bottom: 0;
		width: 100%;
		border-top: 1px solid #f1f1f1;
		.foot{
			padding: 30upx;
			.left{
				image{
					width: 40upx;
					margin-right: 16upx;
				}
				color: #333;
				font-size: 22upx;
			}
			.right{
				.btn{
					margin-left: 15upx;
					background: linear-gradient(90deg, #F43B3B 0%, #FF3033 100%);
					color: #fff;
					font-size: 28upx;
					width: 156upx;
					height: 60upx;
					line-height: 60upx;
					text-align: center;
					border-radius: 30upx;
				}
			}
		}
	}
	.add_btn{
		position: fixed;
		bottom: 200upx;
		right: 30upx;
		background: linear-gradient(113deg, #F87523 0%, #FF6C00 0%, #FD1D20 100%);
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		text-align: center;
		font-size: 70upx;
		color: #fff;
		font-weight: bold;
	}
}
</style>
