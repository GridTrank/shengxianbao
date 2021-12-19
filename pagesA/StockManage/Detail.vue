<template>
	<view class="page_wrap">
		
		<view class="list">
			<view class="item row jc_sb">
				<view class="left f28-c333">
					出库仓库
				</view>
				<view class="f28-c666">
					仓库
				</view>
			</view>
		</view>
		
		<view class="foot_btn row jc_sb">
			<view class="nums row">
				<view class="left row">
					<view class="iconfont ">出库</view> 
					<view>合计</view> 
				</view>
				<view class="right">3</view>
			</view>
			<view class="btns">
				<text class="btn left">作废</text>
				<text class="btn right">审核</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pageType:'',
				pageTxt:'',
			
			};
		},
		onLoad(e) {
			let barTitle
			if(e.pageType=='out'){
				barTitle='出库单详情'
				this.pageTxt='出库'
			}else {
				barTitle='入库单详情'
				this.pageTxt='入库'
			}
			this.pageType=e.pageType
			uni.setNavigationBarTitle({
				title:barTitle
			})
			
		},
		methods:{
			
		}
	}
</script>

<style scoped lang="scss">
.page_wrap{
	padding-bottom: 200upx;
	
	
	.foot_btn{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 30upx 0;
		background-color: #fff;
		border-top: 1px solid #f1f1f1;
		.nums{
			margin-left: 30upx;
			.left{
				color: #333;
				font-size: 22upx;
				margin-right: 20upx;
				.iconfont{
					color: #D7D7D7;
					margin-right: 10upx;
				}
			}
			.right{
				color: $base-color;
				font-size: 40upx;
			}
		}
		.btns{
			margin-right: 30upx;
			.btn{
				width: 156upx;
				height: 60upx;
				line-height: 60upx;
				text-align: center;
				border-radius: 30upx;
				font-size: 28upx;
				display: inline-block;
			}
			.left{
				border: 1px solid $base-color;
				color: $base-color;
				margin-right: 20upx;
			}
			.right{
				background: linear-gradient(113deg, #F87523 0%, #FF6C00 0%, #FD1D20 100%);
				color: #fff;
			}
		}
	}
	
}
</style>
