<template>
	<view class="data_list">
		<view class="list">
			<view class="item  " v-for="(item,index) in dataList" :key="index">
				<view class="item_wrap row">
					<view class="row">
						<view @click="checkHandle(item,index)" v-if="nowParentPage=='SelectGoopd'">
							<view v-if="item.checked==1" class="iconfont icon-weixuanze"></view>
							<view v-else class="iconfont icon-xuanze"></view>
						</view>
						<image class="img" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/111.png" mode="widthFix"></image>
					</view>
					<view class="info">
						<view class="row jc_sb">
							<text class="f28-c333">名称</text>
							<text class="f24-c999">商品编号：123456</text>
						</view>
						<view class="desc mt10 f24-c999">
							1包约125g
						</view>
						<view class="price row  mt10">
							<text class="bao">包</text>
							<text class="f24-c999">￥10.00元/包</text>
						</view>
						
						<view class="kucun" v-if="pageType=='inventory'">
							库存
						</view>
					</view>
				</view>
				
				<view class="mt10 bottom_wrap change row" v-if="showEdit || showEditSelf">
					<text v-if="nowParentPage=='Detail'" class="iconfont icon-shanchu"></text>
					<view class="row">
						<change-num :index="index" @changeNumResult="changeNum1"></change-num> <text class="bg_style1">斤</text>
					</view>
					<view class="row">
						<change-num :index="index" @changeNumResult="changeNum2"></change-num> <text class="bg_style1">包</text>
					</view>
				</view>
				<view class="mt10 bottom_wrap row" v-if="showSummary">
					<text class="f24-c333">{{pageTxt}}：</text>
					<text class="tip">{{item.sa}}斤({{item.sb}}包)</text>
				</view>
			</view>
		</view>
		
		<view class="foot_wrap" >
			<view class="foot_con row">
				<view class="check_wrap" v-if="nowParentPage!='AddPage'">
					<view @click="selectAll(2)" v-if="total<dataList.length" class="iconfont icon-weixuanze"></view>
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
		</view>
	</view>
	
</template>

<script>
	export default{
		props:{
			datas:{
				type:Array,
				default:()=>{
					return [
					{name:1,checked:2,sa:0,sb:0},
					{name:2,checked:1,sa:0,sb:0},
					{name:3,checked:1,sa:0,sb:0}
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
			dataList:{
				get(){
					return this.datas
				}
			}
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
			this.dataList.forEach(item=>{
				if(item.checked==2){
					nums++
				}
			})
			this.total=nums
		},
		methods:{
			changeNum1(val,index){
				this.dataList[index].sa=val
			},
			changeNum2(val,index){
				this.dataList[index].sb=val
			},
			checkHandle(item,index){
				item.checked==1?item.checked=2:item.checked=1
				let nums=0
				this.dataList.forEach(item=>{
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
					let arr=[]
					this.dataList.forEach(item=>{
						if(item.checked==2){
							arr.push(item)
						}
					})
					uni.setStorageSync("stockData",arr)
					this.navTo('./AddPage?pageType='+this.pageType)
				}else if(val=='three'){
					uni.showModal({
						title:'提示',
						content:'即将调整库存数量，请确认操作',
						success: (res) => {
							if(res.confirm){
								uni.removeStorageSync('stockData')
							}
						}
					})
				}
			},
			selectAll(val){
				if(val==1){
					this.total=0
				}else{
					this.total=this.dataList.length
				}
				this.dataList.forEach((item)=>{
					item.checked=val
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.data_list{
		.list{
			padding:30upx;
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
