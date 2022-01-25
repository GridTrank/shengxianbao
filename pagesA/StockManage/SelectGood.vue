<template>
	<view class="page_wrap">
		<view class="top">
			<search-comprehensive
			placeholder='搜索商品'
			:showScreen='true'
            @searchInput="searchInput"
            @selectFilter="selectFilter"
			:showClassify="true"
			>
			</search-comprehensive>
		</view>
		
		<!-- <detail-list 
		:pageType='pageType' 
		:datas="pageList"
		:pageTxt="pageTxt"
		nowParentPage='SelectGoopd'
		:showEdit="showEdit">
		</detail-list> -->
		
		<view class="data_list">
			<view class="list">
				<view class="item " v-for="(item,index) in pageList" :key="index">
					<view class="item_wrap row">
						<view class="row">
							<view>
								<view v-if="item.checked==1" class="iconfont icon-weixuanze"></view>
								<view v-else class="iconfont icon-xuanze"></view>
							</view>
							<image class="img" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png" mode="widthFix"></image>
						</view>
						<view class="info">
							<view class="row jc_sb">
								<text class="f28-c333">{{item.productName}}</text>
								<text class="f24-c999">商品编号：{{item.productCode}}</text>
							</view>
							<view class="desc mt10 f24-c999">
								{{item.productNameAlias }}
							</view>
							<view class="price row  mt10">
								<text class="bao mr10">{{item.productUnit}}</text>
								<text class="f24-c999 mr10">{{item.auxiliaryUnit}}</text>
								<text class="f24-c999">￥{{item.unitPrice}}元/{{item.productUnit}}</text>
							</view>
							
							<view class="kucun" v-if="pageType=='inventory'">
								库存
							</view>
						</view>
					</view>
					
					<view class="mt10 bottom_wrap change row" >
						<view class="row">
							<change-num 
							:index="index" 
							:num="item.leftNum" 
							@changeNumResult="changeNum1"
							>
							</change-num> 
							<text class="bg_style1">{{item.productUnit}}</text>
						</view>
						<view class="row">
							<change-num 
							:index="index" 
							:num="item.rightNum" 
							@changeNumResult="changeNum2"
							>
							</change-num> 
							<text class="bg_style1">{{item.auxiliaryUnit}}</text>
						</view>
					</view>
				</view>
			</view>
			
		   
			<view class="foot_wrap" >
		        <template>
		            <view class="foot_con row">
		            	<view class="check_wrap">
		            		<view v-if="true" class="iconfont icon-weixuanze"></view>
		            		<view  v-else class="iconfont icon-xuanze"></view>
		            	</view>
		            	<view class="num_wrap row">
		            		<text class="label">{{pageTxt}}</text> <text class="value">1</text>
		            	</view>
		            	<view class="btn_wrap row">
		            		<view v-if="step=='one'" class="btn" @click="submit('one')">
		            			{{pageTxt}}
		            		</view>
		            		<view v-else-if="step=='two'" class="btn" @click="submit('two')">
		            			保存
		            		</view>
		            		<view v-else-if="step=='three'" class="btn" @click="submit('three')">
		            			结束{{pageTxt}}
		            		</view>
		            	</view>
		            </view>
		        </template>
				
			</view>
		</view>
		
		
		
	</view>
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	export default {
		name: "commonCar",
		data() {
			return {
				keyWrod:'',
				modelTitle:'提示',
				subTitle:'请输入商品数量',
				showEdit:false,
				total:0,
				isCut:true,
				goodsIndex:'',
				pageType:'',
				pageTxt:'',
				step:'one',
				pageList:[]
			}
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
			this.getProductList()
		},
		computed:{
			...mapState(['$StockManageInfo'])
		},
		methods: {
			...mapMutations(['SET_STOCK_MANAGE_INFO']),
			getProductList(){
				this.queryUrl='api/pms/productcategory/getProductList'
				this.getList().then(res=>{
					res.forEach(el=>{
						el.checked=1
						el.leftNum=0
						el.rightNum=0
					})
					this.pageList=res
				})
			},
            searchInput(value){
                console.log('搜索',value)
            },
			selectFilter(value){
                console.log('筛选后的数据',value)
            },
			changeNum1(val,index,num){
				if(val=='add'){
					this.pageList[index].leftNum+=1
				}else if(val=='sub'){
					this.pageList[index].leftNum-=1
				}else{
					this.pageList[index].leftNum=num
				}
				this.$forceUpdate()
			},
			changeNum2(val,index,num){
				if(val=='add'){
					this.pageList[index].rightNum+=1
				}else if(val=='sub'){
					this.pageList[index].rightNum-=1
				}else{
					this.pageList[index].rightNum=num
				}
				this.$forceUpdate()
			},
			submit(val){
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	.page_wrap{
		.top{
			border-bottom: 2upx solid #f1f1f1;
		}
		/deep/ .list{
			padding: 0;
			.info{
				// border-bottom: 2upx solid #f1f1f1;
				padding-bottom: 20upx;
			}
		}
		.foot_wrap{
			position: fixed;
			background-color: #fff;
			bottom: 0;
			left: 0;
			width: 100%;
			padding: 30upx 0;
			.foot_con{
				padding:0 30upx;
				.check_wrap{
					margin-right: 10upx;
					.icon-weixuanze{
						color: #999;
					}
					.icon-xuanze{
						color: $base-color;
					}
				}
				.num_wrap{
					.label{
						font-size: 22upx;
						color: #333;
						margin-right: 30upx;
					}
					.value{
						font-size: 40upx;
						color: $base-color;
					}
				}
				.btn_wrap{
					position: absolute;
					right: 30upx;
					.btn{
						width: 180upx;
						height: 70upx;
						border-radius: 35upx;
						background: linear-gradient(113deg, #F87523 0%, #FF6C00 0%, #FD1D20 100%);
						text-align: center;
						line-height:70upx;
						font-size: 32upx;
						color: #fff;
					}
				}
			}
		}
	}
	
	.data_list{
		.list{
			.item{
				margin-bottom: 30upx;
				.item_wrap{
					background-color: #fff;
					align-items: flex-start;
					padding: 30upx;
					.row{
						.icon-weixuanze{
							color: #999;
							margin-right: 10upx;
						}
						.icon-xuanze{
							color: $base-color;
							margin-right: 10upx;
						}
					}
				}
				.img{
					width: 120upx;
					margin-right: 30upx;
				}
				.info{
					flex:1;
					position: relative;
					.bao{
						background-color:#fff4ed;
						color: $base-color;
						font-size: 20upx;
						border-radius: 2upx;
						padding:0 4upx;
						margin-right: 10upx;
					}
					.num_util{
						color: $base-color;
					}
					.total{
						color: #D30000;
						font-size: 24upx;
						width: 100%;
						text-align: right;
						padding-top: 20upx;
						border-top: 1px solid #E7E7E7;
					}
					.kucun{
						position: absolute;
						right: 0;
						bottom: 0;
					}
				}
				.bottom_wrap{
					background-color: #fff;
					justify-content: flex-end;
					padding: 20upx;
					.tip{
						color: $base-color;
						font-size: 32upx;
					}
					.icon-shanchu{
						font-size: 44upx;
						color: #666;
					}
					.bg_style1{
						font-size: 20upx;
						padding: 8upx;
						margin-left: 10upx;
					}
				}
				.change{
					justify-content: space-around;
				}
				
			}
		}
		.foot_wrap{
			position: fixed;
			background-color: #fff;
			bottom: 0;
			left: 0;
			width: 100%;
			padding: 30upx 0;
			z-index: 111;
			border-top: 2upx solid #f1f1f1;
			.foot_con{
				padding:0 30upx;
				.check_wrap{
					margin-right: 10upx;
					.icon-weixuanze{
						color: #999;
					}
					.icon-xuanze{
						color: $base-color;
					}
				}
				.num_wrap{
					.label{
						font-size: 22upx;
						color: #333;
						margin-right: 30upx;
					}
					.value{
						font-size: 40upx;
						color: $base-color;
					}
				}
				.btn_wrap{
					position: absolute;
					right: 30upx;
					.edit{
						margin-right: 60upx;
						color: $base-color;
						font-size: 28upx;
					}
					.btn{
						width: 180upx;
						height: 70upx;
						border-radius: 35upx;
						background: linear-gradient(113deg, #F87523 0%, #FF6C00 0%, #FD1D20 100%);
						text-align: center;
						line-height:70upx;
						font-size: 32upx;
						color: #fff;
					}
				}
			}
		}
	}
</style>
