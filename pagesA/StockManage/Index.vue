<template>
	<view class="page_wrap">
		<u-tabs class="coupon_tab"  lineColor="#FE5B07" :activeStyle="{color: '#FE5B07',}" :list="list" @click="tab"></u-tabs>
		<search-comprehensive
		placeholder='搜索单号'
		:showScreen='true'
		></search-comprehensive>
		
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
                            {{item.lossCode}}
                        </view>
                        <view class="status">
                            {{item.billState===1?'已审核':item.billState===-1?'已作废':'待审核'}}
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
                        <view class="label bg_style1">{{item.warehouseName}}</view>
                        <view class="row jc_sb mt30">
                        	<text class="date f28-c333">{{item.lossDate | date_('Y-m-d H:i')}}</text>
                        	<text class="price">¥{{item.lossAmount}}</text>
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
						<template v-if="item.billState===0 || !item.billState">
							<view class="handle_btn h1">
								<text class="iconfont icon-shenhe"></text>审核
							</view>
							<view class="handle_btn h1" @click.stop="navTo('./Detail?pageType='+pageType+'&showEdit=true')">
								<text class="iconfont icon-bianji"></text>修改
							</view>
							<view class="handle_btn h2">
								<text class="iconfont icon-shanchu"></text>作废
							</view>
							<view class="handle_btn h1" >
								<text class="iconfont icon-dayin"></text>打印
							</view>
						</template>
						<template v-else-if="item.billState==1">
							<view class="handle_btn h1">
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
        
        <template v-if="pageType=='out' || pageType=='in' || pageType=='inventory' || pageType=='frmLoss' || pageType=='overflow' || pageType=='return'">
            <view class="foot_btn row jc_sb"> 
                <view class="nums row">
                	<view class="left row" >
                		<view @click="selectAll(2)" v-if="total<dataList_.length || dataList_.length<=0" class="iconfont icon-weixuanze"></view>
                		<view @click="selectAll(1)" v-else class="iconfont icon-xuanze"></view>
                		<view>合计</view> 
                	</view>
                	<view class="right">{{total}}</view>
                </view>
                <view class="btns">
                	<text class="btn left">作废</text>
                	<text class="btn right">审核</text>
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
				total:0
			};
		},
		onLoad(e) {
			let barTitle
			if(e.pageType=='out'){
				barTitle='出库单'
				this.pageTxt='出库'
			}else if(e.pageType=='in'){
				barTitle='入库单'
				this.pageTxt='入库'
			}else if(e.pageType=='inventory'){
				barTitle='盘点单'
				this.pageTxt='盘点'
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
			this.initData()
			
		},
		computed:{
			
		},
		methods:{
			async initData(){
				let list= await this.getList()
				list.forEach(el=>{
					el.checked=1
				})
				this.dataList_=list
				this.initList=JSON.parse(JSON.stringify(this.dataList_))
			},
			tab(item){
				let list=this.initList
				if(item.value==1){
					this.dataList_=list.filter(el=>{
						return !el.billState || el.billState===0
					})
				}else if(item.value===2){
					this.dataList_=list.filter(el=>{
						return el.billState==1
					})
					console.log(this.dataList_,list)
				}else if(item.value==3){
					this.dataList_=list.filter(el=>{
						return el.billState==-1
					})
				}else{
					this.dataList_=list
				}
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
				if(val==1){
					this.total=0
				}else{
					this.total=this.dataList_.length
				}
				this.dataList_.forEach(item=>{
					item.checked=val
				})
				
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
				
				.status{
					font-size: 28upx;
					color: $base-color;
				}
				padding-bottom: 20upx;
				border-bottom: 1px solid #f1f1f1;
			}
			.detail{
				padding-top: 10upx ;
				.label{
					display: inline-block;
					padding: 4upx 12upx;
					border-radius: 12upx;
					font-size: 24upx;
				}
				
				.price{
					color: $base-color;
					font-size: 36upx;
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
