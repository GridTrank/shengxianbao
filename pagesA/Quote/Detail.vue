<template>
	<view class="page_wrap">
		<view class="info_list mt20">
			<!-- 单号 -->
			<view class="item row jc_sb" >
				<view class="left f28-c333">
					报价单号
				</view>
				<view class="f28-c666">
					123456
				</view>
			</view>
       
            <!-- 状态 -->
            <view class="item row jc_sb">
            	<view class="left f28-c333">
            		状态
            	</view>
            	<view class="f28-c666">
            		{{pageDetail.billState==-1?'已作废':pageDetail.billState==1?'已审核':'待审核'}}
            	</view>
            </view>
            <!-- 报价单 -->
            <view class="item row jc_sb">
            	<view class="left f28-c333">
            		价格组
            	</view>
            	<view class="f28-c666">
            		价格组A
            	</view>
            </view>
            <view class="item row jc_sb">
            	<view class="left f28-c333">
            		报价时间
            	</view>
            	<view class="f28-c666">
            		查看 <text class="iconfont icon-jinru"></text>
            	</view>
            </view>
            <view class="item row jc_sb">
            	<view class="left f28-c333">
            		报价时间段
            	</view>
            	<view class="f28-c666">
            		查看 <text class="iconfont icon-jinru"></text>
            	</view>
            </view>
            
            <!-- 备注 -->
            <view class="item row jc_sb">
            	<view class="left f28-c333">
            		备注
            	</view>
            	<view class="f28-c666">
            		{{pageDetail.remark || '无'}}
            	</view>
            </view>
            
            <!-- 操作日志 -->
            <view class="item row jc_sb" @click="navTo('./Log?id='+pageDetail.id+'&pageUrl=api/salesofferPrice/info')">
            	<view class="left f28-c333">
            		操作日志
            	</view>
            	<view class="f28-c666">
            		查看 <text class="iconfont icon-jinru"></text>
            	</view>
            </view>
		</view>
        
		<view class="slot_wrap">
			
		</view>
        
		<view class="foot_btn row jc_sb" >
			<view class="btns">
				<text class="btn right" @click="submit(5)">打印</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	export default {
		data() {
			return {
				pageType:'',
				pageTxt:'',
				showEdit:false,
				pageUrl:'',
				id:'',
				pageDetail:{}
			};
		},
		onLoad(e) {
			this.id=e.id
			this.getDetail()
			
		},
		computed:{
			...mapState(['$StockManageInfo'])
		},
		onShow() {
			
		},
		methods:{
			...mapMutations(['SET_STOCK_MANAGE_INFO']),
			// 获取详情
			getDetail(){
				this.$http('api/salesofferPrice/info',{id:this.id}).then(res=>{
					this.pageDetail=res
				})
			},
			
			// 提交
			submit(val){
				// console.log(this.pageDetail)
				let con='',url='',data={}
				if(val===1){
					con='库存即将调整，请确认操作'
					switch(this.pageType){
						case 'in':
							url='api/inputBill/update'
							break;
						case 'out':
							url='api/outputBill/update'
							break;
						case 'inventory':
							url='api/stocktake/update'
							break;
						case 'frmLoss':
							url='api/Loss/update'
							break;
						case 'overflow':
							url=''
							break;
						case 'return':
							url='api/returnorder/update'
							break;
						case 'turnover':
							url=''
							break;
						case 'offer':
							url=''
							break;
						default:
							url=''
					}
					data=this.pageDetail
				}else if(val===2){
					con='您正在作废单据，请确认操作'
					switch(this.pageType){
						case 'in':
							url='api/inputBill/updateInvalid'
							break;
						case 'out':
							url='api/outputBill/updateInvalid'
							break;
						case 'inventory':
							url='api/stocktake/updateInvalid'
							break;
						case 'frmLoss':
							url='api/Loss/updateInvalid'
							break;
						case 'overflow':
							url=''
							break;
						case 'return':
							url='api/returnorder/updateInvalid'
							break;
						case 'turnover':
							url=''
							break;
						case 'offer':
							url=''
							break;
						default:
							url=''
					}
					data={
						id:this.pageDetail.id
					}
				}else if(val==3){
					con='您正在审核单据，请确认操作'
					switch(this.pageType){
						case 'in':
							url='api/inputBill/updateAudit'
							break;
						case 'out':
							url='api/outputBill/updateAudit'
							break;
						case 'inventory':
							url='api/stocktake/updateAudit'
							break;
						case 'frmLoss':
							url='api/Loss/updateAudit'
							break;
						case 'overflow':
							url=''
							break;
						case 'return':
							url='api/returnorder/updateAudit'
							break;
						case 'turnover':
							url=''
							break;
						case 'offer':
							url=''
							break;
						default:
							url=''
					}
					data={
						id:this.pageDetail.id
					}
				}else if(val==4){
					con='您正在反审核单据，请确认操作'
					switch(this.pageType){
						case 'in':
							url='api/inputBill/updateBackAudit'
							break;
						case 'out':
							url='api/outputBill/updateBackAudit'
							break;
						case 'inventory':
							url='api/stocktake/updateBackAudit'
							break;
						case 'frmLoss':
							url='api/Loss/updateBackAudit'
							break;
						case 'overflow':
							url=''
							break;
						case 'return':
							url='api/returnorder/updateBackAudit'
							break;
						case 'turnover':
							url=''
							break;
						case 'offer':
							url=''
							break;
						default:
							url=''
					}
					data={
						id:this.pageDetail.id
					}
				}
				uni.showModal({
					title:'提示',
					content:con,
					success:(res)=> {
						if(res.confirm){
							this.$http(url,data,'put').then(res=>{
								this.showEdit=false
								if(val==2){
									uni.showToast({
										title:'报废-成功',
										icon:'none'
									})
								}else if(val==3){
									uni.showToast({
										title:'审核-成功',
										icon:'none'
									})
								}else if(val==4){
									uni.showToast({
										title:'反审核-成功',
										icon:'none'
									})
								}
							})
							setTimeout(()=>{
								this.getDetail()
							},1500)
						}
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
	.add_product{
		padding:30upx 30upx 0 30upx ;
		text-align: right;
		color: $base-color;
		font-size: 28upx;
		justify-content: flex-end;
	}
	
}
</style>
