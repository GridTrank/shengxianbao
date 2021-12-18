<template>
	<view class="common-car">
		<view class="search_wrap row jc_sb">
			<view class="input_wrap row">
				<image class="search" src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/search.png" mode="widthFix"></image>
				<input type="text" v-model="keyWrod" placeholder="搜索商品" @confirm='bindConfirm' />
			</view>
			<view class="screen" @click="showFilter=true">
				筛选<text class="iconfont icon-shaixuan"></text>
			</view>
		</view>
		<view class="shop-car ">
			<view class="store-box" >
				<view class="goodsInfo " v-for="(itemw,indexw) in datas" :key="indexw">
					<image 
						src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quanzhong%402x.png" 
						v-if="itemw.checked == 2" 
						class="checked-image" 
						mode="widthFix" 
						@tap="goodsCheck(indexw,itemw.checked)">
					</image>
					<image 
						src="https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/quan1%402x.png" 
						v-else 
						class="checked-image" 
						mode="widthFix"
						@tap="goodsCheck(indexw,itemw.checked)">
					</image>
					
					<view class="goodsInfo-right">
						<image :src="itemw.img" class="goods-image" mode=""></image>
						<view class="goodsInfo-box">
							<view class="row jc_sb">
								<text class="goods-name">{{itemw.title}}</text>
								<text class="f24-c999">商品编码：123456</text>
							</view>
							
							<text class="spe">规格：{{itemw.remark}}</text>
							<view class="goods-box">
								<text class="goods-price">¥{{itemw.price}}</text>
							</view>
							<view class="remark row jc_sb">
								<view class="">系统数量：<text class="txt">90</text> </view>
								<view class="goods-num-box">
									<view class="goods-image" @tap="sub(indexw,itemw.number)">
										<text>-</text>
									</view>
									<view class="goods-num" @click="entryNum(indexw,itemw.number)">
										<text>{{itemw.number}}</text>
									</view>
									<view class="goods-image" @tap="add(indexw,itemw.number)">
										<text>+</text>
									</view>
								</view>
							</view>
							
						</view>
					</view>
				</view>
			</view>
			<view class="statistics-box">
				<view class="statistics">
					<view class="statistics-left">
						商品合计：2
					</view>
					
					<view class="statistics-right" @tap="submit">
						<view class="btn ">
							确定
						</view>
					</view>
				</view>
			</view>
		</view>
	
		<uniModel 
		:show="showModel"
		:title='modelTitle'
		:subTitle="subTitle"
		@confirmModel="confirmModel"
		@cancelModel="cancelModel"
		>
		</uniModel>
		
		<u-popup :show="showFilter" mode="right" @close="showFilter=false">
			<filter-page></filter-page>
		</u-popup>
		
	</view>
</template>

<script>
	export default {
		name: "commonCar",
		data() {
			return {
				keyWrod:'',
				showFilter:false,
				modelTitle:'提示',
				subTitle:'请输入商品数量',
				showModel:false,
				datas: [{
						img: '../../static/goods_avatar.png',
						title: '华为荣耀',
						remark: '256G',
						price: '128.80',
						number: 1,
						checked: 1
					}, {
						img: '../../static/goods_avatar.png',
						title: 'mate40',
						remark: '128G',
						price: '116.80',
						number: 1,
						checked: 1
					}],
				statisticsIndex:false,
				total:0,
				isCut:true,
				goodsIndex:'',
				pageType:''
			}
		},
		created() {
			
		},
		onLoad(e) {
			this.pageType=e.pageType
		
		},
		methods: {
			bindConfirm(){
				console.log(this.keyWrod)
			},
			//商品选择
			goodsCheck( goodsIndex, goodsChecked) {
				if (goodsChecked == 1) {
					this.datas[goodsIndex].checked = 2
				} else {
					this.datas[goodsIndex].checked = 1
				}
				//判断是否全选
				let statisticsIndex = true
				this.datas.find((item,index)=>{
					if(item.checked == 1){
						statisticsIndex = false
					}
				})
				if(statisticsIndex == false){
					this.statisticsIndex = false
				}else{
					this.statisticsIndex = true
				}
				
				this.statistics()
			},
			
			//减少
			sub( goodsIndex, goodsnum){
				if(goodsnum == 1){
					return
				}else{
					this.datas[goodsIndex].number--
				}
				this.statistics()
			},
			//增加
			add( goodsIndex, goodsnum){
				this.datas[goodsIndex].number++
				this.statistics()
			},
			entryNum(goodsIndex, goodsnum){
				this.showModel=true
				this.goodsIndex=goodsIndex
			},
			confirmModel(val){
				this.showModel=false
				this.datas[this.goodsIndex].number=Number(val)
			},
			cancelModel(){
				this.showModel=false
			},
			//全选
			allCheck(){
				if(this.statisticsIndex){
					this.datas.find((item,index)=>{
						item.checked = 1
						
					})
					this.statisticsIndex = false
				}else{
					this.datas.find((item,index)=>{
						item.checked = 2
						
					})
					this.statisticsIndex = true
				}
				this.statistics()
			},
			//统计
			statistics(){
				let total = 0
				this.datas.find((item,index)=>{
					if(item.checked == 2){
						total = total + item.price*item.number
					}
				})
				this.total = total.toFixed(2)
			},
			cut(){
				this.isCut = !this.isCut
				this.statisticsIndex = true
				this.allCheck()
			},
			
			submit(){
				let judge = this.judgeSelect()
				if(judge){
					uni.showToast({
						title:'新增',
						icon:'none'
					})
					this.navTo('./Confirm?pageType='+this.pageType)
				}else{
					uni.showToast({
						title:'您当前未选择任何商品',
						icon:'none'
					})
				}
				
			},
			judgeSelect(){
				let judge = false
				this.datas.find((item,index)=>{
					if(item.checked == 2){
						judge = true
					}
				})
				return judge
			}
		}
	}
</script>

<style lang="scss" scoped>
	.common-car {
	}
	.search_wrap{
		background-color: #fff;
		padding: 30upx;
		.input_wrap{
			background-color: #F6F6F6;
			padding:20upx 30upx;
			border-radius: 40upx;
			width: 72%;
			image{
				width: 26upx;
				margin-right: 10upx;
			}
		}
		.screen{
			color: #333;
			font-size: 34upx;
		}
	}
	.empty-shop-car {
		width: 750upx;
		min-height: 680upx;
		display: flex;
		flex-direction: column;
		align-items: center;

		.empty-shop-car-image {
			width: 340upx;
			height: 278upx;
			margin-top: 102upx;
		}

		text {
			margin-top: 40upx;
			font-size: 28upx;
			font-weight: 400;
			color: #666666;
		}

		.empty-shop-car-btn {
			width: 240upx;
			height: 90upx;
			background: #FBBC02;
			border-radius: 200upx;
			margin-top: 40upx;
			text-align: center;
			line-height: 90upx;
			font-size: 30upx;
			font-weight: 400;
			color: #313133;
		}
	}

	.shop-car {
		width: 750upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		.sale{
			width: 92%;
			background-color: #fff;
			padding: 10upx 30upx;
			justify-content: space-between;
			.sale_left{
				.left_txt{
					width: 160upx;
					height: 46upx;
					background-image: url('https://b2bmall2022.oss-cn-hangzhou.aliyuncs.com/as.png');
					background-repeat: no-repeat;
					color: #fff;
					font-size: 18upx;
					display: block;
					background-size: 100% 100%;
					text-align: right;
					padding-right: 10upx;
					line-height: 46upx;
				}
				.right_txt{
					color: #2F2F2F;
					font-size: 24upx;
					margin-left: 20upx;
				}
			}
			.sale_right{
				color: $base-color;
				font-size: 28upx;
			}
		}
		.shop-car-header {
			width: 690upx;
			height: 80upx;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-end;

			text {
				font-size: 28upx;
				font-weight: 400;
				color: #313133;
			}
		}

		.store-box {
			width: 750upx;
			margin-bottom: 20upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			.store-header {
				width: 690upx;
				height: 78upx;
				padding: 0 30upx;
				display: flex;
				flex-direction: row;
				align-items: center;
				font-size: 28upx;
				font-weight: 400;
				color: #313133;

				.checked-image {
					width: 40upx;
					height: 40upx;
				}

				text {
					font-size: 28upx;
					font-weight: 400;
					color: #313133;
					margin-left: 20upx;
				}

				.label {
					width: 14upx;
					height: 24upx;
					margin-left: 10upx;
					margin-top: 5upx;
				}
			}

			.goodsInfo {
				display: flex;
				flex-direction: row;
				align-items: center;
				margin-bottom: 10upx;
				background-color: #fff;
				padding: 0 30upx;
				&:nth-last-child(1) {
					border: none;
				}

				.checked-image {
					width: 40upx;
					height: 40upx;
				}

				.goodsInfo-right {
					width: 634upx;
					margin-left: 16upx;
					display: flex;
					flex-direction: row;
					padding: 30upx 0;
					.goods-image {
						width: 180upx;
						height: 180upx;
					}
					.goodsInfo-box {
						width: 428upx;
						margin-left: 24upx;
						display: flex;
						flex-direction: column;
						align-items: center;
						.goods-name {
							width: 210upx;
							font-size: 28upx;
							font-weight: 400;
							color: #2F2F2F;
						}

						.spe {
							width: 428upx;
							margin-top: 10upx;
							font-size: 24upx;
							font-weight: 400;
							color: #919298;
						}

						.goods-box {
							width: 428upx;
							margin-top: 18upx;
							display: flex;
							flex-direction: row;
							align-items: center;
							justify-content: space-between;
							.goods-price {
								font-size: 32upx;
								font-weight: 400;
								color:#FE5B07;
							}
						}
						.remark{
							padding: 20upx 0 ;
							color: #333;
							font-size: 24upx;
							border-top: 1px solid #eee;
							margin-top: 30upx;
							width: 100%;
							.txt{
								font-size: 32upx;
							}
						}
						.goods-num-box {
							width: 168upx;
							height: 46upx;
							display: flex;
							flex-direction: row;
							align-items: center;
							.goods-image {
								width: 46upx;
								height: 44upx;
								text-align: center;
								line-height: 44upx;
								border: 1px solid #CFCFCF;
								font-size: 38upx;
							}
							.goods-num {
								width: 76upx;
								height: 44upx;
								text-align: center;
								line-height: 44upx;
								font-size: 33upx;
								font-weight: 400;
								color: #666666;
								border-top: 1px solid #CFCFCF;
								border-bottom: 1px solid #CFCFCF;
							}
						}
						.subtotal{
							color: #2F2F2F;
							font-size: 32upx;
							width: 100%;
							text-align: right;
						}
					}
				}
			}
		}

		.statistics-box {
			width: 750upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: #FFFFFF;
			position: fixed;
			bottom: 0;
			/* #ifdef MP*/ 
			padding-bottom: env(safe-area-inset-bottom);
			/* #endif */ 
			.explain{
				padding: 20upx 0;
				width: 100%;
				color: #333;
				font-size: 22upx;
				.e1{
					margin-left: 30upx;
				}
				.e2{
					
					color: $base-color;
				}
				border-bottom: 1px solid #eee;
			}
			.statistics {
				width: 720upx;
				padding: 0 30upx;
				height: 98upx;
				display: flex;
				flex-direction: row;
				align-items: center;
				justify-content: space-between;
				
				.statistics-left {
					width: 320upx;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
					text {
						font-size: 30upx;
						font-weight: 400;
						color: #313133;
					}
				}

				.statistics-right {
					width: 600upx;
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: flex-end;

					.btn {
						text-align: center;
						margin-left: 40upx;
						font-size: 28upx;
						width: 160upx;
						height: 60upx;
						line-height: 60upx;
						color: #fff;
						border-radius: 30upx;
						background: linear-gradient(113deg, #F87523 0%, #FF6C00 0%, #FD1D20 100%);
					}
					
					.to_pay{
						background-color: #C6C6C6;
						padding: 8upx 26upx;
						border-radius: 32upx;
						font-size: 28upx;
						text{
							color: #fff ;
						}
					}
					.is_pay{
						background: linear-gradient(113deg, #F87523 0%, #FF6C00 0%, #FD1D20 100%);
					}
					.text-color {
						color: rgba(242, 18, 18, 1);
					}
				}
			}

			.gap {
				width: 750upx;
				height: 40upx;
			}
		}
	}
</style>
