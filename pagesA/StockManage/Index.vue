<template>
	<view class="page_wrap">
		<u-tabs class="coupon_tab"  lineColor="#FE5B07" :activeStyle="{color: '#FE5B07',}" :list="list" @click="tab"></u-tabs>
		<search-comprehensive
		placeholder='搜索单号'
		:showScreen='true'
		:pageType="pageType"
		:showStock="true"
		:showDate="true"
        @searchInput="searchInput"
		@selectFilter="selectFilter"
		>
        </search-comprehensive>
		
		<template v-if="dataList_.length>0">
			<view class="list">
				<view 
				class="item model-wrap" 
				v-for="(item,index) in dataList_" 
				@click="navTo('./Detail?pageType='+pageType+'&id='+item.id)"
				:key="index">
					<view class="top row jc_sb">
						<template v-if="pageType=='turnover'">
							<text class="f28-c333">好运邻里</text>
							<text class="status">待归还</text>
						</template>
						<template v-else>
							<view class="no f28-c333" @click.stop="checkedHandle(item)">	
								<template v-if="pageType!=='offer'">
									<text v-if="item.checked==2" class="iconfont icon-xuanze"></text>
									<text v-else class="iconfont icon-weixuanze"></text>
								</template>
								{{item.lossCode || item.outputCode || item.inputCode || item.returnorderCode || item.stocktakeCode}}
							</view>
							<view class="status" :class="item.billState==-1?'die':''">
								{{item.billState==1?'已审核':item.billState==-1?'已作废':'待审核'}}
							</view>
						</template>
					</view>
					<view class="detail"> 
						<!-- 周转 -->
						<template v-if="pageType=='turnover'">
							<view class="row jc_sb mt20">
								<view >
									<text class="t1 f28-c999 ">单号</text>
									<text class="t2 f28-c333 ml30">1231  </text>
								</view>
								
								<text class="t3 f24-c999">收到：123</text>
							</view>
							<view class="row jc_sb mt30">
								<view class="">
									<text class="t1 f28-c999">数量</text>
									<text class="t2 ml30 f28-c333">1231</text>
									<text class="t2-1 ml30 f28-dc ">¥2000.29</text>
								</view>
								<text class="t3 f24-c999">归还：123</text>
							</view>
						</template>
						
						<!-- 其他 -->
						<template v-else>
							<view class="label bg_style1">{{item.workhouseName}}</view>
                            <!-- 盘点 -->
                            <template  v-if="pageType=='inventory'">
                                <view class="ml20 inve ying" v-if="item.overflowAmount>0">
                                    盘盈
                                </view>
                                <view class="ml20 inve kui" v-if="item.damageAmount>0">
                                    盘亏
                                </view>
                            </template>
							<view class="row jc_sb mt30">
								<text class="date f28-c333">
									{{item.lossDate || item.outputDate || item.inputDate || item.returnorderDate || item.stocktakeDate}}
								</text>
								<text class="price" >
                                    <text class="" v-if="pageType=='inventory'">
                                       {{item.overflowAmount>0?'+':'-'}} 
                                    </text>
									¥{{item.lossAmount || item.damageAmount || item.outputAmount || item.inputAmount || item.returnorderAmount || 0}}
								</text>
							</view>
						</template>
					</view>
					
					<!-- 操作选项 -->
					<view class="handle_wrap row">
						<!-- 周转筐 -->
						<template v-if="pageType=='turnover'">
							<view class="handle_btn bg_style2">
								归还
							</view>
						</template>
						<!-- 其他 -->
						<template v-else>
							<template v-if="item.billState==='0' || !item.billState">
								<view class="handle_btn h1" @click.stop="submit(item,2)">
									<text class="iconfont icon-shenhe"></text>审核
								</view>
								<view class="handle_btn h1" @click.stop="navTo('./Detail?pageType='+pageType+'&showEdit=true&id='+item.id)">
									<text class="iconfont icon-bianji"></text>修改
								</view>
								<view class="handle_btn h2" @click.stop="submit(item,1)">
									<text class="iconfont icon-shanchu"></text>作废
								</view>
							</template>
							<template v-else-if="item.billState==1">
								<view class="handle_btn h1" @click.stop="submit(item,3)">
									<text class="iconfont icon-shenhe"></text>反审核
								</view>
								<view class="handle_btn h1" >
									<text class="iconfont icon-dayin"></text>打印
								</view>
							</template>
						</template>
					</view>
				</view>
			</view>
		</template>
		
		<template v-else>
			<no-data></no-data>
		</template>
        
        <template v-if="(pageType=='out' || pageType=='in' || pageType=='inventory' || pageType=='frmLoss' || pageType=='overflow' || pageType=='return') && selectTabIndex!=3">
            <view class="foot_btn row jc_sb"> 
                <view class="nums row">
                	<view class="left row" >
                		<view @click="selectAll(2)" v-if="total<dataList_.length || dataList_.length<=0" class="iconfont icon-weixuanze"></view>
                		<view @click="selectAll(1)" v-else class="iconfont icon-xuanze"></view>
                		<view>合计</view> 
                	</view>
                	<view class="right">{{total}}</view>
                </view>
                <view class="btns" >
                	<text class="btn left" @click="submit({},1)">作废</text>
                	<text v-if='selectTabIndex==0 || selectTabIndex==1' class="btn right" @click="submit({},2)">审核</text>
                	<text v-if='selectTabIndex==2' class="btn right" @click="submit({},3)">反审核</text>
                </view>
            </view>
        </template>
			
		<!-- 新增按钮 -->
		<view 
        v-if="pageType!=='offer' && pageType!=='turnover' "
        class="add_btn" @click="navTo('./AddPage?pageType='+pageType)">
			+
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
				list: [{
					name: '全部',
					value:0
				}, {
					name: '待审核',
					value:1
				}, {
					name: '已审核',
					value:2
				}, {
					name: '已作废',
					value:3
				}],
				dataList_:[],
				initList:[],
				total:0,
				selectTabIndex:0
			};
		},
		onLoad(e) {
			let barTitle
			if(e.pageType=='out'){
				barTitle='出库单'
				this.pageTxt='出库'
				this.queryUrl='api/outputBill/pageList'
			}else if(e.pageType=='in'){
				barTitle='入库单'
				this.pageTxt='入库'
				this.queryUrl='api/inputBill/pageList'
			}else if(e.pageType=='inventory'){
				barTitle='盘点单'
				this.pageTxt='盘点'
				this.queryUrl='api/stocktake/pageList'
			}else if(e.pageType=='frmLoss'){
				barTitle='报损单'
				this.pageTxt='报损'
				this.queryUrl='api/Loss/pageList'
			}else if(e.pageType=='overflow'){
				barTitle='报溢单'
				this.pageTxt='报溢'
			}else if(e.pageType=='return'){
				barTitle='退货单'
				this.pageTxt='退货'
				this.queryUrl='api/returnorder/pageList'
			}else if(e.pageType=='turnover'){
				barTitle='周转框'
				this.pageTxt='周转'
                this.list=[
                    {
                    	name: '全部',
                    	vlaue:0
                    }, {
                    	name: '待归还',
                    	vlaue:1
                    }, {
                    	name: '已归还',
                    	vlaue:2
                    }
                ]
			}else if(e.pageType=='offer'){
                barTitle='报价单'
                this.pageTxt='报价'
            }
			
			this.pageType=e.pageType
			uni.setNavigationBarTitle({
				title:barTitle
			})
			
		},
		onShow() {
			this.dataList=[]
			this.initData()
			this.CLEAR_STOCK_MANAGE()
			uni.removeStorageSync('stockData')
		},
		computed:{
			
		},
		methods:{
			...mapMutations(['CLEAR_STOCK_MANAGE']),
			async initData(){
				uni.showLoading({
					title:'加载中'
				})
				let list= await this.getList()
				list.forEach(el=>{
					el.checked=1
				})
				this.dataList_=list
				this.initList=JSON.parse(JSON.stringify(this.dataList_))
			},
            // 搜索
            searchInput(val){
                switch(this.pageType){
                	case 'in':
                		this.queryData={
                		    inputCode:val
                		}
                		break;
                	case 'out':
                		this.queryData={
                		    outputCode:val
                		}
                		break;
                	case 'inventory':
                        this.queryData={
                            stocktakeCode:val
                        }
                		break;
                	case 'frmLoss':
                		this.queryData={
                		    lossCode:val
                		}
                		break;
                	case 'return':
                		this.queryData={
                		    returnorderCode:val
                		}
                		break;
                	default:
                		url=''
                }
                
                this.dataList=[]
                this.initData()
            },
			tab(item){
				let billState=''
				if(item.value==1){
					billState='0'
				}else if(item.value==2){
					billState='1'
				}else if(item.value==3){
					billState='-1'
				}else{
					billState=''
				}
				this.selectTabIndex=item.value
				this.total=0
				this.queryData={
					billState
				}
				this.dataList=[]
				this.initData()
			},
			checkedHandle(item){
				let nums=0
				item.checked=item.checked==1?2:1
				this.dataList_.forEach(item=>{
					if(item.checked==2){
						nums++
					}
				})
				this.total=nums
			},
			selectAll(val){
				let num=0
				if(val==1){
					this.total=0
				}else{
					if(this.selectTabIndex==0){
						this.dataList_.forEach(item=>{
							if(item.billState==0){
								item.checked=val
								num+=1
							}
						})
						this.total=num
					}else{
						this.dataList_.forEach(item=>{
							item.checked=val
						})
						this.total=this.dataList_.length
					}
					
				}
				
				
			},
			// 操作
			submit(item,val){
				let con='',url='',data={}
				if(val==1){
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
						id:item.id
					}
				}else if(val==2){
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
						id:item.id
					}
				}else{
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
						id:item.id
					}
				}
				uni.showModal({
					title:'提示',
					content:con,
					success:(res)=> {
						if(res.confirm){
							this.$http(url,data,'put').then(res=>{
								if(val==1){
									uni.showToast({
										title:'报废-成功',
										icon:'none'
									})
									item.billState='-1'
								}else if(val==2){
									uni.showToast({
										title:'审核-成功',
										icon:'none'
									})
									item.billState='1'
								}else{
									uni.showToast({
										title:'反审核-成功',
										icon:'none'
									})
									item.billState='0'
								}
								this.$forceUpdate()
							})
						}
					}
				})
			},
			// 筛选
			selectFilter(value){
				this.queryData={
					...value
				}
				this.dataList=[]
				this.initData()
			}
		},
		onUnload() {
			this.navTo('/pages/User/User','switch')
		},
		onBackPress(options) {
			if(options.from=='backbutton'){
				this.navTo('/pages/User/User','switch')
				return true
			}
		}
	}
</script>

<style scoped lang="scss">
.page_wrap{
	padding-bottom: 200upx;
	/deep/ .u-tabs{
		background-color: #fff;
	}
	.coupon_tab{
		background-color: #fff;
	}
	.list{
		padding: 20upx;
		.item{
			background-color: #fff;
			margin-bottom: 20upx;
			.top{
				padding-bottom: 20upx;
				border-bottom: 1px solid #f1f1f1;
				.status{
					font-size: 28upx;
					color: $base-color;
				}
				.die{
					color: #666;
				}
				
			}
			.detail{
				padding-top: 10upx ;
				.label{
					display: inline-block;
					padding: 4upx 12upx;
					border-radius: 12upx;
					font-size: 24upx;
				}
				.inve{
                    display: inline-block;
                    font-size: 24upx;
                    padding: 4upx 12upx;
                    border-radius: 12upx;
                }
                .ying{
                    background-color: rgba(7, 254, 19, 0.2);
                    color: #00B809;
                }
                .kui{
                    background-color: rgba(254, 7, 7, 0.2);
                    color: #D30000;
                }
				.price{
					color: $base-color;
					font-size: 36upx;
				}
                .hui{
                    color: #333;
                }
			}
			.handle_wrap{
				justify-content: flex-end;
				margin-top:20upx;
				padding-top: 20upx;
				border-top: 2upx solid #f1f1f1;
				.handle_btn{
					font-size: 28upx;
					margin-left: 30upx;
					text{
						margin-right: 10upx;
					}
				}
                .bg_style2{
                    padding: 8upx 40upx;
                }
				.h1{
					color: $base-color;
				}
				.h2{
					color: #999;
				}
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
		.nums{
			margin-left: 30upx;
			.left{
				color: #333;
				font-size: 22upx;
				margin-right: 20upx;
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
	.icon-xuanze{
		color:$base-color;
		margin-right: 10upx;
	}
	.icon-weixuanze{
		color:#999;
		margin-right: 10upx;
	}
}
</style>
