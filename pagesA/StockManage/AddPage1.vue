<template>
	<view class="page_wrap">
		<view class="list mt20">
			<view class="item row">
				<view class="left ">
					{{pageTxt}}仓库
				</view>
				<view class="right row">
					<text class="label">1231231</text>
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			<view class="item row" @click="showPopHandle(3)">
				<view class="left ">
					日期
				</view>
				<view class="right row">
					<text class="label">{{selectDate}}</text>
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			
			<view class="item row" >
				<view class="left ">
					备注
				</view>
				<view class="right ">
					<u-input border="none" placeholder='请输入' v-model="remark"></u-input>
				</view>
			</view>
			
		</view>
		
		
		<view class="slot_wrap" v-if="stockData">
			<detail-list
			ref="detailList"
			:pageType='pageType' 
			:datas="stockData"
			>
			</detail-list>
		</view>
		
		<!-- 按钮 -->
		<view v-else class="btn_default" @click="navTo('./SelectGood?pageType='+ pageType)">
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
				remark:'',
				stockData:null
			};
		},
		onLoad(e) {
			let barTitle
			if(e.pageType=='out'){
				barTitle='新增出库单'
				this.pageTxt='出库'
			}else if(e.pageType=='in'){
				barTitle='新增入库单'
				this.pageTxt='入库'
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
			if(uni.getStorageSync('stockData')){
				this.stockData=uni.getStorageSync('stockData')
				// this.$refs.detailList.step='three'
			}
			
			this.selectDate=date('Y-m-d',new Date().getTime())
		},
		mounted() {
			if(uni.getStorageSync('stockData')){
				this.$refs.detailList.step='three'
			}
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
		
		onUnload() {
			console.log(2222)
			uni.removeStorageSync('stockData')
		},
		onBackPress(options) {
			if(options.from=='backbutton'){
				
				uni.removeStorageSync('stockData')
				uni.navigateTo({
					url:'./Index?pageType='+this.pageType
				})
				return true
			}
		}
	}
</script>

<style scoped lang="scss">
.page_wrap{
	padding-bottom: 100upx;
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
				/deep/ .uni-input-placeholder{
					text-align: right;
				}
				/deep/ {
					input{
						text-align: right;
					}
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
