<template>
	<view class="page_wrap">
		<view class="top">
			<search-comprehensive
			placeholder='搜索商品'
			:showScreen='true'
			>
			</search-comprehensive>
		</view>
		
		<detail-list 
		:pageType='pageType' 
		:pageTxt="pageTxt"
		nowParentPage='SelectGoopd'
		:showEdit="showEdit">
		</detail-list>
		
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
				showEdit:false,
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
				pageType:'',
				pageTxt:'',
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
			
		},
		methods: {
			
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
			.bottom_wrap{
				margin-top: 0;
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
	
</style>
