<template>
	<view class="page_wrap">
		<view class="info_list mt20">
            <!-- 有仓库的 -->
            <template v-if="pageType=='return' || pageType=='frmLoss' || pageType=='out' || pageType=='in'">
                <view class="item row jc_sb">
                	<view class="left f28-c333">
                		{{pageTxt}}仓库
                	</view>
                	<view class="f28-c666">
                		{{pageDetail.warehouseName}}
                	</view>
                </view>
            </template>
			
			<!-- 单号 -->
			<template v-if="false">
				<view class="item row jc_sb" >
					<view class="left f28-c333">
						单号
					</view>
					<view class="f28-c666">
						123456
					</view>
				</view>
			</template>
            
            <!-- 日期 -->
            <template v-if="pageType!=='offer'">
                <view class="item row jc_sb">
                	<view class="left f28-c333">
                		日期
                	</view>
                	<view class="f28-c666">
						{{pageDetail.lossDate || pageDetail.outputDate || pageDetail.inputDate}}
                	</view>
                </view>
            </template>
			
            
            <!-- 客户名称 -->
            <template v-if="false">
                <view class="item row jc_sb">
                    <view class="left f28-c333">
                        客户名称
                    </view>
                    <view class="f28-c666">
                        123
                    </view>
                </view>
            </template>
            <!-- 状态 -->
            <template v-if="pageType=='offer' || pageType=='frmLoss' || pageType=='out' || pageType=='in'">
                <view class="item row jc_sb">
                	<view class="left f28-c333">
                		状态
                	</view>
                	<view class="f28-c666">
                		{{pageDetail.billState==-1?'已作废':pageDetail.billState==1?'已审核':'待审核'}}
                	</view>
                </view>
            </template>
            
            <!-- 报价单 -->
            <template v-if="pageType=='offer'">
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
            </template>
            
            <!-- 备注 -->
            <template v-if="pageType=='turnover' || pageType=='offer' || pageType=='frmLoss' || pageType=='in' || pageType=='out'">
                <view class="item row jc_sb">
                	<view class="left f28-c333">
                		备注
                	</view>
                	<view class="f28-c666">
                		{{pageDetail.remark || '无'}}
                	</view>
                </view>
            </template>
            
            <!-- 操作日志 -->
            <template v-if="pageType=='offer' || pageType=='frmLoss' || pageType=='out' || pageType=='in'">
                <view class="item row jc_sb" @click="navTo('./Log?id='+pageDetail.id+'&pageUrl='+pageUrl)">
                	<view class="left f28-c333">
                		操作日志
                	</view>
                	<view class="f28-c666">
                		查看 <text class="iconfont icon-jinru"></text>
                	</view>
                </view>
            </template>
		</view>
		<view class="add_product row"  v-if="showEdit" @click="addProduct">
			<text class="iconfont icon-tianjia mr10"></text>添加商品
		</view>
        
		<view class="slot_wrap">
			<detail-list 
			:pageTxt="pageTxt"
			:pageType="pageType"
			nowParentPage="Detail"
			:datas="pageDetail.infoInfoVoList"
			:showEdit="showEdit"> 
            </detail-list>
		</view>
        
		<view class="foot_btn row jc_sb" >
			<view class="nums row">
				<view class="left row">
					<!-- {{pageTxt}} -->
                    合计
				</view>
				<view class="right">{{pageDetail.infoInfoVoList && pageDetail.infoInfoVoList.length}}</view>
			</view>
			<view class="btns">
				<text v-if="pageDetail.billState==='0'" class="edit" @click="showEdit=true"><text class="iconfont icon-bianji"></text>编辑</text>
				<template v-if="showEdit">
					<text class="btn left" @click="showEdit=false">取消</text>
					<text class="btn right" @click="submit(1)">保存</text>
				</template>
				<template v-else>
					<template v-if="pageDetail.billState==='0'">
						<text class="btn left" @click="submit(2)">作废</text>
						<text class="btn right" @click="submit(3)">审核</text>
					</template>
					<template v-else-if="pageDetail.billState==='1'">
						<text class="btn left" @click="submit(4)">反审核</text>
						<text class="btn right" @click="submit(5)">打印</text>
					</template>
					
				</template>
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
			let barTitle
			if(e.pageType=='out'){
				barTitle='出库单详情'
				this.pageTxt='出库'
				this.pageUrl='api/outputBill/findInfo'
			}else if(e.pageType=='in'){
				barTitle='入库单详情'
				this.pageTxt='入库'
				this.pageUrl='api/inputBill/findInfo'
			}else if(e.pageType=='inventory'){
				barTitle='盘点单详情'
				this.pageTxt='盘点'
			}else if(e.pageType=='frmLoss'){
				barTitle='报损单详情'
				this.pageTxt='报损'
				this.pageUrl='api/Loss/fingdOne'
			}else if(e.pageType=='overflow'){
				barTitle='报溢单详情'
				this.pageTxt='报溢'
			}else if(e.pageType=='return'){
				barTitle='退货单详情'
				this.pageTxt='退货'
			}else if(e.pageType=='offer'){
                barTitle='报价单详情'
                this.pageTxt='报价'
            }else if(e.pageType=='turnover'){
				barTitle='周转框详情'
				this.pageTxt='周转'
			}
			this.id=e.id
			if(e.showEdit){
				this.showEdit=true
			}
			this.pageType=e.pageType
			uni.setNavigationBarTitle({
				title:barTitle
			})
			this.getDetail()
			
		},
		computed:{
			...mapState(['$StockManageInfo'])
		},
		methods:{
			...mapMutations(['SET_STOCK_MANAGE_INFO']),
			// 获取详情
			getDetail(){
				this.$http(this.pageUrl,{id:this.id}).then(res=>{
					this.pageDetail=res
					this.SET_STOCK_MANAGE_INFO({selectData:res.infoInfoVoList})
				})
			},
			// 添加商品
			addProduct(){
				this.navTo('./SelectGood?pageType='+this.pageType)
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
							url=''
							break;
						case 'frmLoss':
							url='api/Loss/update'
							break;
						case 'overflow':
							url=''
							break;
						case 'return':
							url=''
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
							url=''
							break;
						case 'frmLoss':
							url='api/Loss/updateInvalid'
							break;
						case 'overflow':
							url=''
							break;
						case 'return':
							url=''
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
							url=''
							break;
						case 'frmLoss':
							url='api/Loss/updateAudit'
							break;
						case 'overflow':
							url=''
							break;
						case 'return':
							url=''
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
							url=''
							break;
						case 'frmLoss':
							url='api/Loss/updateBackAudit'
							break;
						case 'overflow':
							url=''
							break;
						case 'return':
							url=''
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
