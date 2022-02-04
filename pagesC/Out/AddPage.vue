<template>
	<view class="page_wrap">
		<view class="list mt20">
			<view class="item row" @click="showPopHandle(1)">
				<view class="left ">
					{{pageTxt}}仓库
				</view>
				<view class="right row">
					<text class="label">{{queryData.workhouseName}}</text>
					<text class="iconfont icon-jinru"></text>
				</view>
			</view>
			<view class="item row" @click="showPopHandle(2)">
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
			:pageTxt="pageTxt"
			nowParentPage="AddPage"
			:datas="stockData"
			>
			</detail-list>
		</view>
		
		<!-- 按钮 -->
		<view v-else class="btn_default" @click="navTo('./SelectGood?pageType='+ pageType)">
			选择商品
		</view>
		
		<!-- 弹出框 -->
		<jPicker
		ref='jPicker'
		title='选择仓库'
		:options="columns" 
		valKey='value'
		showKey="label"
		@sure='confirm'
		>
		</jPicker>
			
		<!-- 时间日期选择 -->
		<itmister-date-picker ref="dateEl" @dateConfirm="dateConfirm"></itmister-date-picker>
	</view>
</template>

<script>
	import {date} from "@/common/js/util"
	import {mapState,mapMutations} from 'vuex'
	export default {
		data() {
			return {
				num:'', 	
				showPop:false,
				selectDate:'',
				pageType:'',
				pageTxt:'',
				remark:'',
				stockData:null,
				columns:[{label:'仓库1',value:1},{label:'仓库2',value:2}],
				queryData:{
					workhouseName:'请选择',
					workhouseId:''
				},
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
			}else if(e.pageType=='inventory'){
				barTitle='新增盘点单'
				this.pageTxt='盘点'
			}else if(e.pageType=='frmLoss'){
				barTitle='新增报损单'
				this.pageTxt='报损'
			}else if(e.pageType=='offer'){
                barTitle='新增报价单'
                this.pageTxt='报价'
            }
			this.pageType=e.pageType
			uni.setNavigationBarTitle({
				title:barTitle
			})
			this.selectDate=date('Y-m-d',new Date().getTime())
			this.initDate(this.selectDate)
			if(uni.getStorageSync('stockData')){
				this.stockData=uni.getStorageSync('stockData')
			}
			this.getStockList()
		},
		mounted() {
			if(uni.getStorageSync('stockData')){
				let list=uni.getStorageSync('stockData')
				this.$refs.detailList.step='three'
				list.forEach(el=>{
					el.costPrice=el.unitPrice
				})
				this.stockData=list
				this.SET_STOCK_MANAGE_INFO({infoInfoVoList:list})
				this.$forceUpdate()
			}
			if(this.$StockManageInfo.workhouseId){
				this.queryData.workhouseName=this.$StockManageInfo.workhouseName
				this.queryData.workhouseId=this.$StockManageInfo.workhouseId
			}
			if(this.$StockManageInfo.remark){
				this.remark=this.$StockManageInfo.remark
			}
			
		},
		computed:{
			...mapState(['$StockManageInfo'])
		},
		watch:{
			"remark":function(val){
				this.SET_STOCK_MANAGE_INFO({'remark':val})
			}
		},
		methods:{
			...mapMutations(['SET_STOCK_MANAGE_INFO']),
			getStockList(){
				this.$http('api/workhous/getWorkhousList').then(res=>{
					this.columns=res.map((item)=>{
						return {
							label:item.workhouseName,
							value:item.id
						}
					})
				})
			},
			showPopHandle(val){
				if(val==2){
					this.$refs.dateEl.show();
				}else{
					this.$refs.jPicker.pickerVisable=true
				}
			},
			// 选择日期
			dateConfirm(date){
			    this.selectDate = date;
				this.initDate(date)
			},
			initDate(date){
				switch(this.pageType){
					case 'in':
						this.SET_STOCK_MANAGE_INFO({'inputDate':date})
						break;
					case 'out':
						this.SET_STOCK_MANAGE_INFO({'outputDate':date})
						break;
					case 'frmLoss':
						this.SET_STOCK_MANAGE_INFO({'lossDate':date})
						break;
					case 'return':
						this.SET_STOCK_MANAGE_INFO({'returnorderDate':date})
						break;
					case 'inventory':
						this.SET_STOCK_MANAGE_INFO({'stocktakeDate':date})
						break;
				}
			},
			// 选择仓库
			confirm(e){
				this.queryData.workhouseName=e.label
				this.queryData.workhouseId=e.value
				this.SET_STOCK_MANAGE_INFO(this.queryData)
			}
		},
		onUnload() {
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
