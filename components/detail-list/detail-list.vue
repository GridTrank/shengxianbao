<template>
	<view class="data_list">
		<view class="list">
			<view class="item " v-for="(item,index) in resultList" :key="index">
				<view class="item_wrap row">
					<view class="row">
						<view @click="checkHandle(item,index)" v-if="nowParentPage=='SelectGoopd'">
							<view v-if="item.checked==1" class="iconfont icon-weixuanze"></view>
							<view v-else class="iconfont icon-xuanze"></view>
						</view>
						<image class="img" :src="item.defaultImage"></image>
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
							<text class="f24-c999 mr10">{{item.productUnit }}</text>
							<text class="bao mr10">{{item.auxiliaryUnit}}</text>
							<text class="f24-c999">￥{{item.costPrice || item.returnorderPrice}}元/{{item.productUnit}}</text>
						</view>
						
						<view class="kucun" v-if="pageType=='inventory'">
							库存：{{item.inventoryQuantity}}{{item.productUnit}}  ({{item.relation}}{{item.auxiliaryunit}})
						</view>
					</view>
				</view>
				
				<view class="mt10 bottom_wrap change row" v-if="showEdit || showEditSelf">
					<text v-if="nowParentPage=='Detail'" class="iconfont icon-shanchu" @click="delProduct(item,index)"></text>
					<view class="row">
						<change-num
							:index="index" 
							:num="item.auxiliaryQuantity" 
							@changeNumResult="changeNum2">
						</change-num> 
						<text class="bg_style1">{{item.productUnit }}</text>
					</view>
					
					<view class="row">
						<change-num
							:index="index" 
							:num="item.lossQuantity || item.outputQuantity || item.inputQuantity || item.returnorderNum || item.actualQuantity" 
							@changeNumResult="changeNum1">
						</change-num> 
						<text class="bg_style1">{{item.auxiliaryUnit}}</text>
					</view>
					
				</view>
				
				<view class="mt10 bottom_wrap row" v-if="showSummary">
					<text class="f24-c333">{{pageTxt}}：</text>
					<text class="tip">
						{{item.auxiliaryQuantity }}{{item.productUnit}}
					</text>
					<text class="tip mr10">
						({{item.lossQuantity || item.outputQuantity || item.inputQuantity || item.returnorderNum || item.actualQuantity}}{{item.auxiliaryUnit}})
					</text>
					
				</view>
			</view>
		</view>
		
       
		<view class="foot_wrap" >
            <template v-if="pageType=='out' || pageType=='in' || pageType=='inventory' || pageType=='frmLoss' || pageType=='overflow' || pageType=='return'">
                <view class="foot_con row">
                	<view class="check_wrap" v-if="nowParentPage!='AddPage'">
                		<view @click="selectAll(2)" v-if="total<resultList.length" class="iconfont icon-weixuanze"></view>
                		<view @click="selectAll(1)" v-else class="iconfont icon-xuanze"></view>
                	</view>
                	<view class="num_wrap row">
                		<text class="label">{{pageTxt}}</text> <text class="value">{{total}}</text>
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
	
</template>

<script>
	import {mapState,mapMutations} from 'vuex'
	export default{
		props:{
			datas:{
				type:Array,
				default:()=>{
					return [
						
					]
				}
			},
			nowParentPage:{
				type:String,
				default:''
			},
			showEdit:{
				type:Boolean,
				default:false
			},
			pageType:{
				type:String,
				default:''
			},
			pageTxt:{
				type:String,
				default:''
			}
		},
		computed:{
			showSummary(){
				if( this.nowParentPage=='AddPage'){
					return true
				}else if(this.nowParentPage=='Detail' ){
					if(this.showEdit){
						return false
					}else{
						return true
					}
				}else{
					if(this.showEditSelf || this.showEdit || this.step=='one'){
						return false
					}else{
						return true
					}
				}
			},
			resultList:{
				get(){
					return this.datas
				}
			},
			...mapState(['$StockManageInfo'])
		},
		data(){
			return {
				step:'one',
				showEditSelf:false,
				total:0
			}
		},
		mounted() {
			let nums=0
			this.resultList.forEach(item=>{
				if(item.checked==2){
					nums++
				}
			})
			this.total=nums
		},
		methods:{
			...mapMutations(['SET_STOCK_MANAGE_INFO']),
			changeNum2(val,index,num){
				let type=''
				switch(this.pageType){
					case 'in':
						type='inputQuantity'
						break;
					case 'out':
						type='outputQuantity'
						break;
					case 'frmLoss':
						type='lossQuantity'
						break;
					case 'return':
						type='returnorderNum'
						break;
					case 'inventory':
						type='actualQuantity'
						break;
				}
				if(val=='add'){
					this.resultList[index].auxiliaryQuantity+=1
				}else if(val=='sub'){
					this.resultList[index].auxiliaryQuantity-=1
				}else{
					this.resultList[index].auxiliaryQuantity=Number(num)
				}
				// this.resultList[index][type]=(this.resultList[index].auxiliaryQuantity*this.resultList[index].relation)
				this.$forceUpdate()
			},
			changeNum1(val,index,num){
				let type=''
				switch(this.pageType){
					case 'in':
						type='inputQuantity'
						break;
					case 'out':
						type='outputQuantity'
						break;
					case 'frmLoss':
						type='lossQuantity'
						break;
					case 'return':
						type='returnorderNum'
						break;
					case 'inventory':
						type='actualQuantity'
						break;
				}
				if(val=='add'){
					this.resultList[index][type]+=1
				}else if(val=='sub'){
					this.resultList[index][type]-=1
				}else{
					this.resultList[index][type]= Number(num)
				}
				// this.resultList[index].auxiliaryQuantity=Math.ceil(this.resultList[index][type]/this.resultList[index].relation)
				this.$forceUpdate()
			},
			checkHandle(item,index){
				item.checked==1?item.checked=2:item.checked=1
				let nums=0
				this.resultList.forEach(item=>{
					if(item.checked==2){
						nums++
					}
				})
				this.total=nums
				this.$forceUpdate()
			},
			submit(val){
				this.step= val=='one'?'two':'three'
				if(this.step=='two'){
					this.showEditSelf=true
				}else if(this.step=='three'){
					this.showEditSelf=false
				}
				if(val=='two'){
					let infoInfoVoList=this.resultList.filter(el=>{
						return el.checked==2
					})
					uni.setStorageSync("stockData",infoInfoVoList)
					this.SET_STOCK_MANAGE_INFO({infoInfoVoList})
					this.navTo('./AddPage?pageType='+this.pageType)
				}else if(val=='three'){
					uni.showModal({
						title:'提示',
						content:'即将调整库存数量，请确认操作',
						success: (res) => {
							if(res.confirm){
								uni.removeStorageSync('stockData')
								let url=''
								switch(this.pageType){
									case 'in':
										url='api/inputBill/saveInput'
										break;
									case 'out':
										url='api/outputBill/saveOutput'
										break;
									case 'inventory':
										url='api/stocktake/savestocktake'
										break;
									case 'frmLoss':
										url='api/Loss/saveLoss'
										break;
									case 'overflow':
										url=''
										break;
									case 'return':
										url='api/returnorder/saveReturnorder'
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
								this.$http(url,this.$StockManageInfo,'post').then(res=>{
									uni.showToast({
										title:'添加成功',
										icon:'none'
									})
									setTimeout(()=>{
										this.navTo('/pagesA/StockManage/Index?pageType='+this.pageType+'&pageTxt='+this.pageTxt)
									},1500)
								})
							}
							
						}
					})
				}
			},
			selectAll(val){
				if(val==1){
					this.total=0
				}else{
					this.total=this.resultList.length
				}
				this.resultList.forEach((item)=>{
					item.checked=val
				})
			},
			// 删除单个商品
			delProduct(item,index){
				uni.showModal({
					title:'提示',
					content:'确认删除所选商品吗？',
					success: (res) => {
						if(res.confirm){
							this.resultList.splice(index,1)
							this.SET_STOCK_MANAGE_INFO({
								infoInfoVoList:this.resultList
							})
						}
					}
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.data_list{
		.list{
			padding:30upx 30upx 100upx 30upx !important;
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
					height: 120upx;
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
						font-size: 32upx;
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
