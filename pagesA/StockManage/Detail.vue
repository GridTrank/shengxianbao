<template>
	<view class="page_wrap">
		<view class="info_list mt20">
			<view class="item row jc_sb">
				<view class="left f28-c333">
					{{pageTxt}}仓库
				</view>
				<view class="f28-c666">
					仓库
				</view>
			</view>
			<view class="item row jc_sb">
				<view class="left f28-c333">
					日期
				</view>
				<view class="f28-c666">
					2021-12-20
				</view>
			</view>
			<view class="item row jc_sb">
				<view class="left f28-c333">
					订单号
				</view>
				<view class="f28-c666">
					123456
				</view>
			</view>
			<view class="item row jc_sb">
				<view class="left f28-c333">
					状态
				</view>
				<view class="f28-c666">
					待审核
				</view>
			</view>
		</view>
		<view class="slot_wrap">
			<detail-list 
			:pageTxt="pageTxt"
			nowParentPage="Detail"
			:showEdit="showEdit"> </detail-list>
		</view>
		<view class="foot_btn row jc_sb">
			<view class="nums row">
				<view class="left row">
					{{pageTxt}}
				</view>
				<view class="right">3</view>
			</view>
			<view class="btns">
				<text class="edit" @click="showEdit=true"><text class="iconfont icon-bianji"></text>编辑</text>
				<template v-if="showEdit">
					<text class="btn left" @click="showEdit=false">取消</text>
					<text class="btn right" @click="submit(1)">保存</text>
				</template>
				<template v-else>
					<text class="btn left" @click="submit(2)">作废</text>
					<text class="btn right" @click="submit(3)">审核</text>
				</template>
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
				showEdit:false
			};
		},
		onLoad(e) {
			let barTitle
			if(e.pageType=='out'){
				barTitle='出库单详情'
				this.pageTxt='出库'
			}else if(e.pageType=='in'){
				barTitle='入库单详情'
				this.pageTxt='入库'
			}else if(e.pageType=='inventory'){
				barTitle='盘点单详情'
				this.pageTxt='盘点'
			}else if(e.pageType=='frmLoss'){
				barTitle='报损单详情'
				this.pageTxt='报损'
			}else if(e.pageType=='overflow'){
				barTitle='报溢单详情'
				this.pageTxt='报溢'
			}else if(e.pageType=='return'){
				barTitle='退货单详情'
				this.pageTxt='退货'
			}
			if(e.showEdit){
				this.showEdit=true
			}
			this.pageType=e.pageType
			uni.setNavigationBarTitle({
				title:barTitle
			})
			
		},
		methods:{
			submit(val){
				uni.showModal({
					title:'提示',
					content:'内容',
					success:(res)=> {
						console.log(res)
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.page_wrap{
	padding-bottom: 200upx;
	.info_list{
		background-color: #fff;
		padding:0 30upx;
		.item{
			padding: 30upx 0;
			border-bottom: 2upx solid #f1f1f1;
			&:last-child{
				border: none;
			}
		}
	}
	
	.foot_btn{
		width: 100%;
		position: fixed;
		bottom: 0;
		left: 0;
		padding: 30upx 0;
		background-color: #fff;
		border-top: 1px solid #f1f1f1;
		z-index: 111;
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
			.edit{
				margin-right: 60upx;
				color: $base-color;
				font-size: 28upx;
			}
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
