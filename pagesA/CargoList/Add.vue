<template>
	<view class="page_wrap">
		<view class="list mt20">
			<view class="item row">
				<view class="left ">
					{{pageTxt}}单号
				</view>
				<view class="right row">
					<text class="label">1231231</text>
				</view>
			</view>
			<view class="item row" @click="showPopHandle(3)">
				<view class="left ">
					{{pageTxt}}日期
				</view>
				<view class="right row">
					<text class="label">{{selectDate}}</text>
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			<view class="item row" @click="showPopHandle(4)" v-if="pageType=='return'">
				<view class="left ">
					客户
				</view>
				<view class="right row">
					<text class="label">客户名</text>
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			<view class="item row" @click="showPopHandle(5)"  v-if="pageType=='return'">
				<view class="left ">
					关联订单(非必填)
				</view>
				<view class="right row">
					<text class="label">查看订单</text>
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			
			<view class="item row" @click="showPopHandle(1)" v-if="pageType!=='return'">
				<view class="left ">
					{{pageTxt}}仓库
				</view>
				<view class="right row">
					<text class="label">全部仓库</text>
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			
			<view class="item row" @click="showPopHandle(2)" >
				<view class="left ">
					{{pageTxt}}类型
				</view>
				<view class="right row">
					<text class="label">类型</text>
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			
			
			
			
		</view>
		<!-- 按钮 -->
		<view class="btn_default" @click="navTo('./SelectGood?pageType='+ pageType)">
			选择商品
		</view>
		
		<!-- 弹出框 -->
		<u-popup :show="showPop" mode="bottom"  @close="showPop=false">
			
		</u-popup>
		<!-- 时间日期选择 -->
		<itmister-date-picker ref="dateEl" @dateConfirm="dateConfirm"></itmister-date-picker>
	</view>
</template>

<script>
	import {date} from "@/common/js/util"
	export default {
		data() {
			return {
				num:'', 	
				showPop:false,
				selectDate:'',
				pageType:'',
				pageTxt:'',
			};
		},
		onLoad(e) {
			let barTitle
			if(e.pageType=='inventory'){
				barTitle='新增盘点单'
				this.pageTxt='盘点'
			}else if(e.pageType=='frmLoss'){
				barTitle='新增报损单'
				this.pageTxt='报损'
			}else if(e.pageType=='overflow'){
				barTitle='新增报溢单'
				this.pageTxt='报溢'
			}else if(e.pageType=='return'){
				barTitle='新增退货单'
				this.pageTxt='退货'
			}
			this.pageType=e.pageType
			uni.setNavigationBarTitle({
				title:barTitle
			})
			this.selectDate=date('Y-m-d',new Date().getTime())
		},
		methods:{
			showPopHandle(val){
				if(val==3){
					this.$refs.dateEl.show();
				}else{
					this.showPop=true
				}
			},
			dateConfirm(date){
				console.log(date)
			    this.selectDate = date;
			}
		},
		onBackPress(options) {
			if(options.from=='backbutton'){
				uni.navigateTo({
					url:'./List?pageType='+this.pageType
				})
				return true
			}
		}
	}
</script>

<style lang="scss">
.page_wrap{
	.list{
		background-color: #fff;
		padding:0 30upx;
		.item{
			padding: 40upx 0;
			border-bottom: 1px solid #E1E1E1;
			justify-content: space-between;
			.left{
				font-size: 30upx;
				color: #333;
			}
			.right{
				.label{
					color: #666;
					font-size: 28upx;
					margin-right: 12upx;
				}
			}
			.input{
				width: 400upx;
			}
			&:last-child{
				border:none
			}
		}
	}
	.btn_default{
		width: 90%;
		margin: auto;
		margin-top: 300upx;
	}
}
</style>
